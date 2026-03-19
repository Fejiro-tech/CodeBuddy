'use client'
import React, { useEffect, useState } from 'react'
import TopBar from '../components/TopBar'
import SideBar from '../components/SideBar'
import ChatContainer from '../components/chat/ChatContainer'

const Chat = () => {
  const [messages, setMessages] = useState([])
  const [chats, setChats] = useState([])
  const [activeChatIndex, setActiveChatIndex] = useState(null)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const [currentChatId, setCurrentChatId] = useState(Date.now())
  const [stopTypingFunc, setStopTypingFunc] = useState(() => () => {})

  // Load saved chats
  useEffect(() => {
    const savedChats = localStorage.getItem("chats")
    if (savedChats) setChats(JSON.parse(savedChats))
  }, []) 

  // Save chats
  useEffect(() => {
    localStorage.setItem("chats", JSON.stringify(chats))
  }, [chats])

  return (
    <div className=''>
      {/* Top bar */}
      <div className='fixed top-0 left-0 w-full h-16 flex items-center z-30'>
        <TopBar 
          isMobileSidebarOpen={isMobileSidebarOpen}
          setIsMobileSidebarOpen={setIsMobileSidebarOpen}
        />
      </div>

      <div className='flex w-full relative'>
        {/* Desktop sidebar */}
        <div className='w-[20%] fixed top-16 left-0 h-[calc(100vh-4rem)] hidden lg:block'>
          <SideBar 
            chats={chats}
            setChats={setChats}
            messages={messages} 
            setMessages={setMessages}
            activeChatIndex={activeChatIndex}
            setActiveChatIndex={setActiveChatIndex}
            setCurrentChatId={setCurrentChatId}
            stopAITyping={stopTypingFunc} // Stop AI typing from sidebar
          />
        </div>

        {/* Chat container */}
        <div className='w-full  lg:ml-[20%]  h-[calc()100vh] overflow-y-auto  '>
          <ChatContainer 
            messages={messages}
            setMessages={setMessages}
            currentChatId={currentChatId}
            setStopTypingFunc={setStopTypingFunc} // provide stop function
          />
        </div>
      </div>

      {/* Mobile sidebar */}
      {isMobileSidebarOpen && (
        <>
          <div className='bg-black/50 fixed inset-0 lg:hidden z-30' onClick={() => setIsMobileSidebarOpen(false)}></div>
          <div className='w-64 h-screen top-0 left-0 fixed lg:hidden z-40 transition-transform duration-300 translate-x-0'>
            <SideBar 
              chats={chats}
              setChats={setChats}
              messages={messages}
              setMessages={setMessages}
              setActiveChatIndex={setActiveChatIndex}
              setCurrentChatId={setCurrentChatId}
              stopAITyping={stopTypingFunc}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default Chat