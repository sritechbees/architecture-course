import React, { useState } from "react";
import Image from "next/image";

const tips = [
  {
    title: "Use Energy-Efficient Materials",
    description:
      "Choose materials that reduce energy consumption and improve resource efficiency in buildings, transportation, and more.",
    image: "/courses/tips1.jpg",
  },
  {
    title: "Maximize Natural Light Materials",
    description:
      "Design spaces that utilize natural light through windows and skylights to reduce energy usage and enhance well-being.",
    image: "/courses/tips1.jpg",
  },
  {
    title: "Incorporate Green Roofs",
    description:
      "Green roofs help with insulation, rainwater absorption, and increasing biodiversity in urban areas.",
    image: "/courses/tips1.jpg",
  },
  {
    title: "Utilize Recycled Materials",
    description:
      "Opt for recycled materials in construction to reduce environmental impact and promote circular economy practices.",
    image: "/courses/tips1.jpg",
  },
  {
    title: "Implement Water Conservation Systems",
    description:
      "Integrate rainwater harvesting and low-flow systems to save water and reduce utility costs sustainably.",
    image: "/courses/tips1.jpg",
  },
];

const SustainableTips = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-yellow-500 mb-10">
        Sustainable Architecture Tips
      </h2>
      <div className="flex flex-col md:flex-row  gap-10">
        {/* Left Side Titles */}
        <div className="md:w-1/3 space-y-16">
          {tips.map((tip, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 shadow ${
                activeIndex === index
                  ? "bg-yellow-400 text-white shadow-lg"
                  : "bg-white text-gray-800 hover:bg-yellow-100"
              }`}
            >
              {tip.title}
            </button>
          ))}
        </div>

        {/* Right Side Compact Content */}
        <div className="md:w-2/3 bg-white rounded-xl shadow-md p-4 flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-yellow-600">
            {tips[activeIndex].title}
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
            {tips[activeIndex].description}
          </p>
          <div className="rounded-lg overflow-hidden border-4 border-yellow-500 max-w-md mx-auto">
            <Image
              src={tips[activeIndex].image}
              alt={tips[activeIndex].title}
              width={300}
              height={230}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainableTips;
