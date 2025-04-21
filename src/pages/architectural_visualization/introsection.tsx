'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function IntroductionSection() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="bg-[#f1f5f9] py-8 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div data-aos="fade-right">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Introduction to <span className='text-yellow-500'>Architectural Visualization</span>
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Architectural Visualization is the art of creating realistic imagery to communicate architectural ideas. It blends design, storytelling, and technology to bring blueprints to life before construction begins.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm md:text-base">
            <li>Understand the role of visualization in the design process</li>
            <li>Explore historical evolution and digital transformation</li>
            <li>Discover core software used in the industry</li>
            <li>Identify various career paths in ArchViz</li>
            <li>Learn how visualization improves client communication</li>
          </ul>
        </div>

        {/* Optional Image */}
        <div data-aos="fade-left" className="text-center">
          <Image
            src="/courses/intro.jpg"
            alt="Architectural Visualization"
            width={500}
            height={300}
            className="rounded-xl shadow-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
