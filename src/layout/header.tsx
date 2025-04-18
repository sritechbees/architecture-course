import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute bg-gray-900  backdrop-blur fixed top-0 left-0 right-0 w-full flex items-center justify-between px-6 md:px-12 lg:px-16 py-4 z-50">
      {/* Logo */}  
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image 
            src="/courses/logo.jpeg" 
            width={200} 
            height={200}
            alt="Logo"
            className=" rounded-full w-12 h-12"
          />
        </Link>
        <span className="text-2xl font-bold text-yellow-500 font-[Poppins]">
          ArchiLearn
        </span>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Navigation Links */}
      <ul
        className={`absolute md:static bg-gray-950 md:bg-transparent top-16 left-0 w-full md:w-auto md:flex lg:space-x-8 text-yellow-500 font-medium transition-all ${menuOpen ? "block" : "hidden"} md:flex`}
      >
        <li className="hover:text-blue-300 cursor-pointer px-6 py-2 md:p-0">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-blue-300 cursor-pointer px-6 py-2 md:p-0">
          <Link href="/courses">Courses</Link>
        </li>
        <li className="hover:text-blue-300 cursor-pointer px-6 py-2 md:p-0">
          <Link href="/corporatetraining">Internship</Link>
        </li>
        <li className="hover:text-blue-300 cursor-pointer px-6 py-2 md:p-0">
          <Link href="/services">Services</Link>
        </li>
        <li className="hover:text-blue-300 cursor-pointer px-6 py-2 md:p-0">
          <Link href="/services">Blogs</Link>
        </li>
        <li className="hover:text-blue-300 cursor-pointer px-6 py-2 md:p-0">
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>

    
    
    </nav>
  );
}

export default Header;
