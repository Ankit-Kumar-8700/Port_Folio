import React from 'react';
import NameLetter from './nameLetter';
import './name.css';

export default function Name() {
  return (
    <div className='name'>
        <div className="firstName" style={{marginRight:"10px"}}>
      <NameLetter letter="A"/>
      <NameLetter letter="N"/>
      <NameLetter letter="K"/>
      <NameLetter letter="I"/>
      <NameLetter letter="T"/>
      </div>
      <div className="lastName">
      <NameLetter letter="K"/>
      <NameLetter letter="U"/>
      <NameLetter letter="M"/>
      <NameLetter letter="A"/>
      <NameLetter letter="R"/>
      </div>
    </div>
  )
}
