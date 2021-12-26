require("dotenv").config();
const ethPriceFeed = process.env.MAINNET_PRICE_FEED;
const rinkebyPriceFeed = process.env.RINKEBY_PRICE_FEED;
const kovanPriceFeed = process.env.KOVAN_PRICE_FEED;

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const FundMe = await ethers.getContractFactory("FundMe");
  // Pass the price feed address to our fundme contract
  const fundMe = await FundMe.deploy(`${rinkebyPriceFeed}`);

  console.log("FundMe address:", fundMe.address);

  await hre.run("verify:verify", {
    address: fundMe.address,
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
