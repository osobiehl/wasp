// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

package plantobelly

import "github.com/iotaledger/wasp/packages/wasmvm/wasmlib/go/wasmlib"

type ActivatePlantOwnerCall struct {
	Func    *wasmlib.ScFunc
	Params  MutableActivatePlantOwnerParams
}

type AddPlantFundsCall struct {
	Func    *wasmlib.ScFunc
	Params  MutableAddPlantFundsParams
}

type AddPlantOracleCall struct {
	Func    *wasmlib.ScFunc
	Params  MutableAddPlantOracleParams
}

type AddWeatherOracleCall struct {
	Func    *wasmlib.ScFunc
	Params  MutableAddWeatherOracleParams
}

type ClaimWateringCall struct {
	Func    *wasmlib.ScFunc
	Params  MutableClaimWateringParams
}

type EditOwnPlantCall struct {
	Func    *wasmlib.ScFunc
	Params  MutableEditOwnPlantParams
}

type InitCall struct {
	Func    *wasmlib.ScInitFunc
	Params  MutableInitParams
}

type InterruptWeatherEventCall struct {
	Func    *wasmlib.ScFunc
	Params  MutableInterruptWeatherEventParams
}

type MintPlantRawCall struct {
	Func    *wasmlib.ScFunc
	Params  MutableMintPlantRawParams
}

type PayClaimerCall struct {
	Func    *wasmlib.ScFunc
	Params  MutablePayClaimerParams
}

type ResolveClaimCall struct {
	Func    *wasmlib.ScFunc
	Params  MutableResolveClaimParams
}

type SetOwnerCall struct {
	Func    *wasmlib.ScFunc
	Params  MutableSetOwnerParams
}

type SetPlantWaterCall struct {
	Func    *wasmlib.ScFunc
	Params  MutableSetPlantWaterParams
}

type SetPlantWeatherTimeoutCall struct {
	Func    *wasmlib.ScFunc
	Params  MutableSetPlantWeatherTimeoutParams
}

type GetClaimCall struct {
	Func    *wasmlib.ScView
	Params  MutableGetClaimParams
	Results ImmutableGetClaimResults
}

type GetClaimsCall struct {
	Func    *wasmlib.ScView
	Results ImmutableGetClaimsResults
}

type GetOwnerCall struct {
	Func    *wasmlib.ScView
	Results ImmutableGetOwnerResults
}

type GetPlantCall struct {
	Func    *wasmlib.ScView
	Params  MutableGetPlantParams
	Results ImmutableGetPlantResults
}

type GetPlantOraclesCall struct {
	Func    *wasmlib.ScView
	Results ImmutableGetPlantOraclesResults
}

type GetPlantsCall struct {
	Func    *wasmlib.ScView
	Results ImmutableGetPlantsResults
}

type GetPlantsFromOwnerCall struct {
	Func    *wasmlib.ScView
	Params  MutableGetPlantsFromOwnerParams
	Results ImmutableGetPlantsFromOwnerResults
}

type GetWeatherOraclesCall struct {
	Func    *wasmlib.ScView
	Results ImmutableGetWeatherOraclesResults
}

type IsPlantOwnerCall struct {
	Func    *wasmlib.ScView
	Params  MutableIsPlantOwnerParams
	Results ImmutableIsPlantOwnerResults
}

type Funcs struct{}

var ScFuncs Funcs

func (sc Funcs) ActivatePlantOwner(ctx wasmlib.ScFuncCallContext) *ActivatePlantOwnerCall {
	f := &ActivatePlantOwnerCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncActivatePlantOwner)}
	f.Params.proxy = wasmlib.NewCallParamsProxy(&f.Func.ScView)
	return f
}

func (sc Funcs) AddPlantFunds(ctx wasmlib.ScFuncCallContext) *AddPlantFundsCall {
	f := &AddPlantFundsCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncAddPlantFunds)}
	f.Params.proxy = wasmlib.NewCallParamsProxy(&f.Func.ScView)
	return f
}

func (sc Funcs) AddPlantOracle(ctx wasmlib.ScFuncCallContext) *AddPlantOracleCall {
	f := &AddPlantOracleCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncAddPlantOracle)}
	f.Params.proxy = wasmlib.NewCallParamsProxy(&f.Func.ScView)
	return f
}

func (sc Funcs) AddWeatherOracle(ctx wasmlib.ScFuncCallContext) *AddWeatherOracleCall {
	f := &AddWeatherOracleCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncAddWeatherOracle)}
	f.Params.proxy = wasmlib.NewCallParamsProxy(&f.Func.ScView)
	return f
}

func (sc Funcs) ClaimWatering(ctx wasmlib.ScFuncCallContext) *ClaimWateringCall {
	f := &ClaimWateringCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncClaimWatering)}
	f.Params.proxy = wasmlib.NewCallParamsProxy(&f.Func.ScView)
	return f
}

func (sc Funcs) EditOwnPlant(ctx wasmlib.ScFuncCallContext) *EditOwnPlantCall {
	f := &EditOwnPlantCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncEditOwnPlant)}
	f.Params.proxy = wasmlib.NewCallParamsProxy(&f.Func.ScView)
	return f
}

func (sc Funcs) Init(ctx wasmlib.ScFuncCallContext) *InitCall {
	f := &InitCall{Func: wasmlib.NewScInitFunc(ctx, HScName, HFuncInit)}
	f.Params.proxy = wasmlib.NewCallParamsProxy(&f.Func.ScView)
	return f
}

