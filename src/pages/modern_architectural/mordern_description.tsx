"use client";

import App_layout from "@/layout/app_layout";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function ModernDescription() {
  return (
    <div>
      <App_layout>
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen bg-black text-white flex items-center justify-center px-4 py-28">
          {/* Background Image with Overlays */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/courses/Modern Architectural.jpg"
              alt="Modern Architecture"
              fill
              className="object-cover opacity-60"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1f1c2c] via-transparent to-[#928DAB] opacity-80" />
          </div>

          {/* Animated Blobs */}
          <motion.div
            className="absolute w-72 h-72 bg-purple-600/20 rounded-full blur-3xl top-10 left-16 z-0"
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl bottom-10 right-10 z-0"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 7, repeat: Infinity }}
          />

          {/* Content */}
          <div className="relative z-10 text-center max-w-4xl">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 font-extrabold leading-tight drop-shadow-xl mb-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
             <span className="text-white"> Discover</span> Modern Architectural <span className="text-white">Styles</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Dive into futuristic aesthetics, sustainable innovation, and elegant design philosophies that are reshaping architecture.
            </motion.p>
            <Link href="/modern_architectural/trending_highlight">
            <motion.button
              className="px-8 py-3 rounded-full bg-yellow-500 text-gray-900 hover:text-white font-semibold shadow-xl hover:shadow-yellow-500/40 transition-all hover:scale-105 duration-300"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Now
            </motion.button>
            </Link>
          </div>
        </section>

       
      </App_layout>
    </div>
  );
}

export default ModernDescription;
