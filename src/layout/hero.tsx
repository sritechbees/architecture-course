'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { FaUserGraduate, FaPhone, FaGlobe } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

function Hero() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`relative min-h-screen transition-all duration-500 overflow-hidden text-gray-900 dark:text-white ${darkMode ? 'bg-[#0b1120]' : 'bg-gradient-to-b from-yellow-100 to-blue-100'}`}>

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {darkMode ? (
          <>
            {/* Moon */}
            <motion.div
              className="absolute top-16 left-16 w-32 h-32 bg-blue-200 rounded-full shadow-2xl"
              animate={{ y: [0, 10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />

            {/* Stars */}
            {[...Array(40)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute w-[2px] h-[2px] bg-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: 0.8,
                }}
                animate={{ opacity: [0.8, 0.2, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
              />
            ))}
          </>
        ) : (
          <>
            {/* Sun */}
            <motion.div
              className="absolute top-12 left-12 w-40 h-40 bg-yellow-300 rounded-full shadow-2xl"
              animate={{ y: [0, 15, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />

            {/* Sun Glow */}
            <motion.div
              className="absolute top-12 left-12 w-96 h-96 bg-yellow-100 opacity-30 rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            {/* Clouds */}
            {[...Array(2)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute bg-white rounded-full w-32 h-16 opacity-50"
                style={{
                  top: `${30 + index * 20}%`,
                  left: `${index * 30 + 10}%`,
                }}
                animate={{ x: [0, 30, 0] }}
                transition={{ duration: 20 + index * 5, repeat: Infinity }}
              />
            ))}
          </>
        )}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center p-6 md:p-10 gap-8">
        {/* LEFT */}
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

          {/* Buttons */}
          <div className="flex gap-4 mt-6 flex-wrap">
            <Link href="/courses_list" passHref>
              <button className="bg-[#a58579] hover:bg-[#8d6f63] transition-colors duration-300 text-white font-semibold px-4 py-2 rounded-full shadow-lg">
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

        {/* RIGHT */}
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
    </div>
  );
}

export default Hero;
