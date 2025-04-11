'use client';

import React from 'react';
import Image from 'next/image';
import { PlayCircle } from 'lucide-react';
function Setup() {
  return (
    <div className='relative w-[1200px] h-[500px] mt-10 ml-7 flex items-center justify-start px-16'>
      <Image 
        src='/home/banner5.jpg' 
        alt='Setup Background' 
        layout='fill' 
        objectFit='cover' 
        className='absolute inset-0 w-full h-full rounded-2xl' 
      />
      <div className='relative z-10 text-center ml-96 text-gray-900 p-6  rounded-md'>
        <h1 className='text-6xl font-bold'>Setup Your Architecture Course</h1>
        <p className='mt-2 text-xl'>Get started with expert guidance and modern design techniques.</p>
        <div className="flex items-center gap-2">
                          <PlayCircle className="w-14 h-14 ml-64 mt-7 text-red-500 " />
                          <span className="text-red-500 text-lg font-semibold mt-7">Elevate Your Skills</span>
                        </div>
        <button className="relative inline-block px-6 py-2 border border-gray-900 text-white font-semibold rounded-lg overflow-hidden group mt-4">
            <span className="absolute inset-0 bg-orange-500 transition-all transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
            <span className="relative text-gray-900 group-hover:text-white text-orange-500">started</span>
          </button>
      </div>
    </div>
  );
}

export default Setup;
