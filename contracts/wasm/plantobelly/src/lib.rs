// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

#![allow(dead_code)]
#![allow(unused_imports)]

use plantobelly::*;
use wasmlib::*;

use crate::consts::*;
use crate::events::*;
use crate::params::*;
use crate::results::*;
use crate::state::*;
use crate::structs::*;
use crate::typedefs::*;

mod consts;
mod contract;
mod events;
mod params;
mod results;
mod state;
mod structs;
mod typedefs;

mod plantobelly;

const EXPORT_MAP: ScExportMap = ScExportMap {
    names: &[
    	FUNC_ACTIVATE_PLANT_OWNER,
    	FUNC_ADD_PLANT_FUNDS,
    	FUNC_ADD_PLANT_ORACLE,
    	FUNC_ADD_WEATHER_ORACLE,
    	FUNC_CLAIM_WATERING,
    	FUNC_EDIT_OWN_PLANT,
    	FUNC_INIT,
    	FUNC_INTERRUPT_WEATHER_EVENT,
    	FUNC_MINT_PLANT_RAW,
    	FUNC_PAY_CLAIMER,
    	FUNC_RESOLVE_CLAIM,
    	FUNC_SET_OWNER,
    	FUNC_SET_PLANT_WATER,
    	FUNC_SET_PLANT_WEATHER_TIMEOUT,
    	VIEW_GET_CLAIM,
    	VIEW_GET_CLAIMS,
    	VIEW_GET_OWNER,
    	VIEW_GET_PLANT,
    	VIEW_GET_PLANT_ORACLES,
    	VIEW_GET_PLANTS,
    	VIEW_GET_PLANTS_FROM_OWNER,
    	VIEW_GET_WEATHER_ORACLES,
    	VIEW_IS_PLANT_OWNER,
	],
    funcs: &[
    	func_activate_plant_owner_thunk,
    	func_add_plant_funds_thunk,
    	func_add_plant_oracle_thunk,
    	func_add_weather_oracle_thunk,
    	func_claim_watering_thunk,
    	func_edit_own_plant_thunk,
    	func_init_thunk,
    	func_interrupt_weather_event_thunk,
    	func_mint_plant_raw_thunk,
    	func_pay_claimer_thunk,
    	func_resolve_claim_thunk,
    	func_set_owner_thunk,
    	func_set_plant_water_thunk,
    	func_set_plant_weather_timeout_thunk,
	],
    views: &[
    	view_get_claim_thunk,
    	view_get_claims_thunk,
    	view_get_owner_thunk,
    	view_get_plant_thunk,
    	view_get_plant_oracles_thunk,
    	view_get_plants_thunk,
    	view_get_plants_from_owner_thunk,
    	view_get_weather_oracles_thunk,
    	view_is_plant_owner_thunk,
	],
};

#[no_mangle]
fn on_call(index: i32) {
	ScExports::call(index, &EXPORT_MAP);
}

#[no_mangle]
fn on_load() {
    ScExports::export(&EXPORT_MAP);
}

pub struct ActivatePlantOwnerContext {
	events:  plantobellyEvents,
	params: ImmutableActivatePlantOwnerParams,
	state: MutableplantobellyState,
}

fn func_activate_plant_owner_thunk(ctx: &ScFuncContext) {
	ctx.log("plantobelly.funcActivatePlantOwner");
	let f = ActivatePlantOwnerContext {
		events:  plantobellyEvents {},
		params: ImmutableActivatePlantOwnerParams { proxy: params_proxy() },
		state: MutableplantobellyState { proxy: state_proxy() },
	};
	ctx.require(f.params.new_state().exists(), "missing mandatory newState");
	ctx.require(f.params.plant_id().exists(), "missing mandatory plantId");
	func_activate_plant_owner(ctx, &f);
	ctx.log("plantobelly.funcActivatePlantOwner ok");
}

pub struct AddPlantFundsContext {
	events:  plantobellyEvents,
	params: ImmutableAddPlantFundsParams,
	state: MutableplantobellyState,
}

fn func_add_plant_funds_thunk(ctx: &ScFuncContext) {
	ctx.log("plantobelly.funcAddPlantFunds");
	let f = AddPlantFundsContext {
		events:  plantobellyEvents {},
		params: ImmutableAddPlantFundsParams { proxy: params_proxy() },
		state: MutableplantobellyState { proxy: state_proxy() },
	};
	ctx.require(f.params.plant_id().exists(), "missing mandatory plantId");
	ctx.require(f.params.value().exists(), "missing mandatory value");
	func_add_plant_funds(ctx, &f);
	ctx.log("plantobelly.funcAddPlantFunds ok");
}

