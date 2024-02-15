import Image from 'next/image'
import React from 'react'
import Button from '../ButtonComponent/Button'
import feature1 from "/public/featureImg1.png"
import feature2 from "/public/featureImg2.png"
import feature3 from "/public/featureImg3.png"

const FeatureSection = () => {
  return (
    <section 
        className="bg-[#F9F5FF] h-full flex flex-col bg-cover bg-no-repeat 
                sm:bg-feature-pattern px-4 sm:px-32 py-8 sm:py-[6.5rem] gap-[7.5rem] "
    >
        <div className="text-[#3A3A3A] text-left sm:text-center ">
            <h2 className="text-3xl sm:text-6xl mb-4 text-center font-bold "><span className=" text-[#5B0BC1] ">Features</span> we have for you</h2>
            <p className="text-2xl ">Here you will find a lot of Talented people like you in different level and tracks.</p>
        </div>

        <div className="flex flex-col border border-[#EBEBEB] sm:border-0 rounded-2xl 
                sm:rounded-none mx-2 px-2 sm:px-0 sm:mx-0 sm:flex-row items-center 
                gap-6 sm:justify-between py-8"
        >
            <Image
                src={feature1}
                alt="feature image"
                // className="w-[60rem] h-[55rem]"
            />

            <div className="flex flex-col justify-center sm:w-[35rem] gap-4 sm:gap-6 text-[#3A3A3A] ">
                <h3 className="text-3xl sm:text-6xl font-bold ">Collaborate</h3>
                <p className="text-lg sm:text-2xl ">We will help you connect, learn and interact with your peers from any part of the world. </p>
                <Button btnText="Read More" />
            </div>
        </div>

        <div className="flex flex-col border border-[#EBEBEB] sm:border-0 rounded-2xl 
                sm:rounded-none mx-2 px-2 sm:px-0 sm:mx-0 sm:flex-row-reverse items-center 
                gap-6 sm:justify-between py-8"
        >
            <Image
                src={feature2}
                alt="feature image"
                className="sm:w-[70rem] sm:h-[45rem]"
            />

            <div className="flex flex-col justify-center sm:w-[35rem] gap-4 sm:gap-6 text-[#3A3A3A] ">
                <h3 className="text-3xl sm:text-6xl font-bold ">AI Pairing</h3>
                <p className="text-lg sm:text-2xl ">We will help you connect, learn and interact with your peers from any part of the world. </p>
                <Button btnText="Read More" />
            </div>

        </div>

        <div className="flex flex-col border border-[#EBEBEB] sm:border-0 rounded-2xl 
                sm:rounded-none mx-2 px-2 sm:px-0 sm:mx-0 sm:flex-row items-center 
                gap-6 sm:justify-between py-8"
        >
            <Image
                src={feature3}
                alt="feature image"
                // className="w-[55rem] h-[50rem]"
            />

            <div className="flex flex-col justify-center sm:w-[35rem] gap-4 sm:gap-6 text-[#3A3A3A] ">
                <h3 className="text-3xl sm:text-6xl font-bold ">Feedback</h3>
                <p className="text-lg sm:text-2xl ">We will help you connect, learn and interact with your peers from any part of the world. </p>
                <Button btnText="Read More" />
            </div>
        </div>
    </section>
  )
}

export default FeatureSection