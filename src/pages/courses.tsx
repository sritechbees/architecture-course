import App_layout from '@/layout/app_layout'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

function Courses() {
  return (
    <App_layout>
      <div className="courses-section py-16 mt-10 px-6 md:px-20">
        {/* Section Title */}
        <motion.h1
          className="text-4xl font-extrabold text-center text-gray-800 mb-12 md:text-5xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Architecture Courses: Master the Art of Design
        </motion.h1>

        <motion.p
          className="text-xl text-center text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Explore our curated courses that blend innovative design, sustainable architecture, and the future of urban spaces.
        </motion.p>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Course 1 */}
          <motion.div
            className="course-card bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Image
              src="/courses/Architectural Visualization.jpg" height={200} width={200} // Replace with actual image path
              alt="Urban Design"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Urban Design Principles</h3>
              <p className="text-sm text-gray-500 mt-2">Master the art of designing spaces that integrate modernity and functionality.</p>
              <p className="text-lg text-gray-700 mt-4">
                Learn how to design urban spaces that cater to the needs of growing cities while maintaining sustainability and beauty.
              </p>
            </div>
          </motion.div>

          {/* Course 2 */}
          <motion.div
            className="course-card bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <Image
              src="/courses/Architectural Visualization.jpg" height={200} width={200} // Replace with actual image path
              alt="Sustainable Architecture"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Sustainable Architecture</h3>
              <p className="text-sm text-gray-500 mt-2">Learn eco-friendly design techniques that reduce environmental impact.</p>
              <p className="text-lg text-gray-700 mt-4">
                Explore the world of sustainable architecture and how you can design buildings with minimal carbon footprint.
              </p>
            </div>
          </motion.div>

          {/* Course 3 */}
          <motion.div
            className="course-card bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Image
              src="/courses/Architectural Visualization.jpg" height={200} width={200} // Replace with actual image path
              alt="Modern Architectural Styles"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Modern Architectural Styles</h3>
              <p className="text-sm text-gray-500 mt-2">Discover contemporary trends that are shaping the architecture of the future.</p>
              <p className="text-lg text-gray-700 mt-4">
                Dive into modern architectural styles, including minimalism, industrial design, and the future of aesthetics.
              </p>
            </div>
          </motion.div>

          {/* Course 4 */}
          <motion.div
            className="course-card bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <Image
              src="/courses/Architectural Visualization.jpg" height={200} width={200}// Replace with actual image path
              alt="Architectural Visualization"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Architectural Visualization</h3>
              <p className="text-sm text-gray-500 mt-2">Learn to present your designs effectively with 3D modeling and rendering techniques.</p>
              <p className="text-lg text-gray-700 mt-4">
                Master the art of architectural visualization and bring your designs to life with realistic renderings.
              </p>
            </div>
          </motion.div>

          {/* Course 5 */}
          <motion.div
            className="course-card bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <Image
              src="/courses/Architectural Visualization.jpg" height={200} width={200}// Replace with actual image path
              alt="Smart Cities and Technology"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Smart Cities & Technology</h3>
              <p className="text-sm text-gray-500 mt-2">Explore how technology is transforming urban environments and architecture.</p>
              <p className="text-lg text-gray-700 mt-4">
                Get insights into smart cities, from IoT integration to automated buildings, and how they will shape the future.
              </p>
            </div>
          </motion.div>

          {/* Course 6 */}
          <motion.div
            className="course-card bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Image
              src="/courses/Architectural Visualization.jpg" height={200} width={200}// Replace with actual image path
              alt="Building Information Modeling"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Building Information Modeling</h3>
              <p className="text-sm text-gray-500 mt-2">Learn BIM techniques to optimize construction processes and building management.</p>
              <p className="text-lg text-gray-700 mt-4">
                Understand the process of Building Information Modeling (BIM) and its applications in modern construction.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </App_layout>
  )
}

export default Courses
