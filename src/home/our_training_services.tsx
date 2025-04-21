import React from 'react';

function OurTrainingServices() {
  return (
    <div className="p-6 bg-gray-100 text-gray-900">
      <h2 className="text-3xl font-semibold text-center mb-6 ">Our <span className='text-yellow-500'>Training</span> Services</h2>
      <p className="text-lg text-center mb-4">
        We offer specialized training programs for aspiring architects, covering essential skills and knowledge required to excel in the field.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">Fundamentals of Architecture</h3>
          <p>
            Learn the basic principles of architecture, including design concepts, spatial planning, and structural integrity.
          </p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">Software Training</h3>
          <p>
            Master industry-leading tools like AutoCAD, Revit, SketchUp, and Rhino for creating architectural designs and blueprints.
          </p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">Sustainable Architecture</h3>
          <p>
            Explore eco-friendly design practices, energy-efficient buildings, and sustainable materials in modern architecture.
          </p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">Project Management</h3>
          <p>
            Gain insights into managing architectural projects, from conceptualization to execution, ensuring efficiency and quality.
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-col items-center justify-center bg-yellow-50 p-6 rounded-lg shadow-md">
        <p className="text-xl font-bold text-yellow-500">Why Choose Our Training?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow">
            <span className="text-yellow-500 text-lg">✔</span>
            <p className="text-gray-700">Industry-expert instructors with real-world experience</p>
          </div>
          <div className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow">
            <span className="text-yellow-500 text-lg">✔</span>
            <p className="text-gray-700">Hands-on projects and case studies</p>
          </div>
          <div className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow">
            <span className="text-yellow-500 text-lg">✔</span>
            <p className="text-gray-700">Updated curriculum with modern design trends</p>
          </div>
          <div className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow">
            <span className="text-yellow-500 text-lg">✔</span>
            <p className="text-gray-700">Certification upon course completion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTrainingServices;
