require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const { INFURA_API_KEY, SEPOLIA_PRIVATE_KEY } = process.env;


module.exports = {
    solidity: "0.8.24",
    networks: {
        sepolia: {
            url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
            accounts: [`0x${SEPOLIA_PRIVATE_KEY}`], // Ensure private key is correct
        },
    },
};