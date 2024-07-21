// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How Can I Use Job Crafted For Free?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      question: 'How Can I Customise My Resume?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      question: "Can I Use My Resume To Word Or Pdf?",
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      question: 'How Do I Cancel, Downgrade Or Delete My Account?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-4 lg:py-10 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 data-aos="zoom-in" className="text-2xl font-bold md:text-4xl md:leading-tight font-ubuntu">Your questions, answered</h2>
        <p data-aos="zoom-in" className="mt-1 text-gray-600 font-ubuntu">Answers to the most frequently asked questions.</p>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="hs-accordion-group">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`hs-accordion ${activeIndex === index ? 'hs-accordion-active:bg-gray-100' : ''
                } rounded-xl p-6 ${activeIndex === index ? 'active' : ''}`}
            >
              <button
                className="hs-accordion-toggle font-ubuntu group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                {faq.question}
                <svg
                  className={`flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 ${activeIndex === index ? 'hidden' : 'block'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className={`flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 ${activeIndex === index ? 'block' : 'hidden'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${activeIndex === index ? '' : 'hidden'}`}
                aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading-${index + 1}`}
              >
                <p className="text-gray-800 font-ubuntu">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq
