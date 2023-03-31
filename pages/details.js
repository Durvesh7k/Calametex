import React from 'react'
import Navbar from './components/Navbar'

const details = () => {
    return (
        <>
            <div className='min-h-screen max-w-screen text-gray-200'>
                {/* Navbar */}
                <div className="container mx-auto py-3">
                    <Navbar />
                </div>

                {/* List Grid */}
                <div className='px-4 container  mx-auto'>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-center text-gray-100">Campaign - Crowd Funding for
                        Earthquake that occured at Nepal </h2>
                    <div className="flex container flex-col mx-auto w-10/12">
                        <img src="https://cdn.mos.cms.futurecdn.net/MTNYEyWTNTPURkADAP2p7h.jpg"
                            className='rounded-lg w-full mx-auto mt-8 max-h-[400px]' alt="img" />


                        <div className="creator-box">
                            <h3 className='mt-4 mb-2 text-teal-50 font-bold text-xl'>Creator</h3>
                            <div className="flex items-center">
                                <img className='h-12 w-12 rounded-full '
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkDVDRhcwX5vFbA3CJlA1-tyf_2VOG2FwG7w&usqp=CAU"
                                    alt="" />
                                <h4 className="text-xl ml-4 font-medium text-white">Durvesh CHopade</h4>
                            </div>
                        </div>
                        <h4 className='text-xl font-bold text-white my-8'>Description</h4>
                        <p className='text-gray-200 text-justify	'> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Eaque ad numquam quasi aliquam nisi. Voluptas nihil est similique sint vel non obcaecati deleniti ab
                            repellat dolores voluptatem architecto porro sit, facere voluptates cum. Architecto consectetur fuga
                            quae, aut nisi eligendi quasi? Voluptatum porro nesciunt adipisci quia sunt, iusto quibusdam
                            consequuntur quisquam at harum sint aliquam corrupti a in nihil laboriosam? Quo eos rem esse,
                            officia voluptas in quaerat nisi unde nostrum nobis! Voluptate, corporis, expedita totam nostrum
                            sequi, obcaecati consectetur id fuga dolorum recusandae consequatur ducimus est. </p>

                        <div className="flex w-full">

                            <div className="w-4/6 ">
                                <h4 class="font-epilogue font-semib
                                old text-xl mt-8 font-bold text-white">Donors</h4>
                                <div class="mt-[20px] flex flex-col gap-4">
                                    <div class="flex justify-between items-center gap-4">
                                        <p class="font-epilogue font-normal text-[16px] text-[#b2b3bd] leading-[26px] break-ll">
                                            1. 0x2564c11B42fcCFd2Da75f482223fd8Ee9D0AFa5f</p>
                                        <p class="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] break-ll">0.05</p>
                                    </div>
                                    <div class="flex justify-between items-center gap-4">
                                        <p class="font-epilogue font-normal text-[16px] text-[#b2b3bd] leading-[26px] break-ll">
                                            1. 0x2564c11B42fcCFd2Da75f482223fd8Ee9D0AFa5f</p>
                                        <p class="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] break-ll">0.05</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-2/6 p-2 mt-16 ml-8">
                                <div className="w-full p-6 rounded-lg bg-slate-900 flex items-center flex-col">
                                        <label htmlFor="name" className='text-gray-400 text-xl text-center my-3 mx-auto font-medium '>Fund for Calamity</label>
                                        <input type="text" className='w-full px-4 py-2  rounded-lg focus:border-blue-400 mt-2 outline-none border-[1px] border-gray-700 bg-transparent placeholder:text-gray-800 text-white' />
                                    <button className="bg-blue-400 px-10 py-2 mt-6 w-full mb-5 text-bold text-white rounded-xl">
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

export default details


