// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

import * as wasmclient from "wasmclient"
import * as events from "./events"

const ArgAddress = "address";
const ArgAgentID = "agentID";
const ArgBlockIndex = "blockIndex";
const ArgBool = "bool";
const ArgBytes = "bytes";
const ArgChainID = "chainID";
const ArgColor = "color";
const ArgHash = "hash";
const ArgHname = "hname";
const ArgIndex = "index";
const ArgInt16 = "int16";
const ArgInt32 = "int32";
const ArgInt64 = "int64";
const ArgInt8 = "int8";
const ArgKey = "key";
const ArgName = "name";
const ArgParam = "this";
const ArgRecordIndex = "recordIndex";
const ArgRequestID = "requestID";
const ArgString = "string";
const ArgUint16 = "uint16";
const ArgUint32 = "uint32";
const ArgUint64 = "uint64";
const ArgUint8 = "uint8";
const ArgValue = "value";

const ResCount = "count";
const ResIotas = "iotas";
const ResLength = "length";
const ResRandom = "random";
const ResRecord = "record";
const ResValue = "value";

///////////////////////////// arrayClear /////////////////////////////

export class ArrayClearFunc extends wasmclient.ClientFunc {
	private args: wasmclient.Arguments = new wasmclient.Arguments();
	
	public name(v: string): void {
		this.args.set(ArgName, this.args.fromString(v));
	}
	
	public async post(): Promise<wasmclient.RequestID> {
		this.args.mandatory(ArgName);
		return await super.post(0x88021821, this.args);
	}
}

///////////////////////////// arrayCreate /////////////////////////////

export class ArrayCreateFunc extends wasmclient.ClientFunc {
	private args: wasmclient.Arguments = new wasmclient.Arguments();
	
	public name(v: string): void {
		this.args.set(ArgName, this.args.fromString(v));
	}
	
	public async post(): Promise<wasmclient.RequestID> {
		this.args.mandatory(ArgName);
		return await super.post(0x1ed5b23b, this.args);
	}
}

///////////////////////////// arraySet /////////////////////////////

export class ArraySetFunc extends wasmclient.ClientFunc {
	private args: wasmclient.Arguments = new wasmclient.Arguments();
	
	public index(v: wasmclient.Int32): void {
		this.args.set(ArgIndex, this.args.fromInt32(v));
	}
	
	public name(v: string): void {
		this.args.set(ArgName, this.args.fromString(v));
	}
	
	public value(v: string): void {
		this.args.set(ArgValue, this.args.fromString(v));
	}
	
	public async post(): Promise<wasmclient.RequestID> {
		this.args.mandatory(ArgIndex);
		this.args.mandatory(ArgName);
		this.args.mandatory(ArgValue);
		return await super.post(0x2c4150b3, this.args);
	}
}

///////////////////////////// mapClear /////////////////////////////

export class MapClearFunc extends wasmclient.ClientFunc {
	private args: wasmclient.Arguments = new wasmclient.Arguments();
	
	public name(v: string): void {
		this.args.set(ArgName, this.args.fromString(v));
	}
	
	public async post(): Promise<wasmclient.RequestID> {
		this.args.mandatory(ArgName);
		return await super.post(0x027f215a, this.args);
	}
}

///////////////////////////// mapCreate /////////////////////////////

export class MapCreateFunc extends wasmclient.ClientFunc {
	private args: wasmclient.Arguments = new wasmclient.Arguments();
	
	public name(v: string): void {
		this.args.set(ArgName, this.args.fromString(v));
	}
	
	public async post(): Promise<wasmclient.RequestID> {
		this.args.mandatory(ArgName);
		return await super.post(0x6295d599, this.args);
	}
}

///////////////////////////// mapSet /////////////////////////////

export class MapSetFunc extends wasmclient.ClientFunc {
	private args: wasmclient.Arguments = new wasmclient.Arguments();
	
	public key(v: string): void {
		this.args.set(ArgKey, this.args.fromString(v));
	}
	
	public name(v: string): void {
		this.args.set(ArgName, this.args.fromString(v));
	}
	
	public value(v: string): void {
		this.args.set(ArgValue, this.args.fromString(v));
	}
	
	public async post(): Promise<wasmclient.RequestID> {
		this.args.mandatory(ArgKey);
		this.args.mandatory(ArgName);
		this.args.mandatory(ArgValue);
		return await super.post(0xf2260404, this.args);
	}
}

///////////////////////////// paramTypes /////////////////////////////

export class ParamTypesFunc extends wasmclient.ClientFunc {
	private args: wasmclient.Arguments = new wasmclient.Arguments();
	
	public address(v: wasmclient.Address): void {
		this.args.set(ArgAddress, this.args.fromAddress(v));
	}
	
