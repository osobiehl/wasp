// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

import * as wasmtypes from "wasmlib/wasmtypes";

export class Claim {
	claimer            : wasmtypes.ScAgentID = wasmtypes.agentIDFromBytes([]); 
	deposit            : u64 = 0; 
	id                 : wasmtypes.ScHash = new wasmtypes.ScHash(); 
	plantId            : wasmtypes.ScHash = new wasmtypes.ScHash(); 
	recordedWaterLevel : i32 = 0; 
	timestamp          : u64 = 0; 

	static fromBytes(buf: u8[]): Claim {
		const dec = new wasmtypes.WasmDecoder(buf);
		const data = new Claim();
		data.claimer            = wasmtypes.agentIDDecode(dec);
		data.deposit            = wasmtypes.uint64Decode(dec);
		data.id                 = wasmtypes.hashDecode(dec);
		data.plantId            = wasmtypes.hashDecode(dec);
		data.recordedWaterLevel = wasmtypes.int32Decode(dec);
		data.timestamp          = wasmtypes.uint64Decode(dec);
		dec.close();
		return data;
	}

	bytes(): u8[] {
		const enc = new wasmtypes.WasmEncoder();
		wasmtypes.agentIDEncode(enc, this.claimer);
		wasmtypes.uint64Encode(enc, this.deposit);
		wasmtypes.hashEncode(enc, this.id);
		wasmtypes.hashEncode(enc, this.plantId);
		wasmtypes.int32Encode(enc, this.recordedWaterLevel);
		wasmtypes.uint64Encode(enc, this.timestamp);
		return enc.buf();
	}
}

export class ImmutableClaim extends wasmtypes.ScProxy {

	exists(): bool {
		return this.proxy.exists();
	}

	value(): Claim {
		return Claim.fromBytes(this.proxy.get());
	}
}

export class MutableClaim extends wasmtypes.ScProxy {

	delete(): void {
		this.proxy.delete();
	}

	exists(): bool {
		return this.proxy.exists();
	}

	setValue(value: Claim): void {
		this.proxy.set(value.bytes());
	}

	value(): Claim {
		return Claim.fromBytes(this.proxy.get());
	}
}

export class Geolocation {
	lattitude : string = ""; 
	longitude : string = ""; 

	static fromBytes(buf: u8[]): Geolocation {
		const dec = new wasmtypes.WasmDecoder(buf);
		const data = new Geolocation();
		data.lattitude = wasmtypes.stringDecode(dec);
		data.longitude = wasmtypes.stringDecode(dec);
		dec.close();
		return data;
	}

	bytes(): u8[] {
		const enc = new wasmtypes.WasmEncoder();
		wasmtypes.stringEncode(enc, this.lattitude);
		wasmtypes.stringEncode(enc, this.longitude);
		return enc.buf();
	}
}

export class ImmutableGeolocation extends wasmtypes.ScProxy {

	exists(): bool {
		return this.proxy.exists();
	}

	value(): Geolocation {
		return Geolocation.fromBytes(this.proxy.get());
	}
}

export class MutableGeolocation extends wasmtypes.ScProxy {

	delete(): void {
		this.proxy.delete();
	}

	exists(): bool {
		return this.proxy.exists();
	}

	setValue(value: Geolocation): void {
		this.proxy.set(value.bytes());
	}

	value(): Geolocation {
		return Geolocation.fromBytes(this.proxy.get());
	}
}

export class Plant {
	active         : bool = false; 
	activeReason   : u32 = 0;  // 0 -> default, 1 -> owner deactivated, 2 -> weather deactivated, 3 -> owner deactivated
	claimId        : wasmtypes.ScHash = new wasmtypes.ScHash();  // used to index claims (for scalability purposes)
	claimed        : bool = false;  // whether plant has been claimed
	covered        : bool = false; 
	currentWater   : i32 = 0;  // current level of water
	description    : string = "";  // general description of plant
	funds          : u64 = 0; 
	id             : wasmtypes.ScHash = new wasmtypes.ScHash(); 
	lattitude      : string = "";  // geolocation structs don't work WOW
	longitude      : string = ""; 
	manufacturer   : wasmtypes.ScAgentID = wasmtypes.agentIDFromBytes([]);  // manufacturer wallet for payment
	name           : string = ""; 
	owner          : wasmtypes.ScAgentID = wasmtypes.agentIDFromBytes([]);  // owner of plant token
	reward         : u64 = 0;  // the reward given for watering the plant
	waterTarget    : i32 = 0;  // level of water
	waterThreshold : i32 = 0;  // min. level of water to start watering

	static fromBytes(buf: u8[]): Plant {
		const dec = new wasmtypes.WasmDecoder(buf);
		const data = new Plant();
		data.active         = wasmtypes.boolDecode(dec);
		data.activeReason   = wasmtypes.uint32Decode(dec);
		data.claimId        = wasmtypes.hashDecode(dec);
		data.claimed        = wasmtypes.boolDecode(dec);
		data.covered        = wasmtypes.boolDecode(dec);
		data.currentWater   = wasmtypes.int32Decode(dec);
		data.description    = wasmtypes.stringDecode(dec);
		data.funds          = wasmtypes.uint64Decode(dec);
		data.id             = wasmtypes.hashDecode(dec);
		data.lattitude      = wasmtypes.stringDecode(dec);
		data.longitude      = wasmtypes.stringDecode(dec);
		data.manufacturer   = wasmtypes.agentIDDecode(dec);
		data.name           = wasmtypes.stringDecode(dec);
		data.owner          = wasmtypes.agentIDDecode(dec);
		data.reward         = wasmtypes.uint64Decode(dec);
		data.waterTarget    = wasmtypes.int32Decode(dec);
		data.waterThreshold = wasmtypes.int32Decode(dec);
		dec.close();
		return data;
	}

	bytes(): u8[] {
		const enc = new wasmtypes.WasmEncoder();
		wasmtypes.boolEncode(enc, this.active);
		wasmtypes.uint32Encode(enc, this.activeReason);
		wasmtypes.hashEncode(enc, this.claimId);
		wasmtypes.boolEncode(enc, this.claimed);
		wasmtypes.boolEncode(enc, this.covered);
		wasmtypes.int32Encode(enc, this.currentWater);
		wasmtypes.stringEncode(enc, this.description);
		wasmtypes.uint64Encode(enc, this.funds);
		wasmtypes.hashEncode(enc, this.id);
		wasmtypes.stringEncode(enc, this.lattitude);
		wasmtypes.stringEncode(enc, this.longitude);
		wasmtypes.agentIDEncode(enc, this.manufacturer);
		wasmtypes.stringEncode(enc, this.name);
		wasmtypes.agentIDEncode(enc, this.owner);
		wasmtypes.uint64Encode(enc, this.reward);
		wasmtypes.int32Encode(enc, this.waterTarget);
		wasmtypes.int32Encode(enc, this.waterThreshold);
		return enc.buf();
	}
}

export class ImmutablePlant extends wasmtypes.ScProxy {

	exists(): bool {
		return this.proxy.exists();
	}

	value(): Plant {
		return Plant.fromBytes(this.proxy.get());
	}
}

export class MutablePlant extends wasmtypes.ScProxy {

	delete(): void {
		this.proxy.delete();
	}

	exists(): bool {
		return this.proxy.exists();
	}

	setValue(value: Plant): void {
		this.proxy.set(value.bytes());
	}

	value(): Plant {
		return Plant.fromBytes(this.proxy.get());
	}
}
