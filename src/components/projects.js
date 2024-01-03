import React, { useEffect, useState } from "react";
import "./projects.css";
import Phone from "./projects/devices/phone";
import Laptop from "./projects/devices/laptop";
import Tablet from "./projects/devices/tablet";

import phoneCash from '../images/projects/phoneCash.png';
import phoneEcom from '../images/projects/phoneEcom.png';
import phoneGesture from '../images/projects/phoneGesture.png';
import phonePokemon from '../images/projects/phonePokemon.png';
import phonePtt from '../images/projects/phonePtt.png';
import phoneQA from '../images/projects/phoneQA.png';
import phoneSort from '../images/projects/phoneSort.png';
import phoneStyle from '../images/projects/phoneStyle.png';
import phoneSudoku from '../images/projects/phoneSudoku.png';
import phoneText from '../images/projects/phoneText.png';
import phoneUnit from '../images/projects/phoneUnit.png';
import phoneVB from '../images/projects/phoneVB.png';

import laptopCash from '../images/projects/laptopCash.png';
import laptopEcom from '../images/projects/laptopEcom.png';
import laptopGesture from '../images/projects/laptopGesture.png';
import laptopPokemon from '../images/projects/laptopPokemon.png';
import laptopPtt from '../images/projects/laptopPtt.png';
import laptopQA from '../images/projects/laptopQA.png';
import laptopSort from '../images/projects/laptopSort.png';
import laptopStyle from '../images/projects/laptopStyle.png';
import laptopSudoku from '../images/projects/laptopSudoku.png';
import laptopText from '../images/projects/laptopText.png';
import laptopUnit from '../images/projects/laptopUnit.png';
import laptopVB from '../images/projects/laptopVB.png';

