import Link from 'next/link';
import Card from './components/Card';
import Navbar from './components/Navbar';
import { useStateContext } from './context';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { Router, useRouter } from 'next/router';
import useIsMounted from './hooks/useIsMounted';
import Loading from './components/Loading';

export default function Mycampaign() {
    const { contractABI, crowdFundAddress, address, isConnected } = useStateContext();
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(false);
    const mounted = useIsMounted();


    const getAllCampaigns = async () => {
        try {
            setLoading(true);
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const contract = new ethers.Contract(
                    crowdFundAddress,
                    contractABI,
                    signer
                )

                const campaigns = await contract.getCampaigns();
                let campaignClean = [];
                campaigns.forEach((calamity, i) => {
                    if (calamity.owner === address) {
                        campaignClean.push({
                            id: i,
                            owner: calamity.owner,
                            title: calamity.title,
                            description: calamity.description,
                            target: calamity.target,
                            deadline: calamity.deadline,
                            amountsCollected: calamity.amountCollected,
                            image: calamity.image,
                            donators: calamity.donators,
                            donations: calamity.donations
                        })
                    }
                });
                setCampaigns(campaignClean)
                setLoading(false);
            }
            else {
                console.log("Eth object not found")
            }

        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getAllCampaigns();

    }, [])

    useEffect(() => {
        console.log(campaigns)
    }, [campaigns])




    return (
        <div className='min-h-screen max-w-screen  font-semibold'>
            {/* Navbar */}


            {/* List Grid */}

            <div className='px-4 container mx-auto'>
                <h2 className="text-xl font-bold mt-8 mb-4 text-center text-gray-900">My campaigns ({campaigns.length}) </h2>
                {mounted &&
                    <>
                        {isConnected ? (
                            <div>
                                {!loading ? (
                                    <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                                        {
                                            campaigns.map((calamity, i) => {
                                                return (
                                                    <div key={i}>
                                                        <Link href={{
                                                            pathname: '/calamities/[calamityId]',
                                                            query: {
                                                                calamityObj: JSON.stringify(calamity),
                                                                calamityId: calamity.title
                                                            }
                                                        }}
                                                        >
                                                            <Card data={calamity} />
                                                        </Link>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                ) : (
                                    <Loading />
                                )
                                }
                            </div>
                        ) : (
                            <span>Connecting....</span>
                        )}

                    </>
                }
            </div >
        </div >
    );
};
