import React, { useState } from "react";
import Image from "next/image";

const ArchitectureFaq = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const faqList = [
    {
      
      question: "1.What is architecture?",
      answer: "It’s the art and science of designing buildings and spacesdesign.",
      image: "/about/us (1).jpg",
    },
    {
     
      question: "2.What jobs can I get?",
      answer: "Architect,urban planner, interior designer,3D Visualization & etc.",
      image: "/about/us (2).jpg",
    },
    {
      
      question: "3.What skills do I need?",
      answer: "Creativity,technical drawing, problem-solve,software knowledge.",
      image: "/about/us (3).jpg",
    },
    {
     
      question: "4.Which software is used?",
      answer: "AutoCAD, SketchUp, Revit, and Rhino for design and modeling.",
      image: "/about/us (4).jpg",
    },
    {
      
      question: "5.Is math important?",
      answer: "Yes, it’s essential for proportions, structures, and spatial design.",
      image: "/about/us (1).jpg",
    },
  ];

  const handleNext = () => {
    setCurrentCard((prev) => (prev + 1) % faqList.length);
  };

  const handlePrevious = () => {
    setCurrentCard((prev) => (prev - 1 + faqList.length) % faqList.length);
  };

  return (
    <div className="">
        <p className="text-gray-900 font-bold text-3xl text-center py-10">Question<span className="text-yellow-500"> And Answer</span> </p>
      <div className="max-w-7xl mx-auto px-4 mb-16 lg:flex lg:items-center">
        <div className="lg:w-1/2 flex flex-col items-center">
          <div className="flex-grow max-w-lg p-6 bg-gray-300 shadow-lg rounded-lg">
            <Image
              src={faqList[currentCard].image}
              alt={faqList[currentCard].question}
              width={400}
              height={300}
              className="mx-auto mb-4 rounded-lg"
            />
          
            <h4 className="text-lg font-bold text-gray-900 mb-1">
              {faqList[currentCard].question}
            </h4>
            <p className="text-gray-600">{faqList[currentCard].answer}</p>
          </div>

          <div className="mt-6 flex space-x-4">
            <button
              onClick={handlePrevious}
              className="px-6 py-3 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 shadow-lg"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 shadow-lg"
            >
              Next
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 bg-yellow-200 shadow-lg rounded-lg p-5 mb-8 lg:mb-0 max-sm:mt-5 max-lg:mt-5 max-xl:ml-5 lg:mr-6">
         <Image src="/about/faq.jpg" className="h-[385] w-[550px] rounded-2xl" height={200} width={200} alt="faqimage" />
        </div>


      </div>
    </div>
  );
};

export default ArchitectureFaq;
