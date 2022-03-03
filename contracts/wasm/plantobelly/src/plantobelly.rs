// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

use wasmlib::*;

use crate::*;
use crate::contract::*;
use crate::structs::*;
use crate::typedefs::*;

enum Plant_Deactive_Reason{
    None,
    Owner,
    Weather,
    Admin
}
enum Resolution{
    Success,
    User_Failure,
    Weather_Failure,
    Undefined
}

const SAFETY_DEPOSIT_AMOUNT: u64 = 100;
// 2 hours
const TEST_DELAY_PERIOD: u32 = 60 * 60 * 2;

fn is_plant_owner(state: & MutableplantobellyState, caller: &ScAgentID, hash: &ScHash)->bool{
    let plant = state.plants().get_plant(hash);
    if !plant.exists(){
        return false;
    }
    return plant.value().owner == *caller;
}

fn get_plant(state: & ImmutableplantobellyState, id: &ScHash)->Option<Plant>{
    let t = state.plants().get_plant(id);
    if t.exists(){
        return Some(t.value())
    }
    return None;
}



fn plant_exists(state: & MutableplantobellyState, hash: &ScHash)->bool{
    let plant = state.plants().get_plant(hash);
    return plant.exists();
}

fn parse_plant_for_minting(plant: &mut Plant){
    plant.claimed = false;
    if plant.name == ""{
        plant.name = "A plant!".to_string();
    }
}

fn is_allowed_plant_oracle(state: &ImmutableplantobellyState, caller: &ScAgentID)->bool{
    let oracles = state.allowed_plant_oracles();
    let l = oracles.length();
    for i in 0..l{
        let x = oracles.get_agent_id(i).value();
        if x == *caller{
            return true;
        }
    }
    return false;
}

fn mint_claim(state: &MutableplantobellyState, claim: &Claim){
    state.claim_ids().get_hash( state.claim_ids().length()).set_value(&claim.id);
    state.claims().get_claim(&claim.id).set_value(claim)
}

fn is_ongoing_claim(state: &MutableplantobellyState, claim_id: &ScHash)->bool{
    let c = state.claims().get_claim(claim_id);
    return  c.exists();
}

fn get_claim(state: &MutableplantobellyState, claim_id: &ScHash)->Option<Claim>{
    let c = state.claims().get_claim(claim_id);
    if !c.exists(){ return None}
    return Some(c.value());
}
// Hacky as all hell
fn generate_claim_id(ctx: &ScFuncContext, sc_state: &MutableplantobellyState)->ScHash{
    let res =  ctx.entropy();
    return res;

    // let rnd = state.get_bytes(&KEY_RANDOM);
    // let mut seed = rnd.value();
    
    // loop{
    //     let mut H = ctx.utility().hash_sha3(&seed);
    //     if ! is_ongoing_claim(sc_state, &H){
    //         return H;
    //     }
    //     seed = H.to_bytes().to_vec();

    // }
}
// internal claim plant function
fn claim_plant(state: &MutableplantobellyState, plant_id: &ScHash, claim_id: &ScHash){
    let p = state.plants().get_plant(plant_id);
    let mut plant = p.value();
    plant.claimed = true;
    plant.claim_id = claim_id.clone();
    p.set_value(&plant);
}

//resolves a claim, cleaning up ids missing and whatnot
//robust against already resolved claims
fn resolve_claim_standard(state: &MutableplantobellyState, mut plant: Plant, mut claim: Claim){

    let p = state.plants().get_plant(&plant.id);
    plant.claimed = false;
    p.set_value(&plant);
    let c = state.claims().get_claim(&claim.id);
    if c.exists(){
        c.delete();
    }
    
    
    let c_ids = state.claim_ids();
    let size = c_ids.length();
    // find value with same id
    for i in 0..size{
        let v = c_ids.get_hash(i);
        if v.value() == claim.id{
            v.delete();
        }
    }
    
}
/*
@brief sets a plant internally UNSAFE

*/
fn mint_plant(state: &MutableplantobellyState, mut plant: Plant){
    parse_plant_for_minting(&mut plant);
    let id = plant.id.clone();
    let p_ids = state.plant_ids();
    let p_ids_len = p_ids.length();
    p_ids.get_hash(p_ids_len).set_value(&id);
    state.plants().get_plant(&id).set_value(&plant);




}

fn delete_plant(state: MutableplantobellyState, plant: Plant){

}



pub fn func_activate_plant_owner(ctx: &ScFuncContext, f: &ActivatePlantOwnerContext) {
    

}

pub fn func_add_plant_funds(ctx: &ScFuncContext, f: &AddPlantFundsContext) {
    let plant_id = f.params.plant_id().value();
    let caller = ctx.caller();
    let amount: u64 = ctx.incoming().balance(&ScColor::IOTA);
    let plants = f.state.plants();
    ctx.require(amount > 0, "no funds given!");
    ctx.require(is_plant_owner(&f.state, &caller, &plant_id), "plant owner is not caller!");
    let plant = f.state.plants().get_plant(&plant_id);
    ctx.require(plant.exists(), "plant id does not exist");
    let mut plant_val = plant.value();
    plant_val.funds += amount;
    plant.set_value(&plant_val);

    
}

