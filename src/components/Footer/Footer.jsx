import React from 'react'
import { FaMoneyBillTransfer } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='h-130 sm:h-110 font-Popins flex justify-center gap-15 bg-[#00AC06]/50'>
        <div className='h-full hidden bg-cover sm:block w-1/3 bg-no-repeat bg-center bg-[url(/footerImg.png)]'></div>
        <div className='w-2/3 px-10 py-10'>
            <div className='flex items-center gap-3 text-[#00AC06]'>
                <span className='text-[5vmax] '><FaMoneyBillTransfer /></span>
                <h1 className='font-bold text-[2vmax] sm:text-[3vmax] '>Lend2Friend</h1>    
            </div>
            <div className='flex justify-between pt-10'>
                <ul>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Contact Support</li>
                </ul>
                <ul>
                    <li>How it works</li>
                    <li>Saftey & Trust</li>
                    <li>FAQ's</li>
                </ul>
            </div>
            <div className='relative pt-20'>
                <p>📧 Email Us: support@borrow2buddy.com</p>

                <div className='text-center text-[#4C4C4C] pt-12'>
                    <a href="">Term of Services </a>
                    <a href="">Privacy & Policy </a>
                    <a href="">RBI Compilance </a>
                </div>
                <p className='text-center text-[#00AC06]'>© 2024 Lend2Friend. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer