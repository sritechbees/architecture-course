'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import Setupone from './setuptwo';
import Setup from './setup';
import Setupthree from './setupthree';
import Setupfour from './setupfour';
import Setupfive from './setupfive';

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
        <SwiperSlide className='mb-10 ml[7px] overflow-hidden'>
         <Setupone/> 
        </SwiperSlide>

        <SwiperSlide>        
           <Setup/> 
        </SwiperSlide>

        <SwiperSlide> 
           <Setupthree/>   
        </SwiperSlide>
        
        <SwiperSlide> 
           <Setupfour/>
        </SwiperSlide>
        
        <SwiperSlide> 
          <Setupfive/>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Slide;
