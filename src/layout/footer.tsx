import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { FiSmartphone } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#4B5563] text-white py-12 px-8 overflow-hidden">
      {/* Background Animations */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{ x: [0, 30, 0], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute w-72 h-72 bg-blue-500 opacity-20 rounded-full top-10 left-5 blur-2xl"
        ></motion.div>
        <motion.div
          animate={{ x: [-20, 10, -20], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute w-52 h-52 bg-teal-400 opacity-30 rounded-full bottom-10 right-10 blur-2xl"
        ></motion.div>
      </div>

      {/* Footer Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
        {/* Contact Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-teal-300">Contact Us</h2>
          <p>Email: <a href="mailto:info@archilearn.com" className="hover:text-teal-400 transition">info@archilearn.com</a></p>
          <p>Phone: <a href="tel:+18001234567" className="hover:text-teal-400 transition">+1 800 123 4567</a></p>
        </div>

        {/* Follow Us Section */}
        <div className="text-center space-y-4">
          <h2 className="text-xl font-semibold text-teal-300">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer text-3xl transition-transform transform hover:scale-110" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer text-3xl transition-transform transform hover:scale-110" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer text-3xl transition-transform transform hover:scale-110" />
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-xl font-semibold text-teal-300">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-teal-400 transition">About Us</a></li>
            <li><a href="#" className="hover:text-teal-400 transition">Our Courses</a></li>
            <li><a href="#" className="hover:text-teal-400 transition">Workshops</a></li>
            <li><a href="#" className="hover:text-teal-400 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Location and App Download Section */}
        <div>
          <h2 className="text-xl font-semibold text-teal-300">Download Our App</h2>
          <div className="flex space-x-4 relative">
            <div className="flex items-center">
              <Image className='h-36 w-40' src="/googleplay.png" alt="Google Play" height={200} width={200} />
            </div>
            <div className="flex items-center">
              <Image className='h-36 w-40' src="/appstore.png" alt="App Store" height={200} width={200} />
            </div>
          </div>

          <div className="flex items-center space-x-4 relative mt-4">
            <FaMapMarkerAlt className="text-3xl text-teal-300" />
            <p>123 Architecture Lane, Design City, USA</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center relative mt-10 text-sm border-t border-gray-500 pt-6">
        <p>&copy; 2025 ArchiLearn Academy. All Rights Reserved.</p>
        <div className="flex items-center space-x-2">
          <FiSmartphone className="text-xl text-teal-300" />
          <p>Developed by <span className="text-yellow-400">Techbeeshive</span></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
