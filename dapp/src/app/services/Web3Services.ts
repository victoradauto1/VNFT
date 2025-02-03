import { ethers } from "ethers";

const CONTRACT_ADDRESS: string = `${process.env.CONTRACT_ADDRESS}`;
const NTF_PRICE: bigint = ethers.parseEther(`${process.env.NTF_PRICE}`);

export async function login(): Promise<string> {
    if(!window.ethereum) throw new Error("Wallet not found!");

    const provider = new ethers.BrowserProvider(window.ethereum);

    const accounts = await provider.send("eth_requestAccounts", []);
}
