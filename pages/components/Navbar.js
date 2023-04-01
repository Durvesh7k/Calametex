import { BiCategory, BiFontSize, BiSun } from "react-icons/bi";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';


const Navbar = () => {
    return (
        <div className="p-3  fixed-top bg-blue-100 rounded-lg shadow-lg flex justify-between items-center">
            <div className="left flex items-center">

                <Link href="/" className="px-2 mr-2 border-r flex border-gray-800 items-center">
                    <img src="https://clipground.com/images/helping-hand-icon-png-9.jpg" alt="alt placeholder" className="rounded-full w-8 h-8 inline mx-auto" />
                    <h1 className="text-xl font-bold text-gray-900 ml-2">Calametex</h1>
                </Link>
               
                <Link href="/Dashboard" className=" rounded-full cursor-pointer py-2 px-2 ml-2 ">
                    <p className='text-gray-800 hover:text-blue-400'>Dashboard </p>
                </Link>
                <Link href="/CreateCampaign" className=" rounded-full cursor-pointer py-2 px-2 ml-2 ">
                    <p className='text-gray-800 hover:text-blue-400'>NewCampaign </p>
                </Link>
                <Link href="/MyCampaign" className=" rounded-full cursor-pointer py-2 px-2 ml-2 ">
                    <p className='text-gray-800 hover:text-blue-400'>MyCampaigns </p>
                </Link>
                
                <span className="text-gray-800 cursor-pointer py-2 px-2 ml-2 hover:text-blue-400 rounded-full">
                   <p>Logout</p>
                </span>
                
            </div>
            <span className="hover:text-white cursor-pointer flex items-center relative float-right mr-3">
                <BiSun size={22} className="text-gray-800 mr-3" />
                <ConnectButton style={{fontSize:"0.8rem"}} />
            </span>
        </div>
    )
}

export default Navbar