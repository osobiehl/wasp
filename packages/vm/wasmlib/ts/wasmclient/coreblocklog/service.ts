// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

import * as wasmclient from "wasmclient"

const ArgBlockIndex = "n";
const ArgContractHname = "h";
const ArgFromBlock = "f";
const ArgRequestID = "u";
const ArgToBlock = "t";

const ResBlockIndex = "n";
const ResBlockInfo = "i";
const ResEvent = "e";
const ResGoverningAddress = "g";
const ResRequestID = "u";
const ResRequestIndex = "r";
const ResRequestProcessed = "p";
const ResRequestRecord = "d";
const ResStateControllerAddress = "s";

///////////////////////////// controlAddresses /////////////////////////////

export class ControlAddressesView extends wasmclient.ClientView {

	public async call(): Promise<ControlAddressesResults> {
		const res = new ControlAddressesResults();
		await this.callView("controlAddresses", null, res);
		return res;
	}
}

export class ControlAddressesResults extends wasmclient.Results {

	blockIndex(): wasmclient.Int32 {
		return this.toInt32(this.get(ResBlockIndex));
	}

	governingAddress(): wasmclient.Address {
		return this.toAddress(this.get(ResGoverningAddress));
	}

	stateControllerAddress(): wasmclient.Address {
		return this.toAddress(this.get(ResStateControllerAddress));
	}
}

///////////////////////////// getBlockInfo /////////////////////////////

export class GetBlockInfoView extends wasmclient.ClientView {
	private args: wasmclient.Arguments = new wasmclient.Arguments();
	
	public blockIndex(v: wasmclient.Int32): void {
		this.args.set(ArgBlockIndex, this.args.fromInt32(v));
	}

	public async call(): Promise<GetBlockInfoResults> {
		this.args.mandatory(ArgBlockIndex);
		const res = new GetBlockInfoResults();
		await this.callView("getBlockInfo", this.args, res);
		return res;
	}
}

export class GetBlockInfoResults extends wasmclient.Results {

	blockInfo(): wasmclient.Bytes {
		return this.toBytes(this.get(ResBlockInfo));
	}
}

///////////////////////////// getEventsForBlock /////////////////////////////

export class GetEventsForBlockView extends wasmclient.ClientView {
	private args: wasmclient.Arguments = new wasmclient.Arguments();
	
	public blockIndex(v: wasmclient.Int32): void {
		this.args.set(ArgBlockIndex, this.args.fromInt32(v));
	}

	public async call(): Promise<GetEventsForBlockResults> {
		this.args.mandatory(ArgBlockIndex);
		const res = new GetEventsForBlockResults();
		await this.callView("getEventsForBlock", this.args, res);
		return res;
	}
}

export class GetEventsForBlockResults extends wasmclient.Results {

	event(): wasmclient.Bytes {
		return this.toBytes(this.get(ResEvent));
	}
}

///////////////////////////// getEventsForContract /////////////////////////////

export class GetEventsForContractView extends wasmclient.ClientView {
	private args: wasmclient.Arguments = new wasmclient.Arguments();
	
	public contractHname(v: wasmclient.Hname): void {
		this.args.set(ArgContractHname, this.args.fromHname(v));
	}
	
	public fromBlock(v: wasmclient.Int32): void {
		this.args.set(ArgFromBlock, this.args.fromInt32(v));
	}
	
	public toBlock(v: wasmclient.Int32): void {
		this.args.set(ArgToBlock, this.args.fromInt32(v));
	}

	public async call(): Promise<GetEventsForContractResults> {
		this.args.mandatory(ArgContractHname);
		const res = new GetEventsForContractResults();
		await this.callView("getEventsForContract", this.args, res);
		return res;
	}
}

export class GetEventsForContractResults extends wasmclient.Results {

	event(): wasmclient.Bytes {
		return this.toBytes(this.get(ResEvent));
	}
}

///////////////////////////// getEventsForRequest /////////////////////////////

export class GetEventsForRequestView extends wasmclient.ClientView {
	private args: wasmclient.Arguments = new wasmclient.Arguments();
	
	public requestID(v: wasmclient.RequestID): void {
		this.args.set(ArgRequestID, this.args.fromRequestID(v));
	}

	public async call(): Promise<GetEventsForRequestResults> {
		this.args.mandatory(ArgRequestID);
		const res = new GetEventsForRequestResults();
		await this.callView("getEventsForRequest", this.args, res);
		return res;
	}
}

export class GetEventsForRequestResults extends wasmclient.Results {

	event(): wasmclient.Bytes {
		return this.toBytes(this.get(ResEvent));
	}
}

///////////////////////////// getLatestBlockInfo /////////////////////////////

export class GetLatestBlockInfoView extends wasmclient.ClientView {

	public async call(): Promise<GetLatestBlockInfoResults> {
		const res = new GetLatestBlockInfoResults();
		await this.callView("getLatestBlockInfo", null, res);
		return res;
	}
}

export class GetLatestBlockInfoResults extends wasmclient.Results {

