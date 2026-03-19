'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu } from "lucide-react"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-transparent z-30 relative w-full'>
        <div className='flex justify-between items-center bg-transparent max-w-6xl mx-auto py-8  '>
            <div className='flex items-center'>

                <span className=" text-[20px] md:text-[22px] lg:text-[24px]  font-bold pr-2 text-[#55d627]">
                    &lt;/&gt;
                </span>
                <p className='text-[20px] md:text-[22px] lg:text-[24px] font-extrabold'>CodeBuddy</p>
            </div>

            <div className='space-x-6 lg:space-x-10 text-[18px] lg:text-[20px] font-bold uppercase hidden md:block'>
                <Link href="/" className="hover:text-[#FF5722]">Home</Link>
                <Link href="#features" className="hover:text-[#FF5722]">Features</Link>
                <Link href="/chatPage" className="hover:text-[#FF5722]">Start Chatting</Link>
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className='text-2xl font-bold  block md:hidden'>
                <Menu size={24} className='text-[#7fdb5d]'/>
            </button>
        </div>

        {isOpen && (
            <>
                <div className='bg-black/50 fixed inset-0 lg:hidden z-30' onClick={() => setIsOpen(false)}></div>
                <div className='w-68 h-screen bg-[#1e1e1e] top-0 left-0 fixed md:hidden z-40 transition-transform duration-300 translate-x-0 px-10 py-20 flex flex-col gap-12 text-[16px] sm:text-[18px] md:text-[20px] font-bold uppercase text-[#55d627]'>
                
                    <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-[#FF5722]">Home</Link>
                    <Link href="#features" onClick={() => setIsOpen(false)} className="hover:text-[#FF5722]">Features</Link>
                    <Link href="/chatPage" onClick={() => setIsOpen(false)} className="hover:text-[#FF5722]">Start Chatting</Link>
                    
                    
                </div>
            </>
        )}
    </div>
  )
}

export default Navbar