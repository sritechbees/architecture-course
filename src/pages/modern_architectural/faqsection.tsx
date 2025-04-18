'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Image from 'next/image';

const faqs = [
  {
    question: 'What is AI in architecture?',
    answer: 'AI in architecture refers to the integration of artificial intelligence to optimize design processes, automate repetitive tasks, and generate innovative building solutions.'
  },
  {
    question: 'How is AI transforming architectural design?',
    answer: 'AI can analyze vast data sets, predict user behavior, and assist in creating efficient layouts, thus enabling smarter and faster design workflows.'
  },
  {
    question: 'What tools are used for AI-assisted design?',
    answer: 'Tools like generative design software, machine learning models, and parametric design platforms help architects explore a wider range of possibilities quickly.'
  },
  {
    question: 'Can AI improve sustainability in architecture?',
    answer: 'Yes, AI can simulate energy consumption, optimize material usage, and help design climate-responsive buildings, supporting sustainable architectural practices.'
  },
  {
    question: 'Is AI replacing architects?',
    answer: 'AI is not replacing architects but rather augmenting their abilities, allowing them to focus more on creativity and human-centered design while automating complex computations.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='py-16'>
      <div className="max-w-6xl mx-auto p-6 bg-gradient-to-r from-indigo-100 to-purple-300 shadow-lg rounded-lg flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-1/3">
          <Image
            src="/courses/ai one.jpg"
            height={200}
            width={200}
            alt="AI in Architecture"
            className="h-96 w-96 rounded-lg shadow-md object-cover"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-semibold text-center mb-4">AI in Architecture - FAQs</h2>
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
                {openIndex === index && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
