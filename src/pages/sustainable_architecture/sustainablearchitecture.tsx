import React, { useState } from 'react';
import Image from 'next/image';

const SustainableArchitecture = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  const cards = [
    {
      title: "Energy-Efficient Building Design",
      description:
        "Designs that cut energy use, lower costs, and minimize carbon emissions.",
      image: "/courses/Sustainable tips.png",
      altImage: "/courses/green1.jpg", // new image
      alt: "Energy-Efficient Building Design",
    },
    {
      title: "Green Roofs and Vertical Gardens",
      description:
        "Improve air quality, reduce heat, and enhance biodiversity with greenery.",
      image: "/courses/Sustainable tips.png",
      altImage: "/courses/green1.jpg",
      alt: "Green Roofs and Vertical Gardens",
    },
    {
      title: "Sustainable Materials in Construction",
      description:
        "Use recycled, renewable, and non-toxic materials for eco-conscious building.",
      image: "/courses/Sustainable tips.png",
      altImage: "/courses/green1.jpg",
      alt: "Sustainable Materials in Construction",
    },
    {
      title: "Solar Panels for Renewable Energy",
      description:
        "Utilize solar power to reduce carbon footprints and energy bills.",
      image: "/courses/Sustainable tips.png",
      altImage: "/courses/green1.jpg",
      alt: "Solar Panels for Renewable Energy",
    },
    {
      title: "Water Conservation and Management",
      description:
        "Smart plumbing and rainwater systems to minimize water waste.",
      image: "/courses/Sustainable tips.png",
      altImage: "/courses/green1.jpg",
      alt: "Water Conservation and Management",
    },
    {
      title: "Maximizing Natural Lighting",
      description:
        "Enhance interiors with sunlight to reduce electricity usage.",
      image: "/courses/Sustainable tips.png",
      altImage: "/courses/green1.jpg",
      alt: "Maximizing Natural Lighting",
    },
  ];

  const toggleDescription = (index: number) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-12 mb-8">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-12">
          <span className='text-gray-900'>Sustainable Architecture</span> for a Greener Future
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const isActive = visibleIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={isActive ? card.altImage : card.image}
                    alt={card.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl transition-all duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col">
                  <h3 className="text-lg font-semibold text-green-700 mb-2">
                    {card.title}
                  </h3>
                  {isActive && (
                    <p className="text-sm text-gray-600 mb-3 transition-all duration-500">
                      {card.description}
                    </p>
                  )}
                  <button
                    onClick={() => toggleDescription(index)}
                    className="self-start text-sm px-4 py-1 rounded-full bg-yellow-400 text-white hover:bg-yellow-500 transition-colors duration-300"
                  >
                    {isActive ? "Hide" : "Read More"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SustainableArchitecture;
