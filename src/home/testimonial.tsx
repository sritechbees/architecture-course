import React from "react";
import Image from "next/image";

function Testimonial() {
  return (
    <div className="relative bg-gray-200 text-white py-12 px-6 md:px-16">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What Our Students Say</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {[
          {
            name: "John Doe",
            title: "Architecture Student",
            image: "/about/testimonial1.jpg",
            text: "This course changed my perspective on sustainable design! Highly recommended!",
          },
          {
            name: "Jane Smith",
            title: "Urban Planner",
            image: "/about/testimonial2.jpg",
            text: "Amazing insights into modern architectural techniques. Loved every session!",
          },
          {
            name: "Michael Johnson",
            title: "Interior Designer",
            image: "/about/testimonial3.jpg",
            text: "A must-take course for aspiring architects! The content is top-notch!",
          },
          {
            name: "Sarah Wilson",
            title: "Landscape Architect",
            image: "/about/testimonial4.jpg",
            text: "The practical knowledge I gained has been invaluable in my career!",
          },
          {
            name: "Emily Davis",
            title: "Structural Engineer",
            image: "/about/testimonial5.jpg",
            text: "Innovative and insightful. This course has exceeded my expectations!",
          },
          {
            name: "David Lee",
            title: "Construction Manager",
            image: "/about/testimonial6.jpg",
            text: "The techniques and strategies taught here are simply game-changing!",
          },
        ].map((testimonial, index) => (
          <div
            key={index}
            className="relative group bg-gray-800 rounded-lg shadow-lg overflow-hidden h-64"
          >
            {/* Cover Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-${index % 3 === 0 ? 'r' : index % 3 === 1 ? 'b' : 'tl'} from-teal-500 to-cyan-500 transform group-hover:-translate-y-64 transition-transform duration-500 rounded-lg`}></div>
            
            {/* Image Section */}
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              height={500}
              width={500}
              className="w-full h-full object-cover absolute z-0"
            />

            {/* Hidden Content Revealed on Hover */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-30 border bg-border-light-100 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-2xl font-bold text-yellow-500 mb-2">
                {testimonial.name}
              </h3>
              <p className="text-gray-200 text-center">{testimonial.text}</p>
              <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-r from-sky-300 to-indigo-300 rounded-b-full -translate-y-5 group-hover:translate-y-0 transition-transform duration-300"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
