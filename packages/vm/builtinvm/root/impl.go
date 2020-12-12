// 'root' a core contract on the chain. It is responsible for:
// - initial setup of the chain during chain deployment
// - maintaining of core parameters of the chain
// - maintaining (setting, delegating) chain owner ID
// - deployment of smart contracts on the chain and maintenance of contract registry
package root

import (
	"fmt"

	"github.com/iotaledger/wasp/packages/coretypes"
	"github.com/iotaledger/wasp/packages/kv/codec"
	"github.com/iotaledger/wasp/packages/kv/datatypes"
	"github.com/iotaledger/wasp/packages/kv/dict"
	"github.com/iotaledger/wasp/packages/vm/builtinvm/accountsc"
	"github.com/iotaledger/wasp/packages/vm/builtinvm/blob"
	"github.com/iotaledger/wasp/packages/vm/vmtypes"
)

// initialize handles constructor, the "init" request. This is the first call to the chain
// if it fails, chain is not initialized. Does the following:
// - stores chain ID and chain description in the state
// - sets state ownership to the caller
// - creates record in the registry for the 'root' itself
// - deploys other core contracts: 'accountsc', 'blob' by creating records in the registry and calling cpnstructors
func initialize(ctx vmtypes.Sandbox) (dict.Dict, error) {
	ctx.Eventf("root.initialize.begin")
	params := ctx.Params()
	state := ctx.State()
	if state.MustGet(VarStateInitialized) != nil {
		// can't be initialized twice
		return nil, fmt.Errorf("root.initialize.fail: already initialized")
	}
	// retrieving init parameters
	// -- chain ID
	chainID, ok, err := codec.DecodeChainID(params.MustGet(ParamChainID))
	if !ok || err != nil {
		ctx.Log().Panicf("root.initialize.fail: can't read expected request argument '%s': %v", ParamChainID, err)
	}
	// -- description
	chainDescription, ok, err := codec.DecodeString(params.MustGet(ParamDescription))
	if err != nil {
		ctx.Log().Panicf("root.initialize.fail: can't read expected request argument '%s': %s", ParamDescription, err)
	}
	if !ok {
		chainDescription = "N/A"
	}
	contractRegistry := datatypes.NewMustMap(state, VarContractRegistry)
	if contractRegistry.Len() != 0 {
		ctx.Log().Panicf("root.initialize.fail: registry not empty")
	}
	// record for root
	contractRegistry.SetAt(Interface.Hname().Bytes(), EncodeContractRecord(&RootContractRecord))
	// deploy blob
	err = storeAndInitContract(ctx, &ContractRecord{
		ProgramHash: blob.Interface.ProgramHash,
		Description: blob.Interface.Description,
		Name:        blob.Interface.Name,
		Creator:     ctx.Caller(),
	}, nil)
	if err != nil {
		ctx.Log().Panicf("root.init.fail: %v", err)
	}
	// deploy accountsc
	err = storeAndInitContract(ctx, &ContractRecord{
		ProgramHash: accountsc.Interface.ProgramHash,
		Description: accountsc.Interface.Description,
		Name:        accountsc.Interface.Name,
		Creator:     ctx.Caller(),
	}, nil)
	if err != nil {
		ctx.Log().Panicf("root.init.fail: %v", err)
	}

	state.Set(VarStateInitialized, []byte{0xFF})
	state.Set(VarChainID, codec.EncodeChainID(chainID))
	state.Set(VarChainOwnerID, codec.EncodeAgentID(ctx.Caller())) // chain owner is whoever sends init request
	state.Set(VarDescription, codec.EncodeString(chainDescription))

	ctx.Eventf("root.initialize.deployed: '%s', hname = %s", Interface.Name, Interface.Hname().String())
	ctx.Eventf("root.initialize.deployed: '%s', hname = %s", blob.Interface.Name, blob.Interface.Hname().String())
	ctx.Eventf("root.initialize.deployed: '%s', hname = %s", accountsc.Interface.Name, accountsc.Interface.Hname().String())
	ctx.Eventf("root.initialize.success")
	return nil, nil
}

