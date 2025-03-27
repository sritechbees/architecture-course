import Image from 'next/image'
import React from 'react'

function Evaluatetwo() {
  return (
    <div className='mb-16'>
 <div className="flex flex-col md:flex-row items-center bg-gray-100 p-6 rounded-xl shadow-lg max-w-4xl mx-auto">
      <div className="md:w-1/2 p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Optimized Corporate Training: A Pathway to Student Success
        </h2>
        <p className="text-gray-600">
          Our corporate training process ensures that students receive hands-on, real-world experience with expert guidance. 
          We follow a structured learning model that enhances skills, improves efficiency, and prepares students for industry challenges.
        </p>
      </div>
      <div className="md:w-1/2 p-4">
        <Image
          src="/about/student.jpg" height={200} width={200}
          alt="Corporate Training"
          className="rounded-lg h-64 w-64 shadow-md"
        />
      </div>
    </div>





    </div>
  )
}

export default Evaluatetwo