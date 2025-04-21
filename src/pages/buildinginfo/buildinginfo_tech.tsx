// components/buildinginfo_tech.jsx
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import KeyFeaturesCard from './Key Features';
import HandsOnProject from './handson project';
import ExpertInstructors from './expert_instructors';
import FlexibleLearningOptions from './flexible_learningoptions';
import OurTrainingMethodology from './ourtraining_methodology';
import JobPlacementSupport from './jobplacement_support';
import WhyChoose from './whychoose';
import Faq from './faq';
import App_layout from "@/layout/app_layout";

const tools = [
  { title: "Revit", desc: "Parametric 3D modeling for BIM projects" },
  { title: "Navisworks", desc: "Clash detection and project review" },
  { title: "AutoCAD", desc: "2D/3D drafting and documentation" },
  { title: "Dynamo", desc: "Visual programming for Revit automation" },
  { title: "Synchro 4D", desc: "Time simulation and construction planning" },
  { title: "BIM 360", desc: "Cloud collaboration and data management" },
];

const BuildingInfoTech = () => {
  return (
    <div>
      <App_layout>
        <div className="bg-gray-100  mt-20 px-4 sm:px-8 lg:px-20" id="bim">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            {/* Heading and Introduction */}
            <h2 className="text-2xl sm:text-3xl pt-12 text-center font-bold text-gray-800 mb-6">
              Building <span className="text-yellow-500">Information Modeling (BIM)</span> Course
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Master the tools and techniques used by architects, engineers, and
              construction professionals to design, visualize, and manage building
              projects digitally.
            </p>

            {/* Core Tools Section */}
            <motion.div
              whileHover={{
                // backgroundColor: "#F59E0B",
                transition: { duration: 0.3 },
              }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Core Tools <span className="text-yellow-500">You&apos;ll Learn </span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <h4 className="text-lg font-bold text-gray-800 hover:text-yellow-500">{tool.title}</h4>
                    <p className="text-sm text-gray-600 mt-2">{tool.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* What You'll Learn Section with Image */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-12">
              {/* Left Side - Bullet Points */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  What <span className="text-yellow-500">You&apos;ll Learn</span>
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-3 text-base">
                  <li>Comprehensive 3D modeling with Revit</li>
                  <li>Coordination and clash detection using Navisworks</li>
                  <li>Visual programming with Dynamo for task automation</li>
                  <li>4D construction sequencing with Synchro</li>
                  <li>Project collaboration using BIM 360 cloud</li>
                  <li>Data interoperability and IFC export standards</li>
                </ul>
              </div>

              {/* Right Side - Image */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <Image
                  src="/courses/learningg.png" // Replace with your actual image path
                  width={400}
                  height={300}
                  alt="BIM Learning"
                  className="rounded-2xl object-contain w-full max-w-md"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <KeyFeaturesCard />
        <HandsOnProject />
        <ExpertInstructors />
        <FlexibleLearningOptions />
        <OurTrainingMethodology />
        <JobPlacementSupport />
        <WhyChoose />
        <Faq />
        
     
      </App_layout>
    </div>
  );
};

export default BuildingInfoTech;
