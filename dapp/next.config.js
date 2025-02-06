const nextConfig = {
  output: "export",
  env: {
    CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,
    NTF_PRICE: process.env.NTF_PRICE,
    OPENSEA_URL: process.env.OPENSEA_URL,
    CHAIN_ID: process.env.CHAIN_ID,
  },
};

module.exports = nextConfig;

