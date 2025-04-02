import App_layout from "@/layout/app_layout";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Definition from "./definition";
import ModernStyles from "./morden_styles";

function ModernDescription() {
  return (
    <div>
      <App_layout>
        <section className="relative overflow-hidden text-white py-32 flex items-center justify-center">
          {/* Background Image with Animation */}
          <div className="absolute inset-0 w-full h-full">
            <Image 
              src="/courses/Modern Architectural.jpg" 
              alt="Modern Architecture" 
              layout="fill" 
              objectFit="cover" 
              className="opacity-60 animate-fade" 
            />
          </div>
          
          {/* Content */}
          <div className="relative z-20 text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold leading-tight mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Modern Architectural Styles
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-2xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Discover the future of architecture with cutting-edge designs and innovations.
            </motion.p>
            
            <motion.button 
              className="bg-white text-indigo-600 px-6 py-3 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Now
            </motion.button>
          </div>
       
        </section>
        <Definition/>
        <ModernStyles/>
      </App_layout>
    </div>
  );
}

export default ModernDescription;