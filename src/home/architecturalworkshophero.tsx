import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegLightbulb } from 'react-icons/fa';

export default function ArchitecturalWorkshopHeroTwo() {
  return (
    <section className="relative bg-gradient-to-tr from-[#f9f7f1] via-[#fffdf5] to-[#e9e4d8] py-16 mt-16 overflow-hidden">
      {/* Background Shape */}
      <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-[#ecc20635] rounded-full blur-3xl opacity-40 z-0" />
      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-[#2e4e4535] rounded-full blur-3xl opacity-30 z-0" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center z-10">
        {/* Text Content */}
        <div>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-2 text-sm uppercase tracking-wide text-[#2e4e45]"
          >
            <FaRegLightbulb className="text-yellow-500" />
            Premium Workshop
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-3xl md:text-4xl text-gray-900 font-bold mt-4"
          >
            Elevate Your <span className=" text-yellow-500">Design Vision</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="mt-6 text-gray-700 leading-loose text-lg"
          >
            Immerse yourself in architectural thinking with modern tools and mentoring.
            Master the art of spatial transformation through our hands-on workshop.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="mt-8 flex gap-5"
          >
            <Link
              href="/contact"
              className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded-full shadow-xl hover:scale-105 transition-transform duration-300"
            >
              Register Now
            </Link>
            <Link
              href="/architectural_workshop/workshopdesign"
              className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded-full shadow-xl hover:scale-105 transition-transform duration-300"
            >
             View Once
            </Link>
          </motion.div>
        </div>

        {/* Image with glassmorphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative rounded-[30px] bg-white/30 backdrop-blur-lg p-4 shadow-xl"
        >
          <Image
            src="/courses/ai hero.jpg" height={200} width={200}
            alt="Workshop preview"
            className="rounded-[20px] w-full h-[400px] object-cover border-4 border-white"
          />
          <div className="absolute bottom-4 right-4 bg-[#ecc206e1] text-white text-xs px-3 py-1 rounded-full shadow-lg">
            Limited Slots
          </div>
        </motion.div>
      </div>
    </section>
  );
}
