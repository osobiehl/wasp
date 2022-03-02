// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

import * as wasmlib from "wasmlib";
import * as sc from "./index";

export function funcActivatePlantOwner(ctx: wasmlib.ScFuncContext, f: sc.ActivatePlantOwnerContext): void {
}

export function funcAddPlantFunds(ctx: wasmlib.ScFuncContext, f: sc.AddPlantFundsContext): void {
}

export function funcAddPlantOracle(ctx: wasmlib.ScFuncContext, f: sc.AddPlantOracleContext): void {
}

export function funcAddWeatherOracle(ctx: wasmlib.ScFuncContext, f: sc.AddWeatherOracleContext): void {
}

export function funcClaimWatering(ctx: wasmlib.ScFuncContext, f: sc.ClaimWateringContext): void {
}

export function funcEditOwnPlant(ctx: wasmlib.ScFuncContext, f: sc.EditOwnPlantContext): void {
}

export function funcInit(ctx: wasmlib.ScFuncContext, f: sc.InitContext): void {
    if (f.params.owner().exists()) {
        f.state.owner().setValue(f.params.owner().value());
        return;
    }
    f.state.owner().setValue(ctx.contractCreator());
}

export function funcInterruptWeatherEvent(ctx: wasmlib.ScFuncContext, f: sc.InterruptWeatherEventContext): void {
}

export function funcMintPlant(ctx: wasmlib.ScFuncContext, f: sc.MintPlantContext): void {
}

export function funcPayClaimer(ctx: wasmlib.ScFuncContext, f: sc.PayClaimerContext): void {
}

export function funcResolveClaim(ctx: wasmlib.ScFuncContext, f: sc.ResolveClaimContext): void {
}

export function funcSetOwner(ctx: wasmlib.ScFuncContext, f: sc.SetOwnerContext): void {
    f.state.owner().setValue(f.params.owner().value());
}

export function funcSetPlantWater(ctx: wasmlib.ScFuncContext, f: sc.SetPlantWaterContext): void {
}

export function funcSetPlantWeatherTimeout(ctx: wasmlib.ScFuncContext, f: sc.SetPlantWeatherTimeoutContext): void {
}

export function viewGetClaim(ctx: wasmlib.ScViewContext, f: sc.GetClaimContext): void {
}

export function viewGetClaims(ctx: wasmlib.ScViewContext, f: sc.GetClaimsContext): void {
}

export function viewGetOwner(ctx: wasmlib.ScViewContext, f: sc.GetOwnerContext): void {
    f.results.owner().setValue(f.state.owner().value());
}

export function viewGetPlant(ctx: wasmlib.ScViewContext, f: sc.GetPlantContext): void {
}

export function viewGetPlantOracles(ctx: wasmlib.ScViewContext, f: sc.GetPlantOraclesContext): void {
}

export function viewGetPlants(ctx: wasmlib.ScViewContext, f: sc.GetPlantsContext): void {
}

export function viewGetPlantsFromOwner(ctx: wasmlib.ScViewContext, f: sc.GetPlantsFromOwnerContext): void {
}

export function viewGetWeatherOracles(ctx: wasmlib.ScViewContext, f: sc.GetWeatherOraclesContext): void {
}

export function viewIsPlantOwner(ctx: wasmlib.ScViewContext, f: sc.IsPlantOwnerContext): void {
}

export function funcMintPlantRaw(ctx: wasmlib.ScFuncContext, f: sc.MintPlantRawContext): void {
}
