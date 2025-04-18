'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function AnimationWalkthroughsSection() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="bg-[#f4f7fc] py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
         {/* Right Image */}
         <div data-aos="zoom-in">
          <Image
            src="/courses/intro.jpg"
            alt="Animation and Walkthroughs"
            width={550}
            height={350}
            className="rounded-2xl shadow-xl"
          />
        </div>
        {/* Left Content */}
        <div data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Animation & Walkthroughs
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Bring architectural designs to life with stunning animations. Create walkthroughs that captivate and engage your audience, showcasing your design vision.
          </p>
          <ul className="list-disc space-y-2 pl-5 text-gray-600">
            <li>Keyframe animation basics: position, rotation, scale</li>
            <li>Creating smooth transitions for camera paths</li>
            <li>Animating object elements: doors, windows, furniture</li>
            <li>Using software like Lumion, Twinmotion, or Blender for rendering</li>
            <li>Enhancing with sound effects and background music</li>
          </ul>
        </div>

       
      </div>
    </section>
  );
}
