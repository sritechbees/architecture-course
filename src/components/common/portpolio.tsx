import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Sun, Moon } from "lucide-react";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [theme, setTheme] = useState("morning");

  return (
    <div
      className={`${
        theme === "morning"
          ? "bg-gradient-to-b from-yellow-200 to-white text-black"
          : "bg-gradient-to-b from-gray-900 to-black text-white"
      } min-h-screen py-16 mt-10 px-6 sm:px-10 border border-purple-300 rounded-lg shadow-lg transition-all duration-500`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-end mb-4">
          <button
            className="px-4 py-2  text-white rounded-md flex items-center gap-2"
            onClick={() => setTheme(theme === "morning" ? "night" : "morning")}
          >
            {theme === "morning" ? <Moon size={20} /> : <Sun size={20} />}
            {theme === "morning" ? "Switch to Night Mode" : "Switch to Morning Mode"}
          </button>
        </div>

        <div className="flex flex-col items-center text-center mb-10" data-aos="fade-up">
          <h2 className="text-4xl font-bold">OUR PORTFOLIO</h2>
          <p className="text-gray-600 max-w-2xl mt-4">
            Explore our collection of architectural marvels, showcasing innovative designs and cutting-edge structures that redefine modern living spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Image src="/about/us (1).jpg" height={200} width={200} alt="architecture" className="w-full h-auto" data-aos="zoom-in" />
            <Image src="/about/us (2).jpg" height={200} width={200} alt="architecture" className="w-full h-auto" data-aos="zoom-in" />
            <Image src="/about/us (3).jpg" height={200} width={200} alt="architecture" className="w-full h-auto" data-aos="zoom-in" />
            <Image src="/about/us (4).jpg" height={200} width={200} alt="architecture" className="col-span-2 sm:col-span-3 w-full" data-aos="fade-up" />
          </div>
          <div className="flex flex-col justify-between space-y-6 text-center lg:text-left">
            <p className="text-gray-600 text-sm max-w-full sm:max-w-md mx-auto lg:mx-0" data-aos="fade-left">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi et iure odio quaerat aliquid quae. Dicta id repudiandae eligendi autem magni assumenda architecto esse, nisi sed. Aperiam soluta odit eligendi.
            </p>
            <p className="text-gray-600 text-sm max-w-full sm:max-w-md mx-auto lg:mx-0" data-aos="fade-left" data-aos-delay="200">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ipsa maiores, reiciendis maxime, explicabo sit saepe iste sed vitae nesciunt minus omnis ipsum repellat at expedita magni architecto non? Tenetur.
            </p>
            <p className="text-gray-600 text-sm max-w-full sm:max-w-md mx-auto lg:mx-0" data-aos="fade-left" data-aos-delay="400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quidem perspiciatis consequuntur neque, odio veniam iste corporis architecto est earum ullam dolore voluptate ab molestiae repudiandae, asperiores nihil, quasi vero?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;