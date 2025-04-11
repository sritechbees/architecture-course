import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "01. 3D Visualization",
    desc: "Provides accurate digital representations of buildings for better planning, design, and construction decisions.",
  },
  {
    title: "02. Data-Driven Modeling",
    desc: "Integrates data with geometry, enabling smart insights and streamlined workflows across disciplines.",
  },
  {
    title: "03. Clash Detection",
    desc: "Identifies conflicts between systems (e.g., plumbing vs electrical) before construction begins, reducing rework.",
  },
];

export default function KeyFeaturesCard() {
  return (
    <div className="min-h-screen bg-[#7A8C86] p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Left Column - Image */}
        <div className="bg-gray-950 grid place-items-center p-6">
          <Image
            src="/courses/key.jpg"
            height={200}
            width={200}
            alt="BIM Visual"
            className="rounded-xl w-[460px] h-auto object-cover"
          />
        </div>

        {/* Right Column - Features */}
        <div className="bg-[#7A8C86] p-6 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Key Features of BIM in Architecture
          </h2>
          <div className="space-y-6">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-gray-950 bg-opacity-80 p-4 rounded-lg"
              >
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
