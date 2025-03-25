import App_layout from '@/layout/app_layout'
import { motion } from 'framer-motion'  // For animation
import Image from 'next/image'
import React from 'react'

function Corporate_Training() {
  return (
    <App_layout>
      <div className="corporate-training-section py-16 mt-10 px-6 md:px-20">
        
        {/* Section Title */}
        <motion.h1
          className="text-4xl font-extrabold text-center text-gray-800 mb-12 md:text-5xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Corporate Architecture Training Programs
        </motion.h1>

        {/* Training Programs Description */}
        <motion.p
          className="text-xl text-center text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Enhance your team&apos;s skills with our specialized architecture training programs designed for corporate needs.
        </motion.p>

        {/* Training Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Training 1 */}
          <motion.div
            className="training-card bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Image
              src="/corporatetraining/Smart Building Technologies.jpg"  height={200} width={200}// Replace with your image path
              alt="Urban Design Training"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Urban Design for Corporations</h3>
              <p className="text-sm text-gray-500 mt-2">Develop sustainable and innovative urban designs for modern cities.</p>
              <p className="text-lg text-gray-700 mt-4">
                This course will teach teams how to approach urban planning and design with a focus on sustainability and scalability.
              </p>
            </div>
          </motion.div>

          {/* Training 2 */}
          <motion.div
            className="training-card bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <Image
              src="/corporatetraining/Smart Building Technologies.jpg" height={200} width={200} // Replace with your image path
              alt="Sustainable Architecture Training"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Sustainable Architecture for Enterprises</h3>
              <p className="text-sm text-gray-500 mt-2">Learn eco-friendly techniques for modern corporate and residential buildings.</p>
              <p className="text-lg text-gray-700 mt-4">
                This training focuses on the principles of sustainable design, energy efficiency, and the integration of green technologies.
              </p>
            </div>
          </motion.div>

          {/* Training 3 */}
          <motion.div
            className="training-card bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Image
              src="/corporatetraining/Smart Building Technologies.jpg" height={200} width={200} // Replace with your image path
              alt="Smart Building Technologies"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Smart Building Technologies for Corporations</h3>
              <p className="text-sm text-gray-500 mt-2">Innovate your architectural designs with the latest smart technologies for buildings.</p>
              <p className="text-lg text-gray-700 mt-4">
                Equip your team with the skills to incorporate IoT, automation, and smart systems into building design and management.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </App_layout>
  )
}

export default Corporate_Training
