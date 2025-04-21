import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function UrbanDesignV2() {
  return (
    <div className="max-w-6xl m-auto py-10">
    <div className="flex items-center justify-between p-10 rounded-2xl  bg-gray-900 text-white ">
      {/* Left Side - Text */}
      <div className="w-1/2 space-y-6">
        <h1 className="text-4xl font-bold"><span className="text-yellow-500">Why Choose</span> This Course?</h1>
        <ul className="list-disc px-12 space-y-3 text-lg">
          <li className=" hover:text-yellow-500">AI-powered urban design techniques</li>
          <li className=" hover:text-yellow-500">3D visualization skills for modern cities</li>
          <li className=" hover:text-yellow-500">Hands-on experience with top industry tools</li>
          <li className=" hover:text-yellow-500">Focus on sustainable and smart cities</li>
          <li className=" hover:text-yellow-500">Expert-led lessons from industry professionals</li>
          <li className=" hover:text-yellow-500">Project-based learning for real-world impact</li>
          <li className=" hover:text-yellow-500">Boost career opportunities in urban tech</li>
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