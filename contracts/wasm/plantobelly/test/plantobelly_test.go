// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

package test

import (
	"math/rand"
	"testing"
	"time"

	"github.com/iotaledger/wasp/contracts/wasm/plantobelly/go/plantobelly"
	"github.com/iotaledger/wasp/packages/solo"
	"github.com/iotaledger/wasp/packages/vm/core"
	"github.com/iotaledger/wasp/packages/wasmvm/wasmlib/go/wasmlib/wasmtypes"

	"github.com/iotaledger/wasp/packages/wasmvm/wasmsolo"
	"github.com/stretchr/testify/require"
)

// const standard_funds_amount int = 5000
const test_deposit_amount int = 200

func setupTest(t *testing.T) (*solo.Chain, *wasmsolo.SoloAgent) {
	chain := wasmsolo.StartChain(t, "chain1")
	creator := wasmsolo.NewSoloAgent(chain.Env)
	return chain, creator

}

func setupPlantobelly(t *testing.T) (*wasmsolo.SoloContext, *wasmsolo.SoloAgent) {
	chain, creator := setupTest(t)
	init := plantobelly.ScFuncs.Init(nil)
	init.Params.Owner().SetValue(creator.ScAgentID())
	ctx := wasmsolo.NewSoloContextForChain(t, chain, nil, plantobelly.ScName, plantobelly.OnLoad, init.Func)
	require.NoError(t, ctx.Err)
	_, _, rec := chain.GetInfo()
	require.EqualValues(t, len(core.AllCoreContractsByHash)+1, len(rec))

	return ctx, creator
}
func CreateClaim(ctx *wasmsolo.SoloContext,

	claimer *wasmsolo.SoloAgent,
	plantId *wasmtypes.ScHash) {

	claim := plantobelly.ScFuncs.ClaimWatering(ctx.Sign(claimer))
	claim.Params.PlantId().SetValue(*plantId)
	claim.Params.Timestamp().SetValue(0) // empty val
	transfer := ctx.Transfer()
	transfer.Set(wasmtypes.IOTA, uint64(test_deposit_amount))
	claim.Func.Transfer(transfer).Post()
}

func rand_bytes32() []byte {
	token := make([]byte, 32)
	rand.Read(token)
	return token
}

// func TestDeploy(t *testing.T) {
// 	ctx := wasmsolo.NewSoloContext(t, plantobelly.ScName, plantobelly.OnLoad)
// 	require.NoError(t, ctx.ContractExists(plantobelly.ScName))
// }

func sample_plant(creator *wasmsolo.SoloAgent) plantobelly.Plant {

	claimID := wasmtypes.HashFromBytes(rand_bytes32())

	return plantobelly.Plant{
		Active:         false,
		ActiveReason:   0,
		ClaimId:        claimID,
		Claimed:        false,
		Covered:        false,
		CurrentWater:   0,
		Lattitude:      "a",
		Longitude:      "a",
		Reward:         5,
		Owner:          creator.ScAgentID(),
		Description:    string("a test plant lmao"),
		Funds:          0,
		Id:             wasmtypes.HashFromBytes(rand_bytes32()),
		Manufacturer:   creator.ScAgentID(),
		WaterThreshold: 5,
		WaterTarget:    10,
		Name:           "test",
	}
}

func MintTestPlant(ctx *wasmsolo.SoloContext, owner *wasmsolo.SoloAgent) plantobelly.Plant {
	plant := sample_plant(owner)
	p := plantobelly.ScFuncs.MintPlant(ctx.Sign(owner))
	p.Params.NewPlant().SetValue(&plant)
	transfer := ctx.Transfer()
	transfer.Set(wasmtypes.IOTA, 10000)
	p.Func.Transfer(transfer).Post()
	return plant
}

func TestMinting(t *testing.T) {
	ctx, creator := setupPlantobelly(t)

	plant := sample_plant(creator)
	p := plantobelly.ScFuncs.MintPlant(ctx.Sign(creator))
	p.Params.NewPlant().SetValue(&plant)
	transfer := ctx.Transfer()

	transfer.Set(wasmtypes.IOTA, 5)
	p.Func.Transfer(transfer).Post()
	require.NoError(t, ctx.Err)
}

func TestInvalidMinting(t *testing.T) {
	ctx, _ := setupPlantobelly(t)
	newAgent := ctx.NewSoloAgent()

	plant := sample_plant(newAgent)
	p := plantobelly.ScFuncs.MintPlant(ctx.Sign(newAgent))
	p.Params.NewPlant().SetValue(&plant)
	transfer := ctx.Transfer()
	transfer.Set(wasmtypes.IOTA, 5)
	p.Func.Transfer(transfer).Post()
	require.Error(t, ctx.Err)
}

func TestPlantGettable(t *testing.T) {
	ctx, creator := setupPlantobelly(t)

	plant := sample_plant(creator)
	p := plantobelly.ScFuncs.MintPlant(ctx.Sign(creator))
	plant_id := plant.Id

	p.Params.NewPlant().SetValue(&plant)
	transfer := ctx.Transfer()
	transfer.Set(wasmtypes.IOTA, 5)
	p.Func.Transfer(transfer).Post()
	get_plant := plantobelly.ScFuncs.GetPlant(ctx)
	get_plant.Params.PlantId().SetValue(plant_id)
	get_plant.Func.Call()

	result := get_plant.Results.Plant()
	require.True(t, result.Exists(), "plant does not exist!")
	t.Log(result.Value())
}

func TestInvalidPlantGettable(t *testing.T) {
	ctx, creator := setupPlantobelly(t)

	plant := sample_plant(creator)
	p := plantobelly.ScFuncs.MintPlant(ctx.Sign(creator))
	p.Params.NewPlant().SetValue(&plant)
	transfer := ctx.Transfer()
	transfer.Set(wasmtypes.IOTA, 5)
	p.Func.Transfer(transfer).Post()
	get_plant := plantobelly.ScFuncs.GetPlant(ctx)
	rand_id := wasmtypes.HashFromBytes(rand_bytes32())
	get_plant.Params.PlantId().SetValue(rand_id)
	get_plant.Func.Call()
	result := get_plant.Results.Plant()
	require.Error(t, ctx.Err)
	require.True(t, !result.Exists(), "plant should not exist!")
}

func TestClaimUnderDeposit(t *testing.T) {
	ctx, owner := setupPlantobelly(t)
	plant := MintTestPlant(ctx, owner)
	newAgent := ctx.NewSoloAgent()

	claim := plantobelly.ScFuncs.ClaimWatering(ctx.Sign(newAgent))
	claim.Params.PlantId().SetValue(plant.Id)
	claim.Params.Timestamp().SetValue(0) // empty val
	transfer := ctx.Transfer()
	transfer.Set(wasmtypes.IOTA, 5)
	claim.Func.Transfer(transfer).Post()
	require.Error(t, ctx.Err)
}

func TestClaim(t *testing.T) {
	ctx, owner := setupPlantobelly(t)
	plant := MintTestPlant(ctx, owner)
	newAgent := ctx.NewSoloAgent()
	CreateClaim(ctx, newAgent, &plant.Id)
	require.NoError(t, ctx.Err)
}

func TestClaimedPlant(t *testing.T) {
	ctx, owner := setupPlantobelly(t)
	plant := MintTestPlant(ctx, owner)
	newAgent := ctx.NewSoloAgent()
	CreateClaim(ctx, newAgent, &plant.Id)
	require.NoError(t, ctx.Err)
	agent2 := ctx.NewSoloAgent()
	CreateClaim(ctx, agent2, &plant.Id)
	require.Error(t, ctx.Err)

}
func GenerateOracle(ctx *wasmsolo.SoloContext, creator *wasmsolo.SoloAgent) *wasmsolo.SoloAgent {
	newOracle := ctx.NewSoloAgent()
	addOracle := plantobelly.ScFuncs.AddPlantOracle(ctx.Sign(creator))
	addOracle.Params.OracleId().SetValue(newOracle.ScAddress().AsAgentID())
	// addOracle.Func.Call()
	addOracle.Func.TransferIotas(1).Post()
	return newOracle

}
func TestAddPlantOracle(t *testing.T) {
	ctx, creator := setupPlantobelly(t)
	GenerateOracle(ctx, creator)
	f := plantobelly.ScFuncs.GetPlantOracles(ctx)
	f.Func.Call()
	t.Log(f.Results.Oracles().Length())

}

func TestOracleSetWater(t *testing.T) {
	ctx, creator := setupPlantobelly(t)
	//oracle := GenerateOracle(ctx, creator)
	plant := MintTestPlant(ctx, creator)

	f := plantobelly.ScFuncs.SetPlantWater(ctx.Sign(creator))
	f.Params.WaterLevel().SetValue(100)
	f.Params.PlantId().SetValue(plant.Id)
	f.Func.TransferIotas(1).Post()
	require.NoError(t, ctx.Err)
}

func TestClaimNotWatered(t *testing.T) {
	ctx, owner := setupPlantobelly(t)
	plant := MintTestPlant(ctx, owner)

	newAgent := ctx.NewSoloAgent()
	CreateClaim(ctx, newAgent, &plant.Id)

	prevBalance := newAgent.Balance(wasmtypes.IOTA)
	t.Log(prevBalance)
	saldo := solo.Saldo - test_deposit_amount
	ctx.AdvanceClockBy(121 * time.Minute)
	require.True(t, ctx.WaitForPendingRequests(1))
	new_balance := newAgent.Balance(wasmtypes.IOTA)
	require.NoError(t, ctx.Err)

	t.Log(new_balance)
	require.False(t, uint64(saldo) < new_balance, "incorrect values! {}")
}

func setPlantWater(ctx *wasmsolo.SoloContext, oracle *wasmsolo.SoloAgent, plantId *wasmtypes.ScHash, val int32) {
	f := plantobelly.ScFuncs.SetPlantWater(ctx.Sign(oracle))
	f.Params.WaterLevel().SetValue(val)
	f.Params.PlantId().SetValue(*plantId)
	f.Func.TransferIotas(1).Post()

}
func TestClaimWatered(t *testing.T) {
	ctx, owner := setupPlantobelly(t)
	plant := MintTestPlant(ctx, owner)
	oracle := GenerateOracle(ctx, owner)

	newAgent := ctx.NewSoloAgent()
	CreateClaim(ctx, newAgent, &plant.Id)
	setPlantWater(ctx, oracle, &plant.Id, 100)
	prevBalance := newAgent.Balance(wasmtypes.IOTA)
	t.Log(prevBalance)
	saldo := solo.Saldo - test_deposit_amount
	ctx.AdvanceClockBy(121 * time.Minute)
	require.True(t, ctx.WaitForPendingRequests(1))
	new_balance := newAgent.Balance(wasmtypes.IOTA)
	require.NoError(t, ctx.Err)

	t.Log(new_balance)
	require.True(t, uint64(saldo) < new_balance, "incorrect values! {}")
}

type CreatedClaim struct {
	Agent  wasmsolo.SoloAgent
	Plant  plantobelly.Plant
	Oracle wasmsolo.SoloAgent
}

func CreateClaimAndResolve(ctx *wasmsolo.SoloContext, owner *wasmsolo.SoloAgent) CreatedClaim {
	plant := MintTestPlant(ctx, owner)
	oracle := GenerateOracle(ctx, owner)

	newAgent := ctx.NewSoloAgent()
	CreateClaim(ctx, newAgent, &plant.Id)
	setPlantWater(ctx, oracle, &plant.Id, 100)
	ctx.AdvanceClockBy(121 * time.Minute)
	ctx.WaitForPendingRequests(1)
	return CreatedClaim{
		Agent:  *newAgent,
		Plant:  plant,
		Oracle: *oracle,
	}

}

func TestClaimAfterResolvedNoWateringNeededFail(t *testing.T) {
	ctx, owner := setupPlantobelly(t)

	r := CreateClaimAndResolve(ctx, owner)

	// now somebody else claims
	agent2 := ctx.NewSoloAgent()
	CreateClaim(ctx, agent2, &r.Plant.Id)
	require.Error(t, ctx.Err)
	// no watering

}

func TestClaimAfterResolvedPlantNotWatered(t *testing.T) {
	ctx, owner := setupPlantobelly(t)

	r := CreateClaimAndResolve(ctx, owner)

	// now somebody else claims
	agent2 := ctx.NewSoloAgent()
	setPlantWater(ctx, &r.Oracle, &r.Plant.Id, 0)

	CreateClaim(ctx, agent2, &r.Plant.Id)
	payment_balance := agent2.Balance(wasmtypes.IOTA)
	ctx.AdvanceClockBy(121 * time.Minute)
	// require.True(t, ctx.WaitForPendingRequests(1))

	after_payment_balance := agent2.Balance(wasmtypes.IOTA)
	require.Equal(t, payment_balance, after_payment_balance, "user was paid!!")
	// no watering

}

func TestClaimAfterResolvedPlantCorrect(t *testing.T) {

	ctx, owner := setupPlantobelly(t)

	r := CreateClaimAndResolve(ctx, owner)

	// now somebody else claims
	agent2 := ctx.NewSoloAgent()
	setPlantWater(ctx, &r.Oracle, &r.Plant.Id, 0)
	CreateClaim(ctx, agent2, &r.Plant.Id)
	payment_balance := agent2.Balance(wasmtypes.IOTA)
	setPlantWater(ctx, &r.Oracle, &r.Plant.Id, 100)

	ctx.AdvanceClockBy(121 * time.Minute)
	require.True(t, ctx.WaitForPendingRequests(1))
	after_payment_balance := agent2.Balance(wasmtypes.IOTA)
	require.True(t, payment_balance < after_payment_balance, "user was paid!!")
	// no watering
}
