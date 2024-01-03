import React from 'react';
import './phone.css';

function Phone({image}) {
  return (
    <div className="phoneBox">
    <div className="smartphone">
  <div className="content">
    <div style={{width:"100%",border:"none",height:"100%",background:`url(${image}) center center / contain no-repeat`}} ></div>
  </div>
</div>
</div>
  )
}

export default Phone
