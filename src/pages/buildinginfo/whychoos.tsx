import React from 'react';

const reasons = [
  {
    title: "Industry-Ready Curriculum",
    description:
      "Our BIM course aligns with current architecture practices, equipping students with tools like Revit, AutoCAD, and Navisworks.",
  },
  {
    title: "Hands-On Learning",
    description:
      "Real-world projects and interactive 3D modeling sessions help bridge the gap between theory and practice.",
  },
  {
    title: "Expert Mentorship",
    description:
      "Learn from experienced architects and BIM professionals guiding you throughout the course.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white pb-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-aos="fade-up">
          Why Choose Our BIM Course for Architecture?
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Unlock the power of Building Information Modeling to shape smarter, more efficient designs. Here's what makes us different:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl p-6 shadow hover:shadow-xl transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
