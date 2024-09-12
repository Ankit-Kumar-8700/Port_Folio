import React from 'react'

function Role({organization, role, date, bullets, link}) {
  return (
    <li>
    <div className="direction-r">
      <div className="flag-wrapper">
        <span className="hexa"></span>
      <div className='flag-outer'>
        <span className="flag"><b><a href={link} target="_blank" rel="noreferrer">{organization}</a></b> <br /> <i>{role}</i></span>
        </div>
        <span className="time-wrapper"><span className="time">{date}</span></span>
        {/* <span className="flag">role</span>
        <span className="time-wrapper"><span className="time">location</span></span> */}
      </div>
      <div className="desc">
        <ul>
          {bullets.map((bullet) => {
            return <li>{bullet}</li>;
          })}
        </ul>
      </div>
    </div>
  </li>
  )
}

export default Role
