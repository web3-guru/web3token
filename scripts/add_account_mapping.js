const LoomX = require("@web3-guru/loom-x/dist").default;

require("dotenv").config();

module.exports = async () => {
   const loomX = LoomX.fromMnemonic(process.env.MNEMONIC);
   await loomX.loom.mapAccounts(loomX.ethereum);
};
