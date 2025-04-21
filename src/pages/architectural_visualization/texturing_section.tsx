'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function TexturingSection() {
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
            alt="Texturing Example"
            width={550}
            height={350}
            className="rounded-2xl shadow-xl"
          />
        </div>
        {/* Content */}
        <div data-aos="fade-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            <span className="text-yellow-500">Texturing, Materials</span> & UV Mapping
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Create realistic architectural surfaces with precision. Master PBR materials, texture mapping, and UV layouts for stunning visualization.
          </p>
          <ul className="list-disc space-y-2 pl-5 text-gray-600">
            <li>What is PBR: Physically Based Rendering</li>
            <li>Working with textures: diffuse, normal, roughness, specular</li>
            <li>UV unwrapping and layout strategies</li>
            <li>Creating seamless textures</li>
            <li>Using libraries: Poliigon, Quixel Megascans</li>
          </ul>
        </div>
         

      </div>
    </section>
  );
}
