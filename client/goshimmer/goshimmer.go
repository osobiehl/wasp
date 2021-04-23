package goshimmer

import (
	"fmt"
	"time"

	"github.com/iotaledger/goshimmer/client"
	"github.com/iotaledger/goshimmer/packages/ledgerstate"
	"github.com/iotaledger/wasp/packages/parameters"
	"github.com/iotaledger/wasp/packages/transaction"
)

// Client is a wrapper for the official Goshimmer client, providing a cleaner interface
// for commonly used Goshimmer webapi endpoints in wasp.
type Client struct {
	api *client.GoShimmerAPI
}

// NewClient returns a new Goshimmer client
func NewClient(goshimmerHost string) *Client {
	return &Client{client.NewGoShimmerAPI("http://" + goshimmerHost)}
}

func (c *Client) RequestFunds(targetAddress ledgerstate.Address) error {
	initialBalance, err := c.balanceIOTA(targetAddress)
	if err != nil {
		return fmt.Errorf("balanceIOTA: %s", err)
	}
	_, err = c.api.SendFaucetRequest(targetAddress.Base58())
	if err != nil {
		return fmt.Errorf("SendFaucetRequest: %s", err)
	}
	for attempts := 10; attempts > 0; attempts-- {
		time.Sleep(1 * time.Second)
		balance, err := c.balanceIOTA(targetAddress)
		if err != nil {
			return fmt.Errorf("balanceIOTA: %s", err)
		}
		if balance > initialBalance {
			return nil
		}
	}
	return fmt.Errorf("Faucet request seems to have failed")
}

func (c *Client) balanceIOTA(targetAddress ledgerstate.Address) (uint64, error) {
	outs, err := c.GetConfirmedOutputs(targetAddress)
	if err != nil {
		return 0, fmt.Errorf("GetConfirmedOutputs: %s", err)
	}
	total := uint64(0)
	for _, out := range outs {
		bal, _ := out.Balances().Get(ledgerstate.ColorIOTA)
		total += uint64(bal)
	}
	return total, nil
}

func (c *Client) GetConfirmedOutputs(address ledgerstate.Address) ([]ledgerstate.Output, error) {
	r, err := c.api.GetAddressUnspentOutputs(address.Base58())
	if err != nil {
		return nil, fmt.Errorf("GetUnspentOutputs: %w", err)
	}
	ret := make([]ledgerstate.Output, len(r.Outputs))
	for i, out := range r.Outputs {
		var err error
		ret[i], err = out.ToLedgerstateOutput()
		if err != nil {
			return nil, err
		}
	}
	return ret, nil
}

func (c *Client) sendTx(tx *ledgerstate.Transaction) error {
	data := tx.Bytes()
	if len(data) > parameters.MaxSerializedTransactionToGoshimmer {
		return fmt.Errorf("size of serialized transation %d bytes > max of %d bytes: %s",
			len(data), parameters.MaxSerializedTransactionToGoshimmer, tx.ID())
	}
	_, err := c.api.SendTransaction(data)
	return err
}

func (c *Client) PostTransaction(tx *ledgerstate.Transaction) error {
	return c.sendTx(tx)
}

func (c *Client) PostAndWaitForConfirmation(tx *ledgerstate.Transaction) error {
	if err := c.sendTx(tx); err != nil {
		return err
	}
	return c.WaitForConfirmation(tx.ID())
}

func (c *Client) WaitForConfirmation(txid ledgerstate.TransactionID) error {
	for {
		time.Sleep(1 * time.Second)
		tx, err := c.api.GetTransactionByID(txid.Base58())
		if err != nil {
			return err
		}
		if tx.InclusionState.Confirmed {
			break
		}
	}
	return nil
}

func (c *Client) PostRequestTransaction(par transaction.NewRequestTransactionParams) (*ledgerstate.Transaction, error) {
	var err error

	if len(par.UnspentOutputs) == 0 {
		addr := ledgerstate.NewED25519Address(par.SenderKeyPair.PublicKey)
		par.UnspentOutputs, err = c.GetConfirmedOutputs(addr)
		if err != nil {
			return nil, fmt.Errorf("can't get outputs from the node: %v", err)
		}
	}

	tx, err := transaction.NewRequestTransaction(par)
	if err != nil {
		return nil, err
	}

	if err = c.PostTransaction(tx); err != nil {
		return nil, err
	}
	return tx, nil
}