pub fn func_add_plant_oracle(ctx: &ScFuncContext, f: &AddPlantOracleContext) {
    let new_oracle = f.params.oracle_id().value();
    let oracles = f.state.allowed_plant_oracles();
    let num_oracles = oracles.length();
    //ads new oracle
    ctx.log("new plant oracle! ");
    oracles.get_agent_id(num_oracles).set_value(&new_oracle);
}

pub fn func_add_weather_oracle(ctx: &ScFuncContext, f: &AddWeatherOracleContext) {
    let new_oracle = f.params.oracle_id().value();
    let oracles = f.state.allowed_weather_oracles();
    let num_oracles = oracles.length();
    //ads new oracle
    oracles.get_agent_id(num_oracles).set_value(&new_oracle);
}

pub fn func_claim_watering(ctx: &ScFuncContext, f: &ClaimWateringContext) {
    let plant_id = f.params.plant_id().value();
    let state = &f.state;
    ctx.require(plant_exists(&state, &plant_id), "plant ID does not exist!");
    let amount: u64 = ctx.incoming().balance(&ScColor::IOTA);
    ctx.require( amount >= SAFETY_DEPOSIT_AMOUNT, "below safety deposit amount threshhold!");
    let plant = get_plant(&state.as_immutable(), &plant_id);
    if let None = plant{
        ctx.panic("plant does not exist!");
    }
    let plant = plant.unwrap();
    // make sure plant is claimable TODO move to own function
    ctx.require(plant.current_water <= plant.water_threshold, "plant does not currrently need water");
    ctx.require( plant.funds >= plant.reward, "plant does not have enough funds!");
    ctx.require( plant.claimed == false, "plant is already claimed!");
    let owner = ctx.caller().address().as_agent_id();
    let claim_id = generate_claim_id(&ctx, &f.state);
    let new_claim = Claim{
        claimer: owner.clone(),
        deposit: amount-1,
        plant_id: plant_id.clone(),
        id: claim_id.clone(),
        recorded_water_level: plant.current_water,
        timestamp: ctx.timestamp()

    };

    claim_plant(&state, &plant_id, &new_claim.id);

    mint_claim(&state,  &new_claim);
    f .events.claim(&owner, &claim_id, &plant_id);
    //set params for resolve claim
    let new_f = ScFuncs::resolve_claim(ctx);
    new_f.params.id().set_value(&new_claim.id );
    ctx.log("setting DELAY! PLANT SUCCESSFULLY CLAIMED@!");
    new_f.func.delay(TEST_DELAY_PERIOD).transfer_iotas(1).post();
    new_f.func.delay(33).transfer_iotas(33).post();

    
    
}

pub fn func_edit_own_plant(ctx: &ScFuncContext, f: &EditOwnPlantContext) {
}

pub fn func_init(ctx: &ScFuncContext, f: &InitContext) {
    if f.params.owner().exists() {
        let owner = f.params.owner().value();
        f.state.owner().set_value(&owner);
        f.state.allowed_plant_oracles().get_agent_id(0).set_value(&owner);
        f.state.allowed_weather_oracles().get_agent_id(0).set_value(&owner);
    
        return;
    }
    f.state.allowed_plant_oracles().get_agent_id(0).set_value(&ctx.contract_creator());
    f.state.allowed_weather_oracles().get_agent_id(0).set_value(&ctx.contract_creator());

    f.state.owner().set_value(&ctx.contract_creator());
}

pub fn func_interrupt_weather_event(ctx: &ScFuncContext, f: &InterruptWeatherEventContext) {
    
}
fn mint_plant_internal(ctx: &ScFuncContext, state: &MutableplantobellyState, mut plant: Plant){
    plant.funds = ctx.incoming().balance(&ScColor::IOTA);
    let h = plant.id.clone();
    ctx.require(!plant_exists(&state,&h), "plant already exists!");
    parse_plant_for_minting(&mut plant);

    let funds = plant.funds;
    mint_plant(&state, plant);
    

}

// pub fn func_mint_plant(ctx: &ScFuncContext, f: &MintPlantContext) {
//     let mut p = f.params.new_plant().value();
//     let funds = p.funds;
//     let owner = p.owner.clone();
//     let id = p.id.clone();

//    mint_plant_internal(ctx, &f.state, p);
//     f .events.mint(funds, &owner, &id);

// }

pub fn func_mint_plant_raw(ctx: &ScFuncContext, f: &MintPlantRawContext) {
    let F = &f.params;
    let mut p = Plant{
        description: F.description().value(),
        manufacturer: F.manufacturer().value(),
        owner: F.owner().value(),
        water_target: F.water_target().value(),
        water_threshold: F.water_threshold().value(),
        current_water: F.current_water().value(),
        id: F.id().value(),
        funds: F.funds().value(),
        lattitude: F.lattitude().value(),
        longitude: F.longitude().value(),
        name: F.name().value(),
        reward: F.pay_reward().value(),
        covered: F.covered().value(),
        claimed: F.claimed().value(),
        claim_id: F.mint_claim_id().value(),
        active: F.active().value(),
        active_reason: F.active_reason().value()
    };

    let funds = p.funds;
    let owner = p.owner.clone();
    let id = p.id.clone();

   mint_plant_internal(ctx, &f.state, p);
    f .events.mint(funds, &owner, &id);
}


