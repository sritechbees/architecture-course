import Image from 'next/image';
import React from 'react';

function CardDesign() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {[...Array(4)].map((_, index) => (
        <div 
          key={index} 
          className="relative w-[220px] h-[300px] bg-gray-200 shadow-lg rounded-lg flex items-center justify-center perspective-3d overflow-hidden"
        >
          {/* Card Front */}
          <div className="absolute top-0 w-full h-full bg-gray-400 rounded-lg cursor-pointer shadow-lg flex flex-col items-center justify-center transition-transform duration-500 origin-left hover:rotate-y-[-80deg]">
            <Image 
              src={`/courses/jaq.jpg`}  // ✅ Corrected Path
              height={200}
              width={200}
              alt={`Card ${index + 1}`} 
              className="w-full h-full object-cover rounded-lg"
            />
            <p className="absolute bottom-2 left-2 text-white text-lg font-bold bg-black bg-opacity-50 px-2 py-1 rounded">
              Card {index + 1}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardDesign;
