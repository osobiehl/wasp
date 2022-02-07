// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

import * as wasmlib from "wasmlib";
import * as sc from "./index";

export class CallIncrementCall {
	func: wasmlib.ScFunc = new wasmlib.ScFunc(sc.HScName, sc.HFuncCallIncrement);
}

export class CallIncrementContext {
	state: sc.MutableIncCounterState = new sc.MutableIncCounterState(wasmlib.ScState.proxy());
}

export class CallIncrementRecurse5xCall {
	func: wasmlib.ScFunc = new wasmlib.ScFunc(sc.HScName, sc.HFuncCallIncrementRecurse5x);
}

export class CallIncrementRecurse5xContext {
	state: sc.MutableIncCounterState = new sc.MutableIncCounterState(wasmlib.ScState.proxy());
}

export class EndlessLoopCall {
	func: wasmlib.ScFunc = new wasmlib.ScFunc(sc.HScName, sc.HFuncEndlessLoop);
}

export class EndlessLoopContext {
	state: sc.MutableIncCounterState = new sc.MutableIncCounterState(wasmlib.ScState.proxy());
}

export class IncrementCall {
	func: wasmlib.ScFunc = new wasmlib.ScFunc(sc.HScName, sc.HFuncIncrement);
}

export class IncrementContext {
	state: sc.MutableIncCounterState = new sc.MutableIncCounterState(wasmlib.ScState.proxy());
}

export class IncrementWithDelayCall {
	func: wasmlib.ScFunc = new wasmlib.ScFunc(sc.HScName, sc.HFuncIncrementWithDelay);
	params: sc.MutableIncrementWithDelayParams = new sc.MutableIncrementWithDelayParams(wasmlib.ScView.nilProxy);
}

export class IncrementWithDelayContext {
	params: sc.ImmutableIncrementWithDelayParams = new sc.ImmutableIncrementWithDelayParams(wasmlib.paramsProxy());
	state: sc.MutableIncCounterState = new sc.MutableIncCounterState(wasmlib.ScState.proxy());
}

export class InitCall {
	func: wasmlib.ScInitFunc = new wasmlib.ScInitFunc(sc.HScName, sc.HFuncInit);
	params: sc.MutableInitParams = new sc.MutableInitParams(wasmlib.ScView.nilProxy);
}

export class InitContext {
	params: sc.ImmutableInitParams = new sc.ImmutableInitParams(wasmlib.paramsProxy());
	state: sc.MutableIncCounterState = new sc.MutableIncCounterState(wasmlib.ScState.proxy());
}

export class LocalStateInternalCallCall {
	func: wasmlib.ScFunc = new wasmlib.ScFunc(sc.HScName, sc.HFuncLocalStateInternalCall);
}

export class LocalStateInternalCallContext {
	state: sc.MutableIncCounterState = new sc.MutableIncCounterState(wasmlib.ScState.proxy());
}

export class LocalStatePostCall {
	func: wasmlib.ScFunc = new wasmlib.ScFunc(sc.HScName, sc.HFuncLocalStatePost);
}

export class LocalStatePostContext {
	state: sc.MutableIncCounterState = new sc.MutableIncCounterState(wasmlib.ScState.proxy());
}

export class LocalStateSandboxCallCall {
	func: wasmlib.ScFunc = new wasmlib.ScFunc(sc.HScName, sc.HFuncLocalStateSandboxCall);
}

export class LocalStateSandboxCallContext {
	state: sc.MutableIncCounterState = new sc.MutableIncCounterState(wasmlib.ScState.proxy());
}

export class PostIncrementCall {
	func: wasmlib.ScFunc = new wasmlib.ScFunc(sc.HScName, sc.HFuncPostIncrement);
}

export class PostIncrementContext {
	state: sc.MutableIncCounterState = new sc.MutableIncCounterState(wasmlib.ScState.proxy());
}

export class RepeatManyCall {
	func: wasmlib.ScFunc = new wasmlib.ScFunc(sc.HScName, sc.HFuncRepeatMany);
	params: sc.MutableRepeatManyParams = new sc.MutableRepeatManyParams(wasmlib.ScView.nilProxy);
}

export class RepeatManyContext {
	params: sc.ImmutableRepeatManyParams = new sc.ImmutableRepeatManyParams(wasmlib.paramsProxy());
	state: sc.MutableIncCounterState = new sc.MutableIncCounterState(wasmlib.ScState.proxy());
}

export class TestVliCodecCall {
	func: wasmlib.ScFunc = new wasmlib.ScFunc(sc.HScName, sc.HFuncTestVliCodec);
}

export class TestVliCodecContext {
	state: sc.MutableIncCounterState = new sc.MutableIncCounterState(wasmlib.ScState.proxy());
}

export class TestVluCodecCall {
	func: wasmlib.ScFunc = new wasmlib.ScFunc(sc.HScName, sc.HFuncTestVluCodec);
}

export class TestVluCodecContext {
	state: sc.MutableIncCounterState = new sc.MutableIncCounterState(wasmlib.ScState.proxy());
}

export class WhenMustIncrementCall {
	func: wasmlib.ScFunc = new wasmlib.ScFunc(sc.HScName, sc.HFuncWhenMustIncrement);
	params: sc.MutableWhenMustIncrementParams = new sc.MutableWhenMustIncrementParams(wasmlib.ScView.nilProxy);
}

export class WhenMustIncrementContext {
	params: sc.ImmutableWhenMustIncrementParams = new sc.ImmutableWhenMustIncrementParams(wasmlib.paramsProxy());
	state: sc.MutableIncCounterState = new sc.MutableIncCounterState(wasmlib.ScState.proxy());
}

