import React from "react";
import Image from "next/image";

function Certificate() {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-50 px-6 rounded-lg shadow-md">
      
    <div className="flex items-center justify-around p-4">
      {/* Left Side - Description */}
      <div className="w-1/2">
        <p className="text-lg font-semibold">Certificate of Completion</p>
        <p className="text-gray-600">
          This certificate is awarded to individuals who have successfully completed the course. 
          It signifies proficiency and dedication in the respective field of study. Achieving this milestone 
          reflects hard work and commitment. We appreciate your efforts and congratulate you on your accomplishment. 
          This certificate showcases your skills and knowledge acquired throughout the program. It serves as a valuable 
          credential in your professional journey. Your determination and perseverance have led you to this achievement. 
          Continue to strive for excellence and reach greater heights in your career.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="w-1/2 flex justify-center">
        <Image className="h-80 w-[550px]" src="/courses/certificatebg.png" height={200} width={200} alt="certificate" />
      </div>
    </div>
    </div>
  );
}

export default Certificate;