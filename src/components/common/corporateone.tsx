import React from 'react';
import Image from 'next/image';

function CorporateOne() {
  return (
    <div className="flex flex-col md:flex-row items-center mt-16 bg-white rounded-lg shadow-lg overflow-hidden p-6 md:p-12">
      {/* Left Side - Text */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800">Corporate Architecture<span className='text-yellow-500'> Training Programs</span></h2>
        <p className="text-lg text-gray-700 mt-4">
          Our corporate training programs equip professionals with the latest skills in sustainable architecture, 
          urban planning, and smart building technologies. Enhance your expertise and stay ahead in the industry.
        </p>
        <p className="text-lg text-gray-700 mt-2">
          We offer hands-on workshops led by industry experts, ensuring practical learning experiences.
        </p>
        <p className="text-lg text-gray-700 mt-2">
          Stay updated with the latest trends and innovations in the field of corporate architecture.
        </p>
        
      </div>
      
      {/* Right Side - Image */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <Image 
          src="/about/corporatecompany.jpg" 
          alt="Corporate Training" 
          width={400} 
          height={300} 
          className="rounded-lg object-cover border-4 bg-yellow-500"
        />
      </div>
    </div>
  );
}

export default CorporateOne;
