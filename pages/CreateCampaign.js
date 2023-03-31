import Navbar from "./components/Navbar"

const CreateCampain = () => {
    return (
        <div className='min-h-screen pb-12  max-w-screen text-gray-200'>
            {/* Navbar */}
            <div className="container mx-auto py-3">
                <Navbar />
            </div>

            {/* List Grid */}
            <h2 className="text-2xl font-bold text-gray-900 py-6 pb-8 text-center ">Start Campaign</h2>
            <div className="container  rounded-md mx-auto p-12 text-gray-200">
                <div className="flex gap-8">
                    <div className="w-2/4 pl-12">
                        <label htmlFor="name" className='text-gray-800 font-medium '>Your Name</label>
                        <input type="text" className='w-full px-4 py-2  rounded-lg focus:border-blue-400 mt-2 outline-none border-[1px] border-gray-700 bg-transparent placeholder:text-gray-800 text-white' />
                    </div>
                    <div className="w-2/4 pr-12">
                        <label htmlFor="name" className='text-gray-800 font-medium '>Campaign Title</label>
                        <input type="text" className='w-full px-4 py-2  rounded-lg focus:border-blue-400 mt-2 outline-none border-[1px] border-gray-700 bg-transparent placeholder:text-gray-800 text-white' />
                    </div>
                </div>
                <div className="text p-12">
                    <label htmlFor="name" className='text-gray-800 font-medium '>Description</label>

                    <textarea className='w-full px-4 py-2  rounded-lg focus:border-blue-400 mt-2 outline-none border-[1px] border-gray-700 bg-transparent placeholder:text-gray-800 text-white' ></textarea>
                </div>
                <div className="flex gap-8">
                    <div className="w-2/4 pl-12">
                        <label htmlFor="name" className='text-gray-800 font-medium '>Goal</label>
                        <input type="text" className='w-full px-4 py-2  rounded-lg focus:border-blue-400 mt-2 outline-none border-[1px] border-gray-700 bg-transparent placeholder:text-gray-800 text-white' />
                    </div>
                    <div className="w-2/4 pr-12">
                        <label htmlFor="name" className='text-gray-800 font-medium '>Campaign End Date</label>
                        <input type="date" className='w-full px-4 py-2  cursor-pointer rounded-lg focus:border-blue-400 mt-2 outline-none border-[1px] border-gray-700 bg-transparent placeholder:text-gray-800 text-white' />
                    </div>
                </div>
                <div className="text p-12 pb-2">
                    <label htmlFor="name" className='text-gray-800 font-medium '>Image</label>

                    <input type="file" className='w-full px-4 py-2  rounded-lg focus:border-blue-400 mt-2 outline-none border-[1px] border-gray-700 bg-transparent placeholder:text-gray-800 text-white' ></input>
                </div>


                <div className="w-full flex items-center p-12">
                    <button className="btn px-8 py-3 text-xl rounded-lg bg-blue-400 text-white font-bold">
                        Submit Campaign
                    </button>
                </div>
            </div>

        </div>
    )
}

export default CreateCampain