"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import App_layout from "@/layout/app_layout";
import ModernStyles from "./morden_styles";
import MethodologyTeaching from "@/components/common/methodology_teaching";
import ModerndesignSection from "./modern_designsection";
import CardDesign from "@/components/common/card_design";
import Offer from "@/components/common/offer";
import FAQSection from "./faqsection";
import Image from "next/image";

const trendingData = [
  {
    title: "Sustainable Materials",
    image:"/courses/m2.jpg",
    desc: "Eco-friendly materials for greener buildings.",
  },
  {
    title: "Biophilic Design",
    image:"/courses/m2.jpg",
    desc: "Connecting architecture with nature.",
  },
  {
    title: "Parametric Forms",
    image:"/courses/m2.jpg",
    desc: "Complex geometries using parametric tools.",
  },
  {
    title: "AI-Powered Design",
    image:"/courses/m2.jpg",
    desc: "Leveraging AI for smart architecture.",
  },
  {
    title: "Net-Zero Buildings",
    image:"/courses/m2.jpg",
    desc: "Buildings with zero energy footprint.",
  },
  {
    title: "Modular Architecture",
    image:"/courses/m2.jpg",
    desc: "Prefab modular systems for efficiency.",
  },
];

const highlightKeywords = trendingData.map(item => item.title);

const TrendingArchitecturalHighlights = () => {
  return (
    <App_layout>
      <section className="relative py-16 mt-16 bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-10 drop-shadow-md"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Sparkles className="inline-block text-yellow-400 mr-2 mb-2 animate-pulse" />
            Trending <span className="text-yellow-500">AI Architectural</span> Highlights
          </motion.h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {trendingData.map((item, index) => {
              const isHighlighted = highlightKeywords.includes(item.title);
              return (
                <motion.div
                  key={index}
                  className={`group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg transition duration-300 hover:shadow-yellow-400/30 ${
                    isHighlighted ? "hover:bg-yellow-500/10" : "hover:bg-white/10"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Main Title */}
                  <p
                    className={`text-lg font-semibold transition duration-300 ${
                      isHighlighted
                        ? "group-hover:text-yellow-400 text-white/90"
                        : "text-white/90"
                    }`}
                  >
                    {item.title}
                  </p>

                  {/* Hover Content */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-4">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={50}
                        height={50}
                        className="rounded-full object-contain"
                      />
                      <p className="text-sm text-white/80">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Decorative Floating Element */}
        <motion.div
          className="absolute -top-20 -left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl z-0"
          animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 10 }}
        />
      </section>

      <ModernStyles />
      <MethodologyTeaching />
      <ModerndesignSection />
      <CardDesign />
      <FAQSection />
      <Offer />
    </App_layout>
  );
};

export default TrendingArchitecturalHighlights;