	public agentID(v: wasmclient.AgentID): void {
		this.args.set(ArgAgentID, this.args.fromAgentID(v));
	}
	
	public bool(v: boolean): void {
		this.args.set(ArgBool, this.args.fromBool(v));
	}
	
	public bytes(v: wasmclient.Bytes): void {
		this.args.set(ArgBytes, this.args.fromBytes(v));
	}
	
	public chainID(v: wasmclient.ChainID): void {
		this.args.set(ArgChainID, this.args.fromChainID(v));
	}
	
	public color(v: wasmclient.Color): void {
		this.args.set(ArgColor, this.args.fromColor(v));
	}
	
	public hash(v: wasmclient.Hash): void {
		this.args.set(ArgHash, this.args.fromHash(v));
	}
	
	public hname(v: wasmclient.Hname): void {
		this.args.set(ArgHname, this.args.fromHname(v));
	}
	
	public int16(v: wasmclient.Int16): void {
		this.args.set(ArgInt16, this.args.fromInt16(v));
	}
	
	public int32(v: wasmclient.Int32): void {
		this.args.set(ArgInt32, this.args.fromInt32(v));
	}
	
	public int64(v: wasmclient.Int64): void {
		this.args.set(ArgInt64, this.args.fromInt64(v));
	}
	
	public int8(v: wasmclient.Int8): void {
		this.args.set(ArgInt8, this.args.fromInt8(v));
	}
	
	public param(v: wasmclient.Bytes): void {
		this.args.set(ArgParam, this.args.fromBytes(v));
	}
	
	public requestID(v: wasmclient.RequestID): void {
		this.args.set(ArgRequestID, this.args.fromRequestID(v));
	}
	
	public string(v: string): void {
		this.args.set(ArgString, this.args.fromString(v));
	}
	
	public uint16(v: wasmclient.Uint16): void {
		this.args.set(ArgUint16, this.args.fromUint16(v));
	}
	
	public uint32(v: wasmclient.Uint32): void {
		this.args.set(ArgUint32, this.args.fromUint32(v));
	}
	
	public uint64(v: wasmclient.Uint64): void {
		this.args.set(ArgUint64, this.args.fromUint64(v));
	}
	
	public uint8(v: wasmclient.Uint8): void {
		this.args.set(ArgUint8, this.args.fromUint8(v));
	}
	
	public async post(): Promise<wasmclient.RequestID> {
		return await super.post(0x6921c4cd, this.args);
	}
}

///////////////////////////// random /////////////////////////////

export class RandomFunc extends wasmclient.ClientFunc {
	
	public async post(): Promise<wasmclient.RequestID> {
		return await super.post(0xe86c97ca, null);
	}
}

///////////////////////////// triggerEvent /////////////////////////////

export class TriggerEventFunc extends wasmclient.ClientFunc {
	private args: wasmclient.Arguments = new wasmclient.Arguments();
	
	public address(v: wasmclient.Address): void {
		this.args.set(ArgAddress, this.args.fromAddress(v));
	}
	
	public name(v: string): void {
		this.args.set(ArgName, this.args.fromString(v));
	}
	
	public async post(): Promise<wasmclient.RequestID> {
		this.args.mandatory(ArgAddress);
		this.args.mandatory(ArgName);
		return await super.post(0xd5438ac6, this.args);
	}
}

///////////////////////////// arrayLength /////////////////////////////

export class ArrayLengthView extends wasmclient.ClientView {
	private args: wasmclient.Arguments = new wasmclient.Arguments();
	
	public name(v: string): void {
		this.args.set(ArgName, this.args.fromString(v));
	}

	public async call(): Promise<ArrayLengthResults> {
		this.args.mandatory(ArgName);
		const res = new ArrayLengthResults();
		await this.callView("arrayLength", this.args, res);
		return res;
	}
}

export class ArrayLengthResults extends wasmclient.Results {

	length(): wasmclient.Int32 {
		return this.toInt32(this.get(ResLength));
	}
}

///////////////////////////// arrayValue /////////////////////////////

export class ArrayValueView extends wasmclient.ClientView {
	private args: wasmclient.Arguments = new wasmclient.Arguments();
	
	public index(v: wasmclient.Int32): void {
		this.args.set(ArgIndex, this.args.fromInt32(v));
	}
	
	public name(v: string): void {
		this.args.set(ArgName, this.args.fromString(v));
	}

	public async call(): Promise<ArrayValueResults> {
		this.args.mandatory(ArgIndex);
		this.args.mandatory(ArgName);
		const res = new ArrayValueResults();
		await this.callView("arrayValue", this.args, res);
		return res;
	}
}

export class ArrayValueResults extends wasmclient.Results {

	value(): string {
		return this.toString(this.get(ResValue));
	}
}

///////////////////////////// blockRecord /////////////////////////////