import tabletCash from '../images/projects/tabletCash.png';
import tabletEcom from '../images/projects/tabletEcom.png';
import tabletGesture from '../images/projects/tabletGesture.png';
import tabletPokemon from '../images/projects/tabletPokemon.png';
import tabletPtt from '../images/projects/tabletPtt.png';
import tabletQA from '../images/projects/tabletQA.png';
import tabletSort from '../images/projects/tabletSort.png';
import tabletStyle from '../images/projects/tabletStyle.png';
import tabletSudoku from '../images/projects/tabletSudoku.png';
import tabletText from '../images/projects/tabletText.png';
import tabletUnit from '../images/projects/tabletUnit.png';
import tabletVB from '../images/projects/tabletVB.png';

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

  let dataset={
    "Sorting Visualizer":{
      name:"Sorting Visualizer",
      phone:phoneSort,
      laptop:laptopSort,
      tablet:tabletSort,
      desc:"Watch in real-time as various sorting algorithms bring order to chaos, offering an interactive and educational experience in the art of sorting. Multiple Sorting Algos are implemented"
    },
    "Cash-Flow Minimiser":{
      name:"Cash-Flow Minimiser",
      phone:phoneCash,
      laptop:laptopCash,
      tablet:tabletCash,
      desc:"An innovative financial tool that optimizes and streamlines cash flow management, helping businesses minimize financial strain and maximize operational efficiency. Unlock smarter financial decisions with real-time insights and strategic planning."
    },
    "Sudoku Solver":{
      name:"Sudoku Solver",
      phone:phoneSudoku,
      laptop:laptopSudoku,
      tablet:tabletSudoku,
      desc:"A great web-app that uses the power of Back-tracking Algorithm in order to solve any Sudoku (built with all the error handling so that illegal sudoku don't pose any issue). Also, multiple size sudoku are available (4x4 and 9x9)."
    },
    "Text-Modifier":{
      name:"Text-Modifier",
      phone:phoneText,
      laptop:laptopText,
      tablet:tabletText,
      desc:"Play with the text as much as you want. Capitalize them, sort them, replace via another text and much more functionalities, all built at one single place in order to take care of all your text issues and built with a very simplified design."
    },
    "Pokemon":{
      name:"Pokemon Website (Front-End)",
      phone:phonePokemon,
      laptop:laptopPokemon,
      tablet:tabletPokemon,
      desc:"Dive into the vibrant world of Pokémon with our interactive frontend website! Explore detailed profiles, discover captivating visuals, and embark on a nostalgic journey filled with your favorite Pokémon characters."
    },
    "Unit-Convertor":{
      name:"Unit-Convertor (Use of API)",
      phone:phoneUnit,
      laptop:laptopUnit,
      tablet:tabletUnit,
      desc:"This Unit Converter web app is powered by a robust Unit Converter API! Seamlessly convert between diverse units with precision and ease, making complex conversions a breeze for users. "
    },
    "E-Commerce":{
      name:"E-Commerce (Client+Admin)",
      phone:phoneEcom,
      laptop:laptopEcom,
      tablet:tabletEcom,
      desc:"This project is designed to offer both admin and user functionalities, ensuring a seamless experience for managing products, processing orders, and more. Has great features like Admin panel, Payment (using StripeApi) and much more."
    },
    "Pic-Text":{
      name:"Pic-to-Text Extractor (Flask)",
      phone:phonePtt,
      laptop:laptopPtt,
      tablet:tabletPtt,
      desc:"Now extracting text from any picture is extremely easy using this web app. This web app also offers conversion of the extracted text into various languages, whcih can be read in textual form or can also be downloaded in Audio format."
    },
    "Style-Transfer":{
      name:"Style-Transfer",
      phone:phoneStyle,
      laptop:laptopStyle,
      tablet:tabletStyle,
      desc:"Transforming images into unique works of art with Style-Transfer using CNNs—where neural networks blend content with the aesthetic essence of renowned styles, unleashing a visual symphony of creativity."
    },
    "Virtual Board":{
      name:"Virtual Board",
      phone:phoneVB,
      laptop:laptopVB,
      tablet:tabletVB,
      desc:"Paint has been brought to life with this AI Model, which lets you paint without touching the system. Just draw in the air and see it on your screen. Shapes, color and width are implemented with an eraser with dominates every line be erasing it."
    },
    "Q/A System":{
      name:"Question-Answer Generator System (from a Paragraph)",
      phone:phoneQA,
      laptop:laptopQA,
      tablet:tabletQA,
      desc:"We just need to upload a big enough paragraph, and this AI-powered site will generate Summary, MCQ's, Fill-ups, etc. I have used MCQ question generation GAN by Ramsri Sir, which is a great tool. You can also try answering the questions on the site itself where it will give the Correct/Wrong response after answering."
    },
    "Gesture Control":{
      name:"Gesture Controller AI (touch-free)",
      phone:phoneGesture,
      laptop:laptopGesture,
      tablet:tabletGesture,
      desc:"The Touchless Gesture Control System is an innovative solution designed to enable users to control devices without the need for physical touch. This system combines OpenCV and LSTM to interpret and respond to hand gestures in real-time. For now, I have trained it for just 5 actions, but it can be made very dynamic for a lot of actions which in turn control the device as trained."
    },
  }


  let [dsa,setDsa]=useState("Sorting Visualizer");
  let [web,setWeb]=useState("Pokemon");
  let [ai,setAi]=useState("Style-Transfer");

  return (
    <div className="projectsOuter">
      <div className="projects-tabs">
        <div className="projects-header">
          <div className="active">
          <i className="fa-solid fa-cart-shopping"></i>
            DSA
          </div>
          <div>
          <i className="fa-solid fa-user-nurse"></i>
            Web Dev
          </div>
          <div>
          <i className="fa-solid fa-clipboard-question"></i>
            ML/DL
          </div>
        </div>
        <div className="project-indicator"></div>
        <div className="projects-content">
          <div className="text-white active2">
          <div class="dropdown">
            <button class="dropbtn">{dsa} ˅</button>
            <div class="dropdown-content">
              <button class="dropopt" onClick={(e)=>{setDsa("Sorting Visualizer")}}>Sorting Visualizer</button>
              <button class="dropopt" onClick={(e)=>{setDsa("Cash-Flow Minimiser")}}>Cash-FLow Minimiser</button>
              <button class="dropopt" onClick={(e)=>{setDsa("Sudoku Solver")}}>Sudoku Solver</button>
              <button class="dropopt" onClick={(e)=>{setDsa("Text-Modifier")}}>Text-Modifier</button>
            </div>
          </div>
            <h2>
              {dataset[dsa].name}
            </h2>
            <div className="devicesDiv">
              <div className="phoneDiv">
                <Phone image={dataset[dsa].phone} />
              </div>
              <div className="laptopDiv">
                <Laptop image={dataset[dsa].laptop} />
              </div>
              <div className="tabletDiv">
                <Tablet image={dataset[dsa].tablet} />
              </div>
            </div>
            <div className="textProjects">
              <p>
              {dataset[dsa].desc}
              </p>
            </div>
          </div>
          <div className="text-white">
          <div class="dropdown">
            <button class="dropbtn">{web} ˅</button>
            <div class="dropdown-content">
              <button class="dropopt" onClick={(e)=>{setWeb("Pokemon")}}>Pokemon</button>
              <button class="dropopt" onClick={(e)=>{setWeb("Unit-Convertor")}}>Unit-Convertor</button>
              <button class="dropopt" onClick={(e)=>{setWeb("E-Commerce")}}>E-Commerce</button>
              <button class="dropopt" onClick={(e)=>{setWeb("Pic-Text")}}>Pic-Text</button>
            </div>
          </div>
            <h2>
            {dataset[web].name}
            </h2>
            <div className="devicesDiv">
              <div className="phoneDiv">
                <Phone image={dataset[web].phone} />
              </div>
              <div className="laptopDiv">
                <Laptop image={dataset[web].laptop} />
              </div>
              <div className="tabletDiv">
                <Tablet image={dataset[web].tablet} />
              </div>
            </div>
            <div className="textProjects">
              <p>
              {dataset[web].desc}
              </p>
            </div>
          </div>
          <div className="text-white">
          <div class="dropdown">
            <button class="dropbtn">{ai} ˅</button>
            <div class="dropdown-content">
              <button class="dropopt" onClick={(e)=>{setAi("Style-Transfer")}}>Style-Transfer</button>
              <button class="dropopt" onClick={(e)=>{setAi("Virtual Board")}}>Virtual Board</button>
              <button class="dropopt" onClick={(e)=>{setAi("Q/A System")}}>Q/A System</button>
              <button class="dropopt" onClick={(e)=>{setAi("Gesture Control")}}>Gesture Control</button>
            </div>
          </div>
            <h2>
              {dataset[ai].name}
            </h2>
            <div className="devicesDiv">
              <div className="phoneDiv">
                <Phone image={dataset[ai].phone} />
              </div>
              <div className="laptopDiv">
                <Laptop image={dataset[ai].laptop} />
              </div>
              <div className="tabletDiv">
                <Tablet image={dataset[ai].tablet} />
              </div>
            </div>
            <div className="textProjects">
              <p>
                {dataset[ai].desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
