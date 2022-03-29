import React from 'react'
import Achievement from '../component/achievement/Achievement'
import Bg from '../component/bg/Bg'
import Bg2 from '../component/bg2/Bg2'
import Testimonial from '../component/testimonials/Testimonial'

const services = () => {
  return (
    <div>
        <Bg title="Services" paragraph="We offer the best trips within your budget"/>
        <Achievement />
        <Testimonial />
        <Bg2 />
    </div>
  )
}

export default services