import App_layout from '@/layout/app_layout';
import Image from 'next/image';
import React from 'react';
import KeyFeatures from './keyfeatures';
import Questionans from './questionans';
import Designsections from './designsection';
import Topic from './topic';


function Choose() {
  return (
    <div>
        <App_layout>
    <div className="bg-white py-12 mt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
      
        {/* Text Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose<span className='text-yellow-500'> Architectural Visualization?</span> 
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Visualize architectural designs in photorealistic detail, helping clients and stakeholders understand spatial layouts and aesthetics. Our course empowers you with tools and techniques used by top studios.
          </p>
          <a
            href="/courses/architectural-visualization"
            className="inline-block bg-yellow-400 text-white px-6 py-3 rounded-lg hover:bg-yellow-500 transition"
          >
            Read More
          </a>
        </div>

          {/* Image Section */}
          <div>
          <Image
            src="/courses/building one.jpg" height={200} width={2000}
            alt="Architectural Visualization"
            className="w-[600px] h-96 rounded-xl shadow-lg"
          />
        </div>


      </div>
    </div>
    <KeyFeatures/>
    <Designsections/> 
   <Topic/>
   <Questionans/>
   
    </App_layout>
    </div>
  );
}

export default Choose;
