import Image from 'next/image';
import React, { useState } from 'react';

const features = [
  {
    title: 'High Performance',
    description: 'Optimized for speed and efficiency to provide the best experience.',
    icon: '🚀',
    image: '/courses/high perfomance.jpg'
  },
  {
    title: 'AI Powered',
    description: 'Leverages artificial intelligence to enhance user interactions.',
    icon: '🤖',
    image: '/courses/high perfomance.jpg'
  },
  {
    title: 'User Friendly',
    description: 'Designed with simplicity and ease of use in mind.',
    icon: '👌',
    image:  '/courses/high perfomance.jpg'
  },
  {
    title: 'Secure & Reliable',
    description: 'Built with strong security measures to ensure data safety.',
    icon: '🔒',
    image:  '/courses/high perfomance.jpg'
  }
];
const courses = [
  {
    title: 'Architectural workshop Planning',
    description: 'Learn how to create eco-friendly cities and smart workshop spaces.',
    image: '/courses/high perfomance.jpg'
  },
  {
    title: 'Smart City Technologies',
    description: 'Explore the latest innovations in smart city infrastructure and IoT.',
    image: '/courses/high perfomance.jpg'
  },
  {
    title: 'Workshop Transportation Systems',
    description: 'Understand modern transit systems and their role in city planning.',
    image:  '/courses/high perfomance.jpg'
  },
  {
    title: 'Architectural Workshop Design',
    description: 'Dive into architectural principles for designing urban landscapes.',
    image: '/courses/high perfomance.jpg'
  }
];


function KeyFeatures() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);


  return (
    <div className=''>
    <div className="p-10 text-center">
      <h2 className="text-3xl font-bold mb-9"> Key Features of our<span className='text-yellow-500'> Architectural WorkShop </span> Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="p-6 bg-white hover:text-yellow-500 rounded-lg shadow-lg hover:shadow-xl transition relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === index ? (
              <Image 
                src={feature.image} height={200} width={200} 
                alt={feature.title} 
                className="w-full h-40 object-cover rounded-lg mb-4 transition"
              />
            ) : (
              <div className="text-4xl mb-4">{feature.icon}</div>
            )}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>

<div className="p-10 text-center">
      <h2 className="text-3xl font-bold mb-6">Why Attend <span className='text-yellow-500'> Architectural WorkShop </span> Courses?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <Image src={course.image} height={200} width={200} alt={course.title}  className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2 hover:text-yellow-500">{course.title}</h3>
            <p className="text-gray-600">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>

  );
}

export default KeyFeatures;
