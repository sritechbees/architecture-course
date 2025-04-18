"use client";

import React from 'react';
import App_layout from '@/layout/app_layout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import KeyFeaturesCard from './Key Features';
import HandsOnProject from './handson project';
import ExpertInstructors from './expert_instructors';
import FlexibleLearningOptions from './flexible_learningoptions';
import OurTrainingMethodology from './ourtraining_methodology';
import JobPlacementSupport from './jobplacement_support';
import WhyChoose from './whychoos';
import Faq from './faq';

function Modeling() {
  return (
    <div className="text-white">
      <App_layout>
        {/* Hero Section with Background Image */}
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
          {/* Background Image */}
          <Image
            src="/courses/port2.jpg" // ✅ replace with your actual path
            alt="Building Information Modeling"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
            priority
          />

          {/* Overlay Gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/70 z-10" />

          {/* Content Box */}
          <div className="relative">
  {/* Background Image */}
  <div className="absolute">
    <Image
      src="/courses/building one.jpg" height={200} width={200} // replace with your image path
      alt="Background"
      className=" rounded-3xl"
    />
  </div>

  {/* Foreground Content */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative z-20 bg-white/10 backdrop-blur-md px-10 py-12 rounded-3xl shadow-2xl max-w-3xl text-center border border-white/20 mx-auto"
  >
    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-500">
      Building Information Modeling
    </h1>
    <p className="text-lg md:text-xl text-gray-900 mb-8">
      Reimagine architecture with intelligent 3D workflows that enhance design, collaboration, and execution.
    </p>
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="bg-[#1e7551] hover:bg-[#3f715c] text-white px-8 py-3 font-semibold rounded-lg shadow-lg transition-all"
    >
      Get Started
    </motion.button>
  </motion.div>
</div>

        </section>

        {/* Feature Sections */}
        <KeyFeaturesCard />
        <HandsOnProject />
        <ExpertInstructors/>
        <FlexibleLearningOptions/>
        <OurTrainingMethodology/>
        <JobPlacementSupport/>
        <WhyChoose/>
        <Faq/>
      </App_layout>
    </div>
  );
}

export default Modeling;
