import React from 'react'

export default function Button({btnText}) {
  return (
    <div>
        <button 
            className="rounded-lg flex justify-center items-center 
                py-4 px-6 bg-[#5B0BC1] text-[#EBEBEB] min-w-[12rem] 
                h-20 text-2xl font-medium "
        >
            {btnText}
        </button>
    </div>
  )
}
