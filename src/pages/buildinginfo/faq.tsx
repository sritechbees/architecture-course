import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Offer from '@/components/common/offer';

const faqs = [
    {
      question: 'What is BIM?',
      answer: 'BIM stands for Building Information Modeling. It’s a digital process that enhances the design and construction of buildings.',
    },
    {
      question: 'What software will I learn?',
      answer: 'You’ll master tools like Revit, Navisworks, AutoCAD, and BIM 360.',
    },
    {
      question: 'Do I need prior experience?',
      answer: 'No prior CAD or BIM experience is required. The course starts from the basics.',
    },
    {
      question: 'Is this course certified?',
      answer: 'Yes! You will receive an industry-recognized BIM certificate upon completion.',
    },
    {
      question: 'Is this course suitable for interior designers too?',
      answer: 'Absolutely! Interior designers benefit from BIM through precise planning and integration with architectural elements.',
    },
  ];
  

export default function Faq() {
  return (
    <div>
    <section className="bg-[#f9fafb] py-2 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/courses/faqimage.jpg" height={200} width={200} // Replace with your image path
            alt="BIM FAQ"
            className="w-full rounded-xl shadow-md  border-l-4 border-yellow-400"
          />
        </motion.div>

        {/* FAQ Section */}
        <div>
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-gray-800 mt-12 mb-6"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
           <span className='text-yellow-500'>Frequently Asked</span>  Questions
          </motion.h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ x: 80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-yellow-400"
              >
                <h4 className="text-lg font-semibold text-gray-800 hover:text-yellow-500 mb-1">
                  {faq.question}
                </h4>
                <p className="text-sm text-gray-600 hover:text-yellow-500">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Offer/>
    </section>
   
    </div>
  );
}
