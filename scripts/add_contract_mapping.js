const LoomX = require("@web3-guru/loom-x/dist").default;
const { Address } = require("@web3-guru/loom-x/dist");

require("dotenv").config();

const WEB3_TOKEN_ADDRESS = Address.createEthereumAddress("0x..."); // Your Web3Token address
const WEB3_TOKEN_TX_HASH = "0x..."; // Tx hash used when deploying your Web3Token
const LOOM_WEB3_TOKEN_ADDRESS = Address.createLoomAddress("0x..."); // Your LoomWeb3Token address

module.exports = async () => {
   const loomX = LoomX.fromMnemonic(process.env.MNEMONIC);
   await loomX.loom.mapContracts(loomX.ethereum, WEB3_TOKEN_ADDRESS, WEB3_TOKEN_TX_HASH, LOOM_WEB3_TOKEN_ADDRESS);
};
