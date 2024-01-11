'use client'

import React, { useState } from 'react'
import "./faqSection.css"
import Accordion from './Accordion';
import { FaqQuestions } from "./FaqQuestions";

function FaqSection({className}) {

    const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
        <div className={`accordion ${className} flex flex-col gap-8`}>
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

            <p className="text-center"><a className="text-[#5B0BC1] text-2xl font-bold text-center underline ">Click here for more</a></p>
        </div>
    </>
  );
}

export default FaqSection