func (sc Funcs) InterruptWeatherEvent(ctx wasmlib.ScFuncCallContext) *InterruptWeatherEventCall {
	f := &InterruptWeatherEventCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncInterruptWeatherEvent)}
	f.Params.proxy = wasmlib.NewCallParamsProxy(&f.Func.ScView)
	return f
}

func (sc Funcs) MintPlantRaw(ctx wasmlib.ScFuncCallContext) *MintPlantRawCall {
	f := &MintPlantRawCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncMintPlantRaw)}
	f.Params.proxy = wasmlib.NewCallParamsProxy(&f.Func.ScView)
	return f
}

func (sc Funcs) PayClaimer(ctx wasmlib.ScFuncCallContext) *PayClaimerCall {
	f := &PayClaimerCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncPayClaimer)}
	f.Params.proxy = wasmlib.NewCallParamsProxy(&f.Func.ScView)
	return f
}

func (sc Funcs) ResolveClaim(ctx wasmlib.ScFuncCallContext) *ResolveClaimCall {
	f := &ResolveClaimCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncResolveClaim)}
	f.Params.proxy = wasmlib.NewCallParamsProxy(&f.Func.ScView)
	return f
}

func (sc Funcs) SetOwner(ctx wasmlib.ScFuncCallContext) *SetOwnerCall {
	f := &SetOwnerCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncSetOwner)}
	f.Params.proxy = wasmlib.NewCallParamsProxy(&f.Func.ScView)
	return f
}

func (sc Funcs) SetPlantWater(ctx wasmlib.ScFuncCallContext) *SetPlantWaterCall {
	f := &SetPlantWaterCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncSetPlantWater)}
	f.Params.proxy = wasmlib.NewCallParamsProxy(&f.Func.ScView)
	return f
}

func (sc Funcs) SetPlantWeatherTimeout(ctx wasmlib.ScFuncCallContext) *SetPlantWeatherTimeoutCall {
	f := &SetPlantWeatherTimeoutCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncSetPlantWeatherTimeout)}
	f.Params.proxy = wasmlib.NewCallParamsProxy(&f.Func.ScView)
	return f
}

func (sc Funcs) GetClaim(ctx wasmlib.ScViewCallContext) *GetClaimCall {
	f := &GetClaimCall{Func: wasmlib.NewScView(ctx, HScName, HViewGetClaim)}
	f.Params.proxy = wasmlib.NewCallParamsProxy(f.Func)
	wasmlib.NewCallResultsProxy(f.Func, &f.Results.proxy)
	return f
}

func (sc Funcs) GetClaims(ctx wasmlib.ScViewCallContext) *GetClaimsCall {
	f := &GetClaimsCall{Func: wasmlib.NewScView(ctx, HScName, HViewGetClaims)}
	wasmlib.NewCallResultsProxy(f.Func, &f.Results.proxy)
	return f
}

func (sc Funcs) GetOwner(ctx wasmlib.ScViewCallContext) *GetOwnerCall {
	f := &GetOwnerCall{Func: wasmlib.NewScView(ctx, HScName, HViewGetOwner)}
	wasmlib.NewCallResultsProxy(f.Func, &f.Results.proxy)
	return f
}

func (sc Funcs) GetPlant(ctx wasmlib.ScViewCallContext) *GetPlantCall {
	f := &GetPlantCall{Func: wasmlib.NewScView(ctx, HScName, HViewGetPlant)}
	f.Params.proxy = wasmlib.NewCallParamsProxy(f.Func)
	wasmlib.NewCallResultsProxy(f.Func, &f.Results.proxy)
	return f
}

func (sc Funcs) GetPlantOracles(ctx wasmlib.ScViewCallContext) *GetPlantOraclesCall {
	f := &GetPlantOraclesCall{Func: wasmlib.NewScView(ctx, HScName, HViewGetPlantOracles)}
	wasmlib.NewCallResultsProxy(f.Func, &f.Results.proxy)
	return f
}

func (sc Funcs) GetPlants(ctx wasmlib.ScViewCallContext) *GetPlantsCall {
	f := &GetPlantsCall{Func: wasmlib.NewScView(ctx, HScName, HViewGetPlants)}
	wasmlib.NewCallResultsProxy(f.Func, &f.Results.proxy)
	return f
}

func (sc Funcs) GetPlantsFromOwner(ctx wasmlib.ScViewCallContext) *GetPlantsFromOwnerCall {
	f := &GetPlantsFromOwnerCall{Func: wasmlib.NewScView(ctx, HScName, HViewGetPlantsFromOwner)}
	f.Params.proxy = wasmlib.NewCallParamsProxy(f.Func)
	wasmlib.NewCallResultsProxy(f.Func, &f.Results.proxy)
	return f
}

func (sc Funcs) GetWeatherOracles(ctx wasmlib.ScViewCallContext) *GetWeatherOraclesCall {
	f := &GetWeatherOraclesCall{Func: wasmlib.NewScView(ctx, HScName, HViewGetWeatherOracles)}
	wasmlib.NewCallResultsProxy(f.Func, &f.Results.proxy)
	return f
}

func (sc Funcs) IsPlantOwner(ctx wasmlib.ScViewCallContext) *IsPlantOwnerCall {
	f := &IsPlantOwnerCall{Func: wasmlib.NewScView(ctx, HScName, HViewIsPlantOwner)}
	f.Params.proxy = wasmlib.NewCallParamsProxy(f.Func)
	wasmlib.NewCallResultsProxy(f.Func, &f.Results.proxy)
	return f
}
