## Schema Tool
The schema tool is unable to properly generate the following features(?) for the following code:
### Back-end contract generation (Rust/Ts/Go)
-  Nested structs: eg.
```yaml
structs:
  Geolocation:
    lattitude: String
    longitude: String
  Plant: 
    location: Geolocation
    extra: Int64
``` 
- Function parameters cannot have the same names in different function definitions
## Front end client library (Ts / Go)
The schema tool will accept this as if it would properly generate code, but will then leave the types empty in the `lib.{rs|go|ts}` files.
- If possible, is there an ETA for tutorials on using the client library in the near future? I had to ask around and dig to find `wasmclient` in the first place, and the generation of the client libraries is not well documented, presumably because it is still a WIP.
-  Structs as params: e.g
```yaml
funcs:
  mintPlant:
    access: owner
    params:
      newPlant: Plant
views:
    getPlant:
      params: 
        plantId: Hash
      results:
        plant: Plant
```
   In the generated code, the code in `service.{go|ts}` will try to call `ToPlant` and `FromPlant` methods that do not exist! The solution is obviously to just list out the parameters of a plant struct in the params. That's fine to do but quickly leads to scalability and refactoring issues when a parameter has to be changed (low-prio).
-  Furthermore, I have found basically 0 documentation regarding the front-end client generation. I understand it's still WIP but I feel like I'm digging for gold by following declarations in VSCode and hoping that VSCode magically shows me a method in the autocomplete tabs ;-;.
-  `wasmclient` is not compiling properly (IN TS, tried before newest merge). I'll try to see if something has changed after the newest merge and report back!

## Tests
The example test code and the tests in the examples in the `wasp/contracts/wasm/` directory are different! The sample smart contracts use the `SoloContext` API to call functions, but the tutorials in the wiki have changed to no longer use `ctx` and now interact with the chain itself. After the newest merge on the main branch (/ from the develop branch), I can't seem to make `ctx` work for contracts written in Rust! It seems that the methods that allowed using the `wasmsolo.SoloContext` api now locks you into using Go to implement the smart contractws. I will try porting over my tests to the new `chain` API, but if you know some way to carry out tests in Rust using `wasmsolo.SoloContext` after the newest merge, please let me know!
