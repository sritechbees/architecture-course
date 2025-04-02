import React, { useState } from 'react';
import Image from 'next/image';

const SustainableArchitecture = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  const cards = [
    {
      title: "Energy-Efficient Building Design",
      description:
        "Sustainable architecture focuses on energy-efficient designs that reduce energy consumption, lower operating costs, and minimize carbon emissions.",
      image: "/courses/Sustainable tips.png",
      alt: "Energy-Efficient Building Design",
    },
    {
      title: "Green Roofs and Vertical Gardens",
      description:
        "Green roofs and vertical gardens help improve air quality, reduce heat island effect, and support local biodiversity while enhancing the aesthetic of buildings.",
      image: "/courses/Sustainable tips.png",
      alt: "Green Roofs and Vertical Gardens",
    },
    {
      title: "Sustainable Materials in Construction",
      description:
        "Choosing sustainable materials like recycled steel, bamboo, and non-toxic paints helps reduce the environmental impact of construction and ensures healthier living spaces.",
      image: "/courses/Sustainable tips.png",
      alt: "Sustainable Materials in Construction",
    },
    {
      title: "Solar Panels for Renewable Energy",
      description:
        "Incorporating solar panels in architecture not only provides renewable energy but also contributes to lowering the building's carbon footprint and reducing energy costs.",
      image: "/courses/Sustainable tips.png",
      alt: "Solar Panels for Renewable Energy",
    },
    {
      title: "Water Conservation and Management",
      description:
        "Sustainable architecture incorporates water-saving technologies, such as rainwater harvesting systems and low-flow fixtures, to conserve water and reduce utility bills.",
      image:"/courses/Sustainable tips.png",
      alt: "Water Conservation and Management",
    },
    {
      title: "Maximizing Natural and Lighting",
      description:
        "Designing buildings to maximize natural light reduces the need for artificial lighting, enhances well-being, and creates a healthier indoor environment.",
      image: "/courses/Sustainable tips.png",
      alt: "Maximizing Natural Lighting",
    },
  ];

  const toggleDescription = (index: number) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div className="bg-green-500">
      <div className="mx-auto py-10">
        <h4 className="font-Akaya text-3xl font-bold text-center py-10 text-white">
          Sustainable Architecture for a Greener Future
        </h4>
        <div className="flex flex-wrap justify-center gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-72 md:w-80 border rounded-lg p-5 bg-white hover:bg-gradient-to-r hover:from-[#a8e6cf] hover:via-[#dcedc1] hover:to-[#ffd54f] hover:text-gray-600 transition-all duration-700 shadow-lg"
            >
              <Image
                className="rounded-lg p-1 bg-white hover:border-white"
                src={card.image}
                height={200}
                width={350}
                alt={card.alt}
              />
              <h3 className="font-bold text-center text-xl py-3 font-Akaya">
                {card.title}
              </h3>
              {visibleIndex === index && (
                <p className="font-Akaya mt-2">{card.description}</p>
              )}
              <div className='flex justify-center'>
              <button
                className="mt-3 bg-[#ecc73a] text-white  py-1 px-4 rounded-lg  font-Akaya text-sm hover:bg-[#f1a500] transition-colors duration-300"
                onClick={() => toggleDescription(index)}
              >
                {visibleIndex === index ? "Hide" : "Read More"}
              </button>
            </div>
        </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SustainableArchitecture;
