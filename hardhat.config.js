require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "eabf6bfbeb89737fab821b45e7...f**k ur mama's pussy8";

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  },
};
