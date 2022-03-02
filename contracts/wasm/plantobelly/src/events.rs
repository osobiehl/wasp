// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

#![allow(dead_code)]
#![allow(unused_mut)]

use wasmlib::*;

pub struct plantobellyEvents {
}

impl plantobellyEvents {

	pub fn claim(&self, claimer: &ScAgentID, id: &ScHash, plant_id: &ScHash) {
		let mut evt = EventEncoder::new("plantobelly.claim");
		evt.encode(&agent_id_to_string(&claimer));
		evt.encode(&hash_to_string(&id));
		evt.encode(&hash_to_string(&plant_id));
		evt.emit();
	}

	pub fn mint(&self, balance: u64, owner: &ScAgentID, token_id: &ScHash) {
		let mut evt = EventEncoder::new("plantobelly.mint");
		evt.encode(&uint64_to_string(balance));
		evt.encode(&agent_id_to_string(&owner));
		evt.encode(&hash_to_string(&token_id));
		evt.emit();
	}

	pub fn resolution(&self, claimer: &ScAgentID, plant_id: &ScHash, result: u32, reward: u64) {
		let mut evt = EventEncoder::new("plantobelly.resolution");
		evt.encode(&agent_id_to_string(&claimer));
		evt.encode(&hash_to_string(&plant_id));
		evt.encode(&uint32_to_string(result));
		evt.encode(&uint64_to_string(reward));
		evt.emit();
	}
}