export class BlockRecordView extends wasmclient.ClientView {
	private args: wasmclient.Arguments = new wasmclient.Arguments();
	
	public blockIndex(v: wasmclient.Int32): void {
		this.args.set(ArgBlockIndex, this.args.fromInt32(v));
	}
	
	public recordIndex(v: wasmclient.Int32): void {
		this.args.set(ArgRecordIndex, this.args.fromInt32(v));
	}

	public async call(): Promise<BlockRecordResults> {
		this.args.mandatory(ArgBlockIndex);
		this.args.mandatory(ArgRecordIndex);
		const res = new BlockRecordResults();
		await this.callView("blockRecord", this.args, res);
		return res;
	}
}

export class BlockRecordResults extends wasmclient.Results {

	record(): wasmclient.Bytes {
		return this.toBytes(this.get(ResRecord));
	}
}

///////////////////////////// blockRecords /////////////////////////////

export class BlockRecordsView extends wasmclient.ClientView {
	private args: wasmclient.Arguments = new wasmclient.Arguments();
	
	public blockIndex(v: wasmclient.Int32): void {
		this.args.set(ArgBlockIndex, this.args.fromInt32(v));
	}

	public async call(): Promise<BlockRecordsResults> {
		this.args.mandatory(ArgBlockIndex);
		const res = new BlockRecordsResults();
		await this.callView("blockRecords", this.args, res);
		return res;
	}
}

export class BlockRecordsResults extends wasmclient.Results {

	count(): wasmclient.Int32 {
		return this.toInt32(this.get(ResCount));
	}
}

///////////////////////////// getRandom /////////////////////////////

export class GetRandomView extends wasmclient.ClientView {

	public async call(): Promise<GetRandomResults> {
		const res = new GetRandomResults();
		await this.callView("getRandom", null, res);
		return res;
	}
}

export class GetRandomResults extends wasmclient.Results {

	random(): wasmclient.Int64 {
		return this.toInt64(this.get(ResRandom));
	}
}

///////////////////////////// iotaBalance /////////////////////////////

export class IotaBalanceView extends wasmclient.ClientView {

	public async call(): Promise<IotaBalanceResults> {
		const res = new IotaBalanceResults();
		await this.callView("iotaBalance", null, res);
		return res;
	}
}

export class IotaBalanceResults extends wasmclient.Results {

	iotas(): wasmclient.Int64 {
		return this.toInt64(this.get(ResIotas));
	}
}

///////////////////////////// mapValue /////////////////////////////

export class MapValueView extends wasmclient.ClientView {
	private args: wasmclient.Arguments = new wasmclient.Arguments();
	
	public key(v: string): void {
		this.args.set(ArgKey, this.args.fromString(v));
	}
	
	public name(v: string): void {
		this.args.set(ArgName, this.args.fromString(v));
	}

	public async call(): Promise<MapValueResults> {
		this.args.mandatory(ArgKey);
		this.args.mandatory(ArgName);
		const res = new MapValueResults();
		await this.callView("mapValue", this.args, res);
		return res;
	}
}

export class MapValueResults extends wasmclient.Results {

	value(): string {
		return this.toString(this.get(ResValue));
	}
}

///////////////////////////// TestWasmLibService /////////////////////////////

export class TestWasmLibService extends wasmclient.Service {

	public constructor(cl: wasmclient.ServiceClient) {
		super(cl, 0x89703a45, events.eventHandlers);
	}

	public arrayClear(): ArrayClearFunc {
		return new ArrayClearFunc(this);
	}

	public arrayCreate(): ArrayCreateFunc {
		return new ArrayCreateFunc(this);
	}

	public arraySet(): ArraySetFunc {
		return new ArraySetFunc(this);
	}

	public mapClear(): MapClearFunc {
		return new MapClearFunc(this);
	}

	public mapCreate(): MapCreateFunc {
		return new MapCreateFunc(this);
	}

	public mapSet(): MapSetFunc {
		return new MapSetFunc(this);
	}

	public paramTypes(): ParamTypesFunc {
		return new ParamTypesFunc(this);
	}

	public random(): RandomFunc {
		return new RandomFunc(this);
	}

	public triggerEvent(): TriggerEventFunc {
		return new TriggerEventFunc(this);
	}

	public arrayLength(): ArrayLengthView {
		return new ArrayLengthView(this);
	}

	public arrayValue(): ArrayValueView {
		return new ArrayValueView(this);
	}

	public blockRecord(): BlockRecordView {
		return new BlockRecordView(this);
	}

	public blockRecords(): BlockRecordsView {
		return new BlockRecordsView(this);
	}

	public getRandom(): GetRandomView {
		return new GetRandomView(this);
	}

	public iotaBalance(): IotaBalanceView {
		return new IotaBalanceView(this);
	}

	public mapValue(): MapValueView {
		return new MapValueView(this);
	}
}
