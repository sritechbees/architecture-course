import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function MissionVision() {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-9 px-6 md:px-16 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <Image src="/about/mission.png" height={200} width={200} alt="Vision and Mission" className="w-[450px] h-auto rounded-lg shadow-lg" />
        </div>
        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Vision & Mission</h2>
          <p className="text-lg text-gray-300 mb-4">
            Our vision is to shape the future of architecture through innovation and sustainability. Our mission is to provide comprehensive training that emphasizes creativity and practical skills to build a better world.
          </p>
          <button className="relative inline-block px-6 py-2 border border-white text-white font-semibold rounded-lg overflow-hidden group mt-4">
            <span className="absolute inset-0 bg-white transition-all transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
            <span className="relative text-gray-900 group-hover:text-gray-900 text-white">Read More</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default MissionVision;
