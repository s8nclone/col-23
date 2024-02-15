import Image from 'next/image'
import React from 'react'
import checkbox from "/public/checkbox.png"

export const PricingCard = ({ feature, seeFeatures, plan, price, freePlan }) => {
    return (
        <div className="flex flex-col gap-1 text-white border border-[#8D8D8D] rounded-xl px-4 py-6 hover:border-[#7734CC] ">
            <div className="flex items-center gap-2 ">
                <p className="text-lg font-bold sm:text-2xl sm:font-normal ">{plan}</p>
                {freePlan}
            </div>

            <p className="text-4xl font-bold my-6 sm:my-12 sm:text-5xl ">{price}</p>

            <hr className="h-4 sm:h-14" />

            <div className="flex flex-col sm:gap-1 ">
                <div className="flex gap-1 items-center ">
                    <Image 
                        src={checkbox} 
                        alt="checkbox image"
                    />
                    <p className="text-lg sm:text-xl ">4 pairing monthly</p>
                </div>
                <div className="flex gap-1 items-center ">
                    <Image 
                        src={checkbox} 
                        alt="checkbox image"
                    />
                    <p className="text-lg sm:text-xl ">Access to users above your level</p>
                </div>
                {feature}
            </div>

            <button className="text-left text-[#7734CC] text-lg sm:text-xl underline font-medium  mb-4 sm:mb-12 sm:mt-4 ">{seeFeatures}</button>

            <button className="border sm:border-2 border-[#7734CC] text-[#7734CC] sm:text-lg bg-transparent p-2 rounded-xl hover:bg-[#7734CC] hover:text-white ">{"Get Started"}</button>
        </div>
    )
}

export const PricingFeature = ({ featureDesc }) => {
    return (
        <div className="flex gap-1 items-center ">
            <Image 
                src={checkbox} 
                alt="checkbox image"
            />
            <p className="text-lg sm:text-xl ">{featureDesc}</p>
        </div>
    )
}
