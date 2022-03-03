// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

#![allow(dead_code)]
#![allow(unused_imports)]

use wasmlib::*;
use crate::*;

#[derive(Clone)]
pub struct ImmutableGetClaimResults {
	pub(crate) proxy: Proxy,
}

impl ImmutableGetClaimResults {
    pub fn claimer(&self) -> ScImmutableAgentID {
		ScImmutableAgentID::new(self.proxy.root(RESULT_CLAIMER))
	}

    pub fn deposit(&self) -> ScImmutableUint64 {
		ScImmutableUint64::new(self.proxy.root(RESULT_DEPOSIT))
	}

    pub fn id(&self) -> ScImmutableHash {
		ScImmutableHash::new(self.proxy.root(RESULT_ID))
	}

    pub fn plant_id(&self) -> ScImmutableHash {
		ScImmutableHash::new(self.proxy.root(RESULT_PLANT_ID))
	}

    pub fn recorded_water_level(&self) -> ScImmutableInt32 {
		ScImmutableInt32::new(self.proxy.root(RESULT_RECORDED_WATER_LEVEL))
	}

    pub fn timestamp(&self) -> ScImmutableUint64 {
		ScImmutableUint64::new(self.proxy.root(RESULT_TIMESTAMP))
	}
}

#[derive(Clone)]
pub struct MutableGetClaimResults {
	pub(crate) proxy: Proxy,
}

impl MutableGetClaimResults {
    pub fn claimer(&self) -> ScMutableAgentID {
		ScMutableAgentID::new(self.proxy.root(RESULT_CLAIMER))
	}

    pub fn deposit(&self) -> ScMutableUint64 {
		ScMutableUint64::new(self.proxy.root(RESULT_DEPOSIT))
	}

    pub fn id(&self) -> ScMutableHash {
		ScMutableHash::new(self.proxy.root(RESULT_ID))
	}

    pub fn plant_id(&self) -> ScMutableHash {
		ScMutableHash::new(self.proxy.root(RESULT_PLANT_ID))
	}

    pub fn recorded_water_level(&self) -> ScMutableInt32 {
		ScMutableInt32::new(self.proxy.root(RESULT_RECORDED_WATER_LEVEL))
	}

    pub fn timestamp(&self) -> ScMutableUint64 {
		ScMutableUint64::new(self.proxy.root(RESULT_TIMESTAMP))
	}
}

#[derive(Clone)]
pub struct ImmutableGetClaimsResults {
	pub(crate) proxy: Proxy,
}

impl ImmutableGetClaimsResults {
    pub fn claims(&self) -> ArrayOfImmutableHash {
		ArrayOfImmutableHash { proxy: self.proxy.root(RESULT_CLAIMS) }
	}
}

#[derive(Clone)]
pub struct MutableGetClaimsResults {
	pub(crate) proxy: Proxy,
}

impl MutableGetClaimsResults {
    pub fn claims(&self) -> ArrayOfMutableHash {
		ArrayOfMutableHash { proxy: self.proxy.root(RESULT_CLAIMS) }
	}
}

#[derive(Clone)]
pub struct ImmutableGetOwnerResults {
	pub(crate) proxy: Proxy,
}

impl ImmutableGetOwnerResults {
    pub fn owner(&self) -> ScImmutableAgentID {
		ScImmutableAgentID::new(self.proxy.root(RESULT_OWNER))
	}
}

#[derive(Clone)]
pub struct MutableGetOwnerResults {
	pub(crate) proxy: Proxy,
}

impl MutableGetOwnerResults {
    pub fn owner(&self) -> ScMutableAgentID {
		ScMutableAgentID::new(self.proxy.root(RESULT_OWNER))
	}
}

#[derive(Clone)]
pub struct ImmutableGetPlantResults {
	pub(crate) proxy: Proxy,
}

impl ImmutableGetPlantResults {
    pub fn active(&self) -> ScImmutableBool {
		ScImmutableBool::new(self.proxy.root(RESULT_ACTIVE))
	}

    pub fn active_reason(&self) -> ScImmutableUint32 {
		ScImmutableUint32::new(self.proxy.root(RESULT_ACTIVE_REASON))
	}

    pub fn claim_id(&self) -> ScImmutableHash {
		ScImmutableHash::new(self.proxy.root(RESULT_CLAIM_ID))
	}

    pub fn claimed(&self) -> ScImmutableBool {
		ScImmutableBool::new(self.proxy.root(RESULT_CLAIMED))
	}

    pub fn covered(&self) -> ScImmutableBool {
		ScImmutableBool::new(self.proxy.root(RESULT_COVERED))
	}

