import React from 'react'
import { IoMdSearch } from "react-icons/io";

const NavItems = ({ classname, toggleSearch}) => {

    return (
        <div className={`p-6 sm:w-[80%] sm:flex sm:justify-between ${classname}`}>

            <ul className="gap-16 w-full sm:items-center text-[#F9F5FF] sm:flex ">
                <div className="border-b sm:border-b-0 py-2 mt-4 sm:mt-0">
                    <li className="text-xl sm:text-2xl w-full flex justify-between sm:hover:underline cursor-pointer ">Features</li>
                </div>

                <div className="border-b sm:border-b-0 py-2 mt-4 sm:mt-0">
                    <li className="text-xl sm:text-2xl w-full flex justify-between sm:hover:underline cursor-pointer ">Download</li>
                </div>

                {/* <div className="border-b sm:border-b-0 py-2 mt-4 sm:mt-0">
                    <li className="text-xl sm:text-2xl w-full sm:hover:underline cursor-pointer ">Dashboard</li>
                </div> */}

                <div className="sm:border-b-0 py-2 mt-4 sm:mt-0">
                    <li className="text-xl sm:text-2xl w-full flex justify-between sm:hover:underline cursor-pointer ">Pricing</li>
                </div>
            </ul>

            <div className="flex flex-col-reverse sm:flex-row gap-4 sm:gap-12 items-center ">
                <IoMdSearch 
                    className="text-[#F9F5FF] sm:h-10 sm:w-10 invisible sm:visible cursor-pointer " 
                    onClick={toggleSearch}
                />
                
                
                <button 
                    className="border text-[#F9F5FF] text-lg sm:text-xl
                        rounded-lg w-full sm:w-[10rem] justify-center  
                        items-center py-[.75rem] px-[1.25rem] font-medium hover:scale-105
                        hover:ease-in-out duration-300 "
                >
                    Log In
                </button>

                <button
                    className="bg-[#7734CC] rounded-lg text-lg sm:text-xl w-full
                        py-[.75rem] px-[1.25rem] text-[#F9F5FF] sm:w-[15rem]
                        justify-center items-center font-medium
                        hover:bg-transparent hover:border hover:text-[#F9F5FF] 
                        hover:scale-105 hover:ease-in-out duration-300 "
                >
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default NavItems