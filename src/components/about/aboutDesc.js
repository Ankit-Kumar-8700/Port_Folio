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
                I'm a proactive B.Tech CSE student in my third year. Proficient in the <b>MERN stack</b>, I specialize in full-stack web development. Alongside, I've explored the realms of <b>ML and DL</b>, translating my knowledge into impactful projects. My passion lies in crafting intelligent solutions that address real-world challenges. <b>Adaptable and driven</b>, I'm committed to <b>continuous learning</b>, staying at the forefront of tech trends. Explore my portfolio for a glimpse into my journey—where innovation meets expertise.
            </p>
            <div className='downloadResume'>
            <button>
                <a href='https://drive.google.com/file/d/1JVQEaceQzyNLq3-wyKL8zqOSD0A3zf_5/view?usp=drive_link' target="_blank" rel="noreferrer">
                    Resume
                </a>
            </button>
        </div>
        </div>
    </div>
        
    <Experience />
    <div className="aboutSliderOuter">
    <div className="aboutSlider">
        <Tech icon="fa-brands fa-dev" field="Web Dev" content="Have insights of the amazing MERN Stack. Also have worked on basic level in Flask (Backend) and MySQL(DataBase)." />
        <Tech icon="fa-solid fa-code" field="CP" content="Have knowledge of many algorithms starting from basic Search to advanced Trees and Graphs along with Game Theory and Number Theory." />
        <Tech icon="fa-solid fa-robot" field="AI (ML & DL)" content="Have Deep insights of various topics related to ML & DL. Always have dived deep into the advanced concepts and mathematical point of view of DL, which explains the WHY and HOW of the concepts." />
    </div></div>
    <div className="aboutSliderOuter">
    <div className="aboutSlider">
        <ContactCard link='https://leetcode.com/Ankit_Kumar_8700/' site='LeetCode' points={['1900+ Contest Rating', 'AIR 23 in LeetCode Weekly Contest 337', '500+ Questions Solved']} />
        <ContactCard link='https://www.codingninjas.com/studio/profile/67c08da5-be5f-4ca1-986f-8de3f54fab76' site='Coding Ninjas' points={['2500+ Rating', '1x AIR 1', '4x AIR 2-5']} />
        <ContactCard link='https://www.codechef.com/users/ankit_8700' site='CodeChef' points={['1900+ Max. Contest Rating', '4* Coder']} />
    </div></div>
    </div>
  )
}

export default AboutDesc
