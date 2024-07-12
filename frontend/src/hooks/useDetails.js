import { useCallback } from "react";
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { getProvider } from "../constant/provider";
import { getContract, isSupportedChain } from "../constant/contract";



const useDetails = (name, age, sex) => {
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    return useCallback(async () => {
        if (!isSupportedChain(chainId)) return;
        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();

        const contract = getContract(signer);

        try {
            const transaction = await contract.setDetails(name, age, sex);
            console.log("transaction: ", transaction);
            const receipt = await transaction.wait();

            console.log("receipt: ", receipt);
        } catch (error) {
            console.log(error);
        }
    }, [age, chainId, name, sex, walletProvider]);
}

export default useDetails;
