'use client'

import React, { useState } from 'react'
import "./faqSection.css"
import Accordion from './Accordion';
import { FaqQuestions } from './faqQuestions';

function FaqSection({className}) {

    const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
        <div className={`accordion ${className} bg-[#FFF] border border-[#EBEBEB] sm:border-0 flex flex-col gap-8 rounded-2xl py-16 px-4 sm:py-0 sm:rounded-none sm:m-0`}>
            <h1 className="faq-h1">Frequently asked questions</h1>

            <div>
                {FaqQuestions.map(({ question, answers }, index) => (
                    <Accordion 
                        key={index}
                        question={question} 
                        answers={answers}
                        index={index}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                    />
                ))}
            </div>

            <p className="text-center"><a className="text-[#5B0BC1] text-lg sm:text-2xl font-medium text-center underline ">Click here for more</a></p>
        </div>
    </>
  );
}

export default FaqSection