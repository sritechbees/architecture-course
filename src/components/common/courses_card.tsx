'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaUserGraduate, FaPhone, FaGlobe } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Coursescard() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`relative min-h-screen w-full overflow-hidden transition-all duration-500 ${
        darkMode
          ? 'bg-[#0a1020]'
          : 'bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300'
      } flex items-center justify-center p-4 py-8 mt-12`}
    >
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {darkMode ? (
          <>
            {/* Moon */}
            <motion.div
              className="absolute top-16 left-16 w-32 h-32 bg-blue-200 rounded-full shadow-2xl"
              animate={{ y: [0, 10, 0], scale: [1, 1.05, 1] }}
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
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
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
          </>
        )}
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center p-6 md:p-10 gap-8">
        {/* Left Section */}
        <div className="flex-1 max-w-xl" data-aos="fade-right">
          <div
            className={`flex items-center gap-2 font-semibold text-lg mb-4 ${
              darkMode ? 'text-yellow-300' : 'text-[#3e2e2b]'
            }`}
          >
            <FaUserGraduate /> Salford &amp; Co.
          </div>

          <h1
            className={`text-4xl md:text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-[#4b2e2b]'
            }`}
            data-aos="zoom-in"
          >
            Architecture Courses
          </h1>

          <div
            className="inline-block bg-[#a58579] text-white px-6 py-2 rounded-full font-semibold mb-6"
            data-aos="fade-up"
          >
            Build dreams from your desk.
          </div>

          <div
            className={`text-lg mb-4 ${
              darkMode ? 'text-yellow-100' : 'text-[#4b2e2b]'
            }`}
          >
            <p className="mb-2 font-medium">Our Courses:</p>
            <ul className="list-disc ml-6 space-y-1">
              <Link href="/sustainable_architecture/whychoose_sustainable">
                <li>Sustainable Architecture</li>
              </Link>
              <Link href="/buildinginfo/modeling">
                <li>Building Info Modeling</li>
              </Link>
              <Link href="/architectural_visualization/visualizationkey">
                <li>Architectural Visualization</li>
              </Link>
              <Link href="/modern_architectural/mordern_description">
                <li>AI-in Architecture</li>
              </Link>
              <Link href="architectural_workshop/workshop">
                <li>Architectural Workshop</li>
              </Link>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
            <div
              className={`flex items-center gap-2 ${
                darkMode ? 'text-white' : 'text-[#4b2e2b]'
              }`}
            >
              <FaPhone /> 9443604461
            </div>
            <div
              className={`flex items-center gap-2 ${
                darkMode ? 'text-white' : 'text-[#4b2e2b]'
              }`}
            >
              <FaGlobe /> www.Architectural.com
            </div>

            <Link href="/courses_list">
              <button
                className="bg-[#a58579] hover:bg-[#8d6f63] transition-colors duration-300 text-white font-semibold px-3 py-2 rounded-full shadow-lg"
                data-aos="zoom-in-up"
              >
                Visit Now
              </button>
            </Link>
          </div>

          {/* Toggle Mode Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="mt-6 flex items-center gap-3 bg-white dark:bg-yellow-100 text-gray-800 px-5 py-2 rounded-full shadow-lg transition-all duration-300"
            onClick={toggleDarkMode}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={darkMode ? 'sun' : 'moon'}
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {darkMode ? (
                  <FiSun className="text-yellow-400 text-xl" />
                ) : (
                  <FiMoon className="text-indigo-600 text-xl" />
                )}
              </motion.div>
            </AnimatePresence>
            <span className="font-semibold">
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </span>
          </motion.button>
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
    </div>
  );
}
