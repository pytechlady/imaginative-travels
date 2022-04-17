import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './topnav.css';

const Topnav = () => {
  return (
      <div className="topnav" >
    <div className="p-5">
  <div className="therow">
    <div className="thecols">
        <div className="box">
            <FontAwesomeIcon className="centered" icon={faLocationArrow} />
        </div>
        <div>
            <h5>Lagos State</h5>
            <p>Victoria Island, LA</p>
        </div>
    </div>
    <div className="thecols">
      <div className="box">
          <FontAwesomeIcon className="centered" icon={faPhone} />
      </div>
        <div>
            <h5>+2348075664553</h5>
            <p>24/7 Support line</p>
        </div>
    </div>
    <div className="thecols">
      <div className="box">
          <FontAwesomeIcon className="centered" icon={faEnvelope} />
      </div>
        <div>
            <h5>imaginativetourism@gmail.com</h5>
            <p>101241, Lagos</p>
        </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Topnav