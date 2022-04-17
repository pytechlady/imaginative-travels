import React from "react";


const Map = () => (
  <div className="map">
    <div className="google-map">
      <iframe title="themap"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.546851884525!2d3.3852035174438475!3d6.578726599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b928f979d460d%3A0x8d6fb6ef59ebc107!2sPRIME%20GYM%20AND%20SPA!5e0!3m2!1sen!2sng!4v1648665990085!5m2!1sen!2sng"
        width="100%"
        height="500"
        style={{border:"0"}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
);

export default Map;
