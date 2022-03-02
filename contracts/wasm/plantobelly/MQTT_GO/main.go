package main

import (
	"fmt"

	"github.com/iotaledger/wasp/packages/iscp"
	"github.com/iotaledger/wasp/packages/wasmvm/wasmlib/go/wasmclient"
)

/*

 {
  "seed": "2UcFnXuJdPqccHFynXakfzgpWYqwrGwJfarNRu4FQZnm",
  "waspWebSocketUrl": "ws://127.0.0.1:9090/chain/%chainId/ws",
  "waspApiUrl": "http://127.0.0.1:9090",
  "goshimmerApiUrl": "http://127.0.0.1:8080",
  "chainId": "nBikJGmc5V9mtTbUxTYiFApigcY6w5BRUSAgWpUE8ew6",
  "googleAnalytics": null,
  "contractName": "plantobelly"
}




*/
func main() {
	chainID :=
		"nBikJGmc5V9mtTbUxTYiFApigcY6w5BRUSAgWpUE8ew6"
	keyPair :=
		wasmclient.SeedToKeyPair("2UcFnXuJdPqccHFynXakfzgpWYqwrGwJfarNRu4FQZnm")
	hName := iscp.Hn("plantobelly")
	service := wasmclient.NewServiceClient("http://127.0.0.1:9090", "http://127.0.0.1:5550")
	svc := wasmclient.Service{
		&chainID,

		keyPair,
		hName,
		service,
	}
	fmt.Println("Hello, World!")
}
