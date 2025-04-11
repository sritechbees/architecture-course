import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { FiSmartphone } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-amber-300 text-white py-12 px-6 overflow-hidden">
      {/* Background Stars Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Footer Content */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {/* Logo Section */}
        <Link href="/">
          <Image 
            src="/courses/logo.jpeg" 
            width={200} 
            height={200}
            alt="Logo"
            className="rounded-full w-32 h-32"
          />
        </Link>

        {/* Quick Links */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-yellow-500">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-300 transition">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Our Courses</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Workshops</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="text-center sm:text-left space-y-4">
          <h2 className="text-xl font-semibold text-yellow-500">Follow Us</h2>
          <div className="flex justify-center sm:justify-start space-x-6">
            <FaFacebookF className="hover:text-yellow-300 cursor-pointer text-2xl transition-transform transform hover:scale-110" />
            <FaTwitter className="hover:text-yellow-300 cursor-pointer text-2xl transition-transform transform hover:scale-110" />
            <FaInstagram className="hover:text-yellow-300 cursor-pointer text-2xl transition-transform transform hover:scale-110" />
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-yellow-500">Contact Us</h2>
          <p>Email: <a href="mailto:info@archilearn.com" className="hover:text-yellow-300 transition">info@archilearn.com</a></p>
          <p>Phone: <a href="tel:+18001234567" className="hover:text-yellow-300 transition">+1 800 123 4567</a></p>
          <div className="flex items-start space-x-3">
            <FaMapMarkerAlt className="text-xl mt-1" />
            <p>123 Architecture Lane, Design City, USA</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 mt-12 border-t border-yellow-200 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; 2025 ArchiLearn Academy. All Rights Reserved.</p>
        <div className="flex items-center space-x-2 mt-2 md:mt-0">
          <FiSmartphone className="text-xl" />
          <p>Developed by <span className="text-yellow-300 font-semibold">Techbeeshive</span></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
