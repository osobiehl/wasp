// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

package plantobelly

import "github.com/iotaledger/wasp/packages/wasmvm/wasmlib/go/wasmlib/wasmtypes"

type ImmutableActivatePlantOwnerParams struct {
	proxy wasmtypes.Proxy
}

func (s ImmutableActivatePlantOwnerParams) NewState() wasmtypes.ScImmutableBool {
	return wasmtypes.NewScImmutableBool(s.proxy.Root(ParamNewState))
}

func (s ImmutableActivatePlantOwnerParams) PlantId() wasmtypes.ScImmutableHash {
	return wasmtypes.NewScImmutableHash(s.proxy.Root(ParamPlantId))
}

type MutableActivatePlantOwnerParams struct {
	proxy wasmtypes.Proxy
}

func (s MutableActivatePlantOwnerParams) NewState() wasmtypes.ScMutableBool {
	return wasmtypes.NewScMutableBool(s.proxy.Root(ParamNewState))
}

func (s MutableActivatePlantOwnerParams) PlantId() wasmtypes.ScMutableHash {
	return wasmtypes.NewScMutableHash(s.proxy.Root(ParamPlantId))
}

type ImmutableAddPlantFundsParams struct {
	proxy wasmtypes.Proxy
}

func (s ImmutableAddPlantFundsParams) PlantId() wasmtypes.ScImmutableHash {
	return wasmtypes.NewScImmutableHash(s.proxy.Root(ParamPlantId))
}

func (s ImmutableAddPlantFundsParams) Value() wasmtypes.ScImmutableUint64 {
	return wasmtypes.NewScImmutableUint64(s.proxy.Root(ParamValue))
}

type MutableAddPlantFundsParams struct {
	proxy wasmtypes.Proxy
}

func (s MutableAddPlantFundsParams) PlantId() wasmtypes.ScMutableHash {
	return wasmtypes.NewScMutableHash(s.proxy.Root(ParamPlantId))
}

func (s MutableAddPlantFundsParams) Value() wasmtypes.ScMutableUint64 {
	return wasmtypes.NewScMutableUint64(s.proxy.Root(ParamValue))
}

type ImmutableAddPlantOracleParams struct {
	proxy wasmtypes.Proxy
}

func (s ImmutableAddPlantOracleParams) OracleId() wasmtypes.ScImmutableAgentID {
	return wasmtypes.NewScImmutableAgentID(s.proxy.Root(ParamOracleId))
}

type MutableAddPlantOracleParams struct {
	proxy wasmtypes.Proxy
}

func (s MutableAddPlantOracleParams) OracleId() wasmtypes.ScMutableAgentID {
	return wasmtypes.NewScMutableAgentID(s.proxy.Root(ParamOracleId))
}

type ImmutableAddWeatherOracleParams struct {
	proxy wasmtypes.Proxy
}

func (s ImmutableAddWeatherOracleParams) OracleId() wasmtypes.ScImmutableAgentID {
	return wasmtypes.NewScImmutableAgentID(s.proxy.Root(ParamOracleId))
}

type MutableAddWeatherOracleParams struct {
	proxy wasmtypes.Proxy
}

func (s MutableAddWeatherOracleParams) OracleId() wasmtypes.ScMutableAgentID {
	return wasmtypes.NewScMutableAgentID(s.proxy.Root(ParamOracleId))
}

type ImmutableClaimWateringParams struct {
	proxy wasmtypes.Proxy
}

func (s ImmutableClaimWateringParams) PlantId() wasmtypes.ScImmutableHash {
	return wasmtypes.NewScImmutableHash(s.proxy.Root(ParamPlantId))
}

func (s ImmutableClaimWateringParams) Timestamp() wasmtypes.ScImmutableUint64 {
	return wasmtypes.NewScImmutableUint64(s.proxy.Root(ParamTimestamp))
}

type MutableClaimWateringParams struct {
	proxy wasmtypes.Proxy
}

func (s MutableClaimWateringParams) PlantId() wasmtypes.ScMutableHash {
	return wasmtypes.NewScMutableHash(s.proxy.Root(ParamPlantId))
}

func (s MutableClaimWateringParams) Timestamp() wasmtypes.ScMutableUint64 {
	return wasmtypes.NewScMutableUint64(s.proxy.Root(ParamTimestamp))
}

type ImmutableEditOwnPlantParams struct {
	proxy wasmtypes.Proxy
}

func (s ImmutableEditOwnPlantParams) Covered() wasmtypes.ScImmutableBool {
	return wasmtypes.NewScImmutableBool(s.proxy.Root(ParamCovered))
}

