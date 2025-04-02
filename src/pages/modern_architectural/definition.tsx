import Image from 'next/image';
import React from 'react';

function ModernArchitectural() {
  return (
    <div className="flex flex-col items-center p-6 bg-blue-100 rounded-lg shadow-lg relative">
      <h2 className="text-2xl font-bold mb-4">Modern Architecture</h2>
      <div className="relative group">
        <Image 
          src="/courses/definition.jpg" 
          height={400} 
          width={600} 
          alt="Modern Architectural Design" 
          className="rounded-lg shadow-md transform transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-end p-6 opacity-0 group-hover:opacity-100 bg-black/50 transition-opacity duration-500">
          <p className="text-white text-lg max-w-xs">
            Modern architecture is characterized by its simplicity, clean lines, and minimalistic approach. It emphasizes function over form, often using materials like glass, steel, and concrete to create open, airy spaces. The movement promotes innovation and sustainability, integrating technology and environmental consciousness into design.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ModernArchitectural;
