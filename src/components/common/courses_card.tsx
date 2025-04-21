import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaUserGraduate, FaPhone, FaGlobe } from 'react-icons/fa';
import Link from 'next/link';


export default function Coursescard() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className=" bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 flex items-center justify-center p-4 py-8 mt-6">
      <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center p-6 md:p-10 gap-8 overflow-hidden">
        
        {/* Left Section */}
        <div className="flex-1 max-w-xl" data-aos="fade-right">
          <div className="flex items-center gap-2 text-[#3e2e2b] font-semibold text-lg mb-4">
            <FaUserGraduate /> Salford &amp; Co.
          </div>

          <h1
            className="text-4xl md:text-4xl font-bold text-[#4b2e2b] mb-4"
            data-aos="zoom-in"
          >
            Architecture Courses
          </h1>

          <div
            className="inline-block bg-[#a58579] text-white px-6 py-2 rounded-full font-semibold mb-6"
            data-aos="fade-up"
          >
            Build dreams from your desk.
          </div>

          <div className="text-[#4b2e2b] text-lg mb-4">
            <p className="mb-2 font-medium">Our Courses:</p>
            <ul className="list-disc ml-6 space-y-1">
              <Link href="/sustainable_architecture/whychoose_sustainable"><li>Sustainable Architecture</li></Link>
            <Link href="/buildinginfo/modeling"><li>Building Info Modeling</li></Link>
           <Link href="/architectural_visualization/visualizationkey"><li>Architectural Visualization</li></Link>
            <Link href='/modern_architectural/mordern_description' ><li>AI-in Architecture</li></Link>
           <Link href="architectural_workshop/workshop"><li>Architectural Workshop</li></Link>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
            <div className="flex items-center gap-2 text-[#4b2e2b]">
              <FaPhone /> 9443604461
            </div>
            <div className="flex items-center gap-2 text-[#4b2e2b]">
              <FaGlobe /> www.Architectural.com
            </div>
            <Link href="/courses_list">
            <button
              className="bg-[#a58579] hover:bg-[#8d6f63] transition-colors duration-300 text-white font-semibold px-3 py-2 rounded-full shadow-lg"
              data-aos="zoom-in-up"
            >
              Visit Now
            </button>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center" data-aos="fade-left">
          <Image
            src="/courses/women.png"
            alt="Instructor"
            width={380}
            height={380}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