pub struct AddPlantOracleContext {
	events:  plantobellyEvents,
	params: ImmutableAddPlantOracleParams,
	state: MutableplantobellyState,
}

fn func_add_plant_oracle_thunk(ctx: &ScFuncContext) {
	ctx.log("plantobelly.funcAddPlantOracle");
	let f = AddPlantOracleContext {
		events:  plantobellyEvents {},
		params: ImmutableAddPlantOracleParams { proxy: params_proxy() },
		state: MutableplantobellyState { proxy: state_proxy() },
	};
	let access = f.state.owner();
	ctx.require(access.exists(), "access not set: owner");
	ctx.require(ctx.caller() == access.value(), "no permission");

	ctx.require(f.params.oracle_id().exists(), "missing mandatory oracleId");
	func_add_plant_oracle(ctx, &f);
	ctx.log("plantobelly.funcAddPlantOracle ok");
}

pub struct AddWeatherOracleContext {
	events:  plantobellyEvents,
	params: ImmutableAddWeatherOracleParams,
	state: MutableplantobellyState,
}

fn func_add_weather_oracle_thunk(ctx: &ScFuncContext) {
	ctx.log("plantobelly.funcAddWeatherOracle");
	let f = AddWeatherOracleContext {
		events:  plantobellyEvents {},
		params: ImmutableAddWeatherOracleParams { proxy: params_proxy() },
		state: MutableplantobellyState { proxy: state_proxy() },
	};
	let access = f.state.owner();
	ctx.require(access.exists(), "access not set: owner");
	ctx.require(ctx.caller() == access.value(), "no permission");

	ctx.require(f.params.oracle_id().exists(), "missing mandatory oracleId");
	func_add_weather_oracle(ctx, &f);
	ctx.log("plantobelly.funcAddWeatherOracle ok");
}

pub struct ClaimWateringContext {
	events:  plantobellyEvents,
	params: ImmutableClaimWateringParams,
	state: MutableplantobellyState,
}

fn func_claim_watering_thunk(ctx: &ScFuncContext) {
	ctx.log("plantobelly.funcClaimWatering");
	let f = ClaimWateringContext {
		events:  plantobellyEvents {},
		params: ImmutableClaimWateringParams { proxy: params_proxy() },
		state: MutableplantobellyState { proxy: state_proxy() },
	};
	ctx.require(f.params.plant_id().exists(), "missing mandatory plantId");
	ctx.require(f.params.timestamp().exists(), "missing mandatory timestamp");
	func_claim_watering(ctx, &f);
	ctx.log("plantobelly.funcClaimWatering ok");
}

pub struct EditOwnPlantContext {
	events:  plantobellyEvents,
	params: ImmutableEditOwnPlantParams,
	state: MutableplantobellyState,
}

fn func_edit_own_plant_thunk(ctx: &ScFuncContext) {
	ctx.log("plantobelly.funcEditOwnPlant");
	let f = EditOwnPlantContext {
		events:  plantobellyEvents {},
		params: ImmutableEditOwnPlantParams { proxy: params_proxy() },
		state: MutableplantobellyState { proxy: state_proxy() },
	};
	ctx.require(f.params.covered().exists(), "missing mandatory covered");
	ctx.require(f.params.description().exists(), "missing mandatory description");
	ctx.require(f.params.lattitude().exists(), "missing mandatory lattitude");
	ctx.require(f.params.longitude().exists(), "missing mandatory longitude");
	ctx.require(f.params.name().exists(), "missing mandatory name");
	ctx.require(f.params.reward().exists(), "missing mandatory reward");
	ctx.require(f.params.water_target().exists(), "missing mandatory waterTarget");
	func_edit_own_plant(ctx, &f);
	ctx.log("plantobelly.funcEditOwnPlant ok");
}

pub struct InitContext {
	events:  plantobellyEvents,
	params: ImmutableInitParams,
	state: MutableplantobellyState,
}

fn func_init_thunk(ctx: &ScFuncContext) {
	ctx.log("plantobelly.funcInit");
	let f = InitContext {
		events:  plantobellyEvents {},
		params: ImmutableInitParams { proxy: params_proxy() },
		state: MutableplantobellyState { proxy: state_proxy() },
	};
	func_init(ctx, &f);
	ctx.log("plantobelly.funcInit ok");
}

pub struct InterruptWeatherEventContext {
	events:  plantobellyEvents,
	params: ImmutableInterruptWeatherEventParams,
	state: MutableplantobellyState,
}