func (s ImmutableEditOwnPlantParams) Description() wasmtypes.ScImmutableString {
	return wasmtypes.NewScImmutableString(s.proxy.Root(ParamDescription))
}

func (s ImmutableEditOwnPlantParams) Lattitude() wasmtypes.ScImmutableString {
	return wasmtypes.NewScImmutableString(s.proxy.Root(ParamLattitude))
}

func (s ImmutableEditOwnPlantParams) Longitude() wasmtypes.ScImmutableString {
	return wasmtypes.NewScImmutableString(s.proxy.Root(ParamLongitude))
}

func (s ImmutableEditOwnPlantParams) Name() wasmtypes.ScImmutableString {
	return wasmtypes.NewScImmutableString(s.proxy.Root(ParamName))
}

func (s ImmutableEditOwnPlantParams) Reward() wasmtypes.ScImmutableUint64 {
	return wasmtypes.NewScImmutableUint64(s.proxy.Root(ParamReward))
}

func (s ImmutableEditOwnPlantParams) WaterTarget() wasmtypes.ScImmutableInt32 {
	return wasmtypes.NewScImmutableInt32(s.proxy.Root(ParamWaterTarget))
}

type MutableEditOwnPlantParams struct {
	proxy wasmtypes.Proxy
}

func (s MutableEditOwnPlantParams) Covered() wasmtypes.ScMutableBool {
	return wasmtypes.NewScMutableBool(s.proxy.Root(ParamCovered))
}

func (s MutableEditOwnPlantParams) Description() wasmtypes.ScMutableString {
	return wasmtypes.NewScMutableString(s.proxy.Root(ParamDescription))
}

func (s MutableEditOwnPlantParams) Lattitude() wasmtypes.ScMutableString {
	return wasmtypes.NewScMutableString(s.proxy.Root(ParamLattitude))
}

func (s MutableEditOwnPlantParams) Longitude() wasmtypes.ScMutableString {
	return wasmtypes.NewScMutableString(s.proxy.Root(ParamLongitude))
}

func (s MutableEditOwnPlantParams) Name() wasmtypes.ScMutableString {
	return wasmtypes.NewScMutableString(s.proxy.Root(ParamName))
}

func (s MutableEditOwnPlantParams) Reward() wasmtypes.ScMutableUint64 {
	return wasmtypes.NewScMutableUint64(s.proxy.Root(ParamReward))
}

func (s MutableEditOwnPlantParams) WaterTarget() wasmtypes.ScMutableInt32 {
	return wasmtypes.NewScMutableInt32(s.proxy.Root(ParamWaterTarget))
}

type ImmutableInitParams struct {
	proxy wasmtypes.Proxy
}

func (s ImmutableInitParams) Owner() wasmtypes.ScImmutableAgentID {
	return wasmtypes.NewScImmutableAgentID(s.proxy.Root(ParamOwner))
}

type MutableInitParams struct {
	proxy wasmtypes.Proxy
}

func (s MutableInitParams) Owner() wasmtypes.ScMutableAgentID {
	return wasmtypes.NewScMutableAgentID(s.proxy.Root(ParamOwner))
}

type ImmutableInterruptWeatherEventParams struct {
	proxy wasmtypes.Proxy
}

func (s ImmutableInterruptWeatherEventParams) Duration() wasmtypes.ScImmutableUint64 {
	return wasmtypes.NewScImmutableUint64(s.proxy.Root(ParamDuration))
}

func (s ImmutableInterruptWeatherEventParams) PlantId() wasmtypes.ScImmutableHash {
	return wasmtypes.NewScImmutableHash(s.proxy.Root(ParamPlantId))
}

type MutableInterruptWeatherEventParams struct {
	proxy wasmtypes.Proxy
}

func (s MutableInterruptWeatherEventParams) Duration() wasmtypes.ScMutableUint64 {
	return wasmtypes.NewScMutableUint64(s.proxy.Root(ParamDuration))
}

func (s MutableInterruptWeatherEventParams) PlantId() wasmtypes.ScMutableHash {
	return wasmtypes.NewScMutableHash(s.proxy.Root(ParamPlantId))
}

type ImmutableMintPlantRawParams struct {
	proxy wasmtypes.Proxy
}

func (s ImmutableMintPlantRawParams) Active() wasmtypes.ScImmutableBool {
	return wasmtypes.NewScImmutableBool(s.proxy.Root(ParamActive))
}

