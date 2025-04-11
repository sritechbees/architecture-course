import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const LimitedOffer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-lg text-center max-w-lg mx-auto" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-yellow-400 animate-pulse">Limited Time Offer!</h2>
      <p className="mt-4 text-lg" data-aos="fade-right">Get access to premium architecture courses for just</p>
      <p className="text-4xl font-bold text-green-400 animate-bounce">₹2999</p>
      <p className="text-sm text-gray-300" data-aos="fade-left">(6-month subscription)</p>
      
      <div className="mt-6" data-aos="zoom-in">
        <h3 className="text-xl font-semibold">Courses Included:</h3>
        <ul className="mt-2 text-gray-300 space-y-2">
          <li className="transition-transform transform hover:scale-105">✔ Architectural Design Fundamentals</li>
          <li className="transition-transform transform hover:scale-105">✔ AutoCAD & 3D Modeling</li>
          <li className="transition-transform transform hover:scale-105">✔ Sustainable Architecture</li>
          <li className="transition-transform transform hover:scale-105">✔ Interior & Landscape Design</li>
        </ul>
      </div>

      <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-6 rounded-full text-lg transition transform hover:scale-110" data-aos="flip-up">
        Enroll Now
      </button>
    </div>
  );
};

export default LimitedOffer;
