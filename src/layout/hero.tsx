'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { FaUserGraduate, FaPhone, FaGlobe } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

function Hero() {
  const [darkMode, setDarkMode] = useState(false);

  // Add/remove 'dark' class to <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="relative min-h-screen transition-all duration-500 bg-gradient-to-b from-orange-200 to-yellow-500 text-gray-900 dark:bg-gray-900 dark:text-white overflow-hidden">

      {/* Content Wrapper */}
      <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center p-6 md:p-10 gap-8 mx-auto">
        
        {/* Left Section */}
        <div className="flex-1 max-w-xl" data-aos="fade-right">
          <div className="flex items-center gap-2 font-semibold text-lg mb-4 text-[#3e2e2b] dark:text-white">
            <FaUserGraduate /> Salford &amp; Co.
          </div>

          <h1 className="text-4xl font-bold mb-4 text-[#4b2e2b] dark:text-white" data-aos="zoom-in">
            Architecture Courses
          </h1>

          <div className="inline-block bg-[#a58579] text-white px-6 py-2 rounded-full font-semibold mb-6" data-aos="fade-up">
            Build dreams from your desk.
          </div>

          <div className="text-lg mb-4 text-[#4b2e2b] dark:text-white">
            <p className="mb-2 font-medium">Our Courses:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Sustainable Architecture</li>
              <li>Building Info Modeling</li>
              <li>Architectural Visualization</li>
              <li>AI-in Architecture</li>
              <li>Architectural Workshop</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
            <div className="flex items-center gap-2 text-[#4b2e2b] dark:text-white">
              <FaPhone /> 9443604461
            </div>
            <div className="flex items-center gap-2 text-[#4b2e2b] dark:text-white">
              <FaGlobe /> www.Architectural.com
            </div>
          </div>

          {/* Buttons: Visit Now + Toggle Dark Mode */}
          <div className="flex gap-4 mt-6 flex-wrap">
            <Link href="/courses_list" passHref>
              <button
                className="bg-[#a58579] hover:bg-[#8d6f63] transition-colors duration-300 text-white font-semibold px-4 py-2 rounded-full shadow-lg"
                data-aos="zoom-in-up"
              >
                Visit Now
              </button>
            </Link>

            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-4 py-2 rounded-full shadow-lg flex items-center dark:bg-white dark:text-gray-800"
              onClick={toggleDarkMode}
            >
              {darkMode ? <FiSun className="mr-2 text-yellow-400" /> : <FiMoon className="mr-2 text-indigo-600" />}
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center" data-aos="fade-left">
          <Image
            src="/courses/women.png"
            alt="Instructor"
            width={380}
            height={380}
            className="rounded-xl"
          />
        </div>
      </div>

      {/* Background Elements */}
      {darkMode ? (
        <div className="absolute inset-0 z-0">
          {[...Array(50)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute bg-white w-1 h-1 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.8,
              }}
              animate={{ opacity: [0.8, 0.2, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
            />
          ))}
        </div>
      ) : (
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute w-32 h-32 bg-yellow-300 rounded-full top-10 left-10 shadow-xl"
            animate={{ y: [0, 15, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bg-yellow-200 w-96 h-96 opacity-20 rounded-full top-10 left-10"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>
      )}
    </div>
  );
}

export default Hero;
