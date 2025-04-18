import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import App_layout from '@/layout/app_layout';

export default function Workshopdesign() {
  return (
    <App_layout>
    <div className="relative w-full min-h-screen bg-gray-900 text-white py-20 mt-20 px-6 md:px-16 flex flex-col items-center overflow-hidden">
      
      {/* 🔥 Background Image with Opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/courses/faq.jpg" // 👉 replace with your image path
          alt="Workshop background"
          fill
          className="object-cover opacity-40"
        />
      </div>

      {/* ✅ Content Container */}
      <div className="relative z-10 text-center mt-16">
        
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Why Choose <span className="text-yellow-500">Architectural WorkShop</span> Design Course?
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl max-w-3xl mx-auto"
        >
          Learn how to shape cities for the future with cutting-edge tools, sustainable design strategies, and innovative planning techniques.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-6"
        >
          <Link href="/architectural_workshop/workshopdesignsections">
            <button className="px-6 py-3 text-lg bg-yellow-400 hover:bg-yellow-500 transition-all rounded-xl shadow-md">
              Read More
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
    </App_layout>
  );
}
