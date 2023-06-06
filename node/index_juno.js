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

upload();

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

// hermes create client --host-chain pulsar-2 --reference-chain uni-6

// hermes keys add --chain uni-6 --mnemonic-file seanrad.json

// hermes create client --host-chain uni-6 --reference-chain pulsar-2

// junod q tx 22A77D733AC41858F5D40A5CA3AACFF570DF8351A067B94A72699BEF982E449F --node https://rpc.uni.juno.deuslabs.fi:443

// junod tx wasm instantiate 2363 '{"init": {"rand_provider": { "address": "secret16pfmjjxe25sl2t2k90hcmmnk76vcxertrdu0ss", "code_hash":   "4350e9119e47e4f5a2bcfc84f12ec062fe927a44253c0bc9cea08fc5a0b4fe90"}}}' --label 'ibc-consumer-template' --no-admin --from seanradJuno --gas 200000 -y --chain-id uni-6 --node https://uni-rpc.reece.sh:443  --gas-prices 0.025ujunox

// junod q tx CBC465D5DF9E583275CEB5205CDE7D9D36346C7F67689EF6090C67827BA0DEAF --node https://uni-rpc.reece.sh:443

// junod tx wasm execute --from seanradJuno juno1cfze9csy5p52ngywlt7x7qfmmcn3zcfv5td3kjm0a0r8qm0fhecs30sfhn '{"do_something": {}}' --gas 200000 -y --chain-id uni-6 --node https://uni-rpc.reece.sh:443 --gas-prices 0.025ujunox


junod q tx CBC465D5DF9E583275CEB5205CDE7D9D36346C7F67689EF6090C67827BA0DEAF --node https://uni-rpc.reece.sh:443