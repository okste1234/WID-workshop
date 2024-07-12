require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config();
import { vars } from "hardhat/config";

const ETHERSCAN_API_KEY = vars.get("ETHERSCAN_API_KEY");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: process.env.SEPOLIA_ALCHEMY_RPC_U,
      // @ts-ignore
      accounts: [process.env.PRIVATEKEY],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};