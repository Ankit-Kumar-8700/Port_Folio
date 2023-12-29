import React from 'react'
import './skill.css'

function Skill({skill,percentage,image}) {
  return (
    <div className="progress-bar-container">
  <h2>
    <label className={`h2${skill}`} htmlFor={skill}>{skill}</label>
  </h2>
  <style>
        {`
        .system:hover .${skill} {
          box-shadow: 5px 5px 50px white;
        }
        .system:hover .satellite {
          box-shadow: 5px 5px 15px white;
        }
        .progress-bar-container .${skill} {
          background: linear-gradient(-30deg, white, black,black);
          animation: progress${percentage} 2s 1 forwards;
          
          transition: all 0.5s;
          box-shadow: -2px -2px 5px white;
        }
        .progress-bar-container .${skill}::before {
          -webkit-animation: progress${percentage} 2s 1 forwards;
          animation: progress${percentage} 2s 1 forwards;
        }
        .satellite-${skill}{
          background: linear-gradient(60deg, white,black,black);
          box-shadow: 2px 2px 5px white;
        }
        `}
      </style>

  <div className="orbit-system">
  <div class="system">
    <div class="satellite-orbit">
      <div class={`satellite satellite-${skill}`}></div>
    </div>
  <div className={`progress-bar ${skill} planet`}>
      <img src={image} alt={`${skill}.png`} />
  </div>
  </div>
</div>

</div>
  )
}

export default Skill
