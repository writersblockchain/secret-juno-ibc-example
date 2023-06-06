### hermes relayer - between secret testnet and juno testnet

1. start gm

```gm start

```

2. check status

```gm status

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
hermes create connection --a-chain pulsar-2 --a-client 07-tendermint-229 --b-client 07-tendermint-402

```

5. create channel identifier

```
hermes create channel --a-chain pulsar-2 --a-connection connection-215 --a-port transfer --b-port transfer
```

6. execute the contract

```
secretcli tx compute execute --from a "$CONTRACT_ADDRESS" '{"do_something": {}}' --gas-prices 0.25uscrt --output json
```

junod tx wasm execute --from seanradJuno juno1ejh2e6w9at5u9tsesx2054ryljqa32dlajclhzd88cy5yxgj8z4svlvq7h '{"do_something": {}}' --gas 200000 -y --chain-id uni-6 --node https://uni-rpc.reece.sh:443 --gas-prices 0.025ujunox

junod tx wasm execute --from seanradJuno juno1ejh2e6w9at5u9tsesx2054ryljqa32dlajclhzd88cy5yxgj8z4svlvq7h '{"random_response": {}}' --gas 200000 -y --chain-id uni-6 --node https://uni-rpc.reece.sh:443 --gas-prices 0.025ujunox

junod query tx FBC4C404DFD67209C36B533BD180BDDBCF32E14B47AB675896CD2B7F9F8F4B18 --chain-id uni-6 --node https://uni-rpc.reece.sh:443
