import React, { useContext, createContext, useState, useEffect } from 'react';
import { useAccount, useContract, useProvider, useContractWrite, usePrepareContractWrite, useSigner } from 'wagmi';
import { ethers } from 'ethers';
import { EditionMetadataWithOwnerOutputSchema } from '@thirdweb-dev/sdk';
import abi from '../contractsData/CrowdFunding.json'
import contractAddress from "../contractsData/CrowdFunding-address.json";




const StateContext = createContext();

export const StateContextProvider = ({ children }) => {

    const contractABI = abi.abi;
    const crowdFundAddress = contractAddress.address
    const {address} = useAccount();


    return (
        <StateContext.Provider
            value={{
                contractABI,
                crowdFundAddress,
                address
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);