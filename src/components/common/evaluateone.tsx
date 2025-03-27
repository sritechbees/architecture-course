import React, { useState } from "react";
import { motion } from "framer-motion";

const topics = [
  {
    title: "Corporate Training in Architecture",
    image: "/about/qa1.jpg",
  },
  {
    title: "Innovative Architectural Solutions",
    image: "/about/qa2.jpg",
  },
  {
    title: "Future-Ready Design Excellence",
    image: "/about/qa3.jpg",
  },
  {
    title: "Mastering Modern Architecture",
    image: "/about/qa4.jpg",
  },
  {
    title: "Sustainable Building Strategies",
    image: "/about/qa5.jpg",
  },
];

export default function evaluateone() {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image Display */}
        <motion.div 
          key={selectedTopic.image} 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-xl shadow-xl"
        >
          <img 
            src={selectedTopic.image} 
            alt={selectedTopic.title} 
            className="w-full h-64 object-cover transform hover:scale-105 transition duration-500"
          />
        </motion.div>

        {/* Right Side - Titles List */}
        <div className="flex flex-col gap-4">
          {topics.map((topic, index) => (
            <motion.button 
              key={index} 
              onClick={() => setSelectedTopic(topic)}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-4 text-left font-semibold rounded-lg transition duration-300 shadow-md cursor-pointer ${selectedTopic.title === topic.title ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white'}`}
            >
              {topic.title}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
