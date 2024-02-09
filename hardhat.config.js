// Hardhat configuration
module.exports = {
  solidity: "0.8.20",
  networks: {
    rskMainnet: {
      url: "https://public-node.rsk.co",
      chainId: 30,
      gasPrice: 60000000,
    },
    rskTestnet: {
      url: "https://public-node.testnet.rsk.co",
      chainId: 31,
      gasPrice: 60000000,
    }
  }
};
