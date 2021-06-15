package scclient

import (
	"github.com/iotaledger/wasp/client/chainclient"
	"github.com/iotaledger/wasp/packages/coretypes"

	"github.com/iotaledger/goshimmer/packages/ledgerstate"
)

func (c *SCClient) PostRequest(fname string, params ...chainclient.PostRequestParams) (*ledgerstate.Transaction, error) {
	return c.ChainClient.Post1Request(c.ContractHname, coretypes.Hn(fname), params...)
}
