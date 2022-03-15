import React from 'react';
import Yatch from '../../assets/images/yatch.jpg';
import './about.css';
import Button from '../button/Button';

const About = () => {
  return (
    <div className="container pt-5 pb-5">
  <div className="row">
    <div className="col-sm-12 col-md-6 col-lg-6 order-md-1">
         <img src={Yatch} className="w-100 img-div" alt="..." />
    </div>
    <div className="col-sm-12 col-md-6 col-lg-6 text-div">
      <div className="p-3">
          <h5 className="title">About Us</h5>
          <h2 className="title-div">Welcome To Our Website</h2>
          <div className="line"></div>
          <p className="para-div">We are a travel management company with the requisite capabilities to deliver hitch free travel services. 
            We have embraced the timeless truth of Customer service and Personal Touch in ensuring that we deliver our best services.</p>
            <Button text="Learn More" backgroundColor="#4C054E" width="150px"/>
      </div>
    </div>
  </div>
</div> 
  )
}

export default About
    