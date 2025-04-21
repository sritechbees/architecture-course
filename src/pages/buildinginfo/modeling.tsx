"use client";

import React from 'react';
import App_layout from '@/layout/app_layout';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Link from 'next/link';


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
  

  {/* Foreground Content */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative z-20 bg-white/10  px-10 py-12 rounded-3xl shadow-2xl max-w-3xl text-center border border-white/20 mx-auto"
  >
    <h1 className="text-3xl md:text-5xl font-bold mb-4 text-yellow-500">
      Building Information Modeling
    </h1>
    <p className="text-lg md:text-xl text-gray-900 mb-8">
      Reimagine architecture with intelligent 3D workflows that enhance design, collaboration, and execution.
    </p>
    <Link href="/buildinginfo/buildinginfo_tech">
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gray-700 hover:bg-yellow-500 text-white px-8 py-3 font-semibold rounded-lg shadow-lg transition-all"
    >
      Get Started
    </motion.button>
    </Link>
  </motion.div>
</div>

        </section>

      
      
      </App_layout>
    </div>
  );
}

export default Modeling;
