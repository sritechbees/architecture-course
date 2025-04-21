import App_layout from '@/layout/app_layout';
import Image from 'next/image';
import React from 'react';

import UrbanDesignSections from './urban_designsection';

function UrbanDescription() {
  return (
    <App_layout>
      <div className='py-20'>
     
    <div className='max-w-7xl m-auto '>
    <div className="flex items-center gap-10 p-6 bg-gray-100 rounded-xl shadow-lg">   
      {/* left Side - Description */}
      <div className="w-1/2 pl-6">
        <h2 className="text-2xl font-bold text-gray-800">Urban Design Course</h2>
        <p className="text-gray-600 mt-2">
          Urban Design is a specialized field in architecture that focuses on planning and designing urban spaces. 
          This course covers city planning, landscape design, sustainability, and public infrastructure. 
          Learn to create people-friendly spaces that enhance urban living. 
          Gain knowledge of zoning regulations and environmental impact. 
          Develop skills in 3D modeling and urban visualization. 
          Work on real-world projects with industry experts. 
          Explore the future of smart cities and sustainable development. 
          Ideal for aspiring architects, planners, and landscape designers. 
          Open doors to a rewarding career in urban development and design.
        </p>
      </div>
       {/* right Side - Image */}
       <div className="w-1/2">
        <Image 
          src="/about/us (4).jpg" height={200} width={200}
          alt="Urban Design" 
          className="rounded-lg w-[450px] shadow-md"
        />
      </div>
    </div>
    </div>
    </div>
    <UrbanDesignSections/>
    
    </App_layout>
  );
}

export default UrbanDescription;