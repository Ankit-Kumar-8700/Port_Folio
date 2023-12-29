import React from 'react';
import ankit from '../../images/home/ankit.png';
import './homeImage.css';

function HomeImage() {
  return (
    <div>
      <div className="homeImage">
        <img src={ankit} alt="ankit.jpg" />
      </div>
    </div>
  )
}

export default HomeImage
