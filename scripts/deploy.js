const { ethers } = require("hardhat");

async function main() {
  // Get the contract owner
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contract from: ${deployer.address}`);

  // Get the contract factory
  const Token = await ethers.getContractFactory("Token");

  // Deploy the contract and pass the deployer's address as the initial owner
  console.log("Deploying Token...");
  const token = await Token.deploy(deployer.address);
  await token.deployed();
  console.log(`Token deployed to: ${token.address}`);
}

// Run the main function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });