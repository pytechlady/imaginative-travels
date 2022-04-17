import React from 'react';
import City from '../../assets/images/beauty.png';
import Maldives from '../../assets/images/maldives.jpg';
import Hotel from '../../assets/images/hotel.jpg';
import './hero.css';


const Hero = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active cont">
      <img src={Maldives} className="d-block w-100" alt="..."/>
      <div className="hero-text p-3">
        <h5>“Life is a journey, make the most out of it.”</h5>
      </div>
    </div>
    <div className="carousel-item cont">
      <img src={City} className="d-block w-100" alt="..."/>
      <div className="hero-text p-3">
        <h5>"Life is either a daring adventure or nothing at all."</h5>
      </div>
    </div>
    <div className="carousel-item cont">
      <img src={Hotel} className="d-block w-100" alt="..."/>
      <div className="hero-text p-3">
        <h5>“Travel is the only thing you buy that makes you richer.”</h5>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> 
  )
}

export default Hero

