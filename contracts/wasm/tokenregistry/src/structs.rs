// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

#![allow(dead_code)]
#![allow(unused_imports)]

use wasmlib::*;
use wasmlib::host::*;

#[derive(Clone)]
pub struct Token {
    pub created      : i64,  // creation timestamp
    pub description  : String,  // description what minted token represents
    pub minted_by    : ScAgentID,  // original minter
    pub owner        : ScAgentID,  // current owner
    pub supply       : i64,  // amount of tokens originally minted
    pub updated      : i64,  // last update timestamp
    pub user_defined : String,  // any user defined text
}

impl Token {
    pub fn from_bytes(bytes: &[u8]) -> Token {
        let mut decode = BytesDecoder::new(bytes);
        Token {
            created      : decode.int64(),
            description  : decode.string(),
            minted_by    : decode.agent_id(),
            owner        : decode.agent_id(),
            supply       : decode.int64(),
            updated      : decode.int64(),
            user_defined : decode.string(),
        }
    }

    pub fn to_bytes(&self) -> Vec<u8> {
        let mut encode = BytesEncoder::new();
		encode.int64(self.created);
		encode.string(&self.description);
		encode.agent_id(&self.minted_by);
		encode.agent_id(&self.owner);
		encode.int64(self.supply);
		encode.int64(self.updated);
		encode.string(&self.user_defined);
        return encode.data();
    }
}

#[derive(Clone, Copy)]
pub struct ImmutableToken {
    pub(crate) obj_id: i32,
    pub(crate) key_id: Key32,
}

impl ImmutableToken {
    pub fn exists(&self) -> bool {
        exists(self.obj_id, self.key_id, TYPE_BYTES)
    }

    pub fn value(&self) -> Token {
        Token::from_bytes(&get_bytes(self.obj_id, self.key_id, TYPE_BYTES))
    }
}

#[derive(Clone, Copy)]
pub struct MutableToken {
    pub(crate) obj_id: i32,
    pub(crate) key_id: Key32,
}

impl MutableToken {
    pub fn delete(&self) {
        del_key(self.obj_id, self.key_id, TYPE_BYTES);
    }

    pub fn exists(&self) -> bool {
        exists(self.obj_id, self.key_id, TYPE_BYTES)
    }

    pub fn set_value(&self, value: &Token) {
        set_bytes(self.obj_id, self.key_id, TYPE_BYTES, &value.to_bytes());
    }

    pub fn value(&self) -> Token {
        Token::from_bytes(&get_bytes(self.obj_id, self.key_id, TYPE_BYTES))
    }
}
