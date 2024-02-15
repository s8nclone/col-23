import FaqSection from '@/components/FAQSection/FaqSection'
import FeatureSection from '@/components/FeaturesSection/FeatureSection'
import HeroSection from '@/components/HeroSection/HeroSection'
import PoolOfTalents from '@/components/PoolOfTalents/PoolOfTalents'
import CollaborationTools from '@/components/collaborationTools'
import React from 'react'

const page = () => {
    return (
        <main className="bg-[#F6F5F5] ">
            <HeroSection />
            <PoolOfTalents />
            <FeatureSection />
            <FaqSection />
            <CollaborationTools />
        </main>
    )
}

export default page