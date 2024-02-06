import React from 'react'
import Image from 'next/image'
import Button from '../ButtonComponent/Button'
import adobeXd  from "/public/AdobeXD.png"
import chat from "/public/chat-image.png"
import figma from "/public/FigmaLogo.png"
import js from "/public/JavascriptLogo.png"
import people from "/public/PeopleBuildingMetaverse.png"
import react from "/public/ReactLogo.png"
import wavesphere from "/public/WaveSphere.png"

const CollaborationTools = () => {
    return (
        <section className="bg-[#DCD0EA] rounded-2xl sm:rounded-none m-6 sm:m-0 flex flex-col gap-8 text-center sm:px-32 py-12 px-6 justify-center items-center ">
            <p className="text-2xl text-[#3A3A3A] font-bold">Start collaborating today</p>
            <div className="flex flex-wrap gap-x-16 sm:gap-x-32 sm:gap-y-12 gap-y-4 sm:px-64 items-center content-center justify-center  ">
                <Image 
                    src={chat}
                    alt="feature image"
                    className="h-20 w-20 sm:h-32 sm:w-32"
                />
                <Image 
                    src={adobeXd}
                    alt="feature image"
                    className="h-20 w-20 sm:h-32 sm:w-32"
                />
                <Image 
                    src={js}
                    alt="feature image"
                    className="h-20 w-20 sm:h-32 sm:w-32"
                />
                <Image 
                    src={react}
                    alt="feature image"
                    className="h-20 w-20 sm:h-32 sm:w-32"
                />
                <Image 
                    src={figma}
                    alt="feature image"
                    className="h-20 w-20 sm:h-32 sm:w-32"
                />
                <Image 
                    src={people}
                    alt="feature image"
                    className="h-20 w-20 sm:h-32 sm:w-32"
                />
                <Image 
                    src={wavesphere}
                    alt="feature image"
                    className="h-20 w-20 sm:h-32 sm:w-32"
                />
            </div>
            <Button btnText="Get Started For Free" />
        </section>
    )
}

export default CollaborationTools