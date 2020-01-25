const LoomX = require("@web3-guru/loom-x/dist").default;
const { Address, BigNumberUtils } = require("@web3-guru/loom-x/dist");

require("dotenv").config();

const WEB3_TOKEN_ADDRESS = Address.createEthereumAddress("0x..."); // Your Web3Token address
const LOOM_WEB3_TOKEN_ADDRESS = Address.createLoomAddress("0x..."); // Your LoomWeb3Token address
const AMOUNT = BigNumberUtils.toBigNumber(10**18); // Amount to transfer

module.exports = async () => {
    const loomX = LoomX.fromMnemonic(process.env.MNEMONIC);
    // Send tx to Loom Network
    const tx1 = await loomX.loom.withdrawERC20Async(LOOM_WEB3_TOKEN_ADDRESS, AMOUNT);
    await tx1.wait();

    // Listen to the withdrawal signature
    const myEthereumAddress = loomX.ethereum.address;
    const signature = await loomX.loom.listenToTokenWithdrawal(LOOM_WEB3_TOKEN_ADDRESS, myEthereumAddress);

    // Send tx to Ethereum Network
    const tx2 = await loomX.ethereum.withdrawERC20Async(WEB3_TOKEN_ADDRESS, AMOUNT, signature);
    await tx2.wait();
};
