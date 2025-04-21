"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const testimonials = [
  { name: "Ruban", feedback: "The course gave me a deep understanding urban planning!", image: "/courses/ruban.png" },
  { name: "Aswath", feedback: "Amazing city development. Highly recommended!", image: "/courses/aswath.png" },
  { name: "Suganthi", feedback: "This training transformed my perspective on smart cities!", image: "/courses/suganthi.png" },
  { name: "Jai", feedback: "Highly informative sessions on landscape architecture. Loved it!", image: "/courses/jai.png" },
  { name: "Priyanka", feedback: "Research-backed approach to urban design principles.", image: "/courses/priyanka.png" },
  { name: "Aswinn", feedback: "Best investment for my career in urban planning!", image: "/courses/aswinn.png" }
];

const StudentsTestimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-900 text-white py-12 px-6  mb-12 md:px-12 lg:px-20 xl:px-32">
      <h2 className="text-3xl md:text-4xl text-yellow-500 font-bold text-center mb-10" data-aos="fade-up">
        What Our Students Say
      </h2>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className="mt-6"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-800 text-white p-6 rounded-xl shadow-xl transform transition-all hover:scale-105 hover:bg-gradient-to-r from-blue-500 to-yellow-500">
              <div className="flex flex-col items-center">
                <Image src={testimonial.image} alt={testimonial.name} width={80} height={80} className="w-20 h-20 rounded-full shadow-md" />
                <p className="text-lg text-center mt-4 italic"> &ldquo;{testimonial.feedback} &ldquo;</p>
                <p className="mt-4 text-sm font-semibold text-yellow-400">- {testimonial.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StudentsTestimonial;
