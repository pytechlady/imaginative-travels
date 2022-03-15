import React from "react";
import Service from "../service/Service";
import DestinationData from "./data";
import "./destinations.css";

const Destinations = () => {
  return (
    <div className="container pb-5">
      <p className="dest-para">Destination</p>
      <h1 className="dest-header">Popular Destinations</h1>
      <div className="lines"></div>
      <div className="row">
        {DestinationData
          ? DestinationData.map((destination) => {
              return (
                <div className="col-sm-12 col-md-6 col-lg-4 mt-3">
                    <Service
                      key={destination.id}
                      title={destination.title}
                      paragraph={destination.description}
                      image={destination.cover_img}
                    />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Destinations;

/* <div className="col">
      <Service />
    </div>
    <div className="col">
    <Service />
    </div>
    <div className="col">
    <Service />
    </div>
  </div>
  <div className="row mt-4">
    <div className="col">
    <Service />
    </div>
    <div className="col">
    <Service />
    </div>
    <div className="col">
    <Service />
    </div> */
