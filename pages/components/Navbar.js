import React from 'react'
import clamatex from '../assets/logo.jpg'
import { BiCategory, BiFontSize, BiSun } from "react-icons/bi";
import { HiOutlineCash,HiOutlineSpeakerphone, HiOutlineUserCircle,HiOutlineLogout, HiSearch, HiLogout } from "react-icons/hi";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';


const Navbar = () => {
    return (
        <div className="p-3 text-gray-700 fixed-top bg-gray-900 rounded-lg shadow-lg flex justify-between items-center">
            <div className="left flex items-center">

                <Link href="/dashboard" className="px-2 mr-2 border-r flex border-gray-800 items-center">
                    <img src="https://clipground.com/images/helping-hand-icon-png-9.jpg" alt="alt placeholder" className="rounded-full w-8 h-8 inline mx-auto" />
                    <h1 className="text-xl font-bold text-gray-200 ml-2">Calametex</h1>
                </Link>
                <Link href="/dashboard"  className=" hover:text-white cursor-pointer py-2 px-2 ml-2 hover:bg-gray-800 rounded-full">
                    <BiCategory size={22} className="text-gray-300  hover:bg-gray-800 rounded-full hover:text-sky-400" />
                </Link>
                <Link href="/create_campain" className=" hover:text-white cursor-pointer py-2 px-2 ml-2 hover:bg-gray-800 rounded-full">
                    <HiOutlineSpeakerphone size={22} className="text-gray-300  hover:bg-gray-800 rounded-full hover:text-sky-400" />
                </Link>
                <span className=" hover:text-white cursor-pointer py-2 px-2 ml-2 hover:bg-gray-800 rounded-full">
                    <HiOutlineCash size={22} className="text-gray-300  hover:bg-gray-800 rounded-full hover:text-sky-400" />
                </span>
                <span className=" hover:text-white cursor-pointer py-2 px-2 ml-2 hover:bg-gray-800 rounded-full">
                    <HiOutlineUserCircle size={22} className="text-gray-300  hover:bg-gray-800 rounded-full hover:text-sky-400" />
                </span>
                <span className=" hover:text-white cursor-pointer py-2 px-2 ml-2 hover:bg-gray-800 rounded-full">
                    <HiSearch size={22} className="text-gray-300  hover:bg-gray-800 rounded-full hover:text-sky-400" />
                </span>
                <span className=" hover:text-white cursor-pointer py-2 px-2 ml-2 hover:bg-gray-800 rounded-full">
                    <HiOutlineLogout size={22} className="text-gray-300  hover:bg-gray-800 rounded-full hover:text-sky-400" />
                </span>
                
            </div>
            <span className="hover:text-white cursor-pointer flex items-center relative float-right mr-3">
                <BiSun size={22} className="text-gray-300 mr-3" />
                <ConnectButton style={{fontSize:"0.8rem"}} />
            </span>
        </div>
    )
}

export default Navbar