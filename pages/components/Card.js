import React from 'react'

const Card = () => {
return (
<div class="sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer">
    <img src="https://cdn.mos.cms.futurecdn.net/MTNYEyWTNTPURkADAP2p7h.jpg" alt="fund"
        class="w-full h-[158px] object-cover rounded-[15px]" />
    <div class="flex flex-col p-4">    
        <div class="block">
            <h3 class="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">Building a
                PC</h3>
            <p class="mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] truncate">Building a PC
            </p>
        </div>
        <div class="flex justify-between flex-wrap mt-[15px] gap-2">
            <div class="flex flex-col">
                <h4 class="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">1.355633101000001</h4>
                <p
                    class="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">
                    Raised of 0.5</p>
            </div>
            <div class="flex flex-col">
                <h4 class="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">-107</h4>
                <p
                    class="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">
                    Days Left</p>
            </div>
        </div>
        <div class="flex items-center mt-[20px] gap-[12px]">
            <div class="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]">
                <img
                    src="https://clipground.com/images/helping-hand-icon-png-9.jpg" alt="user" class="w-1/2 h-1/2 object-fill"/></div>
            <p class="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">by <span
                    class="text-[#b2b3bd]">0xc44bfA9310F6DEf90718717cda2768D26855f80c</span></p>
        </div>
    </div>
</div>
)
}

export default Card