// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

package testwasmlib

import "github.com/iotaledger/wasp/packages/wasmvm/wasmlib/go/wasmlib/wasmtypes"

type ImmutableArrayLengthResults struct {
	proxy wasmtypes.Proxy
}

func (s ImmutableArrayLengthResults) Length() wasmtypes.ScImmutableUint32 {
	return wasmtypes.NewScImmutableUint32(s.proxy.Root(ResultLength))
}

type MutableArrayLengthResults struct {
	proxy wasmtypes.Proxy
}

func (s MutableArrayLengthResults) Length() wasmtypes.ScMutableUint32 {
	return wasmtypes.NewScMutableUint32(s.proxy.Root(ResultLength))
}

type ImmutableArrayValueResults struct {
	proxy wasmtypes.Proxy
}

func (s ImmutableArrayValueResults) Value() wasmtypes.ScImmutableString {
	return wasmtypes.NewScImmutableString(s.proxy.Root(ResultValue))
}

type MutableArrayValueResults struct {
	proxy wasmtypes.Proxy
}

func (s MutableArrayValueResults) Value() wasmtypes.ScMutableString {
	return wasmtypes.NewScMutableString(s.proxy.Root(ResultValue))
}

type ImmutableBlockRecordResults struct {
	proxy wasmtypes.Proxy
}

func (s ImmutableBlockRecordResults) Record() wasmtypes.ScImmutableBytes {
	return wasmtypes.NewScImmutableBytes(s.proxy.Root(ResultRecord))
}

type MutableBlockRecordResults struct {
	proxy wasmtypes.Proxy
}

func (s MutableBlockRecordResults) Record() wasmtypes.ScMutableBytes {
	return wasmtypes.NewScMutableBytes(s.proxy.Root(ResultRecord))
}

type ImmutableBlockRecordsResults struct {
	proxy wasmtypes.Proxy
}

func (s ImmutableBlockRecordsResults) Count() wasmtypes.ScImmutableUint32 {
	return wasmtypes.NewScImmutableUint32(s.proxy.Root(ResultCount))
}

type MutableBlockRecordsResults struct {
	proxy wasmtypes.Proxy
}

func (s MutableBlockRecordsResults) Count() wasmtypes.ScMutableUint32 {
	return wasmtypes.NewScMutableUint32(s.proxy.Root(ResultCount))
}

type ImmutableGetRandomResults struct {
	proxy wasmtypes.Proxy
}

func (s ImmutableGetRandomResults) Random() wasmtypes.ScImmutableUint64 {
	return wasmtypes.NewScImmutableUint64(s.proxy.Root(ResultRandom))
}

type MutableGetRandomResults struct {
	proxy wasmtypes.Proxy
}

func (s MutableGetRandomResults) Random() wasmtypes.ScMutableUint64 {
	return wasmtypes.NewScMutableUint64(s.proxy.Root(ResultRandom))
}

type ImmutableIotaBalanceResults struct {
	proxy wasmtypes.Proxy
}

func (s ImmutableIotaBalanceResults) Iotas() wasmtypes.ScImmutableUint64 {
	return wasmtypes.NewScImmutableUint64(s.proxy.Root(ResultIotas))
}

type MutableIotaBalanceResults struct {
	proxy wasmtypes.Proxy
}

func (s MutableIotaBalanceResults) Iotas() wasmtypes.ScMutableUint64 {
	return wasmtypes.NewScMutableUint64(s.proxy.Root(ResultIotas))
}

type ImmutableMapValueResults struct {
	proxy wasmtypes.Proxy
}

func (s ImmutableMapValueResults) Value() wasmtypes.ScImmutableString {
	return wasmtypes.NewScImmutableString(s.proxy.Root(ResultValue))
}

type MutableMapValueResults struct {
	proxy wasmtypes.Proxy
}

func (s MutableMapValueResults) Value() wasmtypes.ScMutableString {
	return wasmtypes.NewScMutableString(s.proxy.Root(ResultValue))
}
