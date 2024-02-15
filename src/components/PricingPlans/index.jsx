import React from "react"
import { PricingCard, PricingFeature } from "./Plans"

const PricingPlans = () => {
    return (
        <section className="m-4 px-2 py-6 flex flex-col gap-8 sm:flex-row sm:gap-10 sm:mx-auto sm:w-fit ">
            <PricingCard 
                plan="Starter"
                price="$0/Yr"
                freePlan= {
                    <span className="bg-[#AEAEAE] text-[#3A3A3A] text-sm sm:text-lg font-medium text-center p-2 rounded-lg ">Free plan</span>
                }
                feature={
                    <>
                        <PricingFeature 
                            featureDesc="3 teams per group chat"
                        />
                    </>
                }
            />
            <PricingCard 
                plan="Professional"
                price="$50/Yr"
                feature={
                    <>
                        <PricingFeature 
                            featureDesc="3 teams per group chat"
                        />
                        <PricingFeature 
                            featureDesc="View profile before starting"
                        />

                    </>
                }
                seeFeatures="See all features"
            />
            <PricingCard
                plan="Company" 
                price="$500/Yr"
                feature={
                    <>
                        <PricingFeature 
                            featureDesc="Access to only experts"
                        />
                        <PricingFeature 
                            featureDesc="View profile before starting"
                        />
                    </>
                }
                seeFeatures="See all features"
            />

        </section>
    )
}

export default PricingPlans