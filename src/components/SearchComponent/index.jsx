"use client"

import React from 'react'
import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
    return (
        <section className="bg-[#050209] px-32 py-6 absolute w-full ">
            <div className="flex flex-col items-start">
                <div className="flex bg-[#EBEBEB] rounded-xl p-4 gap-2 w-full text-xl items-center text-[#8D8D8D] ">
                    <IoMdSearch />
                    <input type="text" placeholder="Search" className="outline-0 border-0 bg-inherit w-full "/>
                </div>

                <span className="flex gap-4 items-center text-2xl text-[#F9F5FF] mt-2 ">
                    <p>Products</p>
                    <p>FAQs</p>
                    <p>Tracks</p>
                </span>
            </div>
        </section>
    )
}

export default SearchBar