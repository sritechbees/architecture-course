import Image from "next/image";
import React from "react";

const features = [
  "3D Visualization helps architects and engineers make informed design decisions with digital building models.",
  "Data-driven modeling improves collaboration by combining geometry with real-time information.",
  "Clash detection ensures construction accuracy by identifying system conflicts before work begins.",
];

export default function KeyFeaturesCard() {
  return (
    <div className="relative bg-gray-100 px-4 sm:px-8 lg:px-20 overflow-hidden pb-10">
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-2xl  overflow-hidden">
        {/* Left Column - Image */}
        <div className="flex justify-center items-center px-6 bg-gray-50">
          <Image
            src="/courses/keyy.png"
            height={400}
            width={400}
            alt="BIM Key Features"
            className="rounded-xl object-contain w-full max-w-md"
          />
        </div>

        {/* Right Column - Paragraph and Bullet Points */}
        <div className="p-6 sm:p-10 text-gray-900 flex flex-col justify-center">
          <h2 className="text-1xl md:text-2xl font-bold mb-6">
            <span className="text-yellow-500">Key Features of</span> BIM in Architecture
          </h2>
          <div className="space-y-4 text-gray-700 text-base leading-relaxed">
            {features.map((point, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-yellow-500 font-bold">✔</span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
