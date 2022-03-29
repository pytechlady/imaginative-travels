import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import './bg2.css';

const Bg2 = ({title, paragraph, button}) => {
  return (
    <div className="pb-5">
        <div className="bg2">
          <h2 className="bg-title">{title ? title : "Get In Touch With Us"}</h2>
          <p>{paragraph ? paragraph : ""}</p>
          <Link to="/contact">
          {button ? button : < Button text="Contact Us" backgroundColor="#4C054E" width="170px"/>}
          </Link>
    </div>
    </div>
  )
}

export default Bg2