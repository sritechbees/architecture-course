import React from 'react';
import { Briefcase, Building, Users } from 'lucide-react';

function JobPlacementSupport() {
  return (
    <section className="bg-gray-100 pb-8 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-500">Job Placement Support for Architecture</h2>
        <p className="text-gray-600 mb-10">
          We provide comprehensive support to help architecture students and professionals connect with top firms, build strong portfolios, and prepare for interviews.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <Briefcase className="w-10 h-10 text-yellow-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Internship & Job Opportunities</h3>
            <p className="text-gray-600">We connect you with leading architecture firms for internships and job openings tailored to your interests.</p>
          </div>

          {/* 2 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <Building className="w-10 h-10 text-yellow-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Portfolio Guidance</h3>
            <p className="text-gray-600">Get expert feedback and help building a professional portfolio that stands out in the architecture industry.</p>
          </div>

          {/* 3 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <Users className="w-10 h-10 text-yellow-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">1-on-1 Mentorship</h3>
            <p className="text-gray-600">Receive personalized career advice and interview prep from experienced architects and HR professionals.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobPlacementSupport;
