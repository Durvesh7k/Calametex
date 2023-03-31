import Link from 'next/link'
import React from 'react'

const Card = () => {
return (
<div class="relative mx-auto w-full">
	<Link href="#" class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
	  <div class="shadow p-4 rounded-lg bg-white">
		<div class="flex justify-center relative rounded-lg overflow-hidden h-52">
		  <div class="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
			<img src="https://picsum.photos/300/200" className='border-r-2 ' alt="" />
		  </div>

		  <div class="absolute flex justify-center bottom-0 mb-3">
			<div class="flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow">
			  <p class="flex items-center font-medium text-gray-800">
				Total Ask: 1000
			  </p>
			</div>
		  </div>

		  <span class="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none">
			Featured
		  </span>
		</div>

		<div class="mt-4">
		  <h2 class="font-medium text-base md:text-lg text-gray-800 line-clamp-1" title="New York">
			Flood at Oddissa
		  </h2>
		  <p class="mt-2 text-sm text-gray-800 line-clamp-1" title="New York, NY 10004, United States">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit exercitationem nihil cupiditate doloremque, sed at?
		  </p>
		</div>
	  </div>
	</Link>
  </div>
)
}

export default Card