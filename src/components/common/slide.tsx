'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { BsArrowRightShort } from 'react-icons/bs';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import Setupone from './setuptwo';
import Setup from './setup';
import Setupthree from './setupthree';

const Slide = () => {
  return (
    <div className=' mx-auto  mt-20 '>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{ delay: 2500 }}
        loop={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination, Autoplay]}
        className='mySwiper'
      >
        <SwiperSlide >
         <Setupone/> 
        </SwiperSlide>

        <SwiperSlide>        
           <Setup/> 
        </SwiperSlide>

        <SwiperSlide> 
           <Setupthree/>   
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Slide;
