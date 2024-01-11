import FaqSection from '@/components/FAQSection/FaqSection'
import FeatureSection from '@/components/FeaturesSection/FeatureSection'
import HeroSection from '@/components/HeroSection/HeroSection'
import PoolOfTalents from '@/components/PoolOfTalents/PoolOfTalents'
import RegisterSection from '@/components/RegisterSection/RegisterSection'
import React from 'react'

const page = () => {
  return (
    <main>
      <HeroSection />
      <PoolOfTalents />
      <FeatureSection />
      <FaqSection />
      <RegisterSection />
    </main>
  )
}

export default page