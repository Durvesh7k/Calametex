import React, { useContext, createContext, useState, useEffect } from 'react';
import { useAccount, useNetwork} from 'wagmi';
import { ethers } from 'ethers';
import { EditionMetadataWithOwnerOutputSchema } from '@thirdweb-dev/sdk';
import abi from '../contractsData/CrowdFunding.json'
import mumbaiContract from "../contractsData/CrowdFunding-sepolia-address.json";




const StateContext = createContext();

const StateContextProvider = ({ children }) => {

    const contractABI = abi.abi;
    const crowdFundAddress = mumbaiContract.address
    const {address, isConnected} = useAccount();

    return (
        <StateContext.Provider
            value={{
                contractABI,
                crowdFundAddress,
                address,
                isConnected
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const  useStateContext = () => useContext(StateContext);

export default StateContextProvider;