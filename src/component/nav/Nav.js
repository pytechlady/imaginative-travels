import React from 'react';
import NavElement from '../navElement/NavElement';
import './nav.css';
import Logo from '../../assets/images/Logo.png';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar sticky-lg-top navbar-expand-lg navbar-light">
  <div className="container">
  <img className="navbar-brand" src={Logo} alt=""/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav ms-auto">
          <Link to="/" className="links">
        <NavElement className="nav-item" text="Home"/>
        </Link>
        <Link to="/about" className="links">
        <NavElement className="nav-item" text="About Us"/>
        </Link>
        <Link to="/services" className="links">
        <NavElement className="nav-item" text="Services"/>
        </Link>
        <Link to="blog" className="links">
        <NavElement className="nav-item" text="Blog"/>
        </Link>
        <Link to="/contact" className="links">
        <NavElement className="nav-item" text="Contact Us"/>
        </Link>
        </div>
    </div>
  </div>
</nav>
  )
}

export default Nav