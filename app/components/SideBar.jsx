import React from 'react';
import { MessageSquarePlus } from "lucide-react";
import Link from 'next/link';
import { FaCode, } from "react-icons/fa";

const SideBar = ({
  messages,
  setMessages,
  chats,
  setChats,
  activeChatIndex,
  setActiveChatIndex,
  setCurrentChatId,
  stopAITyping,
  setIsMobileSidebarOpen
}) => {

  const startNewChat = () => {
    // Stop AI first
    if (stopAITyping) stopAITyping();

    setMessages([]);
    setCurrentChatId(Date.now());
    setActiveChatIndex(null);

    if (setIsMobileSidebarOpen) {
      setIsMobileSidebarOpen(false);
    }
  };

  return (
    <div className='bg-[#1e1e1e] border-r border-white/15 text-white h-screen flex flex-col py-10 px-6'>

      <Link href="/" className=' mb-3 flex items-center gap-3'>
        <FaCode size={22} className='text-[#55d627]'/>
        <span className='font-bold '>Home</span>
      </Link>
      
      <button
        onClick={startNewChat}
        className="w-fit mb-10 flex items-center gap-3"
      >
        <MessageSquarePlus size={22}  className='text-[#55d627]'/>
        <span className='font-bold '>New chat</span>
      </button>

      <div className="flex-1 overflow-y-auto">
        <h2 className="text-lg font-bold mb-3">Saved Chats</h2>

        {chats.length === 0 && (
          <p className='text-gray-400'>No chats yet</p>
        )}

        {chats.map((chat, index) => (
          <div
            key={index}
            onClick={() => {
              setActiveChatIndex(index);
              setMessages(chat.messages);

              if (setIsMobileSidebarOpen) {
                setIsMobileSidebarOpen(false);
              }
            }}
            className={`my-2 cursor-pointer hover:text-green-400 ${
              activeChatIndex === index ? "text-green-400" : ""
            }`}
          >
            <h4 className='text-sm lg:text-base mb-4'>{chat.title}</h4>
          </div>
        ))}
      </div>

      <div className="mt-4 text-xs text-gray-400 pb-10">
        Powered by Groq AI
      </div>
    </div>
  );
};

export default SideBar;