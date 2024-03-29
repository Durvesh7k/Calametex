require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks : {
    mumbai : {
      url: `${process.env.MUMBAI_RPC_URL}`,
      accounts: [`${process.env.PRIVATE_KEY}`]
    },

    Sphnix: {
      url: "https://sphinx.shardeum.org/",
      chainId: 8082,
      accounts:[`${process.env.PRIVATE_KEY}`]
    },

  },
};
