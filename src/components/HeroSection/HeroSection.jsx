import React from 'react'
import HeroImage from './HeroImage';

const HeroSection = () => {
    return (
        <section className="bg-hero-pattern h-full px-8 pt-12 sm:pt-24 sm:px-32 bg-top " >
            <div className="flex flex-col gap-4 sm:gap-12 text-[#EBEBEB] sm:w-[65rem] m-auto text-left sm:text-center sm:items-center ">
                <h2 className="text-[2.5rem] sm:text-[5rem] ">Connecting Young Talents for Collaboration <br /> <span className="text-[#7734CC] font-bold">using AI</span></h2>
                <h3 className="sm:w-[45rem] text-[1.5rem] sm:text-2xl font-bold ">
                    We will help you connect, learn and interact with your peers 
                    from any part of the world.
                </h3>

                <button className="rounded-lg text-center 
                    py-4 px-6 bg-[#5B0BC1] text-[#EBEBEB]
                    h-20 text-2xl font-medium w-full sm:w-[15rem] "
                >
                    Watch our Demo
                </button>
            </div>

            <HeroImage />
        </section>
    )
}

export default HeroSection