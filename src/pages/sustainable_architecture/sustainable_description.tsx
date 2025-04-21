import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Image from "next/image";
import SustainableTips from "./sustainabletips";
import SustainableArchitecture from "./sustainablearchitecture";
import FAQSection from "./faqsection";
import Sustainable_designsection from "./sustainable_designsection";
import App_layout from "@/layout/app_layout";

import WhyChoose from "./whychoose";
import Offer from "@/components/common/offer";

function SustainableDescription() {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <App_layout>
      <div className="">
        <div className="max-w-7xl  mx-auto mt-16 flex flex-col py-16 md:flex-row items-center justify-between p-6 bg-gray-100 rounded-2xl shadow-lg max-w-4xl">
          
          {/* 🟡 Text Section */}
          <div
            className="md:w-1/2 text-center md:text-left"
            data-aos="fade-right"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="text-yellow-500">Sustainable</span> Living
            </h2>
            <p className="text-gray-700 mt-2">
              Embracing sustainability means making choices that help preserve our
              planet for future generations. Small steps like reducing waste,
              conserving energy, and supporting eco-friendly initiatives can create
              a lasting impact.
            </p>

            {/* 🔘 Read More Button */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-4 px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition duration-300"
            >
              {showMore ? "Show Less" : "Read More"}
            </button>

            {/* 📖 Extra Text */}
            {showMore && (
              <p
                className="mt-4 text-gray-700"
                data-aos="fade-up"
              >
                Sustainability is not just a trend—it&apos;s a responsibility. From eco-conscious
                architecture to green building materials, the movement towards a sustainable
                lifestyle starts with awareness and action. Our courses dive deep into how design
                can influence environmental impact.
              </p>
            )}
          </div>

          {/* 🖼️ Image Section */}
          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0" data-aos="fade-left">
            <div className="border-4 border-yellow-500 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/courses/Sustainable Architecture.jpg"
                height={400}
                width={500}
                alt="Sustainability"
                className="w-[500px] h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* 🌿 Additional Sections */}
        <SustainableTips />
        <SustainableArchitecture />
        <Sustainable_designsection />
     <WhyChoose/>
        <FAQSection />
       
        <Offer/>
      
       
      </div>
    </App_layout>
  );
}

export default SustainableDescription;
