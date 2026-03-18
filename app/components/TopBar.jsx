import React from 'react'
import { Menu } from "lucide-react"

const TopBar = ({isMobileSidebarOpen, setIsMobileSidebarOpen}) => {
  return (
    <div className='bg-[#1e1e1e] backdrop-blur-md border-b border-white/15 w-full flex  items-center justify-between py-6 px-10'>
      <div className='flex gap-2 items-center'>
      
        <span className='w-3 md:w-4 h-3 md:h-4 bg-[#7fdb5d] rounded-full'></span>
        <span className='w-3 md:w-4 h-3 md:h-4 bg-[#7fdb5d] rounded-full'></span>
        <span className='w-3 md:w-4 h-3 md:h-4 bg-[#7fdb5d] rounded-full'></span>
      </div>
      <div className='flex'>
          <span className="text-gray-100 text-[18px] sm:text-[20px] md:text-[25px]  font-medium pr-2">
        &lt;/&gt;
      </span>
        <p className='text-[18px] md:text-[24px]  font-bold'>CodeBuddy</p>
      </div>

      <button onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)} className='text-2xl font-bold  lg:hidden'>
        <Menu size={24} className='text-[#7fdb5d]'/>
      </button>
        
    </div>
  )
}

export default TopBar