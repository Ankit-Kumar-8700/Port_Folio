import React from "react";
import "./skills.css";
import Skill from "./skills/skill";

import js from '../images/skills/js.png';
import reactjs from '../images/skills/reactjs.png';
import angular from '../images/skills/angular.png';

import mongodb from '../images/skills/mongodb.png';
import mysql from '../images/skills/mysql.png';

import numpy from '../images/skills/numpy.png';
import pandas from '../images/skills/pandas.png';
import seaborn from '../images/skills/seaborn.png';
import matplotlib from '../images/skills/matplotlib.png';
import scikit from '../images/skills/scikit.png';

import tensorflow from '../images/skills/tensorflow.png';
import nltk from '../images/skills/nltk.png';
import opencv from '../images/skills/opencv.png';

import c from '../images/skills/c.png';
import cpp from '../images/skills/cpp.png';
import python from '../images/skills/python.png';

// import tableau from '../images/skills/tableau.png';
// import powerbi from '../images/skills/powerbi.png';

function Skills() {
  return (
    <div className="skills">
      <div className="skill-section">
      <ul>
        <Skill skill='C' percentage='90' image={c}  />
        <Skill skill='Cpp' percentage='80' image={cpp}  />
        <Skill skill='Python' percentage='70' image={python}  />
      {/* </ul>
      <ul> */}
        <Skill skill='JS' percentage='70' image={js}  />
        <Skill skill='ReactJs' percentage='70' image={reactjs}  />
        <Skill skill='AngularJs' percentage='70' image={angular}  />
      {/* </ul>
      <ul> */}
        <Skill skill='MongoDB' percentage='70' image={mongodb}  />
        <Skill skill='MySQL' percentage='80' image={mysql}  />
      {/* </ul>
      <ul> */}
        <Skill skill='Numpy' percentage='80' image={numpy} />
        <Skill skill='Pandas' percentage='80' image={pandas} />
        <Skill skill='Matplotlib' percentage='80' image={matplotlib} />
        <Skill skill='Scikit-Learn' percentage='70' image={scikit} />
        <Skill skill='Seaborn' percentage='70' image={seaborn} />
      {/* </ul>
      <ul> */}
        <Skill skill='Tensorflow' percentage='60' image={tensorflow} />
        <Skill skill='NLTK' percentage='80' image={nltk} />
        <Skill skill='OpenCV' percentage='70' image={opencv} />
      {/* </ul>
      <ul> */}
        {/* <Skill skill='Tableau' percentage='50' image={tableau} />
        <Skill skill='PowerBI' percentage='60' image={powerbi} /> */}
      </ul>
    </div>
    </div>
  );
}

export default Skills;
