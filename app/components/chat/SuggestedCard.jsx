import React from 'react'

const SuggestedCard = ({ onSelect }) => {

    const suggestions = [
        "What is React?",
        "What is closure in JavaScript?",
        "How to create a responsive grid in CSS",
    ]
  return (
    <div className='flex gap-4 flex-col md:flex-row mt-4 md:mt-6'> 
        {suggestions.map((question, idx) => (
            <div 
              key={idx}
              onClick={() => onSelect(question)}
              className='w-44 md:w-64 text-sm lg:text-base bg-white/5 hover:bg-white/10 border border-white/10 px-4 lg:px-10 py-6 md:py-8 lg:py-10 rounded-2xl cursor-pointer '
              >
                {question}
            </div>
        ))}

    </div>
  )
}

export default SuggestedCard