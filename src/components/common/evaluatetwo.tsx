import React from 'react';
import Image from 'next/image';

function Evaluatetwo() {
  return (
    <div className="bg-gray-100 py-12 flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Content Section */}
        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4"><span className='text-yellow-500'>Advanced Corporate</span> Architecture Training</h2>
          <p className="text-gray-600 mb-4">
            Stay ahead in the architectural industry with our advanced corporate training programs. Gain expertise in 
            cutting-edge architectural designs, innovative construction methodologies, and smart infrastructure solutions.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Eco-Friendly and Sustainable Design</li>
            <li>AI and IoT Integration in Architecture</li>
            <li>Modern Urban Planning Techniques</li>
            <li>Next-Gen Construction Technologies</li>
          </ul>
        </div>
        
        {/* Right Image Section */}
        <div className="md:w-1/2 p-6 flex justify-center">
          <Image 
            src="/about/student.jpg" 
            width={500} 
            height={300} 
            alt="Advanced Corporate Architecture Training" 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Evaluatetwo;
