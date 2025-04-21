import { useState } from "react";
import { motion } from "framer-motion";




const sections = [
  {
    title: "Immersive 3D Modeling",
    description:
      "Learn how to build detailed architectural models using industry-standard tools like SketchUp, Rhino, and Blender to bring your visions to life.",
    image: "/courses/m1.jpg",
  },
  {
    title: "Photorealistic Rendering Techniques",
    description:
      "Master V-Ray, Lumion, and Twinmotion to create stunning, lifelike renders that impress clients and stakeholders.",
    image: "/courses/m2.jpg",
  },
  {
    title: "Real-Time Visualization with Unreal Engine",
    description:
      "Use Unreal Engine for real-time walkthroughs and animations, delivering immersive experiences during design presentations.",
    image: "/courses/m1.jpg",
  },
  {
    title: "Material and Lighting Mastery",
    description:
      "Explore advanced lighting setups and material mapping to enhance the realism and mood of your visualizations.",
    image: "/courses/m2.jpg",
  },
  {
    title: "Professional Portfolio Development",
    description:
      "Build a standout portfolio with your course projects, tailored to land interviews and freelance gigs in the visualization industry.",
    image: "/courses/m1.jpg",
  },
  {
    title: "Mentorship & Industry Insights",
    description:
      "Get mentored by professionals from top visualization studios, and gain insider knowledge about current trends and job market dynamics.",
    image: "/courses/m2.jpg",
  },
];

const Designsections = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
   

      <div className="max-w-7xl mx-auto py-8 px-6 space-y-20 bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200">
        {/* 🔥 Section Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Explore Our <span className="text-yellow-500">Architectural Visualization Curriculum</span>
          </h1>
          <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
            Discover a comprehensive learning journey where you transform sketches into stunning visual realities with industry-ready skills.
          </p>
        </motion.div>

        {/* 🔄 Course Sections */}
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center gap-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            {/* 🖼️ Image */}
            <motion.img
              src={section.image}
              alt={section.title}
              className="w-full md:w-80 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            />

            {/* 📄 Content */}
            <div className="w-full md:w-1/2 flex flex-col items-start gap-4">
              <motion.button
                className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow transition duration-300 self-start"
                onClick={() => handleToggle(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Me
              </motion.button>

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

export default Designsections;
