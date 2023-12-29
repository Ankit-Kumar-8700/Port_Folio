import React from 'react';
import './laptop.css';

function Laptop({image}) {
  return (
    <div className="laptopBox">
    <div className="laptop">
  <div className="content">
    <div style={{width:"100%",border:"none",height:"100%",background:`url(${image})`,backgroundSize: 'contain',backgroundPosition: 'center center', backgroundRepeat: "no-repeat"}} ></div>
  </div>
</div>
</div>
  )
}

export default Laptop