// deployContract deploys contract and calls its 'init' constructor.
// If call to the constructor returns an error or an other error occurs,
// removes smart contract form the registry as if it was never attempted to deploy
// Inputs:
// - ParamName string, the unique name of the contract in the chain. Latter used as a hname
// - ParamProgramHash HashValue is a hash of the blob which represents program binary in the 'blob' contract.
//     In case of hardcoded examples its an arbitrary unique hash set in the global call examples.AddProcessor
// - ParamDescription string is an arbitrary string. Defaults to "N/A"
func deployContract(ctx vmtypes.Sandbox) (dict.Dict, error) {
	ctx.Eventf("root.deployContract.begin")
	params := ctx.Params()

	proghash, ok, err := codec.DecodeHashValue(params.MustGet(ParamProgramHash))
	if err != nil {
		ctx.Eventf("root.deployContract.wrong.param %s: %v", ParamProgramHash, err)
		return nil, err
	}
	if !ok {
		return nil, fmt.Errorf("root.deployContract.error: ProgramHash undefined")
	}
	description, ok, err := codec.DecodeString(params.MustGet(ParamDescription))
	if err != nil {
		ctx.Eventf("root.deployContract.wrong.param %s: %v", ParamDescription, err)
		return nil, err
	}
	if !ok {
		description = "N/A"
	}
	name, ok, err := codec.DecodeString(params.MustGet(ParamName))
	if err != nil {
		ctx.Eventf("root.deployContract.wrong.param %s: %v", ParamName, err)
		return nil, err
	}
	if !ok || name == "" {
		return nil, fmt.Errorf("root.deployContract.fail: wrong contract name")
	}
	// pass to init function all params not consumed so far
	initParams := dict.New()
	for key, value := range params {
		if key != ParamProgramHash && key != ParamName && key != ParamDescription {
			initParams.Set(key, value)
		}
	}
	// calls to loads VM from binary to check if it loads successfully
	err = ctx.CreateContract(*proghash, "", "", nil)
	if err != nil {
		return nil, fmt.Errorf("root.deployContract.fail: %v", err)
	}
	// VM loaded successfully. Storing contract in the registry and calling constructor
	err = storeAndInitContract(ctx, &ContractRecord{
		ProgramHash: *proghash,
		Description: description,
		Name:        name,
		Creator:     ctx.Caller(),
	}, initParams)
	if err != nil {
		return nil, fmt.Errorf("root.deployContract.fail: %v", err)
	}
	ctx.Eventf("root.deployContract.success. Deployed contract '%s', hname = %s", name, coretypes.Hn(name).String())
	return nil, nil
}

// findContract view finds and returns encoded record of the contract
// Input:
// - ParamHname
// Output:
// - ParamData
func findContract(ctx vmtypes.SandboxView) (dict.Dict, error) {
	params := ctx.Params()
	hname, ok, err := codec.DecodeHname(params.MustGet(ParamHname))
	if err != nil {
		return nil, err
	}
	if !ok {
		return nil, fmt.Errorf("parameter 'hname' undefined")
	}
	rec, err := FindContract(ctx.State(), hname)
	if err != nil {
		return nil, err
	}
	retBin := EncodeContractRecord(rec)
	ret := dict.New()
	ret.Set(ParamData, retBin)
	return ret, nil
}

// getInfo view returns general info about the chain: chain ID, chain owner ID,
// description and the whole contract registry
// Input: none
// Output:
// - VarChainID - ChainID
// - VarChainOwnerID - AgentID
// - VarDescription - string
// - VarContractRegistry: a map of contract registry
func getInfo(ctx vmtypes.SandboxView) (dict.Dict, error) {
	ret := dict.New()

	chainID, _, _ := codec.DecodeChainID(ctx.State().MustGet(VarChainID))
	ret.Set(VarChainID, codec.EncodeChainID(chainID))

	chainOwner, _, _ := codec.DecodeAgentID(ctx.State().MustGet(VarChainOwnerID))
	ret.Set(VarChainOwnerID, codec.EncodeAgentID(chainOwner))

	description, _, _ := codec.DecodeString(ctx.State().MustGet(VarDescription))
	ret.Set(VarDescription, codec.EncodeString(description))

	src := datatypes.NewMustMap(ctx.State(), VarContractRegistry)
	dst := datatypes.NewMustMap(ret, VarContractRegistry)
	src.Iterate(func(elemKey []byte, value []byte) bool {
		dst.SetAt(elemKey, value)
		return true
	})

	return ret, nil
}

