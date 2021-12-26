require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
// console.log(INFURA_PROJECT_ID);
const infuraId = process.env.INFURA_PROJECT_ID;
const pk = process.env.PRIVATE_KEY;
const etherscanApiKey = process.env.ETHERSCAN_API_KEY;

module.exports = {
  solidity: "0.8.7",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${infuraId}`,
      accounts: [`${pk}`],
    },
  },
  etherscan: {
    apiKey: `${etherscanApiKey}`,
  },
};
