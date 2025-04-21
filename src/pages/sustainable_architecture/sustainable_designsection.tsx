import { useState } from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Core Principles of Sustainable Architecture",
    description:
      "Dive into the foundational concepts of sustainable architecture, including energy efficiency, resource optimization, and environmentally conscious design. Learn how green design contributes to a healthier planet.",
    image: "/courses/ai one.jpg",
  },
  {
    title: "Eco-Friendly Materials and Technologies",
    description:
      "Explore the use of sustainable materials, innovative construction techniques, and eco-technologies. Gain insights into solar power, rainwater harvesting, and smart energy systems in green buildings.",
    image: "/courses/ai one.jpg",
  },
  {
    title: "Designing for Climate and Comfort",
    description:
      "Understand the impact of climate-responsive design. Learn how to create buildings that harmonize with their environment, offering comfort, energy savings, and durability.",
    image: "/courses/ai one.jpg",
  },
  {
    title: "Real-World Sustainable Architecture Projects",
    description:
      "Engage in hands-on learning through live projects. Analyze sustainable structures and apply your knowledge to solve real-life design challenges under expert mentorship.",
    image: "/courses/ai one.jpg",
  },
  {
    title: "Career Paths in Green Building and Design",
    description:
      "Discover opportunities in the growing field of sustainable architecture. From LEED certification to working with green firms, unlock pathways to meaningful, future-ready careers.",
    image: "/courses/ai one.jpg",
  },
  {
    title: "Our Learning Approach",
    description:
      "Experience a blend of theory, case studies, and interactive sessions. Our methodology ensures that learners grasp practical and impactful knowledge in sustainable architectural design.",
    image: "/courses/ai one.jpg",
  },
];

const Sustainable_designsection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-8 space-y-24">
      {/* 🔥 Section Main Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Explore Our <span className="text-yellow-500">Workshop Design Curriculum</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          Discover how our training blends innovation, sustainability, and real-world experience for future-ready urban planners.
        </p>
      </motion.div>

      {/* 🔄 Curriculum Items */}
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Image */}
          <motion.img
            src={section.image}
            alt={section.title}
            className="w-full md:w-1/2 lg:w-[45%] rounded-xl shadow-lg object-cover"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />

          {/* Right Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-4">
            <motion.button
              className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow transition duration-300"
              onClick={() => handleToggle(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Me
            </motion.button>

            {activeIndex === index && (
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-2xl font-semibold text-gray-800">{section.title}</h2>
                <p className="text-gray-600">{section.description}</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Sustainable_designsection;