// delegateChainOwnership stores next possible (delegated) chain owner to another agentID
// checks authorisation by the current owner
// Two step process allow/change is in order to avoid mistakes
func delegateChainOwnership(ctx vmtypes.Sandbox) (dict.Dict, error) {
	ctx.Eventf("root.delegateChainOwnership.begin")
	state := ctx.State()
	currentOwner, _, _ := codec.DecodeAgentID(state.MustGet(VarChainOwnerID))
	if currentOwner != ctx.Caller() {
		// check authorisation
		ctx.Eventf("root.delegateChainOwnership.fail: not authorized")
		return nil, fmt.Errorf("root.delegateChainOwnership: not authorized")
	}
	newOwnerID, ok, err := codec.DecodeAgentID(ctx.Params().MustGet(ParamChainOwner))
	if err != nil {
		return nil, fmt.Errorf("root.delegateChainOwnership: wrong parameter: %v", err)
	}
	if !ok {
		return nil, fmt.Errorf("root.delegateChainOwnership.fail: wrong parameter")
	}
	state.Set(VarChainOwnerIDDelegated, codec.EncodeAgentID(newOwnerID))
	ctx.Eventf("root.delegateChainOwnership.success: next owner stored: current %s --> next %s",
		currentOwner.String(), newOwnerID.String())
	return nil, nil
}

// claimChainOwnership changes the chain owner to the delegated agentID (if any)
// Checks authorisation if the caller is the one to which the ownership is delegated
// Note that ownership is only changed by the successful call to  claimChainOwnership
func claimChainOwnership(ctx vmtypes.Sandbox) (dict.Dict, error) {
	ctx.Eventf("root.delegateChainOwnership.begin")
	state := ctx.State()
	currentOwner, _, _ := codec.DecodeAgentID(state.MustGet(VarChainOwnerID))
	nextOwner, ok, err := codec.DecodeAgentID(state.MustGet(VarChainOwnerIDDelegated))
	if err != nil || !ok {
		return nil, fmt.Errorf("root.claimChainOwnership: not delegated to another chain owner")
	}
	if nextOwner == currentOwner {
		// no need to change
		return nil, nil
	}
	if nextOwner != ctx.Caller() {
		// can be changed only by the caller to which ownership is delegated
		ctx.Eventf("root.claimChainOwnership.fail: not authorized")
		return nil, fmt.Errorf("root.delegateChainOwnership: not authorized")
	}
	state.Set(VarChainOwnerID, codec.EncodeAgentID(nextOwner))
	state.Del(VarChainOwnerIDDelegated)
	ctx.Eventf("root.chainChainOwner.success: chain owner changed: %s --> %s",
		currentOwner.String(), nextOwner.String())
	return nil, nil
}

// storeAndInitContract internal utility function
func storeAndInitContract(ctx vmtypes.Sandbox, rec *ContractRecord, initParams dict.Dict) error {
	hname := coretypes.Hn(rec.Name)
	contractRegistry := datatypes.NewMustMap(ctx.State(), VarContractRegistry)
	if contractRegistry.HasAt(hname.Bytes()) {
		return fmt.Errorf("contract '%s'/%s already exist", rec.Name, hname.String())
	}
	contractRegistry.SetAt(hname.Bytes(), EncodeContractRecord(rec))
	_, err := ctx.Call(coretypes.Hn(rec.Name), coretypes.EntryPointInit, initParams, nil)
	if err != nil {
		// call to 'init' failed: delete record
		contractRegistry.DelAt(hname.Bytes())
		err = fmt.Errorf("contract '%s'/%s: calling 'init': %v", rec.Name, hname.String(), err)
	}
	return err
}
