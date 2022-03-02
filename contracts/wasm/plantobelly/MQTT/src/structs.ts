export type AgentID = string;
export type Hash = string;

export interface Claim{
    claimer            : AgentID;
    deposit            : number;
    id                 : Hash
    plantId            : Hash
    recordedWaterLevel : number;
    timestamp          : number; 
}


export interface Plant{
    active         : boolean; 
    activeReason   : number;  // 0 -> default, 1 -> owner deactivated, 2 -> weather deactivated, 3 -> owner deactivated
    claimId        : Hash ;  // used to index claims (for scalability purposes)
    claimed        : boolean;  // whether plant has been claimed
    covered        : boolean; 
    currentWater   : number;  // current level of water
    description    : string;  // general description of plant
    funds          : BigInt;
    id             : Hash
    lattitude      : string;  // geolocation structs don't work WOW
    longitude      : string ;
    manufacturer   : AgentID // manufacturer wallet for payment
    name           : string;
    owner          : AgentID;  // owner of plant token
    reward         : BigInt  // the reward given for watering the plant
    waterTarget    : number  // level of water
    waterThreshold : number  // min. level of water to start watering
}