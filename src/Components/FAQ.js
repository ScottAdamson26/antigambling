import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const FAQ = () => {
  const faqData = [
    {
      question: "What is the Casino Library?",
      answer: "This is the placeholder answer for question 1. It provides detailed information.",
    },
    {
      question: "Why the Casino Library is Your Best Betting Companion",
      answer: "This is the placeholder answer for question 2. It provides detailed information.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col items-center pt-6">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="w-full max-w-2xl text-white border-2 border-orange-500 rounded-md my-2 cursor-pointer"
        >
          {/* Header Section */}
          <div
            className="flex justify-between items-center px-4 py-2"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg font-bold">{item.question}</h3>
            <FontAwesomeIcon icon={openIndex === index ? faChevronUp : faChevronDown} />
          </div>
          {/* Answer Section */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden`}
            style={{
              maxHeight: openIndex === index ? "200px" : "0",
              padding: openIndex === index ? "1rem" : "0",
            }}
          >
            <p className={`${openIndex === index ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
