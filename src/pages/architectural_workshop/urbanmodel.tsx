import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";

const UrbanModel = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [showMore, setShowMore] = useState(false);

  return (
    <div>
    <div className="w-full bg-gray-900 flex items-center mt-[80px] justify-center p-10">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-white" data-aos="fade-right">
          <h2 className="text-4xl font-bold mb-4">WorkShop<span className="text-yellow-500">  Model</span> </h2>
          <p className="text-lg text-gray-300 mb-6">
            Explore the 3D urban environment with interactive buildings,<br></br>
            roads, and trees.
          </p>
          <button 
            className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-lg font-semibold"
            onClick={() => setShowMore(!showMore)}
          >
            Learn More
          </button>
          {showMore && (
            <div className="mt-4 text-gray-300">
              <p>
                The workshop model provides realistic 3D structures that 
                enhance visual appeal and create an immersive experience. 
                It includes interactive elements, ensuring engagement for users. 
                The smooth animations contribute to a seamless user interface, 
                while high-performance rendering guarantees optimal performance.
              </p>
            </div>
          )}
        </div>

        {/* 3D Model Section */}
        <div className="w-full h-96 md:w-1/2 flex justify-center" data-aos="fade-left">
         <Image src="/courses/building one.jpg" className="h-96 w-[525px] rounded-2xl" alt="building" height={200} width={200}/>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default UrbanModel;
