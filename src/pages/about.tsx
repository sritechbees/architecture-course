import React, { useEffect } from 'react'
import App_layout from '@/layout/app_layout'
import { motion } from 'framer-motion'  // for animation
import MissionVision from '@/home/missionvission'
import Reasonchoose from '@/home/reasonchoose'
import Testimonial from '@/home/testimonial'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Faqdesign from '@/components/common/faqdesign'


function About() {
  useEffect(() => {
    AOS.init({ duration: 1200 })
  }, [])

  return (
    <App_layout>
       <MissionVision/>
       <Reasonchoose/>
       <Testimonial/>
      
       <Faqdesign/>
       
    
      <div className="about-section bg-gray-900 py-9 px-6 md:px-20">

      
        <motion.h1
          className="about-heading text-4xl font-extrabold text-center text-blue-500 mb-6 md:text-5xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Architecture Courses: Shaping the Future of Design
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="about-subheading text-xl text-center text-white mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Learn innovative, sustainable, and modern architectural design techniques to build a better tomorrow.
        </motion.p>

        {/* Animated Text */}
        <motion.div
          className="animated-text space-y-4 text-lg text-white  text-center"
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
            src="/about/modern architectural.jpg"
            alt="Modern Architecture"
            className="image-gallery-item object-cover w-full h-72 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.2 }}
          />
          <motion.img
            src="/about/Sustainable Architecture.jpg"
            alt="Sustainable Architecture"
            className="image-gallery-item object-cover w-full h-72 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.5 }}
          />
          <motion.img
            src="/about/Urban Architecture.jpg"
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

        {/* Future Architecture Trends Section with AOS Animation */}
        <div className="future-trends bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 py-10 px-6 mt-16 rounded-lg shadow-lg text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800 mb-4" data-aos="zoom-in">
            Future Architecture Trends
          </h2>
          <p className="text-lg text-gray-600 mb-6" data-aos="fade-up" data-aos-delay="300">
            Explore how AI, smart materials, and 3D printing are transforming architecture.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="trend-card p-6 bg-gray-100 rounded-lg shadow-md" data-aos="flip-left">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">AI-Driven Designs</h3>
              <p className="text-gray-600">Discover how artificial intelligence is revolutionizing architectural planning.</p>
            </div>
            <div className="trend-card p-6 bg-gray-100 rounded-lg shadow-md" data-aos="flip-right" data-aos-delay="300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainable Smart Cities</h3>
              <p className="text-gray-600">Learn about green energy solutions and intelligent city planning.</p>
            </div>
            <div className="trend-card p-6 bg-gray-100 rounded-lg shadow-md" data-aos="flip-up" data-aos-delay="600">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">3D Printing in Construction</h3>
              <p className="text-gray-600">Understand how 3D printing is reshaping how buildings are constructed.</p>
            </div>
          </div>
        </div>

      </div>
    </App_layout>
  )
}

export default About
