import React from 'react'
import { IoArrowForwardOutline } from "react-icons/io5";
import HeroImage from './HeroImage';

const HeroSection = () => {
  return (
    <section className="bg-hero-pattern h-full pt-24 px-32 bg-top " >
        <div className="flex flex-col gap-12 text-[#EBEBEB] w-[65rem] m-auto items-center text-center ">
            <h2 className="text-[5rem]">Connecting Young Talents for Collaboration <br /> <span className="text-[#7734CC] font-bold">using AI</span></h2>
            <h3 className="w-[45rem] text-2xl ">
                We will help you connect, learn and interact with your peers 
                from any part of the world.
            </h3>

            <button className="flex gap-[1rem] py-4 px-6 text-2xl
                        rounded-lg border items-center hover:scale-105
                        hover:ease-in-out duration-300 "
            >
                Request A Demo <IoArrowForwardOutline />
            </button>
        </div>

        <HeroImage />
    </section>
  )
}

export default HeroSection