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

  // AUTO SAVE
  useEffect(() => {
    if (messages.length === 0) return;

    setChats(prev => {
      if (activeChatIndex !== null) {
        const updated = [...prev];
        updated[activeChatIndex] = {
          ...updated[activeChatIndex],
          messages: [...messages],
        };
        return updated;
      }

      const title = messages[0]?.content?.slice(0, 30) || "New Chat";

      // prevent duplicates
      if (prev.length > 0 && prev[0].title === title) {
        const updated = [...prev];
        updated[0] = {
          ...updated[0],
          messages: [...messages],
        };
        return updated;
      }

      return [
        {
          title,
          messages: [...messages],
        },
        ...prev,
      ];
    });
  }, [messages, activeChatIndex]);

  useEffect(() => {
    const saved = localStorage.getItem("chats");
    if (saved) {
      setChats(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chats", JSON.stringify(chats));
  }, [chats]);

  return (
    <div>
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
            stopAITyping={stopTypingFunc}
            setIsMobileSidebarOpen={setIsMobileSidebarOpen}
          />
        </div>

        <div className='w-full lg:ml-[20%] h-screen overflow-y-auto'>
          <ChatContainer 
            messages={messages}
            setMessages={setMessages}
            currentChatId={currentChatId}
            setStopTypingFunc={setStopTypingFunc}
          />
        </div>
      </div>

      {/* Mobile sidebar */}
      {isMobileSidebarOpen && (
        <>
          <div 
            className='bg-black/50 fixed inset-0 lg:hidden z-30'
            onClick={() => setIsMobileSidebarOpen(false)}
          />

          <div className='w-64 h-screen top-0 left-0 fixed lg:hidden z-40'>
            <SideBar 
              chats={chats}
              setChats={setChats}
              messages={messages}
              setMessages={setMessages}
              activeChatIndex={activeChatIndex} 
              setActiveChatIndex={setActiveChatIndex}
              setCurrentChatId={setCurrentChatId}
              stopAITyping={stopTypingFunc}
              setIsMobileSidebarOpen={setIsMobileSidebarOpen}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default Chat