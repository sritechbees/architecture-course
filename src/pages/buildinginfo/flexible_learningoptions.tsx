import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Laptop } from 'lucide-react';
import Image from 'next/image';

function FlexibleLearningOptions() {
  return (
    <div className="bg-gray-100 px-6 md:px-16 lg:px-24 font-poppins">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            Flexible <span className='text-yellow-500'>Learning Options</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Our Information Architecture Modeling course is designed with flexibility in mind.
            Whether you&apos;re a full-time student or a working professional, choose the learning pace and format that fits you.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Clock className="text-yellow-500 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Self-Paced Modules</h4>
                <p className="text-gray-600">Access lessons anytime, anywhere at your own speed.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Laptop className="text-yellow-500 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Live Instructor Sessions</h4>
                <p className="text-gray-600">Join weekly live discussions and Q&A with experts.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <BookOpen className="text-yellow-500 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Comprehensive Resources</h4>
                <p className="text-gray-600">Get access to templates, exercises, and case studies.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/courses/Flexible Learning Options.jpg" height={200} width={200}
            alt="Flexible Learning"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default FlexibleLearningOptions;
