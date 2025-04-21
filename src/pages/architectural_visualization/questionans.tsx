import Offer from '@/components/common/offer';
import Image from 'next/image';
import React, { useState } from 'react';

function Questionans() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        { question: "What is architectural visualization?", answer: "Architectural visualization is the process of creating digital models of buildings to present design concepts." },
        { question: "Why is 3D visualization important in architecture?", answer: "It helps clients and stakeholders understand designs better through realistic visuals and animations." },
        { question: "What tools are used for architectural visualization?", answer: "Popular tools include 3ds Max, SketchUp, V-Ray, Lumion, and Blender." },
        { question: "How does visualization impact design decisions?", answer: "Visualization allows for better design feedback and faster iteration, improving the overall design process." },
        { question: "Is architectural visualization useful for marketing?", answer: "Absolutely. High-quality renders and animations are key in promoting architectural projects to clients and investors." },
    ];

    return (
        <div className='py-8 bg-[#f1f5f9]'>
            <p className='text-4xl font-bold text-center mb-7'>
                Architectural<span className='text-yellow-500'> Visualization </span>FAQs
            </p>
            <div className="max-w-5xl mx-auto mb-8 p-6 bg-yellow-500 text-white rounded-lg shadow-lg flex flex-col md:flex-row items-center">
                {/* Left Side Image */}
                <div className="w-full md:w-1/3 mb-4 md:mb-0">
                    <Image src="/courses/ai one.jpg" height={200} width={200} alt="Architectural Visualization" className="w-full h-96 rounded-lg shadow-md" />
                </div>

                {/* Right Side FAQ Section */}
                <div className="w-full md:w-2/3 p-4">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center md:text-left">Architectural Visualization</h2>
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
                                    <p className="text-gray-900 hover:text-white">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Offer/>
        </div>
    );
}

export default Questionans;
