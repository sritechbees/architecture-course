import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import App_layout from '@/layout/app_layout';

export default function Workshopdesign() {
  return (
    <App_layout>
      <div className="relative w-full min-h-screen bg-gray-900 text-white py-20 mt-20 px-6 md:px-16 flex items-center overflow-hidden">

        {/* 🔥 Background Image with Opacity */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/courses/faq.jpg"
            alt="Workshop background"
            fill
            className="object-cover opacity-30"
          />
        </div>

        {/* ✅ Split Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full gap-10">
          
          {/* 🟡 Left Side: Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left md:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Why Choose <span className="text-yellow-500">Architectural WorkShop</span> <br /> Design Course?
            </h1>
          </motion.div>

          {/* ⚫ Right Side: Text + Button */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center md:text-left md:w-1/2 flex flex-col gap-6"
          >
            <p className="text-lg md:text-xl max-w-xl">
              Learn how to shape cities for the future with cutting-edge tools, sustainable design strategies, and innovative planning techniques.
            </p>
            <Link href="/architectural_workshop/workshopdesignsections">
              <button className="px-6 py-3 text-lg bg-yellow-400 hover:bg-yellow-500 transition-all rounded-xl shadow-md w-fit mx-auto md:mx-0">
                Read More
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </App_layout>
  );
}
