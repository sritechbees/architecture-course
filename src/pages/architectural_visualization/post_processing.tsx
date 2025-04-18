'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function PostProcessingSection() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="bg-[#f8f9fc] py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div data-aos="fade-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Post-Processing & Visualization Enhancement
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Elevate your renders by enhancing them with Photoshop techniques, color grading, and creative effects. Add depth and life to your architectural visuals.
          </p>
          <ul className="list-disc space-y-2 pl-5 text-gray-600">
            <li>Using Photoshop for final touch-ups and details</li>
            <li>Color correction & applying LUTs for cinematic effects</li>
            <li>Adding entourage elements (people, trees, vehicles)</li>
            <li>Implementing fog, bloom, and depth of field effects</li>
            <li>Creating mood and atmosphere with lighting adjustments</li>
          </ul>
        </div>

        {/* Image */}
        <div data-aos="zoom-in">
          <Image
            src="/courses/intro.jpg"
            alt="Post Processing"
            width={550}
            height={350}
            className="rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
