import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const whyChooseUs = [
  "Energy-efficient building design for reduced environmental impact",
  "Utilization of renewable energy sources like solar and wind",
  "Incorporation of sustainable and recyclable building materials",
  "Design strategies that enhance natural lighting and ventilation",
  "Water conservation through efficient fixtures and rainwater harvesting",
  "Green roofs and vertical gardens promoting biodiversity",
];

const WhyChooseSustainable = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 mt-12">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800"
      >
        Why Choose <span className="text-yellow-500">Sustainable Architecture?</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {whyChooseUs.map((feature, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden p-6 border rounded-xl shadow transition duration-300 bg-white group hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Yellow Gradient Background Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0 rounded-xl" />

            {/* Content */}
            <div className="relative z-10 flex items-center gap-4">
              <CheckCircle className="text-yellow-600 w-6 h-6" />
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                {feature}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseSustainable;
