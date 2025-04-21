'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function Fundamentals3DModeling() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="bg-[#f1f5f9] py-8 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Right Image */}
          <div data-aos="fade-left" className="text-center">
          <Image
            src="/courses/intro.jpg"
            alt="3D Modeling Example"
            width={500}
            height={350}
            className="rounded-xl shadow-lg mx-auto"
          />
        </div>
        {/* Left Content */}
        <div data-aos="fade-right">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Fundamentals of<span className='text-yellow-500'> 3D Modeling</span> 
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Learn the essential skills and tools for creating accurate 3D models of architectural elements. This module bridges the gap between design ideas and digital construction.
          </p>
          <ul className="space-y-3 text-sm md:text-base text-gray-700 list-disc pl-5">
            <li>Basics of 3D geometry: vertices, edges, and faces</li>
            <li>From 2D to 3D: extrusion, lofting, and boolean modeling</li>
            <li>Clean topology and mesh optimization</li>
            <li>Working with software like SketchUp, Revit, Blender</li>
            <li>Modeling doors, windows, stairs, and complex forms</li>
          </ul>
        </div>

      
      </div>
    </section>
  );
}
