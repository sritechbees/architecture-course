"use client";

import App_layout from "@/layout/app_layout";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import ModernStyles from "./morden_styles";
import Offer from "@/components/common/offer";
import CardDesign from "@/components/common/card_design";
import MethodologyTeaching from "@/components/common/methodology_teaching";
import ModernArchitectural from "./definition";
import ModerndesignSection from "./modern_designsection";
import FAQSection from "./faqsection";

function ModernDescription() {
  return (
    <div>
      <App_layout>
        <section className="relative overflow-hidden text-white min-h-[90vh] py-28 flex items-center justify-center bg-black">
          {/* Background Image with Glass + Gradient Layer */}
          <div className="absolute inset-0">
            <Image
              src="/courses/Modern Architectural.jpg"
              alt="Modern Architecture"
              layout="fill"
              objectFit="cover"
              className="opacity-60"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900 via-transparent to-purple-900 opacity-80 z-10" />
          </div>

          {/* Content */}
          <div className="relative z-20 text-center px-4 max-w-4xl">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-md"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Experience Modern Architectural Styles
            </motion.h1>

            <motion.p
              className="text-md md:text-xl text-white/90 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Dive into futuristic designs, sustainable innovations, and creative aesthetics shaping the architectural world today.
            </motion.p>

            <motion.button
              className="px-8 py-3 rounded-full bg-white text-indigo-700 font-semibold shadow-lg hover:shadow-indigo-500/50 transition-all hover:scale-105 duration-300"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Now
            </motion.button>
          </div>

          {/* Animated Shapes / Blobs */}
          <motion.div
            className="absolute w-64 h-64 bg-purple-500/30 rounded-full blur-3xl top-20 left-10 z-0"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 6 }}
          />
          <motion.div
            className="absolute w-80 h-80 bg-indigo-400/30 rounded-full blur-3xl bottom-10 right-10 z-0"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 7 }}
          />
        </section>

        {/* Other Sections */}
        <ModernStyles />
        <Offer />
        <MethodologyTeaching />
        <CardDesign />
        <ModerndesignSection />
        <FAQSection />
      </App_layout>
    </div>
  );
}

export default ModernDescription;