export class GetCounterCall {
	func: wasmlib.ScView = new wasmlib.ScView(sc.HScName, sc.HViewGetCounter);
	results: sc.ImmutableGetCounterResults = new sc.ImmutableGetCounterResults(wasmlib.ScView.nilProxy);
}

export class GetCounterContext {
	results: sc.MutableGetCounterResults = new sc.MutableGetCounterResults(wasmlib.ScView.nilProxy);
	state: sc.ImmutableIncCounterState = new sc.ImmutableIncCounterState(wasmlib.ScState.proxy());
}

export class GetVliCall {
	func: wasmlib.ScView = new wasmlib.ScView(sc.HScName, sc.HViewGetVli);
	params: sc.MutableGetVliParams = new sc.MutableGetVliParams(wasmlib.ScView.nilProxy);
	results: sc.ImmutableGetVliResults = new sc.ImmutableGetVliResults(wasmlib.ScView.nilProxy);
}

export class GetVliContext {
	params: sc.ImmutableGetVliParams = new sc.ImmutableGetVliParams(wasmlib.paramsProxy());
	results: sc.MutableGetVliResults = new sc.MutableGetVliResults(wasmlib.ScView.nilProxy);
	state: sc.ImmutableIncCounterState = new sc.ImmutableIncCounterState(wasmlib.ScState.proxy());
}

export class GetVluCall {
	func: wasmlib.ScView = new wasmlib.ScView(sc.HScName, sc.HViewGetVlu);
	params: sc.MutableGetVluParams = new sc.MutableGetVluParams(wasmlib.ScView.nilProxy);
	results: sc.ImmutableGetVluResults = new sc.ImmutableGetVluResults(wasmlib.ScView.nilProxy);
}

export class GetVluContext {
	params: sc.ImmutableGetVluParams = new sc.ImmutableGetVluParams(wasmlib.paramsProxy());
	results: sc.MutableGetVluResults = new sc.MutableGetVluResults(wasmlib.ScView.nilProxy);
	state: sc.ImmutableIncCounterState = new sc.ImmutableIncCounterState(wasmlib.ScState.proxy());
}

export class ScFuncs {
    static callIncrement(_ctx: wasmlib.ScFuncCallContext): CallIncrementCall {
        return new CallIncrementCall();
    }

    static callIncrementRecurse5x(_ctx: wasmlib.ScFuncCallContext): CallIncrementRecurse5xCall {
        return new CallIncrementRecurse5xCall();
    }

    static endlessLoop(_ctx: wasmlib.ScFuncCallContext): EndlessLoopCall {
        return new EndlessLoopCall();
    }

    static increment(_ctx: wasmlib.ScFuncCallContext): IncrementCall {
        return new IncrementCall();
    }

    static incrementWithDelay(_ctx: wasmlib.ScFuncCallContext): IncrementWithDelayCall {
        const f = new IncrementWithDelayCall();
		f.params = new sc.MutableIncrementWithDelayParams(wasmlib.newCallParamsProxy(f.func));
        return f;
    }

    static init(_ctx: wasmlib.ScFuncCallContext): InitCall {
        const f = new InitCall();
		f.params = new sc.MutableInitParams(wasmlib.newCallParamsProxy(f.func));
        return f;
    }

    static localStateInternalCall(_ctx: wasmlib.ScFuncCallContext): LocalStateInternalCallCall {
        return new LocalStateInternalCallCall();
    }

    static localStatePost(_ctx: wasmlib.ScFuncCallContext): LocalStatePostCall {
        return new LocalStatePostCall();
    }

    static localStateSandboxCall(_ctx: wasmlib.ScFuncCallContext): LocalStateSandboxCallCall {
        return new LocalStateSandboxCallCall();
    }

    static postIncrement(_ctx: wasmlib.ScFuncCallContext): PostIncrementCall {
        return new PostIncrementCall();
    }

    static repeatMany(_ctx: wasmlib.ScFuncCallContext): RepeatManyCall {
        const f = new RepeatManyCall();
		f.params = new sc.MutableRepeatManyParams(wasmlib.newCallParamsProxy(f.func));
        return f;
    }

    static testVliCodec(_ctx: wasmlib.ScFuncCallContext): TestVliCodecCall {
        return new TestVliCodecCall();
    }

    static testVluCodec(_ctx: wasmlib.ScFuncCallContext): TestVluCodecCall {
        return new TestVluCodecCall();
    }

    static whenMustIncrement(_ctx: wasmlib.ScFuncCallContext): WhenMustIncrementCall {
        const f = new WhenMustIncrementCall();
		f.params = new sc.MutableWhenMustIncrementParams(wasmlib.newCallParamsProxy(f.func));
        return f;
    }

    static getCounter(_ctx: wasmlib.ScViewCallContext): GetCounterCall {
        const f = new GetCounterCall();
		f.results = new sc.ImmutableGetCounterResults(wasmlib.newCallResultsProxy(f.func));
        return f;
    }

    static getVli(_ctx: wasmlib.ScViewCallContext): GetVliCall {
        const f = new GetVliCall();
		f.params = new sc.MutableGetVliParams(wasmlib.newCallParamsProxy(f.func));
		f.results = new sc.ImmutableGetVliResults(wasmlib.newCallResultsProxy(f.func));
        return f;
    }

    static getVlu(_ctx: wasmlib.ScViewCallContext): GetVluCall {
        const f = new GetVluCall();
		f.params = new sc.MutableGetVluParams(wasmlib.newCallParamsProxy(f.func));
		f.results = new sc.ImmutableGetVluResults(wasmlib.newCallResultsProxy(f.func));
        return f;
    }
}
