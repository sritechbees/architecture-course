import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function MissionVision() {
  return (
    <div className="mt-28 bg-gray-200 p-2 max-w-7xl mx-auto rounded-2xl">
    <div className="relative px-6 md:px-16 overflow-hidden">
      <div className="relative z-10  grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <Image src="/about/missionn.png" height={100} width={100} alt="Vision and Mission" className="w-[450px]" />
        </div>
        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision & Mission</h2>
          <p className="text-lg text-gray-900 mb-4">
            Our vision is to shape the future of architecture through innovation and sustainability. Our mission is to provide comprehensive training that emphasizes creativity and practical skills to build a better world.
          </p>
          <button className="relative inline-block px-6 py-2 border border-gray-900 text-white font-semibold rounded-lg overflow-hidden group mt-4">
            <span className="absolute inset-0 bg-yellow-500 transition-all transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
            <span className="relative text-gray-900 group-hover:text-gray-900 text-yellow-500">Read More</span>
          </button>
        </motion.div>
      </div>
    </div>
    </div>
  );
}

export default MissionVision;
