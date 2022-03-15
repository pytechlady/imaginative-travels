import React from 'react';
import Logo from '../../assets/images/Logo.png';
import './footer.css';
import GooglePlay from '../../assets/images/googleplay.png';
import AppleStore from '../../assets/images/applestore.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
    <div className="container p-3">
  <div className="row">
    <div className="col-sm-12 col-md-6 col-lg-3 p-3">
        <img src={Logo} alt="..." />
        <p className="footer-p">We make your travel experience seamless and memorable</p>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-3">
        <h2 className="footer-title">
          <span>our company</span>
        </h2>
        <ul className="list-unstyled">
          <li className="list">Home</li>
          <li className="list">About Us</li>
          <li className="list">Services</li>
          <li className="list">Blog</li>
          <li className="list">Contact Us</li>
        </ul>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-3">
    <h2 className="footer-title">
          <span>support</span>
        </h2>
        <ul className="list-unstyled">
          <li className="list">Help Center</li>
          <li className="list">Support Community</li>
          <li className="list">Terms of Service</li>
          <li className="list">FAQ</li>
          <li className="list">News</li>
        </ul>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-3">
    <h2 className="footer-title">
          <span>install apps</span>
        </h2>
       <div className="app-icons" >
       <img src={GooglePlay} alt="..." />
        <img src={AppleStore} alt="..." />
       </div>
        
    </div>
  </div>
</div>
<hr className="hr" />
<div className="container footer-low">
  <div className="row">
    <div className="col-sm-12 col-md-12 col-lg-8">
    <p className="copyright">&copy; 2022 IMAGINATIVE-TRAVELS, All rights reserved</p>
    </div>
    <div className="col-sm-12 col-md-12 col-lg-4">
    <div className="social-links">
<div className="fb">
<FontAwesomeIcon className="centered" icon={faFacebookF} />
</div>
<div className="insta">
<FontAwesomeIcon className="centered" icon={faInstagram} />
</div>
<div className="twitter">
<FontAwesomeIcon className="centered" icon={faTwitter} />
</div>
</div>
    </div>
  </div>
  </div>

</footer>
  )
}

export default Footer