fn func_interrupt_weather_event_thunk(ctx: &ScFuncContext) {
	ctx.log("plantobelly.funcInterruptWeatherEvent");
	let f = InterruptWeatherEventContext {
		events:  plantobellyEvents {},
		params: ImmutableInterruptWeatherEventParams { proxy: params_proxy() },
		state: MutableplantobellyState { proxy: state_proxy() },
	};
	ctx.require(f.params.duration().exists(), "missing mandatory duration");
	ctx.require(f.params.plant_id().exists(), "missing mandatory plantId");
	func_interrupt_weather_event(ctx, &f);
	ctx.log("plantobelly.funcInterruptWeatherEvent ok");
}

pub struct MintPlantRawContext {
	events:  plantobellyEvents,
	params: ImmutableMintPlantRawParams,
	state: MutableplantobellyState,
}

fn func_mint_plant_raw_thunk(ctx: &ScFuncContext) {
	ctx.log("plantobelly.funcMintPlantRaw");
	let f = MintPlantRawContext {
		events:  plantobellyEvents {},
		params: ImmutableMintPlantRawParams { proxy: params_proxy() },
		state: MutableplantobellyState { proxy: state_proxy() },
	};
	let access = f.state.owner();
	ctx.require(access.exists(), "access not set: owner");
	ctx.require(ctx.caller() == access.value(), "no permission");

	ctx.require(f.params.active().exists(), "missing mandatory active");
	ctx.require(f.params.active_reason().exists(), "missing mandatory activeReason");
	ctx.require(f.params.claimed().exists(), "missing mandatory claimed");
	ctx.require(f.params.covered().exists(), "missing mandatory covered");
	ctx.require(f.params.current_water().exists(), "missing mandatory currentWater");
	ctx.require(f.params.description().exists(), "missing mandatory description");
	ctx.require(f.params.funds().exists(), "missing mandatory funds");
	ctx.require(f.params.id().exists(), "missing mandatory id");
	ctx.require(f.params.lattitude().exists(), "missing mandatory lattitude");
	ctx.require(f.params.longitude().exists(), "missing mandatory longitude");
	ctx.require(f.params.manufacturer().exists(), "missing mandatory manufacturer");
	ctx.require(f.params.mint_claim_id().exists(), "missing mandatory mintClaimId");
	ctx.require(f.params.name().exists(), "missing mandatory name");
	ctx.require(f.params.owner().exists(), "missing mandatory owner");
	ctx.require(f.params.pay_reward().exists(), "missing mandatory payReward");
	ctx.require(f.params.water_target().exists(), "missing mandatory waterTarget");
	ctx.require(f.params.water_threshold().exists(), "missing mandatory waterThreshold");
	func_mint_plant_raw(ctx, &f);
	ctx.log("plantobelly.funcMintPlantRaw ok");
}

pub struct PayClaimerContext {
	events:  plantobellyEvents,
	params: ImmutablePayClaimerParams,
	state: MutableplantobellyState,
}

fn func_pay_claimer_thunk(ctx: &ScFuncContext) {
	ctx.log("plantobelly.funcPayClaimer");
	let f = PayClaimerContext {
		events:  plantobellyEvents {},
		params: ImmutablePayClaimerParams { proxy: params_proxy() },
		state: MutableplantobellyState { proxy: state_proxy() },
	};
	ctx.require(ctx.caller() == ctx.account_id(), "no permission");

	ctx.require(f.params.amount().exists(), "missing mandatory amount");
	ctx.require(f.params.to().exists(), "missing mandatory to");
	func_pay_claimer(ctx, &f);
	ctx.log("plantobelly.funcPayClaimer ok");
}

pub struct ResolveClaimContext {
	events:  plantobellyEvents,
	params: ImmutableResolveClaimParams,
	state: MutableplantobellyState,
}

fn func_resolve_claim_thunk(ctx: &ScFuncContext) {
	ctx.log("plantobelly.funcResolveClaim");
	let f = ResolveClaimContext {
		events:  plantobellyEvents {},
		params: ImmutableResolveClaimParams { proxy: params_proxy() },
		state: MutableplantobellyState { proxy: state_proxy() },
	};

	// internal claim resolution function, resolving a resolved claim is defined behaviour
	ctx.require(ctx.caller() == ctx.account_id(), "no permission");

	ctx.require(f.params.id().exists(), "missing mandatory id");
	func_resolve_claim(ctx, &f);
	ctx.log("plantobelly.funcResolveClaim ok");
}

