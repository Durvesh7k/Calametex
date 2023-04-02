require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks : {
    mumbai : {
      url: "https://polygon-mumbai.g.alchemy.com/v2/6zhpyX3NltSNXzIW7h-Twy-WDVk5VJeX",
      accounts: ["68f2b2981228d8acc3059f939435ecde94cce69a098778b2c1033e883c62c7df"]
    },

    Sphnix: {
      url: "https://sphinx.shardeum.org/",
      chainId: 8082,
      accounts:["68f2b2981228d8acc3059f939435ecde94cce69a098778b2c1033e883c62c7df"]
    },

    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/p81dxTl1Bup6K6dZsxvOYd_1cnmdjUDW",
      accounts: ["68f2b2981228d8acc3059f939435ecde94cce69a098778b2c1033e883c62c7df"]
    }

  },
};
