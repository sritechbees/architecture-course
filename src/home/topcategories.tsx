import Image from "next/image";
import React from "react";

const categories = [
  { id: 1, title: "Art & Design", courses: 15, icon: "🎨", img: "/home/arts and design.jpg", hoverEffect: "left-to-right" },
  { id: 2, title: "Business", courses: 8, icon: "⚙️", img: "/home/arts and design.jpg", hoverEffect: "right-to-left" },
  { id: 3, title: "Data Science", courses: 12, icon: "📊", img: "/home/arts and design.jpg", hoverEffect: "top-to-bottom" },
  { id: 4, title: "Photography", courses: 15, icon: "📷", img: "/home/arts and design.jpg", hoverEffect: "bottom-to-top" },
  { id: 5, title: "Math & Logic", courses: 6, icon: "➗", img: "/home/arts and design.jpg", hoverEffect: "corner-to-corner" },
  { id: 6, title: "Technology", courses: 20, icon: "💻", img: "/home/arts and design.jpg", hoverEffect: "diagonal" },
];

function Topcategories() {
  return (
    <div className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-3xl text-yellow-500 font-bold">Top Categories</h2>
        <button className="relative inline-block px-6 py-2 border border-white text-white font-semibold rounded-lg overflow-hidden group">
          <span className="absolute inset-0 bg-yellow-500 transition-all transform scale-x-0 group-hover:scale-x-100 origin-left duration-300"></span>
          <span className="relative text-yellow-500 group-hover:text-white transition-colors duration-300">
            View All
          </span>
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative group flex items-center justify-center h-64 bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition overflow-hidden"
          >
            {/* Icon & Title */}
            <div className="text-center relative z-10">
              <div className="text-3xl mb-2">{category.icon}</div>
              <h3 className="text-lg text-yellow-500 font-semibold">{category.title}</h3>
              <p className="text-sm text-white">{category.courses} Courses</p>
            </div>

            {/* Hover Effect with Image */}
            <div
              className={`absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center
                opacity-0 group-hover:opacity-100 transition-all duration-500 ${getHoverEffect(category.hoverEffect)}`}
            >
              <Image
                src={category.img}
                height={200}
                width={200}
                alt={category.title}
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-4 bg-yellow-500 text-white px-3 py-1 rounded">
                Course Preview
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Hover effect transitions
function getHoverEffect(effect: string) {
  switch (effect) {
    case "left-to-right":
      return "transform -translate-x-full group-hover:translate-x-0";
    case "right-to-left":
      return "transform translate-x-full group-hover:translate-x-0";
    case "top-to-bottom":
      return "transform -translate-y-full group-hover:translate-y-0";
    case "bottom-to-top":
      return "transform translate-y-full group-hover:translate-y-0";
    case "corner-to-corner":
      return "transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0";
    case "diagonal":
      return "transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0";
    default:
      return "";
  }
}

export default Topcategories;
