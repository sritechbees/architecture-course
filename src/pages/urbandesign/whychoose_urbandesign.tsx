import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function UrbanDesignCourse() {
  return (
    <div className="relative w-full bg-gray-900 text-white py-36   px-6 md:px-16 flex flex-col items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/courses/urbanbg.jpg" height={200} width={200} 
          alt="Background" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 text-center">
        {/* Animated Text Section */}
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6">
          Why Choose <span className="text-blue-400">Urban Design</span> Course?
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl text-center max-w-3xl mx-auto">
          Learn how to shape cities for the future with cutting-edge tools, sustainable design strategies, and innovative planning techniques.
        </motion.p>
        
      
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-6">
            <Link href="/">
          <button className="px-6 py-3 text-lg bg-blue-500 hover:bg-blue-600 transition-all rounded-xl shadow-md">
            Enroll Now
          </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
