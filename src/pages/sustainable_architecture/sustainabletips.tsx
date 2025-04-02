import React from "react";
const SustainableTips = () => {
  const tips = [
    {
      title: 'Use Energy-Efficient Materials',
      description: 'Choose materials that reduce energy consumption and improve resource efficiency in various applications, such as buildings, transportation, and industry, by minimizing energy waste and maximizing performance.',
      frontBgColor: '#6A2C70',
      backBgColor: '#F08A5D',
    },
    {
      title: 'Maximize Natural Light Materials',
      description: 'Design spaces that utilize natural light through strategic placement of windows, skylights, and lighting, reducing the need for artificial lighting while improving well-being.',
      frontBgColor: '#2E8B57',
      backBgColor: '#FFD700',
    },
    {
      title: 'Incorporate Green Roofs',
      description: 'A green roof can help with insulation, absorb rainwater, and promote biodiversity in urban areas by incorporating layers of vegetation, structural support, waterproofing, and water management systems.',
      frontBgColor: '#3CB371',
      backBgColor: '#8A2BE2',
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-semibold text-center text-green-600 mb-6">
        Sustainable Architecture Tips
      </h2>
      <div className="flex flex-wrap justify-between gap-6">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="w-full sm:w-[48%] md:w-[32%] lg:w-[30%] bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
          >
            <div className="p-6 flex-grow">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: tip.frontBgColor }}>
                {tip.title}
              </h3>
              <p className="text-gray-700 text-lg">{tip.description}</p>
            </div>
            <div
              className="bg-gradient-to-r from-[#F08A5D] to-[#F0C808] p-4 text-center flex-shrink-0"
              style={{ backgroundColor: tip.backBgColor }}
            >
              <p className="text-white font-semibold">Learn More</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SustainableTips;
