import React from 'react'
import { IoMdMail } from "react-icons/io";
import { MdAddCall } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

function Marqueline() {
  return (
    <div className='bg-blue-950 flex justify-end h-10 items-center text-white pr-3'>
        <div className='flex justify-end gap-5'>
            <div className='flex justify-around text-white items-center gap-2 border-r-1 pr-2'>
                <IoMdMail />
www.registerkro.com
            </div>
            <div className='flex justify-around text-white items-center gap-2 border-r-1 pr-2'>
                <MdAddCall />
+91 8447746183
            </div>
            <div className='flex justify-around text-white items-center gap-4'>
                <FaInstagram />
                <FaFacebook/>
                <FaTwitter />
                <FaPinterest />

            </div>
        </div>
    </div>
  )
}

export default Marqueline
