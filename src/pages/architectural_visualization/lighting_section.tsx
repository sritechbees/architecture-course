'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function LightingSection() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="bg-[#f1f5f9] py-8 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div data-aos="zoom-in">
          <Image
            src="/courses/intro.jpg"
            alt="Lighting and Rendering"
            width={550}
            height={350}
            className="rounded-2xl shadow-xl"
          />
        </div>
        {/* Text */}
        <div data-aos="fade-right">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            <span className='text-yellow-500'>Lighting &</span> Rendering Techniques
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Bring your designs to life with strategic lighting and rendering. Learn both real-time and photorealistic techniques for stunning results.
          </p>
          <ul className="list-disc space-y-2 pl-5 text-gray-600">
            <li>Natural vs. Artificial lighting setup</li>
            <li>Using HDRIs and global illumination</li>
            <li>Render engines: V-Ray, Lumion, Cycles</li>
            <li>Camera angles and depth of field</li>
            <li>Real-time rendering: Enscape, Twinmotion</li>
          </ul>
        </div>

      
      </div>
    </section>
  );
}
