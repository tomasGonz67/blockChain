require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const INFURA_API_KEY = process.env.INFURA_API_KEY;
const SEPOLIA_PRIVATE_KEY ="a8bd8eea26f30b14752864fd9c0a36d27a3f3dee1192360a40ce4e11e2f470df"; // Ensure this matches .env

console.log("INFURA_API_KEY:", INFURA_API_KEY); // Should log the API key or undefined
console.log("SEPOLIA_PRIVATE_KEY:", SEPOLIA_PRIVATE_KEY); // Should log the private key or undefined

module.exports = {
    solidity: "0.8.24",
    networks: {
        sepolia: {
            url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
            accounts: [`0x${SEPOLIA_PRIVATE_KEY}`], // Ensure private key is correct
        },
    },
};