import React, { useState } from 'react';
import { MdArrowForward } from "react-icons/md";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative border-l-4 border-gradient py-4 px-6 bg-gray-50 shadow-md rounded-md">
      <button 
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-800">{question}</span>
        <svg 
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="mt-2 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What makes RegPlus Karu different from other compliance solution providers?",
      answer: "RegPlus Karu offers a unique combination of expertise, technology, and personalized service..."
    },
    {
      question: "How often should my business undergo compliance reviews?",
      answer: "We recommend conducting comprehensive compliance reviews at least annually..."
    },
    {
      question: "Can RegPlus Karu help with industry-specific compliance?",
      answer: "Absolutely! Our team includes specialists across various industries..."
    },
    {
      question: "What size businesses do you typically work with?",
      answer: "We work with businesses of all sizes, from startups to large enterprises..."
    },
    {
      question: "How can I get started with RegPlus Karu's compliance services?",
      answer: "Getting started is easy! Simply contact us through our website or give us a call..."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className='text-orange-400 text-center mb-3'>
          FAQ
        </h1>
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Ask Questions</h2>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
        
        <div className="text-center mt-8 flex justify-center">
          <button className="bg-blue-900 text-white flex text-center items-center gap-3 px-6 py-3 rounded-md hover:bg-blue-800 transition">
            Show More <MdArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
