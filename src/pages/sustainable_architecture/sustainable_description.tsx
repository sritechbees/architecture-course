import React from "react";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import SustainableTips from "./sustainabletips";
import SustainableArchitecture from "./sustainablearchitecture";
import Workdesignsections from "../architectural_workshop/workshopdesignsections";
import FAQSection from "./faqsection";
import Sustainable_designsection from "./sustainable_designsection";
import App_layout from "@/layout/app_layout";

function SustainableDescription() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <App_layout>
    <div className="">
    <div className="max-w-7xl mx-auto flex flex-col mt-20 py-16 md:flex-row items-center justify-between p-6 bg-green-100 rounded-2xl shadow-lg max-w-4xl mx-auto">
      <div
        className="md:w-1/2 text-center md:text-left"
        data-aos="fade-right"
      >
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          Sustainable Living
        </h2>
        <p className="text-gray-700 mt-2">
          Embracing sustainability means making choices that help preserve our
          planet for future generations. Small steps like reducing waste,
          conserving energy, and supporting eco-friendly initiatives can create
          a lasting impact.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
        <Image
          src="/courses/Sustainable Architecture.jpg" height={200} width={200}
          alt="Sustainability"
          className="w-[500px] rounded-lg shadow-md"
        />
      </div>
    </div>
    <SustainableTips/>
    <SustainableArchitecture/>

    <Sustainable_designsection/>
    <FAQSection/>
    </div>
    </App_layout>
  );
}

export default SustainableDescription;
