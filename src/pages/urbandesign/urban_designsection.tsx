import { motion } from "framer-motion";

const sections = [
  {
    title: "Key Features of Our Urban Design Courses",
    description: "Explore our comprehensive urban design curriculum that blends theory with practical application. Our courses cover essential topics such as sustainability, smart cities, and innovative planning techniques.",
    image: "/courses/hands of project.jpg",
  },
  {
    title: "Hands-On Project Experience",
    description: "Gain real-world experience through hands-on projects guided by industry experts. Work on live projects that mirror actual urban design challenges, giving you valuable practical insights.",
    image: "/courses/hands of project.jpg",
  },
  {
    title: "Expert Instructors",
    description: "Learn from seasoned professionals with years of experience in urban planning and design. Our instructors bring real-world knowledge and best practices to help you stay ahead in the industry.",
    image: "/courses/hands of project.jpg",
  },
  {
    title: "Flexible Learning Options",
    description: "Choose from various learning formats, including online and in-person classes, to suit your schedule. Whether you prefer self-paced learning or live sessions, we have options tailored for you.",
    image: "/courses/hands of project.jpg",
  },
  {
    title: "Job Placement Support",
    description: "Our career support team helps you connect with top employers in the field of urban design. We offer resume-building workshops, interview preparation, and direct job placement assistance.",
    image: "/courses/hands of project.jpg",
  },
  {
    title: "Our Training Methodology",
    description: "We use an interactive approach to ensure effective learning with real-world applications. Our methodology includes case studies, simulations, and mentorship for an immersive learning experience.",
    image: "/courses/hands of project.jpg",
  },
];

const UrbanDesignSections = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-16">
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-8 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={section.image}
            alt={section.title}
            className="w-full md:w-1/3 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            className="w-full md:w-2/3 space-y-4"
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800">{section.title}</h2>
            <p className="text-gray-600 w-[650px]">{section.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default UrbanDesignSections;
