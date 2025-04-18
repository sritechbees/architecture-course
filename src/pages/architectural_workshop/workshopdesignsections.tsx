import { useState } from "react";
import { motion } from "framer-motion";
import App_layout from "@/layout/app_layout";
import UrbanModel from "./urbanmodel";
import QuestionAnswer from "./question";
import KeyFeatures from "./key_feactures";
import UrbanDesignV2 from "./urbandesign";
import StudentsTestimonial from "./sutdent_testimonial";

const sections = [
  {
    title: "Key Features of Our Urban Design Courses",
    description:
      "Explore our comprehensive urban design curriculum that blends theory with practical application. Our courses cover essential topics such as sustainability, smart cities, and innovative planning techniques.",
    image: "/courses/hands of project.jpg",
  },
  {
    title: "Hands-On Project Experience",
    description:
      "Gain real-world experience through hands-on projects guided by industry experts. Work on live projects that mirror actual urban design challenges, giving you valuable practical insights.",
    image: "/courses/hands of project.jpg",
  },
  {
    title: "Expert Instructors",
    description:
      "Learn from seasoned professionals with years of experience in urban planning and design. Our instructors bring real-world knowledge and best practices to help you stay ahead in the industry.",
    image: "/courses/hands of project.jpg",
  },
  {
    title: "Flexible Learning Options",
    description:
      "Choose from various learning formats, including online and in-person classes, to suit your schedule. Whether you prefer self-paced learning or live sessions, we have options tailored for you.",
    image: "/courses/hands of project.jpg",
  },
  {
    title: "Job Placement Support",
    description:
      "Our career support team helps you connect with top employers in the field of urban design. We offer resume-building workshops, interview preparation, and direct job placement assistance.",
    image: "/courses/hands of project.jpg",
  },
  {
    title: "Our Training Methodology",
    description:
      "We use an interactive approach to ensure effective learning with real-world applications. Our methodology includes case studies, simulations, and mentorship for an immersive learning experience.",
    image: "/courses/hands of project.jpg",
  },
];

const Workdesignsections = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <App_layout>
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
      <UrbanModel/>
    </App_layout>
  );
};

export default Workdesignsections;
