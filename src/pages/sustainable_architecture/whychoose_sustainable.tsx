import React, { useState } from "react";
import { motion } from "framer-motion";
import App_layout from "@/layout/app_layout";

import Link from "next/link";

const backgrounds = [

  "/courses/Sustainable Architecture.jpg",
  
];

const WhychooseSustainable = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const handleButtonClick = () => {
    setShowVideo(true);
    setTimeout(() => {
      setShowVideo(false);
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000); // Adjust time to match video length
  };

  return (
    <div>
      <App_layout>
        <div className="relative w-full h-screen mt-20 overflow-hidden flex items-center justify-center text-white">
          {/* Background Image (Changes after video) */}
          {!showVideo && (
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-opacity-40 bg-center"
              style={{ backgroundImage: `url('${backgrounds[currentBgIndex]}')` }}
            ></div>
          )}

          {/* Video Background (Plays when button is clicked) */}
          {showVideo && (
            <video
              autoPlay
              className="absolute inset-0 w-full h-full object-cover"
              onEnded={() => setShowVideo(false)}
            >
              <source src="/courses/Sustainable Architecturebg.mp4" type="video/mp4" />
            </video>
          )}

          {/* Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative text-center p-6 max-w-2xl"
          >
            <h1 className="text-5xl font-bold">Why Choose <span className="text-yellow-500">Sustainable Architecture</span>?</h1>
            <p className="mt-4 text-lg text-white/90">
              Embrace a future of sustainability. Protect the oceans, reduce waste, and live responsibly.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-6"
            >
              <div className="flex gap-5 justify-center">
              <button
                onClick={handleButtonClick}
                className="bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition"
              >
                Get Started
              </button>
              <Link href="/sustainable_architecture/sustainable_description">
              <button
                onClick={handleButtonClick}
                className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition"
              >
                view More
              </button>
              </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>   
      </App_layout>
    </div>
  );
};

export default WhychooseSustainable;
