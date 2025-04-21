import Image from 'next/image';
import React from 'react';

function CardDesign() {
  const cardData = [
    {
      title: 'AI in Architecture',
      description: 'Discover how machine learning models assist in designing efficient, sustainable structures through data-driven decisions.'
    },
    {
      title: 'Parametric Design',
      description: 'Master tools like Grasshopper and Rhino to create flexible, rule-based 3D models and innovative design forms.'
    },
    {
      title: 'Urban Data Mapping',
      description: 'Analyze spatial data to uncover urban patterns, infrastructure needs, and guide smarter city planning.'
    },
    {
      title: 'Generative Algorithms',
      description: 'Learn how to use algorithmic logic to generate unique architectural forms and responsive design solutions.'
    }
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {cardData.map((item, index) => (
        <div 
          key={index} 
          className="w-[220px] h-[300px] [perspective:1000px]"
        >
          <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
            {/* Front Side */}
            <div 
              className="absolute w-full h-full rounded-lg overflow-hidden shadow-lg"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <Image 
                src={`/courses/m2.jpg`}
                alt={`Card ${index + 1}`}
                width={220}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-yellow-500 bg-opacity-50 text-white text-center py-2 font-semibold">
                {item.title}
              </div>
            </div>

            {/* Back Side */}
            <div 
              className="absolute w-full h-full bg-yellow-200 rounded-lg text-gray-900 p-4 transform rotate-y-180 shadow-lg flex flex-col justify-center items-center"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <h3 className="text-lg font-bold mb-2 text-center">{item.title}</h3>
              <p className="text-sm text-center">{item.description}</p>
            </div>




            
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardDesign;
