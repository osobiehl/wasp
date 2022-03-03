import {Configuration, IConfiguration, ServiceClient,
    ClientFunc, ClientView, Service, Encoder, Decoder, } from 'wasmclient';


import chainconfig from '../chainconfig.json';
import {Buffer} from 'wasmclient/buffer'
import {ActivatePlantOwnerFunc, MintPlantRawFunc } from './plantobellyclient'
import {blake2b} from 'blakejs';
import {Base58} from 'wasmclient/crypto';

let iconf: IConfiguration = {
    goShimmerApiUrl: chainconfig.goshimmerApiUrl,
    waspWebSocketUrl: chainconfig.waspWebSocketUrl,
    seed: Buffer.from(chainconfig.seed, 'base64'),
    waspApiUrl: chainconfig.waspApiUrl
}


function HashAsNumber(toHash: string): number{
    let b = Buffer.from(toHash);
    let res = blake2b(b,undefined, 32);
    return Buffer.from(res).readUInt32LE(0);
}


let encoder = new Encoder();
let decoder = new Decoder();



let conf = new Configuration(iconf)
let sc = new ServiceClient(conf)
let svc = new Service(sc,  HashAsNumber(chainconfig.contractName));


function getPK(): string{
    if (!svc.keyPair){throw Error("no keypair given!")}
    return Base58.encode(svc.keyPair?.publicKey);
}

function CreateNewPlant(f: MintPlantRawFunc){

    f.active(true);
    f.activeReason(0);
    f.mintClaimId('abcdef');
    f.claimed(false)
    f.covered(false)
    f.currentWater(0)
    f.lattitude('0')
    f.longitude('0')
    f.payReward(5n)
    f.owner(getPK())
    f.description("please work");
    f.funds(0n);
    f.id('1234567');
    f.manufacturer(getPK());
    f.waterThreshold(5);
    f.waterTarget(10);
    f.name("test real");
}
let f = new MintPlantRawFunc(svc);
CreateNewPlant(f);
f.post();



