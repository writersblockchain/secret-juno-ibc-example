import { SigningCosmWasmClient, Secp256k1HdWallet, GasPrice } from "cosmwasm";

import * as fs from "fs";

// const myAddress = "juno1r665g4jg649zce3u8q9d0qzzq7wehxjsjd6y0l";

// const contract_address =
//   "juno1cfze9csy5p52ngywlt7x7qfmmcn3zcfv5td3kjm0a0r8qm0fhecs30sfhn";

const rpcEndpoint = "https://rpc.uni.juno.deuslabs.fi/";

let fee = { amount: [{ amount: "1000", denom: "ujunox" }], gas: "200000" };

const mnemonic =
  "shed clerk spray velvet flower tide cherry idea public solar prize tackle";

const config = {
  chainId: "uni-6",
  rpcEndpoint: rpcEndpoint,
  prefix: "juno",
};

const consumer_wasm = fs.readFileSync(
  "../consumer/target/wasm32-unknown-unknown/release/consumer.wasm"
);

// const codeId = 1922;

async function upload() {
  let wallet = await Secp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: "juno",
  });
  let gas = GasPrice.fromString("0.025ujunox");
  let client = await SigningCosmWasmClient.connectWithSigner(
    rpcEndpoint,
    wallet,
    { gasPrice: gas }
  );

  let res = await client.upload(
    "juno1r665g4jg649zce3u8q9d0qzzq7wehxjsjd6y0l",
    consumer_wasm,
    "auto"
  );
  console.log(res);
}

// upload();

let instantiate = async () => {
  let wallet = await Secp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: "juno",
  });
  let gas = GasPrice.fromString("0.025ujunox");
  let client = await SigningCosmWasmClient.connectWithSigner(
    rpcEndpoint,
    wallet,
    { gasPrice: gas }
  );

  let init_msg = {};
  let msg = Buffer.from(JSON.stringify(init_msg));

  let res = await client.instantiate(
    myAddress,
    codeId,
    "consumer-ibc-template",
    fee,
    [],
    msg
  );
  console.log(res);
};

// instantiate();

// junod tx wasm instantiate 2460 '{"init": {"rand_provider": { "address": "secret1yuzex9mx09lj52uzjzszgqtwddce2kgmgu4y9l", "code_hash":   "4350e9119e47e4f5a2bcfc84f12ec062fe927a44253c0bc9cea08fc5a0b4fe90"}}}' --label 'ibc-consumer-template' --no-admin --from seanradJuno --gas 200000 -y --chain-id uni-6 --node https://uni-rpc.reece.sh:443  --gas-prices 0.025ujunox

// junod tx wasm instantiate 2461 '{}' --label 'ibc-consumer-template consumer proxy' --no-admin --from seanradJuno --gas 300000 -y --chain-id uni-6 --node https://uni-rpc.reece.sh:443  --gas-prices 0.025ujunox

// junod q tx 8D7158A34666FD6D08A897C1189E9C0660399DA6738E87FD0ACF66D2AAEA3B92 --node https://uni-rpc.reece.sh:443

// let juno_contract_address = "juno1xxdwdvc7l5f9z27x3kdteq0e598hz90f7zjyexc9dmz43f5agrzq4884uj"

// junod tx wasm execute --from seanradJuno juno1cfze9csy5p52ngywlt7x7qfmmcn3zcfv5td3kjm0a0r8qm0fhecs30sfhn '{"do_something": {}}' --gas 200000 -y --chain-id uni-6 --node https://uni-rpc.reece.sh:443 --gas-prices 0.025ujunox

// <!-- junod tx wasm execute --from seanradJuno juno1ejh2e6w9at5u9tsesx2054ryljqa32dlajclhzd88cy5yxgj8z4svlvq7h '{"do_something": {}}' --gas 200000 -y --chain-id uni-6 --node https://uni-rpc.reece.sh:443 --gas-prices 0.025ujunox

// junod tx wasm execute --from seanradJuno juno1ejh2e6w9at5u9tsesx2054ryljqa32dlajclhzd88cy5yxgj8z4svlvq7h '{"random_response": {}}' --gas 200000 -y --chain-id uni-6 --node https://uni-rpc.reece.sh:443 --gas-prices 0.025ujunox

let consumer_juno_address =
  juno1ca8xkz8mm8gme4wgjrdwmklwuwe7mf8jq94p8qycumlcxd4geu5ssaeqnd;

  junod tx wasm execute --from seanradJuno juno1ca8xkz8mm8gme4wgjrdwmklwuwe7mf8jq94p8qycumlcxd4geu5ssaeqnd '{"do_something": {}}' --gas 200000 -y --chain-id uni-6 --node https://uni-rpc.reece.sh:443 --gas-prices 0.025ujunox


  // junod q tx 9160CB8205FF438E0A9E004294EBE252B6C4E1D2482FC4F3E7DD31BBC6D40BB5 --node https://uni-rpc.reece.sh:443