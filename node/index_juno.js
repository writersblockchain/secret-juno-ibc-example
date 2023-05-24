import { SigningCosmWasmClient, Secp256k1HdWallet, GasPrice } from "cosmwasm";

import * as fs from "fs";

const myAddress = "juno1r665g4jg649zce3u8q9d0qzzq7wehxjsjd6y0l";

const contract_address =
  "juno1ejh2e6w9at5u9tsesx2054ryljqa32dlajclhzd88cy5yxgj8z4svlvq7h";

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

const codeId = 1922;

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

instantiate();

hermes create client --host-chain pulsar-2 --reference-chain uni-6

hermes keys add --chain uni-6 --mnemonic-file seanrad.json

hermes create client --host-chain uni-6 --reference-chain pulsar-2