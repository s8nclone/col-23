import FaqSection from '@/components/FAQSection/FaqSection'
import PricingPlans from '@/components/PricingPlans'
import CollaborationTools from '@/components/collaborationTools'
import React from 'react'

const page = () => {
    return (
        <main className="bg-[#050209] py-4 ">
            <div className="text-center text-white px-4 py-6 sm:py-14 sm:w-2/4 sm:mx-auto ">
                <h1 className="text-4xl font-bold sm:text-5xl ">Pricing</h1>
                <p className="text-lg sm:text-2xl mt-3 sm:mt-5">You are currently on Starter package, upgrade your package now to have access to a lot of our features. 
                    Try out our 7 days risk free trial. Upgrade and cancel anytime.
                </p>
            </div>
            <PricingPlans />
            <FaqSection />
            <CollaborationTools />
        </main>
    )
}

export default page