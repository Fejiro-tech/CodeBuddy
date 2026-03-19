import React from 'react'
import { Menu } from "lucide-react"
import Link from 'next/link'

const TopBar = ({isMobileSidebarOpen, setIsMobileSidebarOpen}) => {
  return (
    <div className='bg-[#1e1e1e] backdrop-blur-md border-b border-white/15 w-full flex  items-center justify-between py-6 px-8'>
      <Link className='flex items-center' href="/">
        <span className=" text-[20px] md:text-[22px] lg:text-[24px]  font-extrabold pr-2 text-[#55d627]">
          &lt;/&gt;
        </span>
        <p className='text-[20px] md:text-[22px] lg:text-[24px] font-extrabold'>CodeBuddy</p>
      </Link>

      <div className='gap-2 items-center hidden lg:flex'>
      
        <span className='w-2 md:w-4 h-2 md:h-4 bg-[#7fdb5d] rounded-full'></span>
        <span className='w-2 md:w-4 h-2 md:h-4 bg-[#7fdb5d] rounded-full'></span>
        <span className='w-2 md:w-4 h-2 md:h-4 bg-[#7fdb5d] rounded-full'></span>
      </div>
     

      <button onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)} className='text-2xl font-bold  lg:hidden'>
        <Menu size={24} className='text-[#7fdb5d]'/>
      </button>
        
    </div>
  )
}

export default TopBar