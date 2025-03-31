import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const UrbanModel = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [showMore, setShowMore] = useState(false);

  return (
    <div className="w-full bg-gray-900 flex items-center justify-center p-10">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-white" data-aos="fade-right">
          <h2 className="text-4xl font-bold mb-4">Modern Urban Model</h2>
          <p className="text-lg text-gray-300 mb-6">
            Explore the 3D urban environment with interactive buildings,<br></br>
            roads, and trees.
          </p>
          <button 
            className="px-6 py-2 bg-blue-500 hover:bg-blue-700 rounded-lg text-white font-semibold"
            onClick={() => setShowMore(!showMore)}
          >
            Learn More
          </button>
          {showMore && (
            <div className="mt-4 text-gray-300">
              <p>
                The modern urban model provides realistic 3D structures that 
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
          <video 
            src="/courses/urbanbg.mp4"
            className="w-full h-full object-cover rounded-2xl"
            autoPlay
            loop
            muted
            
          />
        </div>
      </div>
    </div>
  );
};

export default UrbanModel;