	blockIndex(): wasmclient.Int32 {
		return this.toInt32(this.get(ResBlockIndex));
	}

	blockInfo(): wasmclient.Bytes {
		return this.toBytes(this.get(ResBlockInfo));
	}
}

///////////////////////////// getRequestIDsForBlock /////////////////////////////

export class GetRequestIDsForBlockView extends wasmclient.ClientView {
	private args: wasmclient.Arguments = new wasmclient.Arguments();
	
	public blockIndex(v: wasmclient.Int32): void {
		this.args.set(ArgBlockIndex, this.args.fromInt32(v));
	}

	public async call(): Promise<GetRequestIDsForBlockResults> {
		this.args.mandatory(ArgBlockIndex);
		const res = new GetRequestIDsForBlockResults();
		await this.callView("getRequestIDsForBlock", this.args, res);
		return res;
	}
}

export class GetRequestIDsForBlockResults extends wasmclient.Results {

	requestID(): wasmclient.RequestID {
		return this.toRequestID(this.get(ResRequestID));
	}
}

///////////////////////////// getRequestReceipt /////////////////////////////

export class GetRequestReceiptView extends wasmclient.ClientView {
	private args: wasmclient.Arguments = new wasmclient.Arguments();
	
	public requestID(v: wasmclient.RequestID): void {
		this.args.set(ArgRequestID, this.args.fromRequestID(v));
	}

	public async call(): Promise<GetRequestReceiptResults> {
		this.args.mandatory(ArgRequestID);
		const res = new GetRequestReceiptResults();
		await this.callView("getRequestReceipt", this.args, res);
		return res;
	}
}

export class GetRequestReceiptResults extends wasmclient.Results {

	blockIndex(): wasmclient.Int32 {
		return this.toInt32(this.get(ResBlockIndex));
	}

	requestIndex(): wasmclient.Int16 {
		return this.toInt16(this.get(ResRequestIndex));
	}

	requestRecord(): wasmclient.Bytes {
		return this.toBytes(this.get(ResRequestRecord));
	}
}

///////////////////////////// getRequestReceiptsForBlock /////////////////////////////

export class GetRequestReceiptsForBlockView extends wasmclient.ClientView {
	private args: wasmclient.Arguments = new wasmclient.Arguments();
	
	public blockIndex(v: wasmclient.Int32): void {
		this.args.set(ArgBlockIndex, this.args.fromInt32(v));
	}

	public async call(): Promise<GetRequestReceiptsForBlockResults> {
		this.args.mandatory(ArgBlockIndex);
		const res = new GetRequestReceiptsForBlockResults();
		await this.callView("getRequestReceiptsForBlock", this.args, res);
		return res;
	}
}

export class GetRequestReceiptsForBlockResults extends wasmclient.Results {

	requestRecord(): wasmclient.Bytes {
		return this.toBytes(this.get(ResRequestRecord));
	}
}

///////////////////////////// isRequestProcessed /////////////////////////////

export class IsRequestProcessedView extends wasmclient.ClientView {
	private args: wasmclient.Arguments = new wasmclient.Arguments();
	
	public requestID(v: wasmclient.RequestID): void {
		this.args.set(ArgRequestID, this.args.fromRequestID(v));
	}

	public async call(): Promise<IsRequestProcessedResults> {
		this.args.mandatory(ArgRequestID);
		const res = new IsRequestProcessedResults();
		await this.callView("isRequestProcessed", this.args, res);
		return res;
	}
}

export class IsRequestProcessedResults extends wasmclient.Results {

	requestProcessed(): string {
		return this.toString(this.get(ResRequestProcessed));
	}
}

///////////////////////////// CoreBlockLogService /////////////////////////////

export class CoreBlockLogService extends wasmclient.Service {

	public constructor(cl: wasmclient.ServiceClient) {
		super(cl, 0xf538ef2b, new Map());
	}

	public controlAddresses(): ControlAddressesView {
		return new ControlAddressesView(this);
	}

	public getBlockInfo(): GetBlockInfoView {
		return new GetBlockInfoView(this);
	}

	public getEventsForBlock(): GetEventsForBlockView {
		return new GetEventsForBlockView(this);
	}

	public getEventsForContract(): GetEventsForContractView {
		return new GetEventsForContractView(this);
	}

	public getEventsForRequest(): GetEventsForRequestView {
		return new GetEventsForRequestView(this);
	}

	public getLatestBlockInfo(): GetLatestBlockInfoView {
		return new GetLatestBlockInfoView(this);
	}

	public getRequestIDsForBlock(): GetRequestIDsForBlockView {
		return new GetRequestIDsForBlockView(this);
	}

	public getRequestReceipt(): GetRequestReceiptView {
		return new GetRequestReceiptView(this);
	}

	public getRequestReceiptsForBlock(): GetRequestReceiptsForBlockView {
		return new GetRequestReceiptsForBlockView(this);
	}

	public isRequestProcessed(): IsRequestProcessedView {
		return new IsRequestProcessedView(this);
	}
}
