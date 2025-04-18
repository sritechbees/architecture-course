import { useState } from "react";
import { motion } from "framer-motion";
import App_layout from "@/layout/app_layout";

const sections = [
  {
    title: "Introduction to Modern Architecture",
    description:
      "Understand the evolution of modern architectural styles from the late 19th century to today. Explore how industrialization, new materials, and cultural shifts shaped architectural thinking.",
    image: "/courses/modern-architecture1.jpg",
  },
  {
    title: "Minimalism and Functional Design",
    description:
      "Delve into minimalist architecture that emphasizes simplicity, functionality, and clean lines. Discover how 'less is more' drives impactful spatial experiences.",
    image: "/courses/modern-architecture1.jpg",
  },
  {
    title: "Brutalism and Expressionism",
    description:
      "Learn about bold, raw architectural styles that challenged norms. Analyze the visual power and social context of exposed concrete and sculptural forms.",
    image: "/courses/modern-architecture1.jpg",
  },
  {
    title: "High-Tech and Parametric Architecture",
    description:
      "Explore the integration of technology in design. Understand how architects use digital tools and advanced materials to create dynamic, intelligent structures.",
    image: "/courses/modern-architecture1.jpg",
  },
  {
    title: "Postmodernism and Deconstructivism",
    description:
      "Investigate the playful, eclectic, and often provocative nature of postmodern and deconstructivist styles. Learn how they react against modernist uniformity.",
    image: "/courses/modern-architecture1.jpg",
  },
  {
    title: "Contemporary Global Trends",
    description:
      "Stay updated with current architectural trends around the world. From biophilic design to adaptive reuse, explore how today’s architects respond to climate, culture, and urban needs.",
    image: "/courses/modern-architecture1.jpg",
  },
];

const ModerndesignSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto py-16 mt-16 p-6 space-y-20">
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className="flex flex-col md:flex-row items-start md:items-center gap-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Side Image */}
          <motion.img 
            src={section.image}
            alt={section.title}
            className="w-full md:w-80 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />

          {/* Right Side Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start gap-4">
            <motion.button
              className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow transition duration-300 self-start"
              onClick={() => handleToggle(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Me
            </motion.button>

            {/* Text Reveal */}
            {activeIndex === index && (
              <motion.div
                className="space-y-2 mt-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-2xl font-semibold text-gray-800">
                  {section.title}
                </h2>
                <p className="text-gray-600">{section.description}</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ModerndesignSection;
