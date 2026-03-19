import Image from 'next/image';
import React from 'react'
import { MessageSquarePlus } from "lucide-react"

const SideBar = ({ messages, setMessages, chats, setChats, activeChatIndex, setActiveChatIndex, setCurrentChatId, stopAITyping, setIsMobileSidebarOpen}) => {

  const startNewChat = () => {
  if (messages.length === 0) return;

  // Only save if we're NOT viewing an existing saved chat
  if (activeChatIndex === null) {
    setChats(prev => [
      {
        title: messages[0].content.slice(0, 30) || "New Chat",
        messages: messages
      },
      ...prev
    ]);
  }

  if (stopAITyping) stopAITyping();
  setMessages([]);
  setCurrentChatId(Date.now());
  setActiveChatIndex(null); // reset active chat
};

  return (
    <div className='bg-[#1e1e1e] backdrop-blur-md border-r border-white/15 text-white h-screen flex flex-col py-4 px-10'>
      <div className="mb-6 flex items-center justify-center"></div>

      <button onClick={() => {
          startNewChat();  
          setIsMobileSidebarOpen(false)
        }} 
        className="w-fit mb-8  flex items-center gap-2"
      >
       <MessageSquarePlus size={24} />
       <span>New chat</span>
      </button>

      <div className="flex-1 overflow-y-auto ">
        <h2 className="text-lg font-extrabold mb-2">Saved Chats</h2>
        <div className='text-white'>
          {chats.length === 0 && <p className='text-gray-400'>No chats yet</p>}
          {chats.map((chat, index) => (
            <div 
              key={index}
              onClick={() => {
              setActiveChatIndex(index)      // mark this chat as active
              setMessages(chat.messages)     // load chat messages
            }}
              className='my-2 cursor-pointer hover:text-green-400'
            >
              <h4 className='mb-2'>{chat.title}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-400  pb-14 px-6">
        Powered by Groq AI
      </div>
    </div>
  )
}

export default SideBar