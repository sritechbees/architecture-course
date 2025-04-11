import App_layout from '@/layout/app_layout';
import Image from 'next/image';
import React from 'react';

function Herosection() {
  return (
    <div>
        <App_layout>
       
    <div className="w-full h-screen">
      <Image
        src="/courses/smartcities.png" height={200} width={200}
        alt="Hero"
        className="w-full h-full object-cover"
      />
    </div>
         
    </App_layout>
    </div>
  );
}

export default Herosection;
