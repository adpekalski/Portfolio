import Button from "@mui/material/Button";
import { Navigation, AutoStories } from '@mui/icons-material';

import CV from "../assets/Pękalski_Adrian_CV.pdf";
// import { AboutSkills } from "../constants/AboutTexts";

import * as React from 'react';

export default function AboutSection(props) {

    const [hover, whichHovered] = React.useState(0);
    // const skillsArray = ["JavaScript", "React.js", "Node.js", "HTML5", "CSS3", "Bootstrap", "Git", "MongoDB", "Express.js", "Typescript"];
    const skillsArray = ["JavaScript", "React.js", "Node.js", "HTML5", "CSS3", "Bootstrap", "Git", "MongoDB", "Express.js"];
    const lol = "devicon-html5-plain";

    return (
        // <div className="about-center">
        <div className="about">

            <div className="page-title-box">
                <h1 className="page-title">About me</h1>
            </div>

            <div className="button-box">

                <div className="cv-button-field">
                    <a href={CV} download="Pękalski_Adrian_CV.pdf">
                        <Button
                            className="cv-button"
                            variant="outlined"
                        >
                            Download CV
                        </Button>
                    </a>
                </div>

                <div className="contact-button-field">

                    <Button
                        className="contact-button"
                        variant="outlined"
                        onClick={() => {
                            props.contactClicked(3);
                        }}
                    >
                        Contact me
                    </Button>

                </div>

                <div className="next-page-about-mobile-field">

                    <Button
                        className="next-page-button"
                        variant="outlined"
                        onClick={() => {
                            props.switchPage(1);
                        }}
                    >
                        Switch Page
                    </Button>

                </div>

            </div>

            <div className="skills">
                <p className="first-text">
                    During my education, I was interested in coding. As time passed,
                    I wanted more and more to become a web developer.
                    Dissatisfaction and shortage of programming challenges
                    while working as an automation engineer become the final reason
                    to learn. That's how my little but big self-learning
                    journey started.
                    Even though my previous experience and formal education were not
                    strictly related to programming, I will also try to provide insight
                    into useful information in this area.
                    <span className="colorful bolder"> Below I have posted my skills</span>, the development
                    of which has kept me entertained throughout many recent evenings.
                </p>
                <div className="skill-icons-field">
                    <i className="devicon-javascript-plain skill-icon"
                        onMouseEnter={() => {
                            whichHovered(0);
                        }}
                    ></i>
                    <i className="devicon-react-original skill-icon"
                        onMouseEnter={() => {
                            whichHovered(1);
                        }}
                    ></i>
                    <i className="devicon-nodejs-plain skill-icon"
                        onMouseEnter={() => {
                            whichHovered(2);
                        }}
                    ></i>
                    <i className={`skill-icon ${lol}`}
                        onMouseEnter={() => {
                            whichHovered(3);
                        }}
                    ></i>
                    <i className="devicon-css3-plain skill-icon"
                        onMouseEnter={() => {
                            whichHovered(4);
                        }}
                    ></i>
                    <i className="devicon-bootstrap-plain skill-icon"
                        onMouseEnter={() => {
                            whichHovered(5);
                        }}
                    ></i>
                    <i className="devicon-git-plain skill-icon"
                        onMouseEnter={() => {
                            whichHovered(6);
                        }}
                    ></i>
                    <i className="devicon-mongodb-plain skill-icon"
                        onMouseEnter={() => {
                            whichHovered(7);
                        }}
                    ></i>
                    <i className="devicon-express-original skill-icon"
                        onMouseEnter={() => {
                            whichHovered(8);
                        }}
                    ></i>
                    {/* <i className="devicon-typescript-plain skill-icon"
                            onMouseEnter={() => {
                                whichHovered(9);
                            }}
                        ></i> */}

                </div>
                <div className='skill-arrows-field'>
                    <Navigation className={hover === 0 ? 'arrow-icon arrow-slide-left' : 'arrow-icon hidden'} sx={{ fontSize: 32 }} />
                    <Navigation className={hover === 1 ? 'arrow-icon arrow-slide-left' : 'arrow-icon hidden'} sx={{ fontSize: 32 }} />
                    <Navigation className={hover === 2 ? 'arrow-icon arrow-slide-left' : 'arrow-icon hidden'} sx={{ fontSize: 32 }} />
                    <Navigation className={hover === 3 ? 'arrow-icon arrow-slide-left' : 'arrow-icon hidden'} sx={{ fontSize: 32 }} />
                    <Navigation className={hover === 4 ? 'arrow-icon arrow-slide-left' : 'arrow-icon hidden'} sx={{ fontSize: 32 }} />
                    <Navigation className={hover === 5 ? 'arrow-icon arrow-slide-left' : 'arrow-icon hidden'} sx={{ fontSize: 32 }} />
                    <Navigation className={hover === 6 ? 'arrow-icon arrow-slide-left' : 'arrow-icon hidden'} sx={{ fontSize: 32 }} />
                    <Navigation className={hover === 7 ? 'arrow-icon arrow-slide-left' : 'arrow-icon hidden'} sx={{ fontSize: 32 }} />
                    <Navigation className={hover === 8 ? 'arrow-icon arrow-slide-left' : 'arrow-icon hidden'} sx={{ fontSize: 32 }} />
                    {/* <Navigation className={hover === 9 ? 'arrow-icon arrow-slide-left' : 'arrow-icon hidden'} sx={{ fontSize: 32 }} /> */}
                </div>
                <div className='skill-desc'>
                    <p className='bolder colorful'>{skillsArray[hover]}</p>
                </div>
                <p className="additional-text">
                    During my education, I was interested in coding. As time passed,
                    I wanted more and more to become a web developer.
                    Dissatisfaction and shortage of programming challenges
                    while working as an automation engineer become the final reason
                    to learn. That's how my little but big self-learning
                    journey started.
                    Even though my previous experience and formal education were not
                    strictly related to programming, I will also try to provide insight
                    into useful information in this area.
                    <span className="colorful bolder"> Below I have posted my skills</span>, the development
                    of which has kept me entertained throughout many recent evenings. TO CHANGE
                </p>
                <p
                    className='next-page-about colorful'
                    onClick={() => {
                        props.switchPage(1);
                    }}
                >
                    Switch Page <AutoStories className='next-page-icon-about' sx={{ fontSize: 32 }} />
                </p>
            </div>

        </div>
        // </div>
    )
}