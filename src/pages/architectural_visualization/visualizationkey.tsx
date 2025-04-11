import App_layout from '@/layout/app_layout';
import Image from 'next/image';
import React, { useState } from 'react';
import UrbanDescription from '../urbandesign/urban_description';

function Visualizationkey() {
  const [showVideo, setShowVideo] = useState(false);

  const handleWatchDemo = () => {
    setShowVideo(true);
  };

  const closeModal = () => {
    setShowVideo(false);
  };

  return (
    <div>
      <App_layout>
        {/* Hero Section */}
        <div className="relative w-full h-screen text-white overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/courses/Home.png" // Replace with your actual image path
              alt="Architecture Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-60" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Master Architectural Visualization
            </h1>
            <p className="text-lg md:text-2xl max-w-2xl mb-6">
              Learn how to create photorealistic renders, stunning animations, and immersive experiences in 3D.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:bg-gray-200 transition-all duration-300">
                Enroll Now
              </button>
              <button
                onClick={handleWatchDemo}
                className="bg-transparent border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-black transition-all duration-300"
              >
                Watch Demo
              </button>
            </div>
          </div>

          {/* Fullscreen Video Modal */}
          {showVideo && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
              <div className="relative w-full h-full">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-6 text-white text-4xl font-bold z-50"
                >
                  &times;
                </button>
                <video
                  src="/about/bgvedio.mp4"
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                />
              </div>
            </div>
          )}
        </div>
        <UrbanDescription/>
      </App_layout>
    </div>
  );
}

export default Visualizationkey;
