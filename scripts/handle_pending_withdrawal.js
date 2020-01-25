const LoomX = require("@web3-guru/loom-x/dist").default;
const { Address } = require("@web3-guru/loom-x/dist");

require("dotenv").config();

const WEB3_TOKEN_ADDRESS = Address.createEthereumAddress("0x..."); // Your Web3Token address

module.exports = async () => {
    const loomX = LoomX.fromMnemonic(process.env.MNEMONIC);
    // Check if you have a pending receipt
    const nonce = await loomX.ethereum.getWithdrawalNonceAsync();
    if (nonce) {
        // Get pending withdrawal receipt with the nonce
        const receipt = await loomX.getPendingERC20WithdrawalReceipt(nonce);
        // Withdraw pending ERC20
        const tx = await loomX.ethereum.withdrawERC20WithReceiptAsync(WEB3_TOKEN_ADDRESS, receipt);
        if (tx) {
            await tx.wait();
        }
    }
};
