const LoomX = require("@web3-guru/loom-x/dist").default;
const { Address, BigNumberUtils } = require("@web3-guru/loom-x/dist");

require("dotenv").config();

const WEB3_TOKEN_ADDRESS = Address.createEthereumAddress("0x..."); // Your Web3Token address
const AMOUNT = BigNumberUtils.toBigNumber(10**18); // Amount to transfer

module.exports = async () => {
    const loomX = LoomX.fromMnemonic(process.env.MNEMONIC);
    const gatewayAddress = Address.createEthereumAddress(loomX.ethereum.getTransferGateway().address);
    const approveTx = await loomX.ethereum.approveERC20Async(WEB3_TOKEN_ADDRESS, gatewayAddress, AMOUNT);
    await approveTx.wait();
    const depositTx = await loomX.ethereum.depositERC20Async(WEB3_TOKEN_ADDRESS, AMOUNT);
    await depositTx.wait();
};
