import App_layout from '@/layout/app_layout';

import React from 'react';
import Coursescard from '@/components/common/courses_card';
import Hero from '@/layout/hero';


function Courses() {
  return (
    <App_layout>
    
          <Coursescard/>
      <Hero/>
    </App_layout>
  );
}

export default Courses;
