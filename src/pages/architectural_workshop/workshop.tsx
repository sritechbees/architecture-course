import App_layout from '@/layout/app_layout';
import Image from 'next/image';
import React from 'react';
// import UrbanDesignCourse from './whychoose_urbandesign';
import UrbanModel from './urbanmodel';
import QuestionAnswer from './question';
import Students_testimonial from './sutdent_testimonial';
import KeyFeatures from './key_feactures';
import Urbandesign from './urbandesign';
import UrbanDesignSections from './workshopdesignsections';
import ArchitecturalWorkshopHero from '@/home/architecturalworkshophero';
import Workshopdesign from './workshopdesign';
import Workshopdesignsections from './workshopdesignsections';

function Workshop() {
  return (
    <App_layout>
     <div className="">
     <ArchitecturalWorkshopHero/>
     </div>    
    </App_layout>
  );
}

export default Workshop;