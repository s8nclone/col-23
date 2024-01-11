import Image from 'next/image'
import React from 'react'
import Button from '../ButtonComponent/Button'
import feature1 from "/public/featureImg1.png"
import feature2 from "/public/featureImg2.png"
import feature3 from "/public/featureImg3.png"

const FeatureSection = () => {
  return (
    <section 
        className="bg-[#F6F5F5] h-full flex flex-col bg-cover bg-no-repeat 
                bg-feature-pattern px-32 py-[6.5rem] gap-[7.5rem] "
    >
        <div className="text-[#3A3A3A] text-center ">
            <h2 className="text-6xl mb-4 "><span className="font-bold text-[#5B0BC1] ">Features</span> we have for you</h2>
            <p className="text-2xl ">Here you will find a lot of Talented people like you in different level and tracks.</p>
        </div>

        <div className="flex items-center justify-between py-8">
            <Image
                src={feature1}
                alt="feature image"
                // className="w-[60rem] h-[55rem]"
            />

            <div className="flex flex-col justify-center w-[35rem] gap-6 text-[#3A3A3A] ">
                <h3 className="text-6xl font-medium ">Collaborate</h3>
                <p className="text-2xl ">We will help you connect, learn and interact with your peers from any part of the world. </p>
                <Button btnText="Read More" />
            </div>
        </div>

        <div className="flex items-center justify-between py-8">
            <div className="flex flex-col justify-center w-[35rem] gap-6 text-[#3A3A3A] ">
                <h3 className="text-6xl font-medium ">AI Pairing</h3>
                <p className="text-2xl ">We will help you connect, learn and interact with your peers from any part of the world. </p>
                <Button btnText="Read More" />
            </div>

            <Image
                src={feature2}
                alt="feature image"
                className="w-[70rem] h-[45rem]"
            />
        </div>

        <div className="flex items-center justify-between py-8">
            <Image
                src={feature3}
                alt="feature image"
                // className="w-[55rem] h-[50rem]"
            />

            <div className="flex flex-col justify-center w-[35rem] gap-6 text-[#3A3A3A] ">
                <h3 className="text-6xl font-medium ">Feedback</h3>
                <p className="text-2xl ">We will help you connect, learn and interact with your peers from any part of the world. </p>
                <Button btnText="Read More" />
            </div>
        </div>
    </section>
  )
}

export default FeatureSection