    pub fn current_water(&self) -> ScImmutableInt32 {
		ScImmutableInt32::new(self.proxy.root(RESULT_CURRENT_WATER))
	}

    pub fn description(&self) -> ScImmutableString {
		ScImmutableString::new(self.proxy.root(RESULT_DESCRIPTION))
	}

    pub fn funds(&self) -> ScImmutableUint64 {
		ScImmutableUint64::new(self.proxy.root(RESULT_FUNDS))
	}

    pub fn id(&self) -> ScImmutableHash {
		ScImmutableHash::new(self.proxy.root(RESULT_ID))
	}

    pub fn lattitude(&self) -> ScImmutableString {
		ScImmutableString::new(self.proxy.root(RESULT_LATTITUDE))
	}

    pub fn longitude(&self) -> ScImmutableString {
		ScImmutableString::new(self.proxy.root(RESULT_LONGITUDE))
	}

    pub fn manufacturer(&self) -> ScImmutableAgentID {
		ScImmutableAgentID::new(self.proxy.root(RESULT_MANUFACTURER))
	}

    pub fn name(&self) -> ScImmutableString {
		ScImmutableString::new(self.proxy.root(RESULT_NAME))
	}

    pub fn owner(&self) -> ScImmutableAgentID {
		ScImmutableAgentID::new(self.proxy.root(RESULT_OWNER))
	}

    pub fn reward(&self) -> ScImmutableUint64 {
		ScImmutableUint64::new(self.proxy.root(RESULT_REWARD))
	}

    pub fn water_target(&self) -> ScImmutableInt32 {
		ScImmutableInt32::new(self.proxy.root(RESULT_WATER_TARGET))
	}

    pub fn water_threshold(&self) -> ScImmutableInt32 {
		ScImmutableInt32::new(self.proxy.root(RESULT_WATER_THRESHOLD))
	}
}

#[derive(Clone)]
pub struct MutableGetPlantResults {
	pub(crate) proxy: Proxy,
}

impl MutableGetPlantResults {
    pub fn active(&self) -> ScMutableBool {
		ScMutableBool::new(self.proxy.root(RESULT_ACTIVE))
	}

    pub fn active_reason(&self) -> ScMutableUint32 {
		ScMutableUint32::new(self.proxy.root(RESULT_ACTIVE_REASON))
	}

    pub fn claim_id(&self) -> ScMutableHash {
		ScMutableHash::new(self.proxy.root(RESULT_CLAIM_ID))
	}

    pub fn claimed(&self) -> ScMutableBool {
		ScMutableBool::new(self.proxy.root(RESULT_CLAIMED))
	}

    pub fn covered(&self) -> ScMutableBool {
		ScMutableBool::new(self.proxy.root(RESULT_COVERED))
	}

    pub fn current_water(&self) -> ScMutableInt32 {
		ScMutableInt32::new(self.proxy.root(RESULT_CURRENT_WATER))
	}

    pub fn description(&self) -> ScMutableString {
		ScMutableString::new(self.proxy.root(RESULT_DESCRIPTION))
	}

    pub fn funds(&self) -> ScMutableUint64 {
		ScMutableUint64::new(self.proxy.root(RESULT_FUNDS))
	}

    pub fn id(&self) -> ScMutableHash {
		ScMutableHash::new(self.proxy.root(RESULT_ID))
	}

    pub fn lattitude(&self) -> ScMutableString {
		ScMutableString::new(self.proxy.root(RESULT_LATTITUDE))
	}

    pub fn longitude(&self) -> ScMutableString {
		ScMutableString::new(self.proxy.root(RESULT_LONGITUDE))
	}

    pub fn manufacturer(&self) -> ScMutableAgentID {
		ScMutableAgentID::new(self.proxy.root(RESULT_MANUFACTURER))
	}

    pub fn name(&self) -> ScMutableString {
		ScMutableString::new(self.proxy.root(RESULT_NAME))
	}

    pub fn owner(&self) -> ScMutableAgentID {
		ScMutableAgentID::new(self.proxy.root(RESULT_OWNER))
	}

    pub fn reward(&self) -> ScMutableUint64 {
		ScMutableUint64::new(self.proxy.root(RESULT_REWARD))
	}

    pub fn water_target(&self) -> ScMutableInt32 {
		ScMutableInt32::new(self.proxy.root(RESULT_WATER_TARGET))
	}

    pub fn water_threshold(&self) -> ScMutableInt32 {
		ScMutableInt32::new(self.proxy.root(RESULT_WATER_THRESHOLD))
	}
}

