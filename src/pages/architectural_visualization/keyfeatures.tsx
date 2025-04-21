import React from "react";
import { motion } from "framer-motion";
import {
  FaCubes,
  FaCamera,
  FaSync,
  FaEye,
  FaDraftingCompass,
  FaRoute,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCamera />,
    title: "Photorealistic Quality",
    desc: "Deliver lifelike visuals to help clients visualize before construction.",
  },
  {
    icon: <FaRoute />,
    title: "360° Virtual Tours",
    desc: "Provide immersive experiences with full navigable walkthroughs.",
  },
  {
    icon: <FaSync />,
    title: "Real-time Rendering",
    desc: "Make changes and visualize updates instantly.",
  },
  {
    icon: <FaCubes />,
    title: "BIM Integration",
    desc: "Merge 3D models with building data for precision and efficiency.",
  },
  {
    icon: <FaEye />,
    title: "Interactive Walkthroughs",
    desc: "Let users explore every corner with interactive navigation.",
  },
  {
    icon: <FaDraftingCompass />,
    title: "Fast Iterations",
    desc: "Quickly revise and refine designs based on feedback.",
  },
];

// Animation variants with proper typing
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const KeyFeatures = () => {
  return (
    <div className=" py-8 mb-8 px-6 md:px-20" id="features">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-4xl font-bold text-center mb-12 text-gray-800"
      >
        Key Features of{" "}
        <span className="text-yellow-500">Architectural Visualization</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl text-yellow-500 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
