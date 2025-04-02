import App_layout from '@/layout/app_layout';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const courses = [
  {
    title: 'Urban Design',
    description: 'Master the art of designing spaces that integrate modernity and functionality. Learn key strategies for urban planning and development.',
    image: '/courses/Architectural Visualization.jpg',
    link:"/urbandesign/urban_description",
  },
  {
    title: 'Sustainable Architecture',
    description: 'Learn eco-friendly design techniques that reduce environmental impact. Discover innovative materials and energy-efficient solutions.',
    image: '/courses/Architectural Visualization.jpg',
    link:"/sustainable_architecture/whychoose_sustainable",
  },
  {
    title: 'Modern Architectural Styles',
    description: 'Discover contemporary trends that are shaping the architecture of the future. Explore minimalism, industrial design, and beyond.',
    image: '/courses/Architectural Visualization.jpg',
    link: '/modern_architectural/mordern_description',
  },
  {
    title: 'Architectural Visualization',
    description: 'Learn to present your designs effectively with 3D modeling and rendering techniques. Improve your skills in realistic architectural presentation.',
    image: '/courses/Architectural Visualization.jpg',
    link:"/urbandesign/urban_description",
  },
  {
    title: 'Smart Cities & Tech',
    description: 'Explore how technology is transforming urban environments and architecture. Understand IoT, automation, and AI in city planning.',
    image: '/courses/Architectural Visualization.jpg',
    link:"/urbandesign/urban_description",
  },
  {
    title: 'Building Info Modeling',
    description: 'Learn BIM techniques to optimize construction processes and building management. Enhance efficiency in architecture and engineering.',
    image: '/courses/Architectural Visualization.jpg',
    link:"/urbandesign/urban_description",
  },
];

function Courses() {
  return (
    <App_layout>
     <div className="relative h-screen w-full flex flex-col items-center justify-center">
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        autoPlay 
        loop 
        muted
      >
        <source src="/about/bgvedio.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 text-center text-white">
      <motion.h1 
          className="text-5xl font-bold mb-9"
          initial={{ opacity: 0, y: -50 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            color: ["#002bff", "#00ff00"] 
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            repeatType: "loop" 
          }}
        >
          Welcome!
        </motion.h1>  
        <motion.p 
          className="text-5xl font-bold mb-5 text-yellow-500"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Architecture Courses: Master the Art of Design
        </motion.p>
        <motion.p 
          className="mt-2 text-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        >
          All the skills you need in one place
        </motion.p>
      </div>
    </div>

      <div className="bg-gradient-to-br from-gray-900 via-gray-200 to-gray-900 py-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-white">
            Architecture Courses: Master the Art of Design
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className="relative bg-white p-6 shadow-xl rounded-lg border border-gray-200 overflow-hidden group transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-cyan-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-1000"></div>
                
                {/* Image Section with Hover Effect */}
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={course.image}
                    alt={course.title}
                    height={500}
                    width={500}
                    className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                {/* Card Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-xl font-semibold text-gray-700 mb-2 group-hover:text-white transition-colors duration-300 truncate">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-200 transition-colors duration-300 mb-4 line-clamp-3">
                    {course.description}
                  </p>
                  <Link href={course.link} className="relative px-4 py-2 font-semibold rounded-lg bg-blue-600 text-white transition-all duration-300 group hover:bg-blue-700">
                  <span className="absolute border border-white rounded-lg inset-0 bg-gradient-to-tr from-orange-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                
                    <span className='relative z-10'>Read More</span>
                  </Link>

                 
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </App_layout>
  );
}

export default Courses;
