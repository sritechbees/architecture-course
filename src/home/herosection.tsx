import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative w-full py-16 sm:py-20 flex items-center justify-center">
        
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-50 z-10 pointer-events-none" />

        {/* Content */}
        <div className="relative z-20 flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-10">
          
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Elevate <span className="text-yellow-500">Your Architectural</span> Skills
            </h1>
            <p className="text-base sm:text-lg text-gray-800 max-w-md mx-auto lg:mx-0">
              Join our comprehensive architecture course and master modern building design,
              urban planning, and 3D modeling.
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center lg:justify-start">
              <Link href="/courses">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all shadow-lg">
                  Get Started
                </button>
              </Link>
              <button className="relative inline-block px-6 py-3 max-sm:w-48 max-sm:ml-12 border bg-gray-900 border-gray-900 text-white font-semibold rounded-lg overflow-hidden group">
                <span className="absolute inset-0 bg-yellow-500 transition-transform transform scale-x-0 group-hover:scale-x-100 origin-left duration-300"></span>
               <Link href="/certificates">
                <span className="relative text-yellow-500 group-hover:text-white transition-colors duration-300">Certifications</span>
                </Link>  </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/home/herobg1.jpg"
              alt="Architecture Course"
              width={650}
              height={500}
              className="w-full max-w-[450px] sm:max-w-[500px] max-sm:ml-7 lg:max-w-[650px] h-auto rounded-xl shadow-xl object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
