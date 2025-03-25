'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { PlayCircle } from 'lucide-react';

export default function HeroSlider() {
  const slides = [
    { image: '/home/banner1.jpg', title: 'Elevate Your Skills', subtitle: 'Join expert-led courses and excel', buttonText: 'Explore Courses' },
    { image: '/home/banner2.jpg', title: 'Learn From The Best', subtitle: 'Industry leaders guiding your path', buttonText: 'Start Learning' },
    { image: '/home/banner3.jpg', title: 'Transform Your Future', subtitle: 'Empower yourself with top training', buttonText: 'Get Started' },
    { image: '/home/banner5.jpg', title: 'Innovate & Create', subtitle: 'Unlock your potential with creativity', buttonText: 'Discover More' },
    { image: '/home/banner2.jpg', title: 'Advance Your Career', subtitle: 'Gain insights and take the next step', buttonText: 'Join Now' },
  ];

  return (
    <div className="relative w-full h-[500px] mt-[79px]">
      <Swiper loop={true} autoplay={{ delay: 3000 }} pagination={{ clickable: true }} modules={[Autoplay, Pagination]}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[500px]">
              <Image src={slide.image} alt={slide.title} layout="fill" objectFit="cover" className="rounded-lg" />
              
              {/* Overlay content */}
              <div
                className={`absolute inset-0 flex flex-col justify-center ${
                  index % 2 === 0 ? 'items-start pl-10' : 'items-end pr-10'
                } bg-opacity-30 text-white`}
              >
                <div className="flex items-center gap-2">
                  <PlayCircle className="w-10 h-10 text-red-500" />
                  <span className="text-red-500 text-lg font-semibold">{slide.title}</span>
                </div>
                <h2 className="text-3xl font-bold mt-2 max-w-md">{slide.subtitle}</h2>
                <button className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
