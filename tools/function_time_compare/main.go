package main

import (
	"bufio"
	"fmt"
	"github.com/iotaledger/wasp/packages/cryptolib"
	"github.com/iotaledger/wasp/packages/vm/sandbox"
	"math"
	"math/rand"
	"os"
	"strconv"
	"time"
)

type TestFunction func([]byte)

type AntiGas struct{}

func (t *AntiGas) Burn(k uint64)  {}
func (t *AntiGas) Budget() uint64 { return 1337420421074 }

var antiGas = AntiGas{}
var scUtility = sandbox.NewUtils(&antiGas)

var keyPair = cryptolib.NewKeyPair()

func generateRandomPayload(length int) []byte {
	garbage := make([]byte, length)
	rand.Read(garbage)
	return garbage
}

func generateRandomPayloads(size int) [][]byte {
	payloadList := make([][]byte, size)

	for i := 0; i < 5; i++ {
		size := 32 * math.Pow(float64(i+1), 2)
		payloadList[i] = generateRandomPayload(int(size))
	}

	for i := 5; i < len(payloadList); i++ {
		size := 1024 * math.Pow(float64(i+1), 2)
		payloadList[i] = generateRandomPayload(int(size))
	}

	return payloadList
}

func executeTest(testMap map[string]TestFunction) (map[string]map[int]int64, [][]byte) {
	result := make(map[string]map[int]int64)
	payloadList := generateRandomPayloads(15)

	for k, testFunction := range testMap {
		fmt.Printf("Testing %v\n", k)

		// Run function the first time as is, in case something requires initialization which pollutes the test data
		testFunction(make([]byte, 42))

		stepResult := make(map[int]int64)
		result[k] = stepResult

		for i := 0; i < len(payloadList); i++ {
			fmt.Printf("%v/%v\n", i+1, len(payloadList))
			payload := payloadList[i]

			start := time.Now()
			testFunction(payload)
			elapsed := time.Since(start)

			result[k][len(payload)] = elapsed.Nanoseconds()
		}
	}

	return result, payloadList
}

func writeCSV(result map[string]map[int]int64, payload [][]byte) {
	ghettoCSV := "0;"

	for i := 0; i < len(payload); i++ {
		ghettoCSV += strconv.Itoa(len(payload[i])) + ";"
	}

	for testName, testResult := range result {
		ghettoCSV += "\n" + testName + ";"

		for i := 0; i < len(payload); i++ {
			payloadKey := len(payload[i])
			ghettoCSV += strconv.FormatInt(testResult[payloadKey], 10) + ";"
		}
	}

	ghettoCSV += "\nPayload Buffer Size vs Nanoseconds Execution time"

	file, err := os.Create("./feeResult.csv")

	if err != nil {
		fmt.Errorf("%v", err)
	}

	writer := bufio.NewWriter(file)
	writer.WriteString(ghettoCSV)
	writer.Flush()
}

func testBlake2B(payload []byte) {
	scUtility.Hashing().Blake2b(payload)
}

func testSha3(payload []byte) {
	scUtility.Hashing().Sha3(payload)
}

func testHName(payload []byte) {
	scUtility.Hashing().Hname(string(payload))
}

func testBase58Decode(payload []byte) {
	scUtility.Base58().Decode(string(payload))
}

func testBase58Encode(payload []byte) {
	scUtility.Base58().Encode(payload)
}

func testValidED25519Signature(payload []byte) {
	scUtility.ED25519().ValidSignature(payload, keyPair.PublicKey, payload)
}

func testValidED25519AddressFromPubKey(payload []byte) {
	scUtility.ED25519().AddressFromPublicKey(keyPair.PublicKey)
}

func main() {

	testMap := make(map[string]TestFunction, 1)
	testMap["blake2b"] = testBlake2B
	testMap["sha3"] = testSha3
	testMap["hname"] = testHName
	testMap["base58Decode"] = testBase58Decode
	testMap["base58Encode"] = testBase58Encode
	testMap["ed25519Signature"] = testValidED25519Signature
	testMap["ed25519AddressFromPubKey"] = testValidED25519AddressFromPubKey

	result, payload := executeTest(testMap)
	writeCSV(result, payload)
}
