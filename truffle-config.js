const HDWalletProvider = require('truffle-hdwallet-provider');
const LoomTruffleProvider = require("loom-truffle-provider");
const { loomPrivateKeyFromMnemonic } = require("@web3-guru/loom-x/dist/utils/crypto-utils");
const infuraKey = "fj4jll3k.....";

require("dotenv").config();

module.exports = {
    networks: {
        mainnet: {
            provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://rinkeby.infura.io/v3/` + infuraKey),
            network_id: 4
        },
        loom: {
            provider: () => {
                const provider = new LoomTruffleProvider(
                    "extdev-plasma-us1",
                    "http://extdev-plasma-us1.dappchains.com:80/rpc",
                    "http://extdev-plasma-us1.dappchains.com:80/query",
                    loomPrivateKeyFromMnemonic(process.env.MNEMONIC)
                );
                const engine = provider.getProviderEngine();
                engine.addCustomMethod("web3_clientVersion", () => "");
                return provider;
            },
            network_id: "*"
        }

    },

    compilers: {
        solc: {
            version: "0.5.15",
            settings: {
                optimizer: {
                    enabled: false,
                    runs: 200
                },
                evmVersion: "istanbul"
            }
        }
    }
};
