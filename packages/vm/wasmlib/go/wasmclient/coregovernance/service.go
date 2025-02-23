// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

package coregovernanceclient

import "github.com/iotaledger/wasp/packages/vm/wasmlib/go/wasmclient"

const (
	ArgChainOwner             = "oi"
	ArgFeeColor               = "fc"
	ArgHname                  = "hn"
	ArgMaxBlobSize            = "bs"
	ArgMaxEventSize           = "es"
	ArgMaxEventsPerReq        = "ne"
	ArgOwnerFee               = "of"
	ArgStateControllerAddress = "S"
	ArgValidatorFee           = "vf"

	ResAllowedStateControllerAddresses = "a"
	ResChainID                         = "c"
	ResChainOwnerID                    = "o"
	ResDefaultOwnerFee                 = "do"
	ResDefaultValidatorFee             = "dv"
	ResDescription                     = "d"
	ResFeeColor                        = "f"
	ResMaxBlobSize                     = "mb"
	ResMaxEventSize                    = "me"
	ResMaxEventsPerReq                 = "mr"
	ResOwnerFee                        = "of"
	ResValidatorFee                    = "vf"
)

///////////////////////////// addAllowedStateControllerAddress /////////////////////////////

type AddAllowedStateControllerAddressFunc struct {
	wasmclient.ClientFunc
	args wasmclient.Arguments
}

func (f *AddAllowedStateControllerAddressFunc) ChainOwner(v wasmclient.AgentID) {
	f.args.Set(ArgChainOwner, f.args.FromAgentID(v))
}

func (f *AddAllowedStateControllerAddressFunc) FeeColor(v wasmclient.Color) {
	f.args.Set(ArgFeeColor, f.args.FromColor(v))
}

func (f *AddAllowedStateControllerAddressFunc) StateControllerAddress(v wasmclient.Address) {
	f.args.Set(ArgStateControllerAddress, f.args.FromAddress(v))
}

func (f *AddAllowedStateControllerAddressFunc) Post() wasmclient.Request {
	f.args.Mandatory(ArgChainOwner)
	f.args.Mandatory(ArgStateControllerAddress)
	return f.ClientFunc.Post(0x9469d567, &f.args)
}

///////////////////////////// claimChainOwnership /////////////////////////////

type ClaimChainOwnershipFunc struct {
	wasmclient.ClientFunc
}

func (f *ClaimChainOwnershipFunc) Post() wasmclient.Request {
	return f.ClientFunc.Post(0x03ff0fc0, nil)
}

///////////////////////////// delegateChainOwnership /////////////////////////////

type DelegateChainOwnershipFunc struct {
	wasmclient.ClientFunc
	args wasmclient.Arguments
}

func (f *DelegateChainOwnershipFunc) ChainOwner(v wasmclient.AgentID) {
	f.args.Set(ArgChainOwner, f.args.FromAgentID(v))
}

func (f *DelegateChainOwnershipFunc) Post() wasmclient.Request {
	f.args.Mandatory(ArgChainOwner)
	return f.ClientFunc.Post(0x93ecb6ad, &f.args)
}

///////////////////////////// removeAllowedStateControllerAddress /////////////////////////////

type RemoveAllowedStateControllerAddressFunc struct {
	wasmclient.ClientFunc
	args wasmclient.Arguments
}

func (f *RemoveAllowedStateControllerAddressFunc) StateControllerAddress(v wasmclient.Address) {
	f.args.Set(ArgStateControllerAddress, f.args.FromAddress(v))
}

func (f *RemoveAllowedStateControllerAddressFunc) Post() wasmclient.Request {
	f.args.Mandatory(ArgStateControllerAddress)
	return f.ClientFunc.Post(0x31f69447, &f.args)
}

///////////////////////////// rotateStateController /////////////////////////////

type RotateStateControllerFunc struct {
	wasmclient.ClientFunc
	args wasmclient.Arguments
}

func (f *RotateStateControllerFunc) StateControllerAddress(v wasmclient.Address) {
	f.args.Set(ArgStateControllerAddress, f.args.FromAddress(v))
}

func (f *RotateStateControllerFunc) Post() wasmclient.Request {
	f.args.Mandatory(ArgStateControllerAddress)
	return f.ClientFunc.Post(0x244d1038, &f.args)
}

///////////////////////////// setChainInfo /////////////////////////////

type SetChainInfoFunc struct {
	wasmclient.ClientFunc
	args wasmclient.Arguments
}

func (f *SetChainInfoFunc) MaxBlobSize(v int32) {
	f.args.Set(ArgMaxBlobSize, f.args.FromInt32(v))
}

func (f *SetChainInfoFunc) MaxEventSize(v int16) {
	f.args.Set(ArgMaxEventSize, f.args.FromInt16(v))
}

func (f *SetChainInfoFunc) MaxEventsPerReq(v int16) {
	f.args.Set(ArgMaxEventsPerReq, f.args.FromInt16(v))
}

func (f *SetChainInfoFunc) OwnerFee(v int64) {
	f.args.Set(ArgOwnerFee, f.args.FromInt64(v))
}

func (f *SetChainInfoFunc) ValidatorFee(v int64) {
	f.args.Set(ArgValidatorFee, f.args.FromInt64(v))
}

func (f *SetChainInfoFunc) Post() wasmclient.Request {
	return f.ClientFunc.Post(0x702f5d2b, &f.args)
}

///////////////////////////// setContractFee /////////////////////////////

type SetContractFeeFunc struct {
	wasmclient.ClientFunc
	args wasmclient.Arguments
}

func (f *SetContractFeeFunc) Hname(v wasmclient.Hname) {
	f.args.Set(ArgHname, f.args.FromHname(v))
}

func (f *SetContractFeeFunc) OwnerFee(v int64) {
	f.args.Set(ArgOwnerFee, f.args.FromInt64(v))
}

func (f *SetContractFeeFunc) ValidatorFee(v int64) {
	f.args.Set(ArgValidatorFee, f.args.FromInt64(v))
}

func (f *SetContractFeeFunc) Post() wasmclient.Request {
	f.args.Mandatory(ArgHname)
	return f.ClientFunc.Post(0x8421a42b, &f.args)
}

///////////////////////////// setDefaultFee /////////////////////////////

type SetDefaultFeeFunc struct {
	wasmclient.ClientFunc
	args wasmclient.Arguments
}

func (f *SetDefaultFeeFunc) OwnerFee(v int64) {
	f.args.Set(ArgOwnerFee, f.args.FromInt64(v))
}

func (f *SetDefaultFeeFunc) ValidatorFee(v int64) {
	f.args.Set(ArgValidatorFee, f.args.FromInt64(v))
}

func (f *SetDefaultFeeFunc) Post() wasmclient.Request {
	return f.ClientFunc.Post(0x3310ecd0, &f.args)
}

///////////////////////////// getAllowedStateControllerAddresses /////////////////////////////

type GetAllowedStateControllerAddressesView struct {
	wasmclient.ClientView
}

func (f *GetAllowedStateControllerAddressesView) Call() GetAllowedStateControllerAddressesResults {
	f.ClientView.Call("getAllowedStateControllerAddresses", nil)
	return GetAllowedStateControllerAddressesResults{res: f.Results()}
}

type GetAllowedStateControllerAddressesResults struct {
	res wasmclient.Results
}

func (r *GetAllowedStateControllerAddressesResults) AllowedStateControllerAddresses() []byte {
	return r.res.ToBytes(r.res.Get(ResAllowedStateControllerAddresses))
}

///////////////////////////// getChainInfo /////////////////////////////

type GetChainInfoView struct {
	wasmclient.ClientView
}

func (f *GetChainInfoView) Call() GetChainInfoResults {
	f.ClientView.Call("getChainInfo", nil)
	return GetChainInfoResults{res: f.Results()}
}

type GetChainInfoResults struct {
	res wasmclient.Results
}

func (r *GetChainInfoResults) ChainID() wasmclient.ChainID {
	return r.res.ToChainID(r.res.Get(ResChainID))
}

func (r *GetChainInfoResults) ChainOwnerID() wasmclient.AgentID {
	return r.res.ToAgentID(r.res.Get(ResChainOwnerID))
}

func (r *GetChainInfoResults) DefaultOwnerFee() int64 {
	return r.res.ToInt64(r.res.Get(ResDefaultOwnerFee))
}

func (r *GetChainInfoResults) DefaultValidatorFee() int64 {
	return r.res.ToInt64(r.res.Get(ResDefaultValidatorFee))
}

func (r *GetChainInfoResults) Description() string {
	return r.res.ToString(r.res.Get(ResDescription))
}

func (r *GetChainInfoResults) FeeColor() wasmclient.Color {
	return r.res.ToColor(r.res.Get(ResFeeColor))
}

func (r *GetChainInfoResults) MaxBlobSize() int32 {
	return r.res.ToInt32(r.res.Get(ResMaxBlobSize))
}

func (r *GetChainInfoResults) MaxEventSize() int16 {
	return r.res.ToInt16(r.res.Get(ResMaxEventSize))
}

