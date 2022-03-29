import React from 'react';
import './bg.css';

const Bg = ({title, paragraph}) => {
  return (
    <div className="pb-5">
        <div className="bg">
          <h2 className="bg-title">{title ? title : ""}</h2>
          <p>{paragraph ? paragraph : ""}</p>
    </div>
    </div>
  )
}

export default Bg