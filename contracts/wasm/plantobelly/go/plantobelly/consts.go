// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

package plantobelly

import "github.com/iotaledger/wasp/packages/wasmvm/wasmlib/go/wasmlib/wasmtypes"

const (
	ScName        = "plantobelly"
	ScDescription = "plantobelly smart contract responsible for handling plants"
	HScName       = wasmtypes.ScHname(0x1eaa52f2)
)

const (
	ParamActive          = "active"
	ParamActiveReason    = "activeReason"
	ParamAmount          = "amount"
	ParamClaimed         = "claimed"
	ParamCovered         = "covered"
	ParamCurrentWater    = "currentWater"
	ParamDescription     = "description"
	ParamDuration        = "duration"
	ParamFunds           = "funds"
	ParamId              = "id"
	ParamLattitude       = "lattitude"
	ParamLongitude       = "longitude"
	ParamManufacturer    = "manufacturer"
	ParamMintClaimId     = "mintClaimId"
	ParamName            = "name"
	ParamNewState        = "newState"
	ParamOracleId        = "oracleId"
	ParamOwner           = "owner"
	ParamOwnerId         = "ownerId"
	ParamPayReward       = "payReward"
	ParamPlantId         = "plantId"
	ParamReqClaimId      = "reqClaimId"
	ParamReqOwnerId      = "reqOwnerId"
	ParamReqPlantId      = "reqPlantId"
	ParamReward          = "reward"
	ParamTimeoutDuration = "timeoutDuration"
	ParamTimestamp       = "timestamp"
	ParamTo              = "to"
	ParamValue           = "value"
	ParamWaterLevel      = "waterLevel"
	ParamWaterTarget     = "waterTarget"
	ParamWaterThreshold  = "waterThreshold"
)

const (
	ResultActive             = "active"
	ResultActiveReason       = "activeReason"
	ResultClaimId            = "claimId"
	ResultClaimed            = "claimed"
	ResultClaimer            = "claimer"
	ResultClaims             = "claims"
	ResultCovered            = "covered"
	ResultCurrentWater       = "currentWater"
	ResultDeposit            = "deposit"
	ResultDescription        = "description"
	ResultFunds              = "funds"
	ResultId                 = "id"
	ResultIsOwner            = "isOwner"
	ResultLattitude          = "lattitude"
	ResultLongitude          = "longitude"
	ResultManufacturer       = "manufacturer"
	ResultName               = "name"
	ResultOracles            = "oracles"
	ResultOwner              = "owner"
	ResultPlantId            = "plantId"
	ResultPlants             = "plants"
	ResultRecordedWaterLevel = "recordedWaterLevel"
	ResultReward             = "reward"
	ResultTimestamp          = "timestamp"
	ResultWaterTarget        = "waterTarget"
	ResultWaterThreshold     = "waterThreshold"
)

const (
	StateAllowedPlantOracles   = "allowedPlantOracles"
	StateAllowedWeatherOracles = "allowedWeatherOracles"
	StateClaimIds              = "claimIds"
	StateClaims                = "claims"
	StateOwnedPlants           = "ownedPlants"
	StateOwner                 = "owner"
	StatePlantIds              = "plantIds"
	StatePlantOwners           = "plantOwners"
	StatePlants                = "plants"
)

const (
	FuncActivatePlantOwner     = "activatePlantOwner"
	FuncAddPlantFunds          = "addPlantFunds"
	FuncAddPlantOracle         = "addPlantOracle"
	FuncAddWeatherOracle       = "addWeatherOracle"
	FuncClaimWatering          = "claimWatering"
	FuncEditOwnPlant           = "editOwnPlant"
	FuncInit                   = "init"
	FuncInterruptWeatherEvent  = "interruptWeatherEvent"
	FuncMintPlantRaw           = "mintPlantRaw"
	FuncPayClaimer             = "payClaimer"
	FuncResolveClaim           = "resolveClaim"
	FuncSetOwner               = "setOwner"
	FuncSetPlantWater          = "setPlantWater"
	FuncSetPlantWeatherTimeout = "setPlantWeatherTimeout"
	ViewGetClaim               = "getClaim"
	ViewGetClaims              = "getClaims"
	ViewGetOwner               = "getOwner"
	ViewGetPlant               = "getPlant"
	ViewGetPlantOracles        = "getPlantOracles"
	ViewGetPlants              = "getPlants"
	ViewGetPlantsFromOwner     = "getPlantsFromOwner"
	ViewGetWeatherOracles      = "getWeatherOracles"
	ViewIsPlantOwner           = "isPlantOwner"
)

const (
	HFuncActivatePlantOwner     = wasmtypes.ScHname(0x666005c8)
	HFuncAddPlantFunds          = wasmtypes.ScHname(0xe756567a)
	HFuncAddPlantOracle         = wasmtypes.ScHname(0xca04a73a)
	HFuncAddWeatherOracle       = wasmtypes.ScHname(0x5f3b8b83)
	HFuncClaimWatering          = wasmtypes.ScHname(0x1c41f3ed)
	HFuncEditOwnPlant           = wasmtypes.ScHname(0xebba038d)
	HFuncInit                   = wasmtypes.ScHname(0x1f44d644)
	HFuncInterruptWeatherEvent  = wasmtypes.ScHname(0xc42865d1)
	HFuncMintPlantRaw           = wasmtypes.ScHname(0x7b8d3bec)
	HFuncPayClaimer             = wasmtypes.ScHname(0x2c37ad88)
	HFuncResolveClaim           = wasmtypes.ScHname(0x302e03fa)
	HFuncSetOwner               = wasmtypes.ScHname(0x2a15fe7b)
	HFuncSetPlantWater          = wasmtypes.ScHname(0x6a4d53e6)
	HFuncSetPlantWeatherTimeout = wasmtypes.ScHname(0x6f912118)
	HViewGetClaim               = wasmtypes.ScHname(0x80ab4e34)
	HViewGetClaims              = wasmtypes.ScHname(0xb307c3ab)
	HViewGetOwner               = wasmtypes.ScHname(0x137107a6)
	HViewGetPlant               = wasmtypes.ScHname(0x356278e0)
	HViewGetPlantOracles        = wasmtypes.ScHname(0xf1939bee)
	HViewGetPlants              = wasmtypes.ScHname(0x39ab8724)
	HViewGetPlantsFromOwner     = wasmtypes.ScHname(0x1e36cb62)
	HViewGetWeatherOracles      = wasmtypes.ScHname(0x66e143a7)
	HViewIsPlantOwner           = wasmtypes.ScHname(0x84c4d3ec)
)