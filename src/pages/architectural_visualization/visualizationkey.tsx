import App_layout from '@/layout/app_layout';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';

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
        <div className="relative w-full h-screen mt-20 text-white overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/courses/hero visualization.jpg" // Replace with your actual image path
              alt="Architecture Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
            <div className="absolute inset-0" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Master Architectural<span className='text-yellow-500'> Visualization</span> 
            </h1>
            <p className="text-lg md:text-2xl max-w-2xl mb-6">
              Learn how to create photorealistic renders, stunning animations, and immersive experiences in 3D.
            </p>
            <div className="flex gap-4">
              <Link href="/architectural_visualization/choose">
              <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-yellow-500 transition-all duration-300">
  Start Now
</button>

              </Link>
              <button
                onClick={handleWatchDemo}
                className="bg-transparent border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
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
       
      </App_layout>
    </div>
  );
}

export default Visualizationkey;
