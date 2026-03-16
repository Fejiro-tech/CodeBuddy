'use client'
import React, { useRef, useState, useEffect } from 'react'
import WelcomeScreen from './WelcomeScreen'
import SuggestedCard from './SuggestedCard'
import ChatInput from './ChatInput'
import MesssageBubble from "./MesssageBubble"

const ChatContainer = ({
  messages= [], 
  setMessages, 
  currentChatId,
  setStopTypingFunc
}) => {

  const lastAIRef = useRef(null)
  const messagesEndRef = useRef(null)
  const typingIntervalRef = useRef(null)
  const [isLoading, setIsLoding] = useState(false)

  // Provide stop typing function to parent
  useEffect(() => {
    setStopTypingFunc(() => () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current)
        typingIntervalRef.current = null
      }
    })
  }, [setStopTypingFunc])

  const handleSendMessage = async (message) => {
    const chatId = currentChatId

    const newUserMessage = { role: 'user', content: message }
    setMessages(prev => [...prev, newUserMessage])
    setIsLoding(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, newUserMessage] })
      })

      const data = await res.json()

      if (chatId === currentChatId) appendAIMessage(data.reply)
      else console.log("Old AI response ignored")

    } catch (error) {
      console.error("Error getting AI response:", error)
      if (chatId === currentChatId) appendAIMessage("Oops! Something went wrong.")
    } finally {
      if (chatId === currentChatId) setIsLoding(false)
    }
  }

  const appendAIMessage = (fullText) => {
    if (typingIntervalRef.current) clearInterval(typingIntervalRef.current)

    const aiMessage = { role: "assistant", content: "" }
    setMessages(prev => [...prev, aiMessage])
    lastAIRef.current = aiMessage

    const words = fullText.split(" ")
    let index = 0

    typingIntervalRef.current = setInterval(() => {
      if (index < words.length) {
        lastAIRef.current.content += (index === 0 ? "" : " ") + words[index]
        setMessages(prev => {
          const newMessages = [...prev]
          newMessages[newMessages.length - 1] = lastAIRef.current
          return newMessages
        })
        index++
      } else {
        clearInterval(typingIntervalRef.current)
        typingIntervalRef.current = null
      }
    }, 60)
  }

  return (
    <div className='bg-white/10 flex flex-col items-center justify-center pt-20 px-12 min-h-screen '> 
      <div className='max-w-240 w-full flex-1'> 

        {messages?.length === 0 ? (
          <div className='px-10'>
            <WelcomeScreen /> 
            <SuggestedCard onSelect={handleSendMessage}/> 
          </div>
        ) : (
          <div className="space-y-4 mb-10">
            {messages.map((msg, index) => (
              <MesssageBubble
                key={index}
                role={msg.role}
                content={msg.content}
              />
            ))}

            {isLoading && (
              <div className='flex justify-start mb-2'>
                <div className='bg-white/20 text-gray-200 rounded-full px-6 py-4 w-fit max-w-xs mt-2'>
                  <div className='flex gap-1 items-center'>
                    <span className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'></span>
                    <span className='w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s] '></span>
                    <span className='w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]'></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef}></div>
          </div>
        )}

      </div>

      <div className='flex justify-center max-w-240 w-full pb-20 md:px-12'> 
        <ChatInput onSend={handleSendMessage}/> 
      </div> 
    </div>
  )
}

export default ChatContainer