pub fn func_pay_claimer(ctx: &ScFuncContext, f: &PayClaimerContext) {
}

pub fn func_resolve_claim(ctx: &ScFuncContext, f: &ResolveClaimContext) {
    // ctx.panic should have type ! 
    ctx.log("resolving claim!");

    let state = &f.state;
    let claim_id = f.params.id().value();
    let claim = match get_claim(&state, &claim_id) {
        None => {ctx.log("no claim found!!"); return},
        Some(c) => c
    };
    let mut plant = match get_plant(&state.as_immutable(), &claim.plant_id){
        None=> {ctx.panic("plant Id not found");
        panic!("shouldnt happen")}
        Some(p)=>p
    };
    let plant_id = plant.id.clone();
    let claim_issuer = claim.claimer.clone();
    let deposit = claim.deposit;
    let mut payout = 0;
    let mut result_code = Resolution::Undefined;
    //case 1: water level increased
    if plant.current_water > claim.recorded_water_level{
        payout = plant.reward + claim.deposit;
        plant.funds -= plant.reward;
        

        resolve_claim_standard(&state, plant, claim);
        //prevent re-entrancy attacks
        ctx.log(format!("transfering {}" ,payout ).as_str());
        ctx.transfer_to_address(&claim_issuer.address(), ScTransfers::transfer(&ScColor::IOTA, payout));
        result_code = Resolution::Success;
        
    }
    // for now: just failure
    else{
        ctx.log( format!("user failure!").as_str() );
        result_code = Resolution::User_Failure;
        resolve_claim_standard(&state, plant, claim)
    }

    f.events.resolution(&claim_issuer, &plant_id, result_code as u32,payout);
    




}

pub fn func_set_owner(ctx: &ScFuncContext, f: &SetOwnerContext) {
    f.state.owner().set_value(&f.params.owner().value());
}

pub fn func_set_plant_water(ctx: &ScFuncContext, f: &SetPlantWaterContext) {
    let caller = ctx.caller().address().as_agent_id();
    ctx.require(is_allowed_plant_oracle(&f.state.as_immutable(), &caller), "caller not allowed to set plant water");
    let plant_id = f.params.plant_id().value();
    let val = f.params.water_level().value();
    let plant = get_plant(&f.state.as_immutable(), &plant_id);
    ctx.require( plant.is_some(), "plant not found");
    let mut plant = plant.unwrap();
    ctx.log("plant found!");
    plant.current_water = val;
    //set plant
    ctx.log(format!("setting water level to {}", val).as_str());
    f.state.plants().get_plant(&plant_id).set_value(&plant);

}

pub fn func_set_plant_weather_timeout(ctx: &ScFuncContext, f: &SetPlantWeatherTimeoutContext) {
}

pub fn view_get_claim(ctx: &ScViewContext, f: &GetClaimContext) {
}

pub fn view_get_claims(ctx: &ScViewContext, f: &GetClaimsContext) {
}

pub fn view_get_owner(ctx: &ScViewContext, f: &GetOwnerContext) {
    f.results.owner().set_value(&f.state.owner().value());
}

pub fn view_get_plant(ctx: &ScViewContext, f: &GetPlantContext) {
    // let state = &f.state;
    let id = f.params.plant_id().value();
    let plant = get_plant(&f.state, &id);
    if let None = plant{
        ctx.panic("plant not found!");
    }
    let F = plant.unwrap();
    f.results.description().set_value( &F.description);
    f.results.manufacturer().set_value(&F.manufacturer);
    owner: F.owner().value(),
    water_target: F.water_target().value(),
    water_threshold: F.water_threshold().value(),
    current_water: F.current_water().value(),
    id: F.id().value(),
    funds: F.funds().value(),
    lattitude: F.lattitude().value(),
    longitude: F.longitude().value(),
    name: F.name().value(),
    reward: F.pay_reward().value(),
    covered: F.covered().value(),
    claimed: F.claimed().value(),
    claim_id: F.mint_claim_id().value(),
    active: F.active().value(),
    active_reason: F.active_reason().value()
    f.results.plant().set_value(&plant)


}

pub fn view_get_plants(ctx: &ScViewContext, f: &GetPlantsContext) {
}

pub fn view_get_plants_from_owner(ctx: &ScViewContext, f: &GetPlantsFromOwnerContext) {
}

pub fn view_is_plant_owner(ctx: &ScViewContext, f: &IsPlantOwnerContext) {
}

pub fn view_get_plant_oracles(ctx: &ScViewContext, f: &GetPlantOraclesContext) {
    for i in 0..f.state.allowed_plant_oracles().length(){
        let o = f.state.allowed_plant_oracles().get_agent_id(i);
        f.results.oracles().get_agent_id(i).set_value(&o.value())
    }
    
    
}

pub fn view_get_weather_oracles(ctx: &ScViewContext, f: &GetWeatherOraclesContext) {
}


