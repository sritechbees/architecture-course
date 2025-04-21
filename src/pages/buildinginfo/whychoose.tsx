import React from 'react';
import { Lightbulb, Layers, ShieldCheck, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
    title: 'Industry-Relevant Skills',
    desc: 'Master tools like Revit, AutoCAD, and Navisworks used by top firms worldwide.',
  },
  {
    icon: <Layers className="w-6 h-6 text-blue-500" />,
    title: 'Hands-on BIM Projects',
    desc: 'Work on real-world BIM scenarios and architectural design simulations.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    title: 'Certified & Recognized',
    desc: 'Earn a certification recognized by industry leaders and architecture boards.',
  },
  {
    icon: <Users className="w-6 h-6 text-purple-500" />,
    title: 'Expert Mentors',
    desc: 'Learn from professionals with years of BIM and architectural visualization experience.',
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-gray-100 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose <span className="text-yellow-500">Our BIM Course</span>?
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We equip aspiring architects and designers with powerful BIM tools and professional-grade knowledge through a comprehensive and engaging learning experience.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-yellow-500 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
