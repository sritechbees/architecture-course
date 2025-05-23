import Image from 'next/image';
import React from 'react';

function OurTrainingMethodology() {
  return (
    <section className="w-full bg-gray-100 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="w-full">
          <Image
            src="/courses/Our Training Methodology.jpg" height={200} width={200}
            alt="Architecture Training"
            className="rounded-2xl shadow-lg w-full"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            <span className='text-yellow-500'>Our Training</span> Methodology
          </h2>
          <p className="text-gray-600 mb-4">
            Our architecture training is built on a hands-on, industry-driven approach. We integrate theoretical foundations with real-world applications to ensure students are job-ready from day one.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Project-based learning using live architectural case studies</li>
            <li>Software mastery: Revit, AutoCAD, SketchUp & BIM tools</li>
            <li>Weekly design challenges and peer reviews</li>
            <li>Guest lectures from practicing architects and consultants</li>
            <li>Site visit simulations and virtual walkthroughs</li>
          </ul>
        </div>

      
      </div>
    </section>
  );
}

export default OurTrainingMethodology;
