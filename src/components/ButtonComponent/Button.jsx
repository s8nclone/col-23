import React from 'react'

export default function Button({btnText}) {
  return (
    <div>
        <button 
            className="rounded-lg flex justify-center items-center 
                py-4 px-6 bg-transparent border border-[#5B0BC1] 
                text-[#5B0BC1] min-w-[12rem] h-16 
                sm:h-20 text-2xl font-medium "
        >
            {btnText}
        </button>
    </div>
  )
}
