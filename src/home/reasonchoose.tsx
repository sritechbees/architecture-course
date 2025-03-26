import WhyChoseUs from '@/components/common/whychoose'
import React from 'react'

function Reasonchoose() {
  return (
    <div>
      <div className="max-w-6xl m-auto">  
          <h1 className='text-4xl font-bold text-center mb-8 mt-10 '>Reasons for Choosing Us</h1> 
        <WhyChoseUs
          firstRow={{
            imageFirst: false,
            image1: '/about/us (1).jpg',
            title1: 'Expert Instructors',
            number1: 1,
            text1: 'Learn from seasoned professionals who bring years of industry experience and insight into the classroom',
            imageSecond: true,
            image2: '/about/us (2).jpg',
            title2: 'Real-World Projects',
            number2: 2,
            text2: 'Get hands-on with live projects and build a portfolio that showcases your skills to potential employers.',
          }}
          secondRow={{
            imageFirst: false,
            image3: '/about/us (3).jpg',
            title3: 'Flexible Learning Options',
            number3: 3,
            text3: 'We offer flexible learning paths—both online and in-person—to suit your schedule.',
            imageSecond: true,
            image4: '/about/us (4).jpg',
            title4: 'Job Placement Support',
            number4: 4,
            text4: 'Benefit from our dedicated career services, including job placement assistance, resume workshops, and mock interviews.',
          }}
        />
      </div>  
    </div>
  )
}

export default Reasonchoose