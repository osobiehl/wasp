// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

#![allow(dead_code)]

use wasmlib::*;

use crate::*;

pub(crate) const IDX_PARAM_COLOR        : usize = 0;
pub(crate) const IDX_PARAM_DESCRIPTION  : usize = 1;
pub(crate) const IDX_PARAM_DURATION     : usize = 2;
pub(crate) const IDX_PARAM_MINIMUM_BID  : usize = 3;
pub(crate) const IDX_PARAM_OWNER_MARGIN : usize = 4;

pub(crate) const IDX_RESULT_BIDDERS        : usize = 5;
pub(crate) const IDX_RESULT_COLOR          : usize = 6;
pub(crate) const IDX_RESULT_CREATOR        : usize = 7;
pub(crate) const IDX_RESULT_DEPOSIT        : usize = 8;
pub(crate) const IDX_RESULT_DESCRIPTION    : usize = 9;
pub(crate) const IDX_RESULT_DURATION       : usize = 10;
pub(crate) const IDX_RESULT_HIGHEST_BID    : usize = 11;
pub(crate) const IDX_RESULT_HIGHEST_BIDDER : usize = 12;
pub(crate) const IDX_RESULT_MINIMUM_BID    : usize = 13;
pub(crate) const IDX_RESULT_NUM_TOKENS     : usize = 14;
pub(crate) const IDX_RESULT_OWNER_MARGIN   : usize = 15;
pub(crate) const IDX_RESULT_WHEN_STARTED   : usize = 16;

pub(crate) const IDX_STATE_AUCTIONS     : usize = 17;
pub(crate) const IDX_STATE_BIDDER_LIST  : usize = 18;
pub(crate) const IDX_STATE_BIDS         : usize = 19;
pub(crate) const IDX_STATE_OWNER_MARGIN : usize = 20;

pub const KEY_MAP_LEN: usize = 21;

pub const KEY_MAP: [&str; KEY_MAP_LEN] = [
	PARAM_COLOR,
	PARAM_DESCRIPTION,
	PARAM_DURATION,
	PARAM_MINIMUM_BID,
	PARAM_OWNER_MARGIN,
	RESULT_BIDDERS,
	RESULT_COLOR,
	RESULT_CREATOR,
	RESULT_DEPOSIT,
	RESULT_DESCRIPTION,
	RESULT_DURATION,
	RESULT_HIGHEST_BID,
	RESULT_HIGHEST_BIDDER,
	RESULT_MINIMUM_BID,
	RESULT_NUM_TOKENS,
	RESULT_OWNER_MARGIN,
	RESULT_WHEN_STARTED,
	STATE_AUCTIONS,
	STATE_BIDDER_LIST,
	STATE_BIDS,
	STATE_OWNER_MARGIN,
];

pub static mut IDX_MAP: [Key32; KEY_MAP_LEN] = [Key32(0); KEY_MAP_LEN];

pub fn idx_map(idx: usize) -> Key32 {
    unsafe {
        IDX_MAP[idx]
    }
}