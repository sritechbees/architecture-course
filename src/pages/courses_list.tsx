import React from 'react';
import { motion } from 'framer-motion';
import App_layout from '@/layout/app_layout';
import { useRouter } from 'next/router';

const Courses = [
  {
    title: 'Architectural WorkShop',
    description: 'Design modern and functional spaces with key urban strategies.',
    image: '/courses/high perfomance.jpg',
    link: "/urbandesign/urban_description",
    flowerClass: "flower-1"
  },
  {
    title: 'Sustainable Architecture',
    description: 'Create eco-friendly designs using innovative green techniques.',
    image: '/courses/high perfomance.jpg',
    link: "/sustainable_architecture/whychoose_sustainable",
    flowerClass: "flower-2"
  },
  {
    title: 'AI-in Architecture',
    description: 'Explore how AI is revolutionizing modern architecture.',
    image: '/courses/high perfomance.jpg',
    link: '/modern_architectural/mordern_description',
    flowerClass: "flower-3",
  },
  {
    title: 'Architectural Visualization',
    description: 'Present ideas with stunning 3D modeling and rendering.',
    image: '/courses/high perfomance.jpg',
    link: "/architectural_visualization/visualizationkey",
    flowerClass: "flower-4",
  },
  {
    title: 'Smart Cities & Tech',
    description: 'Understand smart city tech like IoT, AI, and automation.',
    image: '/courses/high perfomance.jpg',
    link: "/smart_cities/herosection",
    flowerClass: "flower-5",
  },
  {
    title: 'Building Info Modeling',
    description: 'Optimize construction using BIM for better efficiency.',
    image: '/courses/high perfomance.jpg',
    link: "/buildinginfo/modeling",
    flowerClass: "flower-6",
  },
];

function Courseslist() {
  const router = useRouter();

  return (
    <App_layout>
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-green-50 to-blue-100 py-16 px-8 mt-12">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
          Explore Architecture Features
        </h2>

        {/* Grid with perspective */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12" style={{ perspective: '1500px' }}>
          {Courses.map((course, index) => (
            
            <div
              key={index}
              className="relative w-full h-80 cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.8 }}
                className={`w-full h-full relative shadow-2xl rounded-2xl ${course.flowerClass}`}
                style={{
                  transformStyle: 'preserve-3d',
                  borderRadius: '50% 20% / 30% 40%',
                }}
              >
                {/* Front Face */}
                <div className="absolute inset-0 backface-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover rounded-2xl opacity-80"
                  />
                </div>

                {/* Back Face */}
                <div
                  className="absolute inset-0 flex flex-col justify-center items-center bg-white text-center px-6 backface-hidden"
                  style={{ transform: 'rotateY(180deg)', borderRadius: '50% 20% / 30% 40%' }}
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h2>
                  <p className="text-gray-900 mb-4">{course.description}</p>
                  <button
                    onClick={() => router.push(course.link)}
                    className="bg-yellow-500 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-yellow-600 transition duration-300"
                  >
                    Read More
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </App_layout>
  );
}

export default Courseslist;
