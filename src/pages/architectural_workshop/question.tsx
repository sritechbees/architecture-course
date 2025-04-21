import Image from 'next/image';
import React, { useState } from 'react';

function QuestionAnswer() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        { question: "What is urban planning?", answer: "Workshop planning is the process of designing and regulating the use of spaces in cities and towns." },
        { question: "Why is Architectural workshop development important?", answer: "It ensures efficient use of resources, reduces environmental impact, and improves quality of life." },
        { question: "What are smart cities?", answer: "Smart cities use technology to enhance urban services, improve efficiency, and reduce waste." },
        { question: "How does transportation impact workshop development?", answer: "Efficient transport systems enhance mobility, reduce congestion, and promote economic growth." },
        { question: "What role does architecture play in workshop design?", answer: "Architecture shapes the aesthetics and functionality of urban spaces, influencing human interactions." },
    ];

    return (
        <div className='py-12'>
            <p className='text-4xl font-bold text-center mb-7'>Architectural<span className='text-yellow-500'>  WorkShop </span> FAQs</p>
        <div className="max-w-5xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg flex flex-col md:flex-row items-center">
            {/* Left Side Image */}
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <Image src="/courses/question.jpg" height={200} width={200} alt="Urban Planning" className="w-full h-auto rounded-lg shadow-md" />
            </div>
            
            {/* Right Side FAQ Section */}
            <div className="w-full md:w-2/3 p-4">
                <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Architectural WorkShop</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-600 pb-2">
                            <button 
                                className="w-full text-left font-semibold text-lg p-3 bg-gray-700 hover:bg-gray-600 rounded transition duration-300"
                                onClick={() => toggleAnswer(index)}
                            >
                                {faq.question}
                            </button>
                            <div 
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100 p-3' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="text-gray-300 hover:text-yellow-500">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
}

export default QuestionAnswer;
