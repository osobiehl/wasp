// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

package plantobelly

import "github.com/iotaledger/wasp/packages/wasmvm/wasmlib/go/wasmlib"

func funcActivatePlantOwner(ctx wasmlib.ScFuncContext, f *ActivatePlantOwnerContext) {
}

func funcAddPlantFunds(ctx wasmlib.ScFuncContext, f *AddPlantFundsContext) {
}

func funcAddPlantOracle(ctx wasmlib.ScFuncContext, f *AddPlantOracleContext) {
}

func funcAddWeatherOracle(ctx wasmlib.ScFuncContext, f *AddWeatherOracleContext) {
}

func funcClaimWatering(ctx wasmlib.ScFuncContext, f *ClaimWateringContext) {
}

func funcEditOwnPlant(ctx wasmlib.ScFuncContext, f *EditOwnPlantContext) {
}

func funcInit(ctx wasmlib.ScFuncContext, f *InitContext) {
    if f.Params.Owner().Exists() {
        f.State.Owner().SetValue(f.Params.Owner().Value())
        return
    }
    f.State.Owner().SetValue(ctx.ContractCreator())
}

func funcInterruptWeatherEvent(ctx wasmlib.ScFuncContext, f *InterruptWeatherEventContext) {
}

func funcMintPlant(ctx wasmlib.ScFuncContext, f *MintPlantContext) {
}

func funcMintPlantRaw(ctx wasmlib.ScFuncContext, f *MintPlantRawContext) {
}

func funcPayClaimer(ctx wasmlib.ScFuncContext, f *PayClaimerContext) {
}

func funcResolveClaim(ctx wasmlib.ScFuncContext, f *ResolveClaimContext) {
}

func funcSetOwner(ctx wasmlib.ScFuncContext, f *SetOwnerContext) {
	f.State.Owner().SetValue(f.Params.Owner().Value())
}

func funcSetPlantWater(ctx wasmlib.ScFuncContext, f *SetPlantWaterContext) {
}

func funcSetPlantWeatherTimeout(ctx wasmlib.ScFuncContext, f *SetPlantWeatherTimeoutContext) {
}

func viewGetClaim(ctx wasmlib.ScViewContext, f *GetClaimContext) {
}

func viewGetClaims(ctx wasmlib.ScViewContext, f *GetClaimsContext) {
}

func viewGetOwner(ctx wasmlib.ScViewContext, f *GetOwnerContext) {
	f.Results.Owner().SetValue(f.State.Owner().Value())
}

func viewGetPlant(ctx wasmlib.ScViewContext, f *GetPlantContext) {
}

func viewGetPlantOracles(ctx wasmlib.ScViewContext, f *GetPlantOraclesContext) {
}

func viewGetPlants(ctx wasmlib.ScViewContext, f *GetPlantsContext) {
}

func viewGetPlantsFromOwner(ctx wasmlib.ScViewContext, f *GetPlantsFromOwnerContext) {
}

func viewGetWeatherOracles(ctx wasmlib.ScViewContext, f *GetWeatherOraclesContext) {
}

func viewIsPlantOwner(ctx wasmlib.ScViewContext, f *IsPlantOwnerContext) {
}
