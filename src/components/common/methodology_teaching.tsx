import React from "react";
import { motion } from "framer-motion";

const methodologies = [
  {
    img: "/courses/m1.jpg",
    title: "Collaborative Environment",
    description:
      "Encouraging teamwork and peer-to-peer learning to enhance understanding and engagement."
  },
  {
    img: "/courses/m2.jpg",
    title: "Evidence-Based Teaching",
    description:
      "Utilizing research and data-driven methods to improve teaching effectiveness and student outcomes."
  },
  {
    img: "/courses/m3.jpg",
    title: "Student-Centric",
    description:
      "Focusing on student needs, interests, and learning styles to provide a more personalized educational experience."
  }
];

function MethodologyTeaching() {
  return (
    <div className="p-10 rounded-lg shadow-xl relative overflow-hidden bg-gray-50">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 animate-gradientMove opacity-40 blur-lg" />
      
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 relative z-10 uppercase tracking-wide">
        Our Teaching Methodologies
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {methodologies.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.08 }}
            className="p-8 bg-white rounded-xl shadow-lg flex flex-col items-center text-center transition-all hover:shadow-2xl border border-gray-200"
          >
            <motion.img
              src={item.img}
              alt={item.title}
              className="w-24 h-24 object-cover rounded-full mb-6 border-4 border-purple-500 shadow-md"
              whileHover={{ rotate: 10 }}
            />
            <motion.h3
              className="text-2xl font-semibold text-gray-800"
              whileHover={{ scale: 1.1, color: "#6b46c1" }}
            >
              {item.title}
            </motion.h3>
            <p className="text-gray-600 mt-3 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Background Animation Keyframes */}
      <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientMove {
          background-size: 200% 200%;
          animation: gradientMove 8s infinite alternate;
        }
      `}</style>
    </div>
  );
}

export default MethodologyTeaching;
