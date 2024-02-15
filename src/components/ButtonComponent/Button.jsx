import React from 'react'

export default function Button({btnText}) {
  return (
    <div>
        <button 
            className="rounded-xl flex justify-center items-center 
                py-4 px-6 bg-transparent border sm:border-2 border-[#5B0BC1] 
                text-[#5B0BC1] min-w-[12rem] 
                sm:h-20 text-2xl font-medium "
        >
            {btnText}
        </button>
    </div>
  )
}
