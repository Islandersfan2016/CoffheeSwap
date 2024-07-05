require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const { ALCHEMY_API_KEY, PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.4",
        settings: {
          evmVersion: "istanbul",
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {
      rinkeby: {
        url: https://eth-rinkeby.alchemyapi.io/v2/$%7BALCHEMY_API_KEY%7D,
          accounts: [0x${PRIVATE_KEY}],
      },
    },
  },
};
