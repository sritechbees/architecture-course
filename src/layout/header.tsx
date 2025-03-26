import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <nav className="absolute bg-gray-950 top-0 left-0 w-full flex items-center justify-between px-8 md:px-16 py-4 z-20">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link href="/">
        <Image 
          src="/home/architecture course logo.png" width={200} height={200}
          alt="Logo"
          className="h-12 rounded-lg"
        /> </Link>
        <span className="text-2xl font-bold text-white font-[Poppins]">
          ArchiLearn
        </span>
       
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-white font-medium">
        <li className="hover:text-blue-300 cursor-pointer">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-blue-300 cursor-pointer">
          <Link href="/courses">Courses</Link>
        </li>
        <li className="hover:text-blue-300 cursor-pointer">
          <Link href="/corporate-training">Corporate Training</Link>
        </li>
        <li className="hover:text-blue-300 cursor-pointer">
          <Link href="/services">Services</Link>
        </li>
        <li className="hover:text-blue-300 cursor-pointer">
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>

      {/* Explore Button */}
      <Link href="/explore">
        <button className="hidden md:block bg-teal-400 hover:bg-teal-600 text-white px-6 py-2 rounded-lg transition-all">
          Explore
        </button>
      </Link>
    </nav>
  );
}

export default Header;
