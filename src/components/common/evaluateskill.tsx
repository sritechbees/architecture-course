import React from 'react';
import Image from 'next/image';

function Evaluateskill() {
  return (
    <div className='p-6 max-w-7xl mx-auto font-poppins min-h-screen bg-gray-100 flex flex-col lg:flex-row items-center'>
      {/* Left Side - Text Content */}
      <div className='w-full lg:w-1/2 p-6'>
        <h1 className='text-3xl font-bold text-gray-800 mb-8'>Evaluate Your Skills in Architecture</h1>
        
        <div className='space-y-6'>
          {/* Design Principles */}
          <div className='bg-white shadow-lg rounded-lg p-6'>
            <h3 className='text-xl font-semibold mb-2'>Design Principles</h3>
            <p className='text-gray-600'>Understand the core principles of architectural design, including balance, proportion, and aesthetics.</p>
          </div>
          
          {/* Structural Analysis */}
          <div className='bg-white shadow-lg rounded-lg p-6'>
            <h3 className='text-xl font-semibold mb-2'>Structural Analysis</h3>
            <p className='text-gray-600'>Learn how to analyze and assess structural integrity for safe and efficient building designs.</p>
          </div>
          
          {/* Material Knowledge */}
          <div className='bg-white shadow-lg rounded-lg p-6'>
            <h3 className='text-xl font-semibold mb-2'>Material Knowledge</h3>
            <p className='text-gray-600'>Gain expertise in selecting the right materials for durability, sustainability, and cost-effectiveness.</p>
          </div>
          
          {/* Drafting & Visualization */}
          <div className='bg-white shadow-lg rounded-lg p-6'>
            <h3 className='text-xl font-semibold mb-2'>Drafting & Visualization</h3>
            <p className='text-gray-600'>Master architectural drafting techniques and modern visualization tools like CAD and 3D modeling.</p>
          </div>
          
          {/* Project Management */}
          <div className='bg-white shadow-lg rounded-lg p-6'>
            <h3 className='text-xl font-semibold mb-2'>Project Management</h3>
            <p className='text-gray-600'>Develop project management skills to effectively plan, execute, and oversee architectural projects.</p>
          </div>
        </div>
      </div>
      
      {/* Right Side - Image */}
      <div className='w-full lg:w-1/2 p-6 flex justify-center'>
        <Image 
          src='/about/skill.jpg' 
          alt='Architecture skills evaluation' 
          width={500} 
          height={500} 
          className='rounded-lg shadow-lg'
        />
      </div>
    </div>
  );
}

export default Evaluateskill;