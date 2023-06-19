### Hermes relayer - between secret testnet and juno testnet

1. start gm

```
gm start

```

2. check status

```
gm status

```

3. create clients

```
hermes create client --host-chain pulsar-2 --reference-chain uni-6
```

```
hermes create client --host-chain uni-6 --reference-chain pulsar-2
```

4. create connections

```
hermes create connection --a-chain pulsar-2 --a-client 07-tendermint-231 --b-client 07-tendermint-443

```

5. create channel identifier

```
hermes create channel --a-chain pulsar-2 --a-connection connection-217 --a-port transfer --b-port transfer
```

6.

7.  execute the contract

```
  junod tx wasm execute --from seanradJuno juno1ca8xkz8mm8gme4wgjrdwmklwuwe7mf8jq94p8qycumlcxd4geu5ssaeqnd '{"do_something": {}}' --gas 200000 -y --chain-id uni-6 --node https://uni-rpc.reece.sh:443 --gas-prices 0.025ujunox
```

### Upload + Instantiate on Juno

1. upload the contract [here](https://test.juno.tools/contracts/upload/).

2. Instantiate the contract with this command:

```
// junod tx wasm instantiate <codeId> '{"init": {"rand_provider": { "address": <contract address>, "code_hash":   <contract code hash>}}}' --label 'ibc-consumer-template' --no-admin --from <your juno wallet> --gas 200000 -y --chain-id uni-6 --node https://uni-rpc.reece.sh:443  --gas-prices 0.025ujunox

```

3. query that the instantiation was successful:

```
 junod q tx <transaction hash> --node https://uni-rpc.reece.sh:443
```