pub struct SetOwnerContext {
	events:  plantobellyEvents,
	params: ImmutableSetOwnerParams,
	state: MutableplantobellyState,
}

fn func_set_owner_thunk(ctx: &ScFuncContext) {
	ctx.log("plantobelly.funcSetOwner");
	let f = SetOwnerContext {
		events:  plantobellyEvents {},
		params: ImmutableSetOwnerParams { proxy: params_proxy() },
		state: MutableplantobellyState { proxy: state_proxy() },
	};

	// current owner of this smart contract
	let access = f.state.owner();
	ctx.require(access.exists(), "access not set: owner");
	ctx.require(ctx.caller() == access.value(), "no permission");

	ctx.require(f.params.owner().exists(), "missing mandatory owner");
	func_set_owner(ctx, &f);
	ctx.log("plantobelly.funcSetOwner ok");
}

pub struct SetPlantWaterContext {
	events:  plantobellyEvents,
	params: ImmutableSetPlantWaterParams,
	state: MutableplantobellyState,
}

fn func_set_plant_water_thunk(ctx: &ScFuncContext) {
	ctx.log("plantobelly.funcSetPlantWater");
	let f = SetPlantWaterContext {
		events:  plantobellyEvents {},
		params: ImmutableSetPlantWaterParams { proxy: params_proxy() },
		state: MutableplantobellyState { proxy: state_proxy() },
	};
	ctx.require(f.params.plant_id().exists(), "missing mandatory plantId");
	ctx.require(f.params.water_level().exists(), "missing mandatory waterLevel");
	func_set_plant_water(ctx, &f);
	ctx.log("plantobelly.funcSetPlantWater ok");
}

pub struct SetPlantWeatherTimeoutContext {
	events:  plantobellyEvents,
	params: ImmutableSetPlantWeatherTimeoutParams,
	state: MutableplantobellyState,
}

fn func_set_plant_weather_timeout_thunk(ctx: &ScFuncContext) {
	ctx.log("plantobelly.funcSetPlantWeatherTimeout");
	let f = SetPlantWeatherTimeoutContext {
		events:  plantobellyEvents {},
		params: ImmutableSetPlantWeatherTimeoutParams { proxy: params_proxy() },
		state: MutableplantobellyState { proxy: state_proxy() },
	};
	ctx.require(f.params.plant_id().exists(), "missing mandatory plantId");
	ctx.require(f.params.timeout_duration().exists(), "missing mandatory timeoutDuration");
	func_set_plant_weather_timeout(ctx, &f);
	ctx.log("plantobelly.funcSetPlantWeatherTimeout ok");
}

pub struct GetClaimContext {
	params: ImmutableGetClaimParams,
	results: MutableGetClaimResults,
	state: ImmutableplantobellyState,
}

fn view_get_claim_thunk(ctx: &ScViewContext) {
	ctx.log("plantobelly.viewGetClaim");
	let f = GetClaimContext {
		params: ImmutableGetClaimParams { proxy: params_proxy() },
		results: MutableGetClaimResults { proxy: results_proxy() },
		state: ImmutableplantobellyState { proxy: state_proxy() },
	};
	ctx.require(f.params.req_claim_id().exists(), "missing mandatory reqClaimId");
	view_get_claim(ctx, &f);
	ctx.results(&f.results.proxy.kv_store);
	ctx.log("plantobelly.viewGetClaim ok");
}

pub struct GetClaimsContext {
	results: MutableGetClaimsResults,
	state: ImmutableplantobellyState,
}

fn view_get_claims_thunk(ctx: &ScViewContext) {
	ctx.log("plantobelly.viewGetClaims");
	let f = GetClaimsContext {
		results: MutableGetClaimsResults { proxy: results_proxy() },
		state: ImmutableplantobellyState { proxy: state_proxy() },
	};
	view_get_claims(ctx, &f);
	ctx.results(&f.results.proxy.kv_store);
	ctx.log("plantobelly.viewGetClaims ok");
}

pub struct GetOwnerContext {
	results: MutableGetOwnerResults,
	state: ImmutableplantobellyState,
}

fn view_get_owner_thunk(ctx: &ScViewContext) {
	ctx.log("plantobelly.viewGetOwner");
	let f = GetOwnerContext {
		results: MutableGetOwnerResults { proxy: results_proxy() },
		state: ImmutableplantobellyState { proxy: state_proxy() },
	};
	view_get_owner(ctx, &f);
	ctx.results(&f.results.proxy.kv_store);
	ctx.log("plantobelly.viewGetOwner ok");
}

