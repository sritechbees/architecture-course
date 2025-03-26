
import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <div>
   
    <div className="relative w-full h-screen flex items-center justify-center px-8 md:px-16">
      


    <video
  autoPlay
  loop
  muted
  playsInline
  className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
>
  <source src="/home/bgvedio.mp4" type="video/mp4" />
</video>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content Section */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 space-y-5 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-[Poppins]">
            Elevate Your Architectural Skills
          </h1>
          <p className="text-gray-200 text-lg">
            Join our comprehensive architecture course and master modern
            building design, urban planning, and 3D modeling.
          </p>
          <div className="flex space-x-4 mt-6 justify-center md:justify-start">
            <Link href="/about">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all shadow-lg">
              Get Started
            </button>
            </Link>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all shadow-lg">
              Certifications
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <Image
            src="/home/herobg1.jpg" height={200} width={200}
            alt="Architecture Course"
            className="w-[80%] max-w-md drop-shadow-xl rounded-lg"
          />
        </div>
      </div>
    </div>
    </div>
  );
}

export default HeroSection;
