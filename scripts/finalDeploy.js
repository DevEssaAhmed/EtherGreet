const hre = require("hardhat");

async function main() {
  const greet = await hre.ethers.getContractFactory("greet");
  const contract = await greet.deploy(); //instance of contract

  await contract.deployed();
  console.log("Address of contract:", contract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
