package governance

import (
	"github.com/iotaledger/wasp/packages/kv"
	"github.com/iotaledger/wasp/packages/kv/codec"

	"github.com/iotaledger/goshimmer/packages/ledgerstate"
)

// GetRotationAddress tries to read the state of 'governance' and extract rotation address
// If succeeds, it means this block is fake.
// If fails, return nil
func GetRotationAddress(state kv.KVStoreReader) ledgerstate.Address {
	ret, ok, err := codec.DecodeAddress(state.MustGet(StateVarRotateToAddress))
	if !ok || err != nil {
		return nil
	}
	return ret
}
