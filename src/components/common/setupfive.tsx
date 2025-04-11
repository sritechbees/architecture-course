'use client';

import React from 'react';
import Image from 'next/image';
import { Building2 } from 'lucide-react';

function Setupfive() {
  return (
    <div className='relative w-[1200px] h-[500px] mt-10 ml-7 flex items-center justify-start px-16'>
      <Image 
        src='/courses/Building Info Modeling1.jpg'  // Replace with your actual image path
        alt='Building Information Modeling Background' 
        layout='fill' 
        objectFit='cover' 
        className='absolute inset-0 w-full h-full rounded-2xl' 
      />
      <div className='relative z-10 max-w-2xl'>
        <h1 className='text-5xl font-bold leading-tight'>
          Building Smarter with <span className='text-blue-700'>Information Modeling</span>
        </h1>
        <p className='mt-4 text-lg text-gray-900'>
          Explore how BIM transforms architectural planning, enhances collaboration, and streamlines construction through intelligent data modeling.
        </p>
        <div className='flex items-center gap-3 mt-6'>
          <Building2 className='w-12 h-12 text-blue-700' />
          <span className='text-blue-700 text-lg font-medium'>Integrated Design. Intelligent Outcomes.</span>
        </div>
        <button className='relative inline-block px-6 py-2 border border-white text-blue-700 font-semibold rounded-lg overflow-hidden group mt-8'>
          <span className='absolute inset-0 bg-blue-700 transition-all transform scale-x-0 group-hover:scale-x-100 origin-left'></span>
          <span className='relative group-hover:text-white'>Learn More About BIM</span>
        </button>
      </div>
    </div>
  );
}

export default Setupfive;
