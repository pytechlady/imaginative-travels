import React from 'react';
import About from '../component/about/About';
import Achievement from '../component/achievement/Achievement';
import Bg from '../component/bg/Bg';
import Bg2 from '../component/bg2/Bg2';
import Destinations from '../component/destinations/Destinations';
import Hero from '../component/hero/Hero';
import Testimonial from '../component/testimonials/Testimonial';



const home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Achievement />
      <Bg homeonly="Escape" span=" into amazing experiences"/>
      <Destinations />
      <Testimonial />
      <Bg2 />
    </div>
  )
}

export default home