func (s ImmutableMintPlantRawParams) ActiveReason() wasmtypes.ScImmutableUint32 {
	return wasmtypes.NewScImmutableUint32(s.proxy.Root(ParamActiveReason))
}

func (s ImmutableMintPlantRawParams) Claimed() wasmtypes.ScImmutableBool {
	return wasmtypes.NewScImmutableBool(s.proxy.Root(ParamClaimed))
}

func (s ImmutableMintPlantRawParams) Covered() wasmtypes.ScImmutableBool {
	return wasmtypes.NewScImmutableBool(s.proxy.Root(ParamCovered))
}

func (s ImmutableMintPlantRawParams) CurrentWater() wasmtypes.ScImmutableInt32 {
	return wasmtypes.NewScImmutableInt32(s.proxy.Root(ParamCurrentWater))
}

func (s ImmutableMintPlantRawParams) Description() wasmtypes.ScImmutableString {
	return wasmtypes.NewScImmutableString(s.proxy.Root(ParamDescription))
}

func (s ImmutableMintPlantRawParams) Funds() wasmtypes.ScImmutableUint64 {
	return wasmtypes.NewScImmutableUint64(s.proxy.Root(ParamFunds))
}

func (s ImmutableMintPlantRawParams) Id() wasmtypes.ScImmutableHash {
	return wasmtypes.NewScImmutableHash(s.proxy.Root(ParamId))
}

func (s ImmutableMintPlantRawParams) Lattitude() wasmtypes.ScImmutableString {
	return wasmtypes.NewScImmutableString(s.proxy.Root(ParamLattitude))
}

func (s ImmutableMintPlantRawParams) Longitude() wasmtypes.ScImmutableString {
	return wasmtypes.NewScImmutableString(s.proxy.Root(ParamLongitude))
}

func (s ImmutableMintPlantRawParams) Manufacturer() wasmtypes.ScImmutableAgentID {
	return wasmtypes.NewScImmutableAgentID(s.proxy.Root(ParamManufacturer))
}

func (s ImmutableMintPlantRawParams) MintClaimId() wasmtypes.ScImmutableHash {
	return wasmtypes.NewScImmutableHash(s.proxy.Root(ParamMintClaimId))
}

func (s ImmutableMintPlantRawParams) Name() wasmtypes.ScImmutableString {
	return wasmtypes.NewScImmutableString(s.proxy.Root(ParamName))
}

func (s ImmutableMintPlantRawParams) Owner() wasmtypes.ScImmutableAgentID {
	return wasmtypes.NewScImmutableAgentID(s.proxy.Root(ParamOwner))
}

func (s ImmutableMintPlantRawParams) PayReward() wasmtypes.ScImmutableUint64 {
	return wasmtypes.NewScImmutableUint64(s.proxy.Root(ParamPayReward))
}

func (s ImmutableMintPlantRawParams) WaterTarget() wasmtypes.ScImmutableInt32 {
	return wasmtypes.NewScImmutableInt32(s.proxy.Root(ParamWaterTarget))
}

func (s ImmutableMintPlantRawParams) WaterThreshold() wasmtypes.ScImmutableInt32 {
	return wasmtypes.NewScImmutableInt32(s.proxy.Root(ParamWaterThreshold))
}

type MutableMintPlantRawParams struct {
	proxy wasmtypes.Proxy
}

func (s MutableMintPlantRawParams) Active() wasmtypes.ScMutableBool {
	return wasmtypes.NewScMutableBool(s.proxy.Root(ParamActive))
}

func (s MutableMintPlantRawParams) ActiveReason() wasmtypes.ScMutableUint32 {
	return wasmtypes.NewScMutableUint32(s.proxy.Root(ParamActiveReason))
}

func (s MutableMintPlantRawParams) Claimed() wasmtypes.ScMutableBool {
	return wasmtypes.NewScMutableBool(s.proxy.Root(ParamClaimed))
}

func (s MutableMintPlantRawParams) Covered() wasmtypes.ScMutableBool {
	return wasmtypes.NewScMutableBool(s.proxy.Root(ParamCovered))
}

func (s MutableMintPlantRawParams) CurrentWater() wasmtypes.ScMutableInt32 {
	return wasmtypes.NewScMutableInt32(s.proxy.Root(ParamCurrentWater))
}

func (s MutableMintPlantRawParams) Description() wasmtypes.ScMutableString {
	return wasmtypes.NewScMutableString(s.proxy.Root(ParamDescription))
}

