import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const faqData = [
  {
    question: "What are the key principles of architectural design?",
    answer:
      "Key principles include balance, proportion, harmony, functionality, and sustainability. These elements guide architects in creating aesthetic and practical structures."
  },
  {
    question: "What software is commonly used in architecture?",
    answer:
      "Popular software includes AutoCAD, Revit, SketchUp, Rhino, and ArchiCAD for design, modeling, and visualization."
  },
  {
    question: "What is the importance of sustainability in architecture?",
    answer:
      "Sustainability in architecture ensures efficient use of resources, reduces environmental impact, and creates healthier living spaces."
  },
  {
    question: "What are the different architectural styles?",
    answer:
      "Architectural styles include Gothic, Baroque, Modernism, Postmodernism, Brutalism, and Contemporary, each with unique design principles and aesthetics."
  },
  {
    question: "What is the role of an architect in a construction project?",
    answer:
      "Architects design buildings, create blueprints, ensure structural integrity, and oversee construction to align with regulations and client requirements."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row items-center gap-8">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2"
      >
        <Image src="/about/faq.jpg" height={200} width={200} alt="Architecture Image" className="rounded-xl shadow-lg" />
      </motion.div>
      <div className="w-full md:w-1/2">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center md:text-left mb-4"
        >
          Architecture FAQ
        </motion.h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border rounded-xl p-4 cursor-pointer shadow-md"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{item.question}</h3>
                <ChevronDown
                  className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </div>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 text-gray-600"
                >
                  {item.answer}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
