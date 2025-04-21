import Image from 'next/image';
import React from 'react';

function Handsonproject() {
  return (
    <section className="w-full bg-gray-100 py-1 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
       

        {/* Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Hands-on BIM<span className='text-yellow-500'> Architecture Projects</span> 
          </h2>
          <p className="text-gray-600 mb-4">
            Dive into real-world architectural scenarios using Building Information Modeling (BIM). These hands-on projects help you apply theoretical knowledge to practical situations, improving your design, modeling, and coordination skills.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Work on full-scale building models using tools like Revit</li>
            <li>Collaborate with simulated teams to handle architectural conflicts</li>
            <li>Generate detailed plans, sections, and 3D visualizations</li>
            <li>Integrate MEP and structural models for clash detection</li>
          </ul>
        </div>
         {/* Image */}
         <div className="w-full">
          <Image
            src="/courses/Hands-on Project.jpg" height={200} width={200}
            alt="Hands-on BIM Project"
            className="rounded-2xl shadow-xl w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Handsonproject;
