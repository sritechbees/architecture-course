'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function PortfolioCareerDevelopmentSection() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="bg-[#f1f5f9] py-8 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div data-aos="fade-right">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Portfolio & <span className='text-yellow-500'>Career Development</span>
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Build a strong architectural portfolio with the projects you’ve created. Learn how to present your work effectively and position yourself for a successful career in architectural visualization.
          </p>
          <ul className="list-disc space-y-2 pl-5 text-gray-600">
            <li>Showcase your best projects with professional mockups</li>
            <li>Building an impressive personal website and portfolio</li>
            <li>Creating engaging 3D visualizations for clients</li>
            <li>How to market yourself as an architectural visualization artist</li>
            <li>Networking opportunities and career advancement</li>
          </ul>
        </div>

        {/* Right Image */}
        <div data-aos="zoom-in">
          <Image
            src="/courses/intro.jpg"
            alt="Portfolio and Career Development"
            width={550}
            height={350}
            className="rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
