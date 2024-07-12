import { ethers } from "ethers";
import Abi from "./abi.json";
import { SUPPORTED_CHAIN } from "../connection";


export const getContract = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_contractAddress,
        Abi,
        providerOrSigner
    );

export const isSupportedChain = (chainId) =>
    Number(chainId) === SUPPORTED_CHAIN;