func (s MutableMintPlantRawParams) Funds() wasmtypes.ScMutableUint64 {
	return wasmtypes.NewScMutableUint64(s.proxy.Root(ParamFunds))
}

func (s MutableMintPlantRawParams) Id() wasmtypes.ScMutableHash {
	return wasmtypes.NewScMutableHash(s.proxy.Root(ParamId))
}

func (s MutableMintPlantRawParams) Lattitude() wasmtypes.ScMutableString {
	return wasmtypes.NewScMutableString(s.proxy.Root(ParamLattitude))
}

func (s MutableMintPlantRawParams) Longitude() wasmtypes.ScMutableString {
	return wasmtypes.NewScMutableString(s.proxy.Root(ParamLongitude))
}

func (s MutableMintPlantRawParams) Manufacturer() wasmtypes.ScMutableAgentID {
	return wasmtypes.NewScMutableAgentID(s.proxy.Root(ParamManufacturer))
}

func (s MutableMintPlantRawParams) MintClaimId() wasmtypes.ScMutableHash {
	return wasmtypes.NewScMutableHash(s.proxy.Root(ParamMintClaimId))
}

func (s MutableMintPlantRawParams) Name() wasmtypes.ScMutableString {
	return wasmtypes.NewScMutableString(s.proxy.Root(ParamName))
}

func (s MutableMintPlantRawParams) Owner() wasmtypes.ScMutableAgentID {
	return wasmtypes.NewScMutableAgentID(s.proxy.Root(ParamOwner))
}

func (s MutableMintPlantRawParams) PayReward() wasmtypes.ScMutableUint64 {
	return wasmtypes.NewScMutableUint64(s.proxy.Root(ParamPayReward))
}

func (s MutableMintPlantRawParams) WaterTarget() wasmtypes.ScMutableInt32 {
	return wasmtypes.NewScMutableInt32(s.proxy.Root(ParamWaterTarget))
}

func (s MutableMintPlantRawParams) WaterThreshold() wasmtypes.ScMutableInt32 {
	return wasmtypes.NewScMutableInt32(s.proxy.Root(ParamWaterThreshold))
}

type ImmutablePayClaimerParams struct {
	proxy wasmtypes.Proxy
}

func (s ImmutablePayClaimerParams) Amount() wasmtypes.ScImmutableUint64 {
	return wasmtypes.NewScImmutableUint64(s.proxy.Root(ParamAmount))
}

func (s ImmutablePayClaimerParams) To() wasmtypes.ScImmutableAgentID {
	return wasmtypes.NewScImmutableAgentID(s.proxy.Root(ParamTo))
}

type MutablePayClaimerParams struct {
	proxy wasmtypes.Proxy
}

func (s MutablePayClaimerParams) Amount() wasmtypes.ScMutableUint64 {
	return wasmtypes.NewScMutableUint64(s.proxy.Root(ParamAmount))
}

func (s MutablePayClaimerParams) To() wasmtypes.ScMutableAgentID {
	return wasmtypes.NewScMutableAgentID(s.proxy.Root(ParamTo))
}

type ImmutableResolveClaimParams struct {
	proxy wasmtypes.Proxy
}

func (s ImmutableResolveClaimParams) Id() wasmtypes.ScImmutableHash {
	return wasmtypes.NewScImmutableHash(s.proxy.Root(ParamId))
}

type MutableResolveClaimParams struct {
	proxy wasmtypes.Proxy
}

func (s MutableResolveClaimParams) Id() wasmtypes.ScMutableHash {
	return wasmtypes.NewScMutableHash(s.proxy.Root(ParamId))
}

type ImmutableSetOwnerParams struct {
	proxy wasmtypes.Proxy
}

func (s ImmutableSetOwnerParams) Owner() wasmtypes.ScImmutableAgentID {
	return wasmtypes.NewScImmutableAgentID(s.proxy.Root(ParamOwner))
}

type MutableSetOwnerParams struct {
	proxy wasmtypes.Proxy
}

func (s MutableSetOwnerParams) Owner() wasmtypes.ScMutableAgentID {
	return wasmtypes.NewScMutableAgentID(s.proxy.Root(ParamOwner))
}

type ImmutableSetPlantWaterParams struct {
	proxy wasmtypes.Proxy
}

func (s ImmutableSetPlantWaterParams) PlantId() wasmtypes.ScImmutableHash {
	return wasmtypes.NewScImmutableHash(s.proxy.Root(ParamPlantId))
}

func (s ImmutableSetPlantWaterParams) WaterLevel() wasmtypes.ScImmutableInt32 {
	return wasmtypes.NewScImmutableInt32(s.proxy.Root(ParamWaterLevel))
}

