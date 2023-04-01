import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { useStateContext } from './context'
import { ethers } from 'ethers'
import { useRouter } from 'next/router'


const CreateCampaign = () => {

    const { contractABI, crowdFundAddress,address } = useStateContext();
    const router =  useRouter();

    const publishCampaign = async (data) => {
        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const contract = new ethers.Contract(
                    crowdFundAddress,
                    contractABI,
                    signer
                )

                const pubTx = await contract.createCampaign(
                    address,
                    data.title,
                    data.description,
                    data.target,
                    Number(data.deadline.slice(0, 10).split('-').join('')),
                    data.image,
                )
                pubTx.wait();
                router.push("/Dashboard")

            }
            else {
                console.log("Eth object not found")
            }
        } catch (e) {
            console.log(e);
        }
    }


    const [data, setData] = useState({
        name: '',
        title: '',
        description: '',
        target: '',
        deadline: '',
        image: ''
    });

    const handleFormFieldChange = (fieldName, e) => {
        setData({ ...data, [fieldName]: e.target.value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await publishCampaign(data)
        } catch (e) {
            console.log(e);
        }

    }







    return (
        <div className='min-h-screen pb-12 home-bg  max-w-screen text-black font-semibold'>
            {/* Navbar */}
            <div className="container mx-auto py-3">
                <Navbar />
            </div>

            {/* List Grid */}
            <h2 className="text-2xl font-bold text-gray-900 py-6 pb-8 text-center ">Start Campaign</h2>
            <form onSubmit={handleSubmit} >
                <div className="container  rounded-md mx-auto p-12">
                    <div className="flex gap-8">
                        <div className="w-2/4 pl-12">
                            <label htmlFor="name" className='text-gray-800 font-medium '>Your Name</label>
                            <input onChange={(e) => handleFormFieldChange('name', e)} type="text" className='w-full px-4 py-2  rounded-lg focus:border-blue-400 mt-2 outline-none border-[1px] border-gray-700 bg-transparent placeholder:text-gray-800 text-black' />
                        </div>
                        <div className="w-2/4 pr-12">
                            <label htmlFor="name" className='text-gray-800 font-medium '>Campaign Title</label>
                            <input onChange={(e) => handleFormFieldChange('title', e)} type="text" className='w-full px-4 py-2  rounded-lg focus:border-blue-400 mt-2 outline-none border-[1px] border-gray-700 bg-transparent placeholder:text-gray-800 text-black' />
                        </div>
                    </div>
                    <div className="text p-12">
                        <label htmlFor="name" className='text-gray-800 font-medium '>Description</label>

                        <textarea onChange={(e) => handleFormFieldChange('description', e)} className='w-full px-4 py-2  rounded-lg focus:border-blue-400 mt-2 outline-none border-[1px] border-gray-700 bg-transparent placeholder:text-gray-800 text-black' />
                    </div>
                    <div className="flex gap-8">
                        <div className="w-2/4 pl-12">
                            <label htmlFor="name" className='text-gray-800 font-medium '>Goal</label>
                            <input onChange={(e) => handleFormFieldChange('target', e)} type="text" className='w-full px-4 py-2  rounded-lg focus:border-blue-400 mt-2 outline-none border-[1px] border-gray-700 bg-transparent placeholder:text-gray-800 text-black' />
                        </div>
                        <div className="w-2/4 pr-12">
                            <label htmlFor="name" className='text-gray-800 font-medium '>Campaign End Date</label>
                            <input onChange={(e) => handleFormFieldChange('deadline', e)} type="date" className='w-full px-4 py-2  cursor-pointer rounded-lg focus:border-blue-400 mt-2 outline-none border-[1px] border-gray-700 bg-transparent placeholder:text-gray-800 text-black' />
                        </div>
                    </div>
                    <div className="text p-12 pb-2">
                        <label htmlFor="name" className='text-gray-800 font-medium '>Image</label>
                        <input onChange={(e) => handleFormFieldChange('image', e)} type="text" className='w-full px-4 py-2  rounded-lg focus:border-blue-400 mt-2 outline-none border-[1px] border-gray-700 bg-transparent placeholder:text-gray-800 text-black' ></input>
                    </div>


                    <div className="w-full flex items-center p-12">
                        <button type='submit' className="btn px-8 py-3 text-xl rounded-lg bg-blue-400 text-white font-bold hover:bg-blue-600">
                            Submit Campaign
                        </button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default CreateCampaign