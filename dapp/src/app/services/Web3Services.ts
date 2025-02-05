import { ethers } from "ethers";
import ABI from "./ABI.json"
import { Contract } from "ethers";
import { Transaction } from "ethers";

const CONTRACT_ADDRESS: string = `${process.env.CONTRACT_ADDRESS}`;
const NTF_PRICE: bigint = ethers.parseEther(`${process.env.NTF_PRICE}`);
const CHAIN_ID: number = parseInt(`${process.env.CHAIN_ID}`);

export async function login(): Promise<string> {
    if(!window.ethereum) throw new Error("Wallet not found!");

    const provider = new ethers.BrowserProvider(window.ethereum);

    const accounts: string[] = await provider.send("eth_requestAccounts", []);

    if(!accounts || !accounts.length) throw new Error("Wallet not permitted!");

    await provider.send("wallet_switchEthereumChain", [{
        chainId: ethers.toBeHex(CHAIN_ID)
    }])

    return accounts[0];

}

export async function mint(quantity:number): Promise<string | null>{
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider );
    
    const signer = await provider.getSigner();
    const instance = contract.connect(signer) as Contract;

    const value = NTF_PRICE* ethers.toBigInt(quantity);

    const tx = await instance.mint(quantity, {value}) as Transaction;

    return tx.hash;
    
}
