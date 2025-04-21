import Image from 'next/image';
import React, { useState } from 'react';

const styles = [
  { id: "c1", title: "Minimalist", image: "/courses/Modern Architectural.jpg", description: "Clean lines, neutral colors, and simplicity define minimalist design." },
  { id: "c2", title: "Industrial", image: "/courses/Modern Architectural.jpg", description: "Exposed steel, brick, and wood give industrial design its raw aesthetic." },
  { id: "c3", title: "Scandinavian", image: "/courses/Modern Architectural.jpg", description: "Functionality, simplicity, and light tones make up Scandinavian interiors." },
  { id: "c4", title: "Bohemian", image: "/courses/Modern Architectural.jpg", description: "A mix of patterns, colors, and textures create a relaxed, artistic space." },
  { id: "c5", title: "Modern", image: "/courses/Modern Architectural.jpg", description: "Sleek surfaces, geometric forms, and open spaces define modern design." },
  { id: "c6", title: "Futuristic", image: "/courses/Modern Architectural.jpg", description: "High-tech materials, bold colors, innovative shapes lead futuristic design." },
  { id: "c7", title: "Rustic", image: "/courses/Modern Architectural.jpg", description: "Natural materials, warm colors, and vintage decor create a cozy rustic feel." },
  { id: "c8", title: "Art Deco", image: "/courses/Modern Architectural.jpg", description: "Luxurious materials, bold patterns, geometric shapes Art Deco style." }
];

function ModernStyles() {
  const [visibleImage, setVisibleImage] = useState<string | null>(null);

  const toggleImage = (id: string) => {
    setVisibleImage(visibleImage === id ? null : id);
  };

  return (
    <div className="main max-w-7xl mx-auto py-12  flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg relative">
      <h2 className="text-4xl font-bold mb-9 text-gray-900 mb-6">Trending<span className='text-yellow-500'> Modern Styles</span> </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {styles.map((style) => (
          <div key={style.id} className="group relative overflow-hidden h-72 w-64 bg-sky-300 rounded-xl flex flex-col items-center">
            <div className="absolute w-56 h-64 bg-gray-50 z-10 top-4 left-4 opacity-50 rounded-2xl blur duration-300 group-hover:blur-none transform rotate-3d(1,-1,1,30deg) duration-500 group-hover:rotate-3d(1,-1,1,0deg)"></div>
            <div className="absolute w-56 h-64 z-10 top-4 left-4 p-3 rounded-2xl flex flex-col justify-end items-start gap-4 transform rotate-3d(1,-1,1,30deg) duration-500 group-hover:rotate-3d(1,-1,1,0deg)">
              <span className="text-yellow-500 text-2xl font-extrabold">{style.title}</span>
              <p className="text-gray-800 font-bold">{style.description}</p>
              <button 
                onClick={() => toggleImage(style.id)}
                className="border text-gray-50 duration-300 relative group cursor-pointer overflow-hidden h-12 w-36 rounded-md bg-neutral-800 font-extrabold hover:bg-sky-700 mt-6"
              >
                <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-700 right-12 top-12 bg-yellow-500"></div>
                <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150 duration-700 right-20 -top-6 bg-orange-500"></div>
                <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8 rounded-full group-hover:scale-150 duration-700 right-32 top-6 bg-pink-500"></div>
                <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4 rounded-full group-hover:scale-150 duration-700 right-2 top-12 bg-red-600"></div>
                <p className="z-10 absolute bottom-2 left-2">View</p>
              </button>
            </div>
            {visibleImage === style.id && (
              <Image 
                src={style.image} 
                alt={style.title} 
                width={190} 
                height={254} 
                className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ModernStyles;