#[derive(Clone)]
pub struct ArrayOfImmutableAgentID {
	pub(crate) proxy: Proxy,
}

impl ArrayOfImmutableAgentID {
    pub fn length(&self) -> u32 {
        self.proxy.length()
    }

    pub fn get_agent_id(&self, index: u32) -> ScImmutableAgentID {
        ScImmutableAgentID::new(self.proxy.index(index))
    }
}

#[derive(Clone)]
pub struct ImmutableGetPlantOraclesResults {
	pub(crate) proxy: Proxy,
}

impl ImmutableGetPlantOraclesResults {
    pub fn oracles(&self) -> ArrayOfImmutableAgentID {
		ArrayOfImmutableAgentID { proxy: self.proxy.root(RESULT_ORACLES) }
	}
}

#[derive(Clone)]
pub struct ArrayOfMutableAgentID {
	pub(crate) proxy: Proxy,
}

impl ArrayOfMutableAgentID {
	pub fn append_agent_id(&self) -> ScMutableAgentID {
		ScMutableAgentID::new(self.proxy.append())
	}

	pub fn clear(&self) {
        self.proxy.clear_array();
    }

    pub fn length(&self) -> u32 {
        self.proxy.length()
    }

    pub fn get_agent_id(&self, index: u32) -> ScMutableAgentID {
        ScMutableAgentID::new(self.proxy.index(index))
    }
}

#[derive(Clone)]
pub struct MutableGetPlantOraclesResults {
	pub(crate) proxy: Proxy,
}

impl MutableGetPlantOraclesResults {
    pub fn oracles(&self) -> ArrayOfMutableAgentID {
		ArrayOfMutableAgentID { proxy: self.proxy.root(RESULT_ORACLES) }
	}
}

#[derive(Clone)]
pub struct ImmutableGetPlantsResults {
	pub(crate) proxy: Proxy,
}

impl ImmutableGetPlantsResults {
    pub fn plants(&self) -> ArrayOfImmutableHash {
		ArrayOfImmutableHash { proxy: self.proxy.root(RESULT_PLANTS) }
	}
}

#[derive(Clone)]
pub struct MutableGetPlantsResults {
	pub(crate) proxy: Proxy,
}

impl MutableGetPlantsResults {
    pub fn plants(&self) -> ArrayOfMutableHash {
		ArrayOfMutableHash { proxy: self.proxy.root(RESULT_PLANTS) }
	}
}

#[derive(Clone)]
pub struct ImmutableGetPlantsFromOwnerResults {
	pub(crate) proxy: Proxy,
}

impl ImmutableGetPlantsFromOwnerResults {
    pub fn plants(&self) -> ArrayOfImmutableHash {
		ArrayOfImmutableHash { proxy: self.proxy.root(RESULT_PLANTS) }
	}
}

#[derive(Clone)]
pub struct MutableGetPlantsFromOwnerResults {
	pub(crate) proxy: Proxy,
}

impl MutableGetPlantsFromOwnerResults {
    pub fn plants(&self) -> ArrayOfMutableHash {
		ArrayOfMutableHash { proxy: self.proxy.root(RESULT_PLANTS) }
	}
}

#[derive(Clone)]
pub struct ImmutableGetWeatherOraclesResults {
	pub(crate) proxy: Proxy,
}

impl ImmutableGetWeatherOraclesResults {
    pub fn oracles(&self) -> ArrayOfImmutableAgentID {
		ArrayOfImmutableAgentID { proxy: self.proxy.root(RESULT_ORACLES) }
	}
}

#[derive(Clone)]
pub struct MutableGetWeatherOraclesResults {
	pub(crate) proxy: Proxy,
}

impl MutableGetWeatherOraclesResults {
    pub fn oracles(&self) -> ArrayOfMutableAgentID {
		ArrayOfMutableAgentID { proxy: self.proxy.root(RESULT_ORACLES) }
	}
}

#[derive(Clone)]
pub struct ImmutableIsPlantOwnerResults {
	pub(crate) proxy: Proxy,
}

impl ImmutableIsPlantOwnerResults {
    pub fn is_owner(&self) -> ScImmutableBool {
		ScImmutableBool::new(self.proxy.root(RESULT_IS_OWNER))
	}
}

#[derive(Clone)]
pub struct MutableIsPlantOwnerResults {
	pub(crate) proxy: Proxy,
}

impl MutableIsPlantOwnerResults {
    pub fn is_owner(&self) -> ScMutableBool {
		ScMutableBool::new(self.proxy.root(RESULT_IS_OWNER))
	}
}
