import React from 'react';
import { Building, Ruler, HardHat,  DraftingCompass, ClipboardList } from 'lucide-react';
import App_layout from '@/layout/app_layout';
import CorporateOne from '@/components/common/corporateone';
import Evaluateskill from '@/components/common/evaluateskill';
import Evaluateone from '@/components/common/evaluateone';
import Evaluatetwo from '@/components/common/evaluatetwo';

function CorporateTraining() {
  return (
    <App_layout>
      <CorporateOne />
      <div className='bg-gradient-to-b from-gray-800 via-gray-600 to-gray-900'>
        <div className="p-6 max-w-6xl mx-auto font-poppins min-h-screen relative">
          {/* Starry Background */}
          <div className="absolute inset-0 overflow-hidden z-0">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-full opacity-75 animate-twinkle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                }}
              />
            ))}
          </div>
          {/* Title Section */}
          <h1 className="text-4xl font-bold text-center text-white mt-5 z-10 relative">
            Advance Your Career with Architecture & Corporate Training Courses
          </h1>

          {/* Features Section */}
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5 mt-28 z-10 relative">
            {/* Architectural Design */}
            <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6 animate-rotate">
              <Building className="text-indigo-500 w-16 h-16 mb-4" />
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Architectural Design</h3>
                <p className="text-gray-600">Master modern and classical architectural styles.</p>
              </div>
            </div>

            {/* Blueprint Mastery */}
            <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6 animate-rotate">
              <DraftingCompass className="text-blue-500 w-16 h-16 mb-4" />
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Blueprint Mastery</h3>
                <p className="text-gray-600">Learn to create, analyze, and interpret blueprints.</p>
              </div>
            </div>

            {/* Measurement & Precision */}
            <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6 animate-rotate">
              <Ruler className="text-green-500 w-16 h-16 mb-4" />
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Measurement & Precision</h3>
                <p className="text-gray-600">Enhance accuracy with professional measuring techniques.</p>
              </div>
            </div>

            {/* Construction Safety */}
            <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6 animate-rotate">
              <HardHat className="text-yellow-500 w-16 h-16 mb-4" />
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Construction Safety</h3>
                <p className="text-gray-600">Ensure safety protocols are followed in every project.</p>
              </div>
            </div>

           

            {/* Project Management */}
            <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6 animate-rotate">
              <ClipboardList className="text-red-500 w-16 h-16 mb-4" />
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Project Management</h3>
                <p className="text-gray-600">Master project planning and execution techniques.</p>
              </div>
            </div>
          </div>

          {/* CSS Animations */}
          <style jsx>{`
            .animate-rotate {
              animation: rotate 6s infinite linear;
            }
            @keyframes rotate {
              0% {
                transform: rotate(-20deg);
              }
              100% {
                transform: rotate(50deg);
              }
            }
          `}</style>
        </div>
      </div>
      <Evaluateskill/>
      <Evaluateone/>
    <Evaluatetwo/>
    </App_layout>
  );
}

export default CorporateTraining;