type MutableSetPlantWaterParams struct {
	proxy wasmtypes.Proxy
}

func (s MutableSetPlantWaterParams) PlantId() wasmtypes.ScMutableHash {
	return wasmtypes.NewScMutableHash(s.proxy.Root(ParamPlantId))
}

func (s MutableSetPlantWaterParams) WaterLevel() wasmtypes.ScMutableInt32 {
	return wasmtypes.NewScMutableInt32(s.proxy.Root(ParamWaterLevel))
}

type ImmutableSetPlantWeatherTimeoutParams struct {
	proxy wasmtypes.Proxy
}

func (s ImmutableSetPlantWeatherTimeoutParams) PlantId() wasmtypes.ScImmutableHash {
	return wasmtypes.NewScImmutableHash(s.proxy.Root(ParamPlantId))
}

func (s ImmutableSetPlantWeatherTimeoutParams) TimeoutDuration() wasmtypes.ScImmutableBool {
	return wasmtypes.NewScImmutableBool(s.proxy.Root(ParamTimeoutDuration))
}

type MutableSetPlantWeatherTimeoutParams struct {
	proxy wasmtypes.Proxy
}

func (s MutableSetPlantWeatherTimeoutParams) PlantId() wasmtypes.ScMutableHash {
	return wasmtypes.NewScMutableHash(s.proxy.Root(ParamPlantId))
}

func (s MutableSetPlantWeatherTimeoutParams) TimeoutDuration() wasmtypes.ScMutableBool {
	return wasmtypes.NewScMutableBool(s.proxy.Root(ParamTimeoutDuration))
}

type ImmutableGetClaimParams struct {
	proxy wasmtypes.Proxy
}

func (s ImmutableGetClaimParams) ReqClaimId() wasmtypes.ScImmutableHash {
	return wasmtypes.NewScImmutableHash(s.proxy.Root(ParamReqClaimId))
}

type MutableGetClaimParams struct {
	proxy wasmtypes.Proxy
}

func (s MutableGetClaimParams) ReqClaimId() wasmtypes.ScMutableHash {
	return wasmtypes.NewScMutableHash(s.proxy.Root(ParamReqClaimId))
}

type ImmutableGetPlantParams struct {
	proxy wasmtypes.Proxy
}

func (s ImmutableGetPlantParams) PlantId() wasmtypes.ScImmutableHash {
	return wasmtypes.NewScImmutableHash(s.proxy.Root(ParamPlantId))
}

type MutableGetPlantParams struct {
	proxy wasmtypes.Proxy
}

func (s MutableGetPlantParams) PlantId() wasmtypes.ScMutableHash {
	return wasmtypes.NewScMutableHash(s.proxy.Root(ParamPlantId))
}

type ImmutableGetPlantsFromOwnerParams struct {
	proxy wasmtypes.Proxy
}

func (s ImmutableGetPlantsFromOwnerParams) OwnerId() wasmtypes.ScImmutableAgentID {
	return wasmtypes.NewScImmutableAgentID(s.proxy.Root(ParamOwnerId))
}

type MutableGetPlantsFromOwnerParams struct {
	proxy wasmtypes.Proxy
}

func (s MutableGetPlantsFromOwnerParams) OwnerId() wasmtypes.ScMutableAgentID {
	return wasmtypes.NewScMutableAgentID(s.proxy.Root(ParamOwnerId))
}

type ImmutableIsPlantOwnerParams struct {
	proxy wasmtypes.Proxy
}

func (s ImmutableIsPlantOwnerParams) ReqOwnerId() wasmtypes.ScImmutableAgentID {
	return wasmtypes.NewScImmutableAgentID(s.proxy.Root(ParamReqOwnerId))
}

func (s ImmutableIsPlantOwnerParams) ReqPlantId() wasmtypes.ScImmutableAgentID {
	return wasmtypes.NewScImmutableAgentID(s.proxy.Root(ParamReqPlantId))
}

type MutableIsPlantOwnerParams struct {
	proxy wasmtypes.Proxy
}

func (s MutableIsPlantOwnerParams) ReqOwnerId() wasmtypes.ScMutableAgentID {
	return wasmtypes.NewScMutableAgentID(s.proxy.Root(ParamReqOwnerId))
}

func (s MutableIsPlantOwnerParams) ReqPlantId() wasmtypes.ScMutableAgentID {
	return wasmtypes.NewScMutableAgentID(s.proxy.Root(ParamReqPlantId))
}