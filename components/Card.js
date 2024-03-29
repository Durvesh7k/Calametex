import { useState } from "react"

export default function Card({ data, mounted }) {
	const [calamity, setCalamity]  = useState(mounted && data);


	return (
		<div className="relative mx-auto w-full cursor-pointer">
			<div className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
				<div className="shadow p-4 rounded-lg bg-white">
					<div className="flex justify-center relative rounded-lg overflow-hidden h-52">
						<div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
							<img src={calamity.image != null ? (
                                calamity.image
							) : (
								"https://static.vecteezy.com/system/resources/previews/001/843/828/non_2x/donate-money-for-charity-design-illustration-isolated-on-white-background-free-vector.jpg"
							)} className='border-r-2 ' alt="Images" />
						</div>

						<div className="absolute flex justify-center bottom-0 mb-3">
							<div className="flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow">
								<p className="flex items-center font-medium text-gray-800">
									{calamity.target.toString()}
								</p>
							</div>
						</div>

						<span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none">
							Featured
						</span>
					</div>

					<div className="mt-4">
						<h2 className="font-medium text-base md:text-lg text-gray-800 line-clamp-1" title="New York">
							{calamity.title}
						</h2>
						<p className="mt-2 text-sm text-gray-800 line-clamp-1" title="New York, NY 10004, United States">
							{calamity.description.slice(0, 150)}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

