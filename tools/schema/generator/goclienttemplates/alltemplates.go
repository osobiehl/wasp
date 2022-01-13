package goclienttemplates

import "github.com/iotaledger/wasp/tools/schema/model"

var config = map[string]string{
	"language":   "Go Client",
	"extension":  ".go",
	"rootFolder": "go",
	"funcRegexp": `^func On(\w+).+$`,
}

var Templates = []map[string]string{
	config, // always first one
	common,
	eventsGo,
	serviceGo,
}

var TypeDependent = model.StringMapMap{
	"fldLangType": {
		"Address":   "wasmclient.Address",
		"AgentID":   "wasmclient.AgentID",
		"Bool":      "bool",
		"Bytes":     "[]byte",
		"ChainID":   "wasmclient.ChainID",
		"Color":     "wasmclient.Color",
		"Hash":      "wasmclient.Hash",
		"Hname":     "wasmclient.Hname",
		"Int8":      "int8",
		"Int16":     "int16",
		"Int32":     "int32",
		"Int64":     "int64",
		"RequestID": "wasmclient.RequestID",
		"String":    "string",
		"Uint8":     "uint8",
		"Uint16":    "uint16",
		"Uint32":    "uint32",
		"Uint64":    "uint64",
	},
	"fldTypeID": {
		"Address":   "wasmlib.TYPE_ADDRESS",
		"AgentID":   "wasmlib.TYPE_AGENT_ID",
		"Bool":      "wasmlib.TYPE_BOOL",
		"Bytes":     "wasmlib.TYPE_BYTES",
		"ChainID":   "wasmlib.TYPE_CHAIN_ID",
		"Color":     "wasmlib.TYPE_COLOR",
		"Hash":      "wasmlib.TYPE_HASH",
		"Hname":     "wasmlib.TYPE_HNAME",
		"Int8":      "wasmlib.TYPE_INT8",
		"Int16":     "wasmlib.TYPE_INT16",
		"Int32":     "wasmlib.TYPE_INT32",
		"Int64":     "wasmlib.TYPE_INT64",
		"RequestID": "wasmlib.TYPE_REQUEST_ID",
		"String":    "wasmlib.TYPE_STRING",
		"Uint8":     "wasmlib.TYPE_INT8",
		"Uint16":    "wasmlib.TYPE_INT16",
		"Uint32":    "wasmlib.TYPE_INT32",
		"Uint64":    "wasmlib.TYPE_INT64",
		"":          "wasmlib.TYPE_BYTES",
	},
	"argEncode": {
		"Address":   "wasmclient.Base58Decode",
		"AgentID":   "wasmclient.Base58Decode",
		"Bool":      "codec.EncodeBool",
		"Bytes":     "[]byte",
		"ChainID":   "wasmclient.Base58Decode",
		"Color":     "wasmclient.Base58Decode",
		"Hash":      "wasmclient.Base58Decode",
		"Hname":     "wasmclient.Base58Decode",
		"Int8":      "codec.EncodeInt8",
		"Int16":     "codec.EncodeInt16",
		"Int32":     "codec.EncodeInt32",
		"Int64":     "codec.EncodeInt64",
		"RequestID": "wasmclient.Base58Decode",
		"String":    "codec.EncodeString",
		"Uint8":     "codec.EncodeUint8",
		"Uint16":    "codec.EncodeUint16",
		"Uint32":    "codec.EncodeUint32",
		"Uint64":    "codec.EncodeUint64",
	},
	"argDecode": {
		"Address":   "wasmclient.Base58Encode",
		"AgentID":   "wasmclient.Base58Encode",
		"Bool":      "codec.DecodeBool",
		"Bytes":     "[]byte",
		"ChainID":   "wasmclient.Base58Encode",
		"Color":     "wasmclient.Base58Encode",
		"Hash":      "wasmclient.Base58Encode",
		"Hname":     "wasmclient.Base58Encode",
		"Int8":      "codec.DecodeInt8",
		"Int16":     "codec.DecodeInt16",
		"Int32":     "codec.DecodeInt32",
		"Int64":     "codec.DecodeInt64",
		"RequestID": "wasmclient.Base58Encode",
		"String":    "codec.DecodeString",
		"Uint8":     "codec.DecodeUint8",
		"Uint16":    "codec.DecodeUint16",
		"Uint32":    "codec.DecodeUint32",
		"Uint64":    "codec.DecodeUint64",
	},
	"msgConvert": {
		"Address":   "e.Next()",
		"AgentID":   "e.Next()",
		"Bool":      "e.NextBool()",
		"ChainID":   "e.Next()",
		"Color":     "e.Next()",
		"Hash":      "e.Next()",
		"Hname":     "e.Next()",
		"Int8":      "e.NextInt8()",
		"Int16":     "e.NextInt16()",
		"Int32":     "e.NextInt32()",
		"Int64":     "e.NextInt64()",
		"RequestID": "e.Next()",
		"String":    "e.Next()",
		"Uint8":     "e.NextUint8()",
		"Uint16":    "e.NextUint16()",
		"Uint32":    "e.NextUint32()",
		"Uint64":    "e.NextUint64()",
	},
	"fldDefault": {
		"Address":   "''",
		"AgentID":   "''",
		"Bool":      "false",
		"ChainID":   "''",
		"Color":     "''",
		"Hash":      "''",
		"Hname":     "''",
		"Int8":      "0",
		"Int16":     "0",
		"Int32":     "0",
		"Int64":     "BigInt(0)",
		"RequestID": "''",
		"String":    "''",
		"Uint8":     "0",
		"Uint16":    "0",
		"Uint32":    "0",
		"Uint64":    "BigInt(0)",
	},
	"resConvert": {
		"Address":   "toString()",
		"AgentID":   "toString()",
		"Bool":      "readUInt8(0)!=0",
		"ChainID":   "toString()",
		"Color":     "toString()",
		"Hash":      "toString()",
		"Hname":     "toString()",
		"Int8":      "readInt8(0)",
		"Int16":     "readInt16LE(0)",
		"Int32":     "readInt32LE(0)",
		"Int64":     "readBigInt64LE(0)",
		"RequestID": "toString()",
		"String":    "toString()",
		"Uint8":     "readUInt8(0)",
		"Uint16":    "readUInt16LE(0)",
		"Uint32":    "readUInt32LE(0)",
		"Uint64":    "readBigUInt64LE(0)",
	},
}

var common = map[string]string{
	// *******************************
	"clientHeader": `
package $package$+client

import "github.com/iotaledger/wasp/packages/vm/wasmlib/go/wasmclient"
`,
}
