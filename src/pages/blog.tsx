import React from 'react';
import App_layout from '@/layout/app_layout';
import Image from 'next/image';

const BlogPage = () => {
  return (
    <App_layout>
      {/* 1. Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat h-[60vh] mt-20 flex items-center justify-center text-white" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581091012184-7e0cdfbb6792)' }}>
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 text-center max-w-2xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Explore the World of Architectural Courses</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">Discover expert insights, trends, and guides for mastering architecture and visualization.</p>
        </div>
      </section>

      {/* 2. Latest Blog Posts */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Latest Articles</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <Image src={`https://source.unsplash.com/400x250/?architecture,building&sig=${item}`} alt="blog" className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-semibold">Design Principles in Modern Architecture</h3>
                  <p className="text-gray-600 mt-2">A deep dive into visual balance, spatial rhythm, and material choices.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Popular Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Popular Topics</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Visualization', 'Urban Design', 'CAD Tools', 'Sustainable Architecture', '3D Modeling'].map((category, index) => (
              <span key={index} className="px-5 py-2 bg-yellow-200 text-yellow-900 rounded-full font-medium text-sm hover:bg-yellow-300 transition">
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Author */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Meet Our Expert</h2>
          <p className="text-gray-600 mb-8">Architect, educator, and visualization artist sharing over a decade of experience.</p>
          <div className="flex flex-col items-center gap-4">
            <Image src="https://randomuser.me/api/portraits/men/32.jpg" className="w-24 h-24 rounded-full border-4 border-yellow-500" alt="author" />
            <h3 className="text-xl font-semibold">Ar. Rajiv Kannan</h3>
            <p className="text-gray-500 text-sm max-w-md">Rajiv has worked on large-scale sustainable projects across Asia and Europe, and mentors young architects on design thinking and visualization workflows.</p>
          </div>
        </div>
      </section>

      {/* 5. Newsletter */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">Join our newsletter to get the latest blog updates, tutorials, and resources directly to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full sm:w-auto"
            />
            <button type="submit" className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600 transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </App_layout>
  );
};

export default BlogPage;
