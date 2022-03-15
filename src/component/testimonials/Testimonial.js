import React from "react";
import TestimonialData from "./testimonialdata";
import './testimonial.css';

const Testimonial = () => {
  return (
    <div className="container pb-5">
      <p className="dest-para">Testimonial</p>
      <h1 className="dest-header">What Customers Are Saying...</h1>
      <div className="lines"></div>
      <div className="row">
        {TestimonialData
          ? TestimonialData.map((testimonial) => {
              return (
                <div
                  key={testimonial.id}
                  className="card col-sm-12 col-md-6 col-lg-4 mt-3"
                >
                  <div className="card-body">
                    <div className="client-info">
                    <h5 className="card-title name">{testimonial.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {testimonial.job}
                    </h6>
                    </div>
                    <p className="card-text mt-4">{testimonial.testimony}</p>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Testimonial;
