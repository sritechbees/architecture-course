import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function UrbanDesignV2() {
  return (
    <div className="max-w-6xl m-auto py-10">
    <div className="flex items-center justify-between p-10 rounded-2xl  bg-gray-900 text-white ">
      {/* Left Side - Text */}
      <div className="w-1/2 space-y-6">
        <h1 className="text-4xl font-bold">Why Choose This Course?</h1>
        <ul className="list-disc px-12 space-y-3 text-lg">
          <li>AI-powered urban design techniques</li>
          <li>3D visualization skills for modern cities</li>
          <li>Hands-on experience with top industry tools</li>
          <li>Focus on sustainable and smart cities</li>
          <li>Expert-led lessons from industry professionals</li>
          <li>Project-based learning for real-world impact</li>
          <li>Boost career opportunities in urban tech</li>
        </ul>
      </div>
      
      {/* Right Side - Image */}
      <motion.div 
        className="w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/about/student.jpg" height={200} width={200}
          alt="Urban Design Concept"
          className="rounded-xl shadow-lg h-80 w-96 hover:scale-105 transition-transform"
        />
      </motion.div>
    </div>
    </div>
  );
}

export default UrbanDesignV2;