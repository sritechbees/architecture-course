'use client';

import React from 'react';
import Image from 'next/image';
import { BrainCircuit } from 'lucide-react';

function Setupfour() {
  return (
    <div className='relative w-[1200px] h-[500px] ml-7 flex items-center justify-start px-16 mt-10 text-white'>
      <Image 
        src='/courses/ai hero.jpg' 
        alt='AI in Architecture Background' 
        layout='fill' 
        objectFit='cover' 
        className='absolute inset-0 w-full h-full rounded-2xl' 
      />
      <div className='relative z-10 max-w-2xl'>
        <h1 className='text-5xl font-bold leading-tight'>
          Shaping the Future with <span className='text-orange-500'>AI in Architecture</span>
        </h1>
        <p className='mt-4 text-lg text-gray-900'>
          Discover how artificial intelligence is revolutionizing the design process, optimizing building efficiency, and inspiring innovation in architecture.
        </p>
        <div className='flex items-center gap-3 mt-6'>
          <BrainCircuit className='w-12 h-12 text-orange-500' />
          <span className='text-orange-500 text-lg font-medium'>Smarter Designs. Sustainable Futures.</span>
        </div>
        <button className='relative inline-block px-6 py-2 border border-white text-white font-semibold rounded-lg overflow-hidden group mt-8'>
          <span className='absolute inset-0 bg-orange-600 transition-all transform scale-x-0 group-hover:scale-x-100 origin-left'></span>
          <span className='relative group-hover:text-white'>Explore Innovations</span>
        </button>
      </div>
    </div>
  );
}

export default Setupfour;
