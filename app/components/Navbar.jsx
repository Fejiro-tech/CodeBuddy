import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-transparent z-30 relative w-full'>
        <div className='flex justify-between items-center bg-transparent max-w-6xl mx-auto py-8 px-8 md:px-0'>
            <div className='flex items-center'>

                <span className=" text-[18px] sm:text-[20px] md:text-[25px]  font-bold pr-2 text-[#55d627]">
                    &lt;/&gt;
                </span>
                <p className='text-[18px] md:text-[24px] font-extrabold'>CodeBuddy</p>
            </div>

            <div className='space-x-4 md:space-x-10 text-[16px] sm:text-[18px] md:text-[20px] font-bold uppercase'>
                <Link href="/" className="hover:text-[#FF5722]">Home</Link>
                <Link href="#features" className="hover:text-[#FF5722]">Features</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar