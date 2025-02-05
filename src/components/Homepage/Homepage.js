import React from 'react';
import Headline from './Headline/Headline';
import HeroSection from './HeroSection/HeroSection';
import CoreServices from './CoreServices/CoreServices';
import WhyChooseGleefiy from './WhyGleefiy/WhyGleefiy';
import ClientTestimonials from './ClientTestimonials/ClientTestimonials';
import CTASection from './CTAsection/CTASection';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

// import Headline from './Headline';

const HomePage = () => {
  return (
    <div>
      {/* <Headline text="Welcome to Gleefiy" 
  subtext="Strategic content & growth support for visionary entrepreneurs."  /> */}
      <InViewAnimation>
        <HeroSection/>
      </InViewAnimation>

      <InViewAnimation>
        <CoreServices />
      </InViewAnimation>
      
      <InViewAnimation>
        <WhyChooseGleefiy/>
      </InViewAnimation>

      <InViewAnimation>
        <ClientTestimonials/>
      </InViewAnimation>

      <InViewAnimation>
        <CTASection title="Ready to Scale Your Business?" 
  buttonText="Book a Free Consultation" 
  buttonLink="/contact"/>
      </InViewAnimation>
      
      
    </div>
  );
};


const InViewAnimation = ({children})=>{
  const { ref, inView} = useInView({triggerOnce: false, threshold: 0.2});

  return(
    <motion.div
    ref = {ref}
    initial = {{ opacity: 0, y: 50}}
    animate = {inView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
    transition={{duration: 0.8}}
    >
      {children}
    </motion.div>
  )
}

export default HomePage;