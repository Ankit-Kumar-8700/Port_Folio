import React from 'react';
import './aboutDesc.css';
import contactPic from '../../images/contactPic.png';
import ContactCard from '../contact/contactCard';
import Tech from './tech';
import Experience from '../experience/experience';

function AboutDesc() {
  return (
    <div className="about">
    <div className='aboutDesc'>
        <div className="aboutPic">
            <img src={contactPic} alt="aboutpic.png" />
        </div>
        <div className="aboutText">
            <div className="aboutHead">
                <div className="aboutHeadA">
                    A
                </div>
                <div className="aboutHeadTitle">
                    <div className="aboutMe">
                        bout me :
                    </div>
                    <div className="ankitKumar">
                        nkit...
                    </div>
                </div>
            </div>
            <p className="aboutBody">
                Hello, nice to meet you!<br />
                I'm a proactive M.Tech - CSE student, at <b>IIT Kanpur</b>. Proficient in the <b>MERN stack</b>, I specialize in full-stack web development. Alongside, I've explored the realms of <b>ML and DL</b>, translating my knowledge into impactful projects. My passion lies in crafting intelligent solutions that address real-world challenges. <b>Adaptable and driven</b>, I'm committed to <b>continuous learning</b>, staying at the forefront of tech trends. Explore my portfolio for a glimpse of my journey...
            </p>
            <div className='downloadResume'>
            <button>
                <a href='https://drive.google.com/file/d/1jz7kNq1Q-s9dlCc4DC5zmoVdSKgtpOMM/view?usp=drive_link' target="_blank" rel="noreferrer">
                    Resume
                </a>
            </button>
        </div>
        </div>
    </div>
        
    <Experience />
    <div className="aboutSliderOuter">
    <div className="aboutSlider">
        <Tech icon="fa-brands fa-dev" field="Web Dev" content="Proficient in developing full-stack applications using the MERN stack. Also familiar with backend development using Flask and relational database management with MySQL." />
        <Tech icon="fa-solid fa-code" field="CP" content="Proficient in Data Structures and Algorithms, including advanced topics like trees, graphs, number theory, and game theory, with strong performance in competitive programming." />
        <Tech icon="fa-solid fa-robot" field="AI (ML & DL)" content="Have Deep insights of various topics related to ML & DL. Always have dived deep into the advanced concepts and mathematical point of view of DL, which explains the WHY and HOW of the concepts." />
    </div></div>
    <div className="aboutSliderOuter">
    <div className="aboutSlider">
        <ContactCard link='https://leetcode.com/u/b7d3HcrGsj/' site='LeetCode' points={['2000+ Contest Rating', 'Global 382 in LC Weekly Contest 337', '500+ Questions Solved']} />
        <ContactCard link='https://www.codingninjas.com/studio/profile/67c08da5-be5f-4ca1-986f-8de3f54fab76' site='Coding Ninjas' points={['2500+ Rating', '1x AIR 1', '4x AIR 2-5']} />
        <ContactCard link='https://www.codechef.com/users/ankit_8700' site='CodeChef' points={['1900+ Max. Contest Rating', '4* Coder']} />
    </div></div>
    </div>
  )
}

export default AboutDesc