pub struct GetPlantContext {
	params: ImmutableGetPlantParams,
	results: MutableGetPlantResults,
	state: ImmutableplantobellyState,
}

fn view_get_plant_thunk(ctx: &ScViewContext) {
	ctx.log("plantobelly.viewGetPlant");
	let f = GetPlantContext {
		params: ImmutableGetPlantParams { proxy: params_proxy() },
		results: MutableGetPlantResults { proxy: results_proxy() },
		state: ImmutableplantobellyState { proxy: state_proxy() },
	};
	ctx.require(f.params.plant_id().exists(), "missing mandatory plantId");
	view_get_plant(ctx, &f);
	ctx.results(&f.results.proxy.kv_store);
	ctx.log("plantobelly.viewGetPlant ok");
}

pub struct GetPlantOraclesContext {
	results: MutableGetPlantOraclesResults,
	state: ImmutableplantobellyState,
}

fn view_get_plant_oracles_thunk(ctx: &ScViewContext) {
	ctx.log("plantobelly.viewGetPlantOracles");
	let f = GetPlantOraclesContext {
		results: MutableGetPlantOraclesResults { proxy: results_proxy() },
		state: ImmutableplantobellyState { proxy: state_proxy() },
	};
	view_get_plant_oracles(ctx, &f);
	ctx.results(&f.results.proxy.kv_store);
	ctx.log("plantobelly.viewGetPlantOracles ok");
}

pub struct GetPlantsContext {
	results: MutableGetPlantsResults,
	state: ImmutableplantobellyState,
}

fn view_get_plants_thunk(ctx: &ScViewContext) {
	ctx.log("plantobelly.viewGetPlants");
	let f = GetPlantsContext {
		results: MutableGetPlantsResults { proxy: results_proxy() },
		state: ImmutableplantobellyState { proxy: state_proxy() },
	};
	view_get_plants(ctx, &f);
	ctx.results(&f.results.proxy.kv_store);
	ctx.log("plantobelly.viewGetPlants ok");
}

pub struct GetPlantsFromOwnerContext {
	params: ImmutableGetPlantsFromOwnerParams,
	results: MutableGetPlantsFromOwnerResults,
	state: ImmutableplantobellyState,
}

fn view_get_plants_from_owner_thunk(ctx: &ScViewContext) {
	ctx.log("plantobelly.viewGetPlantsFromOwner");
	let f = GetPlantsFromOwnerContext {
		params: ImmutableGetPlantsFromOwnerParams { proxy: params_proxy() },
		results: MutableGetPlantsFromOwnerResults { proxy: results_proxy() },
		state: ImmutableplantobellyState { proxy: state_proxy() },
	};
	ctx.require(f.params.owner_id().exists(), "missing mandatory ownerId");
	view_get_plants_from_owner(ctx, &f);
	ctx.results(&f.results.proxy.kv_store);
	ctx.log("plantobelly.viewGetPlantsFromOwner ok");
}

pub struct GetWeatherOraclesContext {
	results: MutableGetWeatherOraclesResults,
	state: ImmutableplantobellyState,
}

fn view_get_weather_oracles_thunk(ctx: &ScViewContext) {
	ctx.log("plantobelly.viewGetWeatherOracles");
	let f = GetWeatherOraclesContext {
		results: MutableGetWeatherOraclesResults { proxy: results_proxy() },
		state: ImmutableplantobellyState { proxy: state_proxy() },
	};
	view_get_weather_oracles(ctx, &f);
	ctx.results(&f.results.proxy.kv_store);
	ctx.log("plantobelly.viewGetWeatherOracles ok");
}

pub struct IsPlantOwnerContext {
	params: ImmutableIsPlantOwnerParams,
	results: MutableIsPlantOwnerResults,
	state: ImmutableplantobellyState,
}

fn view_is_plant_owner_thunk(ctx: &ScViewContext) {
	ctx.log("plantobelly.viewIsPlantOwner");
	let f = IsPlantOwnerContext {
		params: ImmutableIsPlantOwnerParams { proxy: params_proxy() },
		results: MutableIsPlantOwnerResults { proxy: results_proxy() },
		state: ImmutableplantobellyState { proxy: state_proxy() },
	};
	ctx.require(f.params.req_owner_id().exists(), "missing mandatory reqOwnerId");
	ctx.require(f.params.req_plant_id().exists(), "missing mandatory reqPlantId");
	view_is_plant_owner(ctx, &f);
	ctx.results(&f.results.proxy.kv_store);
	ctx.log("plantobelly.viewIsPlantOwner ok");
}