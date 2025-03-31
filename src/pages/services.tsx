import App_layout from '@/layout/app_layout';
import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Architectural Design',
    description: 'Innovative and sustainable architectural designs tailored to client needs.',
    image: '/services/Interior Design.jpg',
    animation: 'fade-up',
  },
  {
    title: 'Interior Design',
    description: 'Creating functional and aesthetically pleasing interior spaces.',
    image: '/services/interior design1.jpg',
    animation: 'fade-left',
  },
  {
    title: 'Urban Planning',
    description: 'Designing efficient and modern urban spaces for communities.',
    image: '/services/interior design2.jpg',
    animation: 'fade-right',
  },
  {
    title: 'Landscape Architecture',
    description: 'Designing outdoor spaces that blend nature with architectural aesthetics.',
    image: '/services/interior design1.jpg',
    animation: 'zoom-in',
  },
  {
    title: '3D Visualization',
    description: 'High-quality 3D renders and animations for architectural projects.',
    image: '/services/interior design2.jpg',
    animation: 'flip-left',
  },
  {
    title: 'Project Management',
    description: 'Efficient planning and execution of architectural projects.',
    image: '/services/Interior Design.jpg',
    animation: 'flip-right',
  }
];

function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <App_layout>
      <div className=' max-w-7xl m-auto py-16 mt-10 px-8 bg-gray-100'>
        <h2 className='text-3xl font-bold text-center mb-10'>Our Architecture Services</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div key={index} data-aos={service.animation} className='bg-white p-6 rounded-2xl shadow-lg'>
              <Image src={service.image} height={200} width={200} alt={service.title} className='w-full h-56 object-cover rounded-xl mb-4' />
              <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
              <p className='text-gray-600'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </App_layout>
  );
}

export default Services;
