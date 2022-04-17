import React from 'react';
import Logo from '../../assets/images/Logo.png';
import './footer.css';
import GooglePlay from '../../assets/images/googleplay.png';
import AppleStore from '../../assets/images/applestore.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="pt-5">
    <div className="container p-3">
  <div className="row ft-container">
    <div className="col-sm-12 col-md-6 col-lg-3 footerlogo">
        <img src={Logo} alt="..." />
        <p className="footer-p">We make your travel experience seamless and memorable</p>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-3">
        <h2 className="footer-title">
          <span>our company</span>
        </h2>
        <ul className="list-unstyled">
          <Link to='/' className="links">
          <li className="list">Home</li>
          </Link>
          <Link to='/about' className="links">
          <li className="list">About Us</li>
          </Link>
          <Link to='/services' className="links">
          <li className="list">Services</li>
          </Link>
          <Link to='/blog' className="links">
          <li className="list">Blog</li>
          </Link>
          <Link to='/contact' className="links" >
          <li className="list">Contact Us</li>
          </Link>
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



