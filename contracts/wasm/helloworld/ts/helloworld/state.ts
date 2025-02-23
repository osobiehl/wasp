// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

import * as wasmlib from "wasmlib";
import * as sc from "./index";

export class ImmutableHelloWorldState extends wasmlib.ScMapID {
}

export class MutableHelloWorldState extends wasmlib.ScMapID {
    asImmutable(): sc.ImmutableHelloWorldState {
		const imm = new sc.ImmutableHelloWorldState();
		imm.mapID = this.mapID;
		return imm;
	}
}
