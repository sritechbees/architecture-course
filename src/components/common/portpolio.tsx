import React from 'react';
import { motion } from 'framer-motion';

const showcases = [
  {
    title: 'Sustainable Living Spaces',
    description: 'Exploring eco-friendly materials and layouts to reduce environmental impact while maintaining luxury and style.',
    image: '/courses/port1.jpg',
    reverse: false,
  },
  {
    title: 'Brutalist Monument Design',
    description: 'Bold geometric shapes and raw materials forming a statement in public architecture.',
    image: '/courses/port2.jpg',
    reverse: true,
  },
  {
    title: 'Futuristic Office Hub',
    description: 'A seamless blend of technology and architecture creating an intelligent workspace.',
    image: '/courses/port3.jpg',
    reverse: false,
  },
];

function portfolio() {
  return (
    <div className="bg-white">
      {showcases.map((item, index) => (
        <motion.div
          key={index}
          className={`flex flex-col lg:flex-row items-center ${
            item.reverse ? 'lg:flex-row-reverse' : ''
          } px-4 md:px-16 py-16 gap-10`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full lg:w-1/2 h-72 md:h-96 object-cover rounded-xl shadow-lg"
          />
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">{item.title}</h2>
            <p className="text-gray-600 text-lg">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default portfolio;
