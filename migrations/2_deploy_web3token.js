const Web3Token = artifacts.require("Web3Token");

module.exports = async function(deployer) {
    if (network === "mainnet") {
        await deployer.deploy(Web3Token);
    }
};
