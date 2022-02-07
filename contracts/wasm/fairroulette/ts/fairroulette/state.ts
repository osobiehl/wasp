// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

import * as wasmtypes from "wasmlib/wasmtypes";
import * as sc from "./index";

export class ArrayOfImmutableBet extends wasmtypes.ScProxy {

    length(): u32 {
        return this.proxy.length();
    }

	getBet(index: u32): sc.ImmutableBet {
		return new sc.ImmutableBet(this.proxy.index(index));
	}
}

export class ImmutableFairRouletteState extends wasmtypes.ScProxy {
    bets(): sc.ArrayOfImmutableBet {
		return new sc.ArrayOfImmutableBet(this.proxy.root(sc.StateBets));
	}

    lastWinningNumber(): wasmtypes.ScImmutableUint16 {
		return new wasmtypes.ScImmutableUint16(this.proxy.root(sc.StateLastWinningNumber));
	}

    playPeriod(): wasmtypes.ScImmutableUint32 {
		return new wasmtypes.ScImmutableUint32(this.proxy.root(sc.StatePlayPeriod));
	}

    roundNumber(): wasmtypes.ScImmutableUint32 {
		return new wasmtypes.ScImmutableUint32(this.proxy.root(sc.StateRoundNumber));
	}

    roundStartedAt(): wasmtypes.ScImmutableUint32 {
		return new wasmtypes.ScImmutableUint32(this.proxy.root(sc.StateRoundStartedAt));
	}

    roundStatus(): wasmtypes.ScImmutableUint16 {
		return new wasmtypes.ScImmutableUint16(this.proxy.root(sc.StateRoundStatus));
	}
}

export class ArrayOfMutableBet extends wasmtypes.ScProxy {

	appendBet(): sc.MutableBet {
		return new sc.MutableBet(this.proxy.append());
	}

    clear(): void {
        this.proxy.clearArray();
    }

    length(): u32 {
        return this.proxy.length();
    }

	getBet(index: u32): sc.MutableBet {
		return new sc.MutableBet(this.proxy.index(index));
	}
}

export class MutableFairRouletteState extends wasmtypes.ScProxy {
    asImmutable(): sc.ImmutableFairRouletteState {
		return new sc.ImmutableFairRouletteState(this.proxy);
	}

    bets(): sc.ArrayOfMutableBet {
		return new sc.ArrayOfMutableBet(this.proxy.root(sc.StateBets));
	}

    lastWinningNumber(): wasmtypes.ScMutableUint16 {
		return new wasmtypes.ScMutableUint16(this.proxy.root(sc.StateLastWinningNumber));
	}

    playPeriod(): wasmtypes.ScMutableUint32 {
		return new wasmtypes.ScMutableUint32(this.proxy.root(sc.StatePlayPeriod));
	}

    roundNumber(): wasmtypes.ScMutableUint32 {
		return new wasmtypes.ScMutableUint32(this.proxy.root(sc.StateRoundNumber));
	}

    roundStartedAt(): wasmtypes.ScMutableUint32 {
		return new wasmtypes.ScMutableUint32(this.proxy.root(sc.StateRoundStartedAt));
	}

    roundStatus(): wasmtypes.ScMutableUint16 {
		return new wasmtypes.ScMutableUint16(this.proxy.root(sc.StateRoundStatus));
	}
}
