import React from 'react';

function CardDesign() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="relative w-[220px] h-[300px] bg-gray-200 shadow-lg rounded-lg flex items-center justify-center perspective-3d">
          <div className="absolute top-0 w-full h-full bg-gray-400 rounded-lg cursor-pointer shadow-lg flex items-center justify-center transition-transform duration-500 origin-left hover:rotate-y-[-80deg]">
            <p className="text-xl font-bold text-black">Card {index + 1}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardDesign;
