import React from 'react';
import '../../App.css';

const Service = ({title, paragraph, image}) => {
  return (
    <div className="card h-100 mb-5">
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title card-heading">{title ? title : "Airline Ticketing"}</h5>
    <p className="para-div">{paragraph ? paragraph : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsa, ad ratione quos distinctio unde."}</p>
  </div>
</div>
  )
}

export default Service