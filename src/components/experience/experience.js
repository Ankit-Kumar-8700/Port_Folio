import React from 'react';
import Role from './role';
import './experience.css';

function Experience() {
  return (
    <ul class="timeline">
        <Role organization="Finguard Technologies"  role="Backend Intern" date="May 2024 - Sept 2024" bullets={['Coded and optimized RESTful APIs and data models using Mongoose and Express.js, following industry standards.', 'Led a team of 2 backend interns, managing task allocation and ensuring timely delivery of features and bug fixes.', 'Collaborated with frontend team utilizing React.js and Material UI to ensure seamless integration and user experience.']} link='https://drive.google.com/file/d/1OM2Ejb7F0AfD0qt-7Ej-BvUow5czKYlo/view' />
  </ul>
  )
}

export default Experience
