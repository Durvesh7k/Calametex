import { useRouter } from "next/router"
import { useState, useEffect } from "react";
import Navbar from '../../components/Navbar'
import Image from "next/image";
import { useStateContext } from "../context";
import { ethers } from "ethers";


export default function Calamity() {

    const router = useRouter();
    const { contractABI, crowdFundAddress } = useStateContext();
    const [amount, setAmount] = useState('');
    const { query: { calamityObj } } = router;
    const [campaignObj, setCampaignObj] = useState({});
    const [donators, setDonators] = useState([]);
    const [donateAmt, setDonateAmt] = useState([]);


    useEffect(() => {
        try {
            if (calamityObj != null) {
                let campaign = JSON.parse(calamityObj);
                setCampaignObj(campaign);
            }
        } catch (e) {
            console.log('Message: ', e.message);
        }


    }, [calamityObj])


    const donateCampaign = async () => {
        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const contract = new ethers.Contract(
                    crowdFundAddress,
                    contractABI,
                    signer
                )

                const donateTx = await contract.donateToCampaign(campaignObj.id, { value: ethers.utils.parseEther(amount) });
                donateTx.wait();

                alert("Donated to the campaign")
            } else {
                console.log("eth object not found")
            }
        } catch (e) {
            console.log(e);
        }

    }


    const getDonations = async () => {
        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const contract = new ethers.Contract(
                    crowdFundAddress,
                    contractABI,
                    signer
                )

                const campDonations = await contract.getDonators(campaignObj.id);

                setDonators(campDonations[0]);
                setDonateAmt(campDonations[1]);
            } else {
                console.log("eth object not found")
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getDonations();
    }, [campaignObj.id, donators])

    return (
        <>
            <div className='min-h-screen max-w-screen  text-gray-800 font-semibold'>
                <div className='px-4 container  mx-auto'>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-center text-gray-700">Campaign - {campaignObj.title} </h2>
                    <div className="flex container flex-col mx-auto w-10/12">
                        <img src={campaignObj.image}
                            className='rounded-lg w-full mx-auto mt-8 max-h-[400px]' alt="img" />


                        <div className="creator-box">
                            <h3 className='mt-4 mb-2 text-black font-bold text-xl'>Creator</h3>
                            <div className="flex items-center">
                                <img
                                    className='h-12 w-12 rounded-full '
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkDVDRhcwX5vFbA3CJlA1-tyf_2VOG2FwG7w&usqp=CAU"
                                    alt="Image" />
                                <h4 className="text-xl ml-4 font-medium text-gray-900">{campaignObj.owner}</h4>
                            </div>
                        </div>
                        <h4 className='text-xl font-bold text-gray-900 my-8'>Description</h4>
                        <p className='text-gray-800 text-justify'>{campaignObj.description}</p>

                        <div className="flex w-full">

                            <div className="w-4/6 ">
                                <h4 className="font-epilogue font-semib
                                old text-xl mt-8 font-bold text-gray-900">Donors</h4>
                                <div className="mt-[20px] flex flex-col gap-4">
                                    {donators != null ? (
                                        <div>
                                            {
                                                donators.map((donator, i) => {
                                                    return (
                                                        <div className="flex justify-between items-center gap-4" key={i}>
                                                            <p className="font-epilogue font-semibold text-[16px] text-black leading-[26px] break-ll">
                                                                {i}. {donator}
                                                            </p>
                                                            <p className="font-epilogue font-bold text-[16px] text-gray-700 leading-[26px] break-ll">
                                                                {ethers.utils.formatEther(donateAmt[i].toString())}
                                                            </p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    ) : (
                                        <span>No donations.....</span>
                                    )}
                                </div>
                            </div>
                            <div className="w-2/6 p-2 mt-16 ml-8">
                                <div className="w-full p-6 rounded-lg bg-blue-200 flex items-center flex-col">
                                    <label htmlFor="name" className='text-gray-900 text-xl text-center my-3 mx-auto font-medium '>Fund for Calamity</label>
                                    <input onChange={e => setAmount(e.target.value)} type="text" className='w-full px-4 py-2  bg-white rounded-lg focus:border-blue-400 mt-2 outline-none border-[1px] border-gray-700 bg-transparent placeholder:text-gray-800 text-gray-900' />
                                    <button onClick={donateCampaign} className="bg-blue-500 px-10 py-2 mt-6 w-full mb-5 text-bold text-text-200  font-medium text-white rounded-xl">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}