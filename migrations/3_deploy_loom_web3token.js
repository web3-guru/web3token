const LoomWeb3Token = artifacts.require("LoomWeb3Token");

module.exports = async function(deployer) {
    if (network === "loom") {
        await deployer.deploy(LoomWeb3Token);
    }
};
