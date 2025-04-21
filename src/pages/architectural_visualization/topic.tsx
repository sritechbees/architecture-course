import React from 'react'
import IntroductionSection from './introsection'
import TexturingSection from './texturing_section'
import PostProcessingSection from './post_processing'
import LightingSection from './lighting_section'
import Fundamentals3DModeling from './3dmodeling'
import AnimationWalkthroughsSection from './animationwalk'
import PortfolioCareerDevelopmentSection from './portfolio'


function Topic() {
  return (
    <div>
        <IntroductionSection/>
        <TexturingSection/>
        <PostProcessingSection/>
        <LightingSection/>
        <Fundamentals3DModeling/>
        <AnimationWalkthroughsSection/>
        <PortfolioCareerDevelopmentSection/>
        </div>
  )
}

export default Topic