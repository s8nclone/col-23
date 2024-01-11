import React from 'react'
import Logo from '../Logo/Logo'
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="flex bg-[#0B0415] px-32 py-6 justify-between ">
        <Logo className="flex w-[10rem] gap-2 items-center text-2xl font-medium text-[#EBEBEB] " />

        <ul className="flex gap-10 items-center text-[#F9F5FF] ">
            <li className="text-2xl hover:underline ">About</li>
            <li className="text-2xl hover:underline ">Features</li>
            <li className="text-2xl hover:underline ">Pricing</li>
        </ul>

        <div className="flex gap-6 items-center ">
            <IoMdSearch className="text-[#F9F5FF] h-10 w-10 " />
            
            <button 
                className="border text-[#F9F5FF] text-xl
                    rounded-lg w-[10rem] justify-center  
                    items-center py-[.75rem] px-[1.25rem] font-bold hover:scale-105
                    hover:ease-in-out duration-300 "
            >
                Log In
            </button>

            <button
                className="bg-[#F9F5FF] rounded-lg text-xl
                    py-[.75rem] px-[1.25rem] text-[#5B0BC1]
                    justify-center items-center font-medium
                    hover:bg-transparent hover:border hover:text-[#F9F5FF] 
                    hover:scale-105 hover:ease-in-out duration-300 "
            >
                Get Started For Free
            </button>
        </div>
    </nav>
  )
}

export default Navbar