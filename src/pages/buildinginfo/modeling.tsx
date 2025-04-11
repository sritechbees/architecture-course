import React, { useState } from 'react';
import Image from 'next/image';
import App_layout from '@/layout/app_layout';
import { motion, AnimatePresence } from 'framer-motion';
import KeyFeaturesCard from './Key Features';
import HandsOnProject from './handson project';


function Modeling() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="py-16">
      <App_layout>
        {/* Image Wrapper */}
        <div className="relative w-full max-w-7xl mx-auto overflow-hidden h-[450px]">
          <Image
            src="/courses/building one.jpg"
            alt="Building Info Modeling"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />

          {/* Left-side Animated Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 text-white space-y-6 bg-black/30"
          >
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold leading-tight text-[#f8d7b0]"
            >
              Building Info <br /> Modeling
            </motion.h1>

            <motion.p
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-[#f8d7b0]"
            >
              Architect
            </motion.p>

            <motion.p
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-bold border-t border-[#f8d7b0] pt-2 w-max"
            >
              BUILDING INFO MODELING
            </motion.p>

            <motion.button
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              onClick={() => setShowDemo(!showDemo)}
              className="bg-[#517c6a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#406b59] transition w-max"
            >
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Right-side Ladder Animation */}
          <AnimatePresence>
            {showDemo && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex justify-end items-center pr-10"
              >
                <div className="relative w-[320px] h-[300px]">
                  {/* Paragraph 1 - Top */}
                  <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 200, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute top-0 right-5 text-white p-4 rounded-lg shadow-md w-[280px] bg-black/60"
                  >
                    <p>
                      Building Information Modeling (BIM) transforms architectural workflows using intelligent 3D models.
                    </p>
                  </motion.div>

                  {/* Paragraph 2 - Step down & left */}
                  <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -200, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute top-[90px] right-[120px] mt-5 p-4 rounded-lg text-white shadow-md w-[280px] bg-black/60"
                  >
                    <p>
                      It enhances collaboration, enabling teams to coordinate and detect issues early in the process.
                    </p>
                  </motion.div>

                  {/* Paragraph 3 - Step down more */}
                  <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="absolute top-[180px] right-[220px] text-white p-4 mt-5 rounded-lg shadow-md w-[280px] bg-black/60"
                  >
                    <p>
                      BIM supports a building’s full lifecycle from design and construction to maintenance.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <KeyFeaturesCard/>
        <HandsOnProject/>
      </App_layout>
    </div>
  );
}

export default Modeling;
