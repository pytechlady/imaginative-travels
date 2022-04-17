import React from 'react';
import './bg.css';

const Bg = ({title, paragraph, span, fontFamily, fontSize, fontWeight, homeonly}) => {
  const style = {
    fontSize: '30px',
    fontWeight: '400',
    fontFamily: 'Oswald'
  }
  return (
    <div className="pb-5">
        <div className="bg">
          <h2 className="bg-title">{title ? title : ""}</h2>
          <p>{paragraph ? paragraph : ""}</p>
          <p style={style} className='thep'>{homeonly ? homeonly : ""}<span>{span ? span : ""}</span></p>
    </div>
    </div>
  )
}

export default Bg