import Image from 'next/image';
import React from 'react';

function ExpertInstructors() {
  return (
    <section className="w-full bg-gray-100 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
         {/* Image */}
         <div className="w-full">
          <Image
            src="/courses/Expertinstructors.jpg" height={200} width={200}
            alt="Building Information Modeling Illustration"
            className="rounded-2xl shadow-lg w-full"
          />
        </div>
        {/* Text Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Learn from Expert Instructors<span className='text-yellow-500'> in Building Information Architecture</span> 
          </h2>
          <p className="text-gray-600 mb-4">
            Our instructors are seasoned professionals with years of experience in Building Information Modeling (BIM), architectural planning, and construction technologies. They bring real-world insights into how digital tools like Revit, AutoCAD, and Navisworks are revolutionizing the industry.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Master BIM workflows with hands-on guidance</li>
            <li>Understand 3D modeling, data-rich environments, and design collaboration</li>
            <li>Learn project lifecycle management from design to execution</li>
          </ul>
        </div>

       
      </div>
    </section>
  );
}

export default ExpertInstructors;
