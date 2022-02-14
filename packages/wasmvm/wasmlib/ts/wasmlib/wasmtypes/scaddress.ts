// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

import {panic} from "../sandbox";
import {base58Encode, WasmDecoder, WasmEncoder, zeroes} from "./codec";
import {Proxy} from "./proxy";
import {ScAgentID} from "./scagentid";
import {bytesCompare} from "./scbytes";
import {ScHname} from "./schname";

// \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\

export const ScAddressAlias: u8 = 8;
export const ScAddressEd25519: u8 = 0;
export const ScAddressNFT: u8 = 16;

export const ScLengthAlias = 21;
export const ScLengthEd25519 = 33;
export const ScLengthNFT = 21;

export const ScAddressLength = ScLengthEd25519;

export class ScAddress {
    id: u8[] = zeroes(ScAddressLength);

    asAgentID(): ScAgentID {
        // agentID for address has Hname zero
        return new ScAgentID(this, new ScHname(0));
    }

    public equals(other: ScAddress): bool {
        return bytesCompare(this.id, other.id) == 0;
    }

    // convert to byte array representation
    public toBytes(): u8[] {
        return addressToBytes(this);
    }

    // human-readable string representation
    public toString(): string {
        return addressToString(this);
    }
}

// \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\

// TODO address type-dependent encoding/decoding?
export function addressDecode(dec: WasmDecoder): ScAddress {
    let addr = new ScAddress();
    addr.id = dec.fixedBytes(ScAddressLength);
    return addr;
}

export function addressEncode(enc: WasmEncoder, value: ScAddress): void {
    enc.fixedBytes(value.id, ScAddressLength)
}

export function addressFromBytes(buf: u8[]): ScAddress {
    const addr = new ScAddress();
    if (buf.length == 0) {
        return addr;
    }
    switch (buf[0]) {
        case ScAddressAlias:
            if (buf.length != ScLengthAlias) {
                panic("invalid Address length: Alias");
            }
            break;
        case ScAddressEd25519:
            if (buf.length != ScLengthEd25519) {
                panic("invalid Address length: Ed25519");
            }
            break;
        case ScAddressNFT:
            if (buf.length != ScLengthNFT) {
                panic("invalid Address length: NFT");
            }
            break;
        default:
            panic("invalid Address type")
    }
    for (let i = 0; i < buf.length; i++) {
        addr.id[i] = buf[i];
    }
    return addr
}

export function addressToBytes(value: ScAddress): u8[] {
    switch (value.id[0]) {
        case ScAddressAlias:
            return value.id.slice(0, ScLengthAlias);
        case ScAddressEd25519:
            return value.id.slice(0, ScLengthEd25519);
        case ScAddressNFT:
            return value.id.slice(0, ScLengthNFT);
        default:
            panic("unexpected Address type")
    }
    return [];
}

export function addressToString(value: ScAddress): string {
    // TODO standardize human readable string
    return base58Encode(value.id);
}

// \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\

export class ScImmutableAddress {
    proxy: Proxy;

    constructor(proxy: Proxy) {
        this.proxy = proxy;
    }

    exists(): bool {
        return this.proxy.exists();
    }

    toString(): string {
        return addressToString(this.value());
    }

    value(): ScAddress {
        return addressFromBytes(this.proxy.get());
    }
}

// \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\

export class ScMutableAddress extends ScImmutableAddress {
    delete(): void {
        this.proxy.delete();
    }

    setValue(value: ScAddress): void {
        this.proxy.set(addressToBytes(value));
    }
}