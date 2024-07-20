const { ethers } = require("hardhat");

async function main() {
  // Get the contract owner
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contract from: ${deployer.address}`);

  // Get the contract factory
  const Token = await ethers.getContractFactory("Token");

  // Deploy the contract
  console.log("Deploying Token...");
  const token = await Token.deploy(); // No constructor parameters needed

  // Wait for the contract to be deployed
  const receipt = await token.deploymentTransaction().wait() // Ensure deployment is confirmed

  // Log the contract address and transaction receipt
  console.log(`Token deployed to: ${token.address}`);
  console.log(`Transaction receipt: ${receipt.transactionHash}`);
}

// Run the main function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error during deployment:", error);
    process.exitCode = 1;
  });