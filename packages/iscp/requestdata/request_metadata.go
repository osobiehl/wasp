package requestdata

import (
	"github.com/iotaledger/hive.go/marshalutil"
	iotago "github.com/iotaledger/iota.go/v3"
	"github.com/iotaledger/wasp/packages/iscp"
	"github.com/iotaledger/wasp/packages/kv/dict"
)

type RequestMetadata struct {
	senderContract iscp.Hname
	// ID of the target smart contract
	targetContract iscp.Hname
	// entry point code
	entryPoint iscp.Hname
	// request arguments, not decoded yet wrt blobRefs
	args dict.Dict
	// gas budget
	gasBudget int64
}

func NewRequestMetadata() *RequestMetadata {
	return &RequestMetadata{
		args: dict.New(),
	}
}

func RequestMetadataFromFeatureBlocksSet(set iotago.FeatureBlocksSet) (*RequestMetadata, error) {
	metadataFeatBlock, has := set[iotago.FeatureBlockMetadata]
	if !has {
		return nil, nil
	}
	bytes := metadataFeatBlock.(*iotago.MetadataFeatureBlock).Data
	return RequestMetadataFromBytes(bytes)
}

func RequestMetadataFromBytes(data []byte) (*RequestMetadata, error) {
	ret := NewRequestMetadata()
	err := ret.ReadFromMarshalUtil(marshalutil.New(data))
	return ret, err
}

func (p *RequestMetadata) WithSender(s iscp.Hname) *RequestMetadata {
	p.senderContract = s
	return p
}

func (p *RequestMetadata) WithTarget(t iscp.Hname) *RequestMetadata {
	p.targetContract = t
	return p
}

func (p *RequestMetadata) WithEntryPoint(ep iscp.Hname) *RequestMetadata {
	p.entryPoint = ep
	return p
}

func (p *RequestMetadata) WithArgs(args dict.Dict) *RequestMetadata {
	p.args = args.Clone()
	return p
}

func (p *RequestMetadata) Clone() *RequestMetadata {
	ret := *p
	ret.args = p.args.Clone()
	return &ret
}

func (p *RequestMetadata) SenderContract() iscp.Hname {
	return p.senderContract
}

func (p *RequestMetadata) TargetContract() iscp.Hname {
	return p.targetContract
}

func (p *RequestMetadata) EntryPoint() iscp.Hname {
	return p.entryPoint
}

func (p *RequestMetadata) Args() dict.Dict {
	return p.args
}

func (p *RequestMetadata) GasBudget() int64 {
	return p.gasBudget
}

func (p *RequestMetadata) Bytes() []byte {
	mu := marshalutil.New()
	p.WriteToMarshalUtil(mu)
	return mu.Bytes()
}

func (p *RequestMetadata) WriteToMarshalUtil(mu *marshalutil.MarshalUtil) {
	mu.Write(p.senderContract).
		Write(p.targetContract).
		Write(p.entryPoint).
		WriteInt64(p.gasBudget)
	p.args.WriteToMarshalUtil(mu)
}

func (p *RequestMetadata) ReadFromMarshalUtil(mu *marshalutil.MarshalUtil) error {
	var err error
	if p.senderContract, err = iscp.HnameFromMarshalUtil(mu); err != nil {
		return err
	}
	if p.targetContract, err = iscp.HnameFromMarshalUtil(mu); err != nil {
		return err
	}
	if p.entryPoint, err = iscp.HnameFromMarshalUtil(mu); err != nil {
		return err
	}
	if p.gasBudget, err = mu.ReadInt64(); err != nil {
		return err
	}
	if err = (p.args).ReadFromMarshalUtil(mu); err != nil {
		return err
	}
	return nil
}