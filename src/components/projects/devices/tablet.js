import React from 'react';
import './tablet.css';

function Tablet({image}) {
  return (
    <div className="tabletBox">
    <div className="tablet">
  <div className="content">
    <div style={{width:"100%",border:"none",height:"100%",background:`url(${image}) center center / contain no-repeat`}}></div>
  </div>
</div>
</div>
  )
}

export default Tablet
