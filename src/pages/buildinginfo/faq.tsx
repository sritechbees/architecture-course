import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is Building Information Modeling (BIM)?',
    answer:
      'BIM is a digital representation of physical and functional characteristics of a facility. It helps architects visualize, simulate, and coordinate every aspect of the design process.',
  },
  {
    question: 'Why should architecture students learn BIM?',
    answer:
      'BIM is transforming the architecture industry by enabling smarter design, better collaboration, and faster project delivery. Knowing BIM tools like Revit and Navisworks makes students job-ready.',
  },
  {
    question: 'Is BIM only for large-scale projects?',
    answer:
      'No, BIM is beneficial for both small and large projects. It improves accuracy, visualization, and collaboration regardless of the scale.',
  },
  {
    question: 'What software will I learn in this course?',
    answer:
      'You will gain hands-on experience with tools like Autodesk Revit, Navisworks, AutoCAD, and BIM 360.',
  },
  {
    question: 'Do I need prior CAD experience to enroll?',
    answer:
      'Not at all! The course is designed for both beginners and those with prior design experience.',
  },
  {
    question: 'Is this course suitable for interior designers too?',
    answer:
      'Yes, interior designers also benefit from BIM as it allows better integration with architectural designs and precise planning.',
  },
  {
    question: 'Will I receive a certificate after completion?',
    answer:
      'Yes, upon successful completion, you’ll receive a professional BIM certification recognized by industry leaders.',
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const toggle = (index:number) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

  };

  return (
    <section className="bg-[#f9fafb] py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10"
          data-aos="fade-up"
        >
          BIM Architecture Course - FAQs
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md transition p-5 cursor-pointer"
              onClick={() => toggle(index)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-base md:text-lg font-medium text-gray-800">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>
              {activeIndex === index && (
                <p className="text-gray-600 mt-3 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
