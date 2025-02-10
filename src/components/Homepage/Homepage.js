import React from 'react';
import Headline from './Headline/Headline';
import HeroSection from './HeroSection/HeroSection';
import CoreServices from './CoreServices/CoreServices';
import WhyChooseGleefiy from './WhyGleefiy/WhyGleefiy';
import ClientTestimonials from './ClientTestimonials/ClientTestimonials';
import CTASection from './CTAsection/CTASection';
import { InViewAnimation } from '../InViewAnimation';


// import Headline from './Headline';

const HomePage = () => {
  return (
    <div>
      {/* <Headline text="Welcome to Gleefiy" 
  subtext="Strategic content & growth support for visionary entrepreneurs."  /> */}
      <InViewAnimation>
        <HeroSection/>
      </InViewAnimation>

      {/* <InViewAnimation> */}
        <CoreServices />
      {/* </InViewAnimation> */}
      
      <InViewAnimation>
        <WhyChooseGleefiy/>
      </InViewAnimation>

      <InViewAnimation>
        <ClientTestimonials/>
      </InViewAnimation>

      {/* <InViewAnimation> */}
        <CTASection title="Ready to Scale Your Business?" 
  buttonText="Book a Free Consultation" 
  buttonLink="#/contact"/>
      {/* </InViewAnimation> */}
      
      
    </div>
  );
};




export default HomePage;