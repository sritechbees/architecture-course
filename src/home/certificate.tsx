import React from "react";
import Image from "next/image";

function Certificate() {
  return (
    <div className="flex items-center justify-center bg-gray-100 px-4 py-2 pb-7 rounded-lg shadow-md">
      <div className="flex flex-col lg:flex-row items-center justify-between lg:ml-20 gap-8 w-full max-w-7xl mx-auto">
        
        {/* Left Side - Description */}
        <div className="w-full">
          <p className="text-2xl font-semibold mb-4 text-center lg:text-left">
            Certificate<span className="text-yellow-500"> of Completion</span> 
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed text-justify">
            This certificate is awarded to individuals who have successfully completed the course.
            It signifies proficiency and dedication in the respective field of study. Achieving this milestone
            reflects hard work and commitment. We appreciate your efforts and congratulate you on your accomplishment.
            This certificate showcases your skills and knowledge acquired throughout the program. It serves as a valuable
            credential in your professional journey. Your determination and perseverance have led you to this achievement.
            Continue to strive for excellence and reach greater heights in your career.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full flex justify-center">
          <Image
            className="h-auto w-full max-w-[500px]"
            src="/courses/certificatebg.png"
            width={500}
            height={400}
            alt="certificate"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Certificate;
