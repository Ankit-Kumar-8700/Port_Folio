import React, { useEffect } from "react";
import "./projects.css";
import Phone from "./projects/devices/phone";
import Laptop from "./projects/devices/laptop";
import Tablet from "./projects/devices/tablet";

import phone1 from '../images/projects/phone1.png';
import phone2 from '../images/projects/phone2.png';
import phone3 from '../images/projects/phone3.png';
import phone4 from '../images/projects/phone4.png';
import laptop1 from '../images/projects/laptop1.png';
import laptop2 from '../images/projects/laptop2.png';
import laptop3 from '../images/projects/laptop3.png';
import laptop4 from '../images/projects/laptop4.png';
import tablet1 from '../images/projects/tablet1.png';
import tablet2 from '../images/projects/tablet2.png';
import tablet3 from '../images/projects/tablet3.png';
import tablet4 from '../images/projects/tablet4.png';

function Projects() {
  useEffect(() => {
    function _class(name) {
      return document.getElementsByClassName(name);
    }
    let projectPanes = _class("projects-header")[0].getElementsByTagName("div");
    for (let i = 0; i < projectPanes.length; i++) {
      projectPanes[i].addEventListener("click", function () {
        _class("projects-header")[0]
          .getElementsByClassName("active")[0]
          .classList.remove("active");
        projectPanes[i].classList.add("active");
        _class("project-indicator")[0].style.top = `${80 + i * 50}px`;
        _class("projects-content")[0]
          .getElementsByClassName("active2")[0]
          .classList.remove("active2");
        _class("projects-content")[0]
          .getElementsByClassName("text-white")
          [i].classList.add("active2");
      });
    }
  });
  return (
    <div className="projectsOuter">
      <div className="projects-tabs">
        <div className="projects-header">
          <div className="active">
          <i className="fa-solid fa-cart-shopping"></i>
            MERN
          </div>
          <div>
          <i className="fa-solid fa-user-nurse"></i>
            ML
          </div>
          <div>
          <i className="fa-solid fa-clipboard-question"></i>
            DL (NLP)
          </div>
          <div>
          <i className="fa-solid fa-robot"></i>
            DL (LSTM)
          </div>
        </div>
        <div className="project-indicator"></div>
        <div className="projects-content">
          <div className="text-white active2">
          <i className="fa-solid fa-cart-shopping"></i>
            <h2>
              1. E-Commerce site (with Admin facilities)
            </h2>
            <div className="devicesDiv">
              <div className="phoneDiv">
                <Phone image={phone1} />
              </div>
              <div className="laptopDiv">
                <Laptop image={laptop1} />
              </div>
              <div className="tabletDiv">
                <Tablet image={tablet1} />
              </div>
            </div>
            <div className="textProjects">
              <p>E-Commerce</p>
              <p>
                It's a great website with <b>Authentication</b>, Product filtering, shopping, ordering and tracking facilities. It also gives an <b>Admin</b> to have some special powers like <b>Whole Admin Panel</b>, which is a very important part of a complete shopping website..
              </p>
            </div>
          </div>
          <div className="text-white">
          <i className="fa-solid fa-user-nurse"></i>
            <h2>
              2. Disease Prediction System (Multiple Diseases)
            </h2>
            <div className="devicesDiv">
              <div className="phoneDiv">
                <Phone image={phone2} />
              </div>
              <div className="laptopDiv">
                <Laptop image={laptop2} />
              </div>
              <div className="tabletDiv">
                <Tablet image={tablet2} />
              </div>
            </div>
            <div className="textProjects">
              <p>Disease Prediction</p>
              <p>
                It's a site having the power to predict variety of Diseases (eg: diabetes, brain stroke, etc.). Each of these predictions are based on training upon thousands of rows of Data and best model (with 93%+ accuracy) is chosen among multiple ones. It can predict whether a person has symptoms of particular disease or not based on his/her stats.
              </p>
            </div>
          </div>
          <div className="text-white">
          <i className="fa-solid fa-clipboard-question"></i>
            <h2>
              3. Question-Answer Generator System (from a Paragraph)
            </h2>
            <div className="devicesDiv">
              <div className="phoneDiv">
                <Phone image={phone3} />
              </div>
              <div className="laptopDiv">
                <Laptop image={laptop3} />
              </div>
              <div className="tabletDiv">
                <Tablet image={tablet3} />
              </div>
            </div>
            <div className="textProjects">
              <p>Q/A System</p>
              <p>
                We just need to upload a big enough paragraph, and this AI-powered site will generate Summary, MCQ's, Fill-ups, etc. I have used MCQ question generation GAN by Ramsri Sir, which is a great tool. You can also try answering the questions on the site itself where it will give the Correct/Wrong response after answering.
              </p>
            </div>
          </div>
          <div className="text-white">
          <i className="fa-solid fa-robot"></i>
            <h2>
              4. Gesture Controller AI (touch-free)
            </h2>
            <div className="devicesDiv">
              <div className="phoneDiv">
                <Phone image={phone4} />
              </div>
              <div className="laptopDiv">
                <Laptop image={laptop4} />
              </div>
              <div className="tabletDiv">
                <Tablet image={tablet4} />
              </div>
            </div>
            <div className="textProjects">
              <p>Gesture Controller</p>
              <p>
              The Touchless Gesture Control System is an innovative solution designed to enable users to control devices without the need for physical touch. This system combines OpenCV and LSTM to interpret and respond to hand gestures in real-time. For now, I have trained it for just 5 actions, but it can be made very dynamic for a lot of actions which in turn control the device as trained.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
