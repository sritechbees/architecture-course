'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Image from 'next/image';


const faqs = [
  {
    question: 'What is sustainable architecture?',
    answer: 'Sustainable architecture is an approach to designing buildings that reduce environmental impact by using energy-efficient materials and technologies.'
  },
  {
    question: 'Why is sustainable architecture important?',
    answer: 'It helps conserve natural resources, reduces carbon footprint, and promotes a healthier living environment.'
  },
  {
    question: 'What are common features of sustainable buildings?',
    answer: 'Features include solar panels, rainwater harvesting, energy-efficient lighting, and natural ventilation systems.'
  },
  {
    question: 'How does sustainable architecture impact energy efficiency?',
    answer: 'Sustainable buildings optimize energy use through insulation, passive solar design, and energy-efficient appliances.'
  },
  {
    question: 'What materials are commonly used in sustainable construction?',
    answer: 'Materials such as recycled wood, bamboo, reclaimed metal, and low-VOC paints are commonly used in sustainable architecture.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='py-7 mt-9'>
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-r from-blue-100 to-yellow-300 shadow-lg rounded-lg flex flex-col md:flex-row items-center gap-6">
      <div className="w-full md:w-1/3">
        <Image src="/courses/faq.jpg" height={200} width={200} alt="Sustainable Architecture" className="h-96 w-96 rounded-lg shadow-md" />
      </div>
      <div className="w-full md:w-2/3">
        <h2 className="text-2xl font-semibold text-center mb-4">Sustainable Architecture Q&A</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-2">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left py-2 text-lg font-medium"
              >
                {faq.question}
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