func (r *GetChainInfoResults) MaxEventsPerReq() int16 {
	return r.res.ToInt16(r.res.Get(ResMaxEventsPerReq))
}

///////////////////////////// getFeeInfo /////////////////////////////

type GetFeeInfoView struct {
	wasmclient.ClientView
	args wasmclient.Arguments
}

func (f *GetFeeInfoView) Hname(v wasmclient.Hname) {
	f.args.Set(ArgHname, f.args.FromHname(v))
}

func (f *GetFeeInfoView) Call() GetFeeInfoResults {
	f.args.Mandatory(ArgHname)
	f.ClientView.Call("getFeeInfo", &f.args)
	return GetFeeInfoResults{res: f.Results()}
}

type GetFeeInfoResults struct {
	res wasmclient.Results
}

func (r *GetFeeInfoResults) FeeColor() wasmclient.Color {
	return r.res.ToColor(r.res.Get(ResFeeColor))
}

func (r *GetFeeInfoResults) OwnerFee() int64 {
	return r.res.ToInt64(r.res.Get(ResOwnerFee))
}

func (r *GetFeeInfoResults) ValidatorFee() int64 {
	return r.res.ToInt64(r.res.Get(ResValidatorFee))
}

///////////////////////////// getMaxBlobSize /////////////////////////////

type GetMaxBlobSizeView struct {
	wasmclient.ClientView
}

func (f *GetMaxBlobSizeView) Call() GetMaxBlobSizeResults {
	f.ClientView.Call("getMaxBlobSize", nil)
	return GetMaxBlobSizeResults{res: f.Results()}
}

type GetMaxBlobSizeResults struct {
	res wasmclient.Results
}

func (r *GetMaxBlobSizeResults) MaxBlobSize() int32 {
	return r.res.ToInt32(r.res.Get(ResMaxBlobSize))
}

///////////////////////////// CoreGovernanceService /////////////////////////////

type CoreGovernanceService struct {
	wasmclient.Service
}

func NewCoreGovernanceService(cl *wasmclient.ServiceClient, chainID string) (*CoreGovernanceService, error) {
	s := &CoreGovernanceService{}
	err := s.Service.Init(cl, chainID, 0x17cf909f, nil)
	return s, err
}

func (s *CoreGovernanceService) AddAllowedStateControllerAddress() AddAllowedStateControllerAddressFunc {
	return AddAllowedStateControllerAddressFunc{ClientFunc: s.AsClientFunc()}
}

func (s *CoreGovernanceService) ClaimChainOwnership() ClaimChainOwnershipFunc {
	return ClaimChainOwnershipFunc{ClientFunc: s.AsClientFunc()}
}

func (s *CoreGovernanceService) DelegateChainOwnership() DelegateChainOwnershipFunc {
	return DelegateChainOwnershipFunc{ClientFunc: s.AsClientFunc()}
}

func (s *CoreGovernanceService) RemoveAllowedStateControllerAddress() RemoveAllowedStateControllerAddressFunc {
	return RemoveAllowedStateControllerAddressFunc{ClientFunc: s.AsClientFunc()}
}

func (s *CoreGovernanceService) RotateStateController() RotateStateControllerFunc {
	return RotateStateControllerFunc{ClientFunc: s.AsClientFunc()}
}

func (s *CoreGovernanceService) SetChainInfo() SetChainInfoFunc {
	return SetChainInfoFunc{ClientFunc: s.AsClientFunc()}
}

func (s *CoreGovernanceService) SetContractFee() SetContractFeeFunc {
	return SetContractFeeFunc{ClientFunc: s.AsClientFunc()}
}

func (s *CoreGovernanceService) SetDefaultFee() SetDefaultFeeFunc {
	return SetDefaultFeeFunc{ClientFunc: s.AsClientFunc()}
}

func (s *CoreGovernanceService) GetAllowedStateControllerAddresses() GetAllowedStateControllerAddressesView {
	return GetAllowedStateControllerAddressesView{ClientView: s.AsClientView()}
}

func (s *CoreGovernanceService) GetChainInfo() GetChainInfoView {
	return GetChainInfoView{ClientView: s.AsClientView()}
}

func (s *CoreGovernanceService) GetFeeInfo() GetFeeInfoView {
	return GetFeeInfoView{ClientView: s.AsClientView()}
}

func (s *CoreGovernanceService) GetMaxBlobSize() GetMaxBlobSizeView {
	return GetMaxBlobSizeView{ClientView: s.AsClientView()}
}
