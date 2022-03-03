"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wasmclient_1 = require("wasmclient");
const chainconfig_json_1 = __importDefault(require("../chainconfig.json"));
const buffer_1 = require("wasmclient/buffer");
const plantobellyclient_1 = require("./plantobellyclient");
const blakejs_1 = require("blakejs");
const crypto_1 = require("wasmclient/crypto");
let iconf = {
    goShimmerApiUrl: chainconfig_json_1.default.goshimmerApiUrl,
    waspWebSocketUrl: chainconfig_json_1.default.waspWebSocketUrl,
    seed: buffer_1.Buffer.from(chainconfig_json_1.default.seed, 'base64'),
    waspApiUrl: chainconfig_json_1.default.waspApiUrl
};
function HashAsNumber(toHash) {
    let b = buffer_1.Buffer.from(toHash);
    let res = (0, blakejs_1.blake2b)(b, undefined, 32);
    return buffer_1.Buffer.from(res).readUInt32LE(0);
}
let encoder = new wasmclient_1.Encoder();
let decoder = new wasmclient_1.Decoder();
let conf = new wasmclient_1.Configuration(iconf);
let sc = new wasmclient_1.ServiceClient(conf);
let svc = new wasmclient_1.Service(sc, HashAsNumber(chainconfig_json_1.default.contractName));
function getPK() {
    if (!svc.keyPair) {
        throw Error("no keypair given!");
    }
    return crypto_1.Base58.encode(svc.keyPair?.publicKey);
}
function CreateNewPlant(f) {
    f.active(true);
    f.activeReason(0);
    f.mintClaimId('abcdef');
    f.claimed(false);
    f.covered(false);
    f.currentWater(0);
    f.lattitude('0');
    f.longitude('0');
    f.payReward(5n);
    f.owner(getPK());
    f.description("please work");
    f.funds(0n);
    f.id('1234567');
    f.manufacturer(getPK());
    f.waterThreshold(5);
    f.waterTarget(10);
    f.name("test real");
}
let f = new plantobellyclient_1.MintPlantRawFunc(svc);
CreateNewPlant(f);
f.post();
