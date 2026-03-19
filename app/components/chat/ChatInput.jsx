"use client"
import React, { useState } from 'react'
import { FiSend } from 'react-icons/fi'

const ChatInput = ({ onSend }) => {
  const [text, setText] = useState("")

  const handleSend = () => {
    if (!text.trim()) return
    onSend(text)
    setText("")
  }

  const handleKeyDown = (e) => {
    // Enter without Shift sends
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className='flex items-center w-full p-2 gap-2 bg-white/5 rounded-full shadow-inner'>
      
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder='Ask your question...'
        rows={1}
        className='flex-1 resize-none  text-white p-3 md:p-5 rounded-full outline-0'
      />

      <button
        onClick={handleSend}
        className='p-3 md:p-4 rounded-full bg-[#55d627] hover:bg-[#48b421] flex items-center justify-center transition-colors'
      >
        <FiSend className='w-5 h-5 text-white' />
      </button>
    </div>
  )
}

export default ChatInput