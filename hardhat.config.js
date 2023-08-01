require("@nomicfoundation/hardhat-toolbox");

SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        // sepolia: {
        //     url: SEPOLIA_RPC_URL,
        //     accounts: [privateKey]
        // },
    },
    solidity: "0.8.19",
};
