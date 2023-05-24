config.toml is for gaiad manager - between secret testnet and juno testnet

I receive a successful output with:

```
hermes create client --host-chain pulsar-2 --reference-chain uni-6
```

It returns:

```
SUCCESS CreateClient(
    CreateClient(
        Attributes {
            client_id: ClientId(
                "07-tendermint-225",
            ),
            client_type: Tendermint,
            consensus_height: Height {
                revision: 6,
                height: 1593348,
            },
        },
    ),
)
```

But I run into error when I run:

```
hermes create client --host-chain uni-6 --reference-chain pulsar-2
```

The error is:

```
foreign client error: error raised while creating client for chain pulsar-2: failed when building client state: ICS 07 error: invalid trusting period: ClientState trusting period (1036800s) must be smaller than unbonding period (86400s)

```
