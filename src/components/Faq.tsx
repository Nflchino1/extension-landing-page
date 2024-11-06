
"use client"; 

import React, { useState } from 'react';

const Faq: React.FC = () => {
  const faqs = [
    { question: "How does the service marketplace work?",
     answer: "Our service marketplace connects service providers with clients who need specific services. providers can list their services, and clients can browse, compose, and select the best provider based on reviews, ratings, and prices. " },
    { question: "How do i sign up as a service provider?", answer: "Answer" },
    { question: "How are payments handled?", answer: "Answer" },
    { question: "Can I leave a review for a service provider?", answer: "Answer" },
    { question: "What if i'm not satisfied with the service i recieved?", answer: "Answer" },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

return (
<div className="p-8 bg-lightGreen text-white">
<h2 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
<h3 className='text-center text-sm'>This is what people mostly ask about us</h3>
<br/><br/>
    
<div className="bg-[#11362D] p-4 rounded-md text-sm">
{faqs.map((faq, index) => (
<div key={index} className="border-b mx-8 border-gray-300 bg-[#11362D] text-white p-4">
<div className="flex items-center justify-between p-2 cursor-pointer" 
 onClick={() => toggleFAQ(index)} >
 <span className="font-semibold ">{faq.question}</span>
<span className={`text-sm transform scale-x-150 transition-transform duration-200 
${openIndex === index ? 'rotate-180' : ''}`}> v </span>
</div>
<div className={`pl-6 pb-2 text-white text-sm ${openIndex === index ? '' : 'hidden'}`}>
{faq.answer}


</div>
</div>
))}
</div>
</div>
);
};

export default Faq;
