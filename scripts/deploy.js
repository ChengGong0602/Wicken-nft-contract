async function main() {
  // Grab the contract factory 
  const WickenNFT = await ethers.getContractFactory("WickenNFT");

  // Start deployment, returning a promise that resolves to a contract object
  const wickenNFT = await WickenNFT.deploy(); // Instance of the contract 
  console.log("Contract deployed to address:", wickenNFT.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });