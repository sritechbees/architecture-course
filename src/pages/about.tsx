import React from 'react'
import App_layout from '@/layout/app_layout'
import { motion } from 'framer-motion'  // for animation

function About() {
  return (
    <App_layout>
      <div className="about-section py-16 mt-16 px-6 md:px-20">

        {/* Heading */}
        <motion.h1
          className="about-heading text-4xl font-extrabold text-center text-gray-800 mb-6 md:text-5xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Architecture Courses: Shaping the Future of Design
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="about-subheading text-xl text-center text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Learn innovative, sustainable, and modern architectural design techniques to build a better tomorrow.
        </motion.p>

        {/* Animated Text */}
        <motion.div
          className="animated-text space-y-4 text-lg text-gray-700 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p>
            Our courses are designed to give you a deep understanding of architecture, from classical principles to futuristic designs.
          </p>
          <p>
            You will explore various cutting-edge architectural styles, sustainable designs, and the latest technologies in the field.
          </p>
        </motion.div>

        {/* Images Section */}
        <div className="image-gallery grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <motion.img
            src="/about/modern architectural.jpg"  // Replace with your image path
            alt="Modern Architecture"
            className="image-gallery-item object-cover w-full h-72 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.2 }}
          />
          <motion.img
            src="/about/Sustainable Architecture.jpg"  // Replace with your image path
            alt="Sustainable Architecture"
            className="image-gallery-item object-cover w-full h-72 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.5 }}
          />
          <motion.img
            src="/about/Urban Architecture.jpg"  // Replace with your image path
            alt="Urban Architecture"
            className="image-gallery-item object-cover w-full h-72 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.8 }}
          />
        </div>

        {/* Trending Design Section */}
        <motion.div
          className="trending-design bg-gray-100 py-8 px-6 mt-16 rounded-lg shadow-md text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Trending in Architecture</h2>
          <p className="text-lg text-gray-600">
            Discover the latest trends in architecture that are revolutionizing design, construction, and urban planning. From smart cities to eco-friendly designs, the future of architecture is here.
          </p>
        </motion.div>

      </div>
    </App_layout>
  )
}

export default About
