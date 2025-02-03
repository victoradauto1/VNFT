import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,
    NTF_PRICE: process.env.NTF_PRICE,
    OPENSEA_URL: process.env.OPENSEA_URL,
    CHAIN_ID: process.env.CHAIN_ID,
  },
};

export default nextConfig;
