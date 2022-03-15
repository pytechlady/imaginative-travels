import React from 'react';
import './navElement.css'

const navElement = ({text}) => {
  return (
    <ul>
        <li className="li">{text}</li>
    </ul>
  )
}

export default navElement