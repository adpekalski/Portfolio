// change icons <i> to a component with different number and class props

import * as React from 'react';
import { Navigation, AutoStories } from '@mui/icons-material';
// import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export function AboutSkills(props) {
    const [hover, whichHovered] = React.useState(0);
    const skillsArray = ["JavaScript", "React.js", "Node.js", "HTML5", "CSS3", "Bootstrap", "Git", "MongoDB", "Express.js", "Typescript"];

    const lol = "devicon-html5-plain";

    return (
        <div className="skills">
            <p>
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
                <i className="devicon-typescript-plain skill-icon"
                    onMouseEnter={() => {
                        whichHovered(9);
                    }}
                ></i>

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
                <Navigation className={hover === 9 ? 'arrow-icon arrow-slide-left' : 'arrow-icon hidden'} sx={{ fontSize: 32 }} />
            </div>
            <div className='skill-desc'>
                {/* CHOOSE THIS ? */}
                {/* <p className='bolder'>I know how to use <span className='colorful decorative'>{skillsArray[hover]}</span></p> */}
                {/* OR THIS? */}
                <p className='bolder colorful'>{skillsArray[hover]}</p>
            </div>
            <p>
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
                className='next-page colorful'
                onClick={() => {
                    props.switchPage(1);
                }}
            >
                Switch Page <AutoStories className='next-page-icon' sx={{ fontSize: 32 }} />
            </p>
        </div>


    )
}

export function EducationCourse() {
    return (
        <div className="about-field">
            <h3>Self-study adventure</h3>
            <h4>Udemy, YouTube, Websites and Blogs</h4>
            <ul className="edu-list">
                <li>Udemy courses such as:</li>
                <p>The complete 2023 Web Development Bootcamp,
                    10 Projektów w czystym JavaScript, React Front To Back,
                    Understanding TypeScript (currently)</p>
                <li>YouTube materials from channels:</li>
                <p>Kevin Powell, Web Dev Cody, Web Dev Simplified,
                    developedbyed</p>
                <li>Websites and Blogs:</li>
                <p>
                    <a href="https://css-tricks.com/" target="blank">CSS-Tricks, </a>
                    <a href="https://www.joshwcomeau.com/" target="blank">joshwcomeau, </a>
                    <a href="https://freshman.tech/" target="blank">freshman.tech, </a>
                    <a href="https://dev.to/" target="blank">dev.to, </a>
                    <a href="https://stackoverflow.com/" target="blank">stackoverflow, </a>
                    <a href="https://www.w3schools.com/" target="blank">w3schools </a>
                </p>
                <li>And more...</li>
            </ul>
        </div>
    )
}

export function EducationUni() {
    return (
        <div className="about-field">
            <h3>Bachelor of Automation and Robotics</h3>
            <h4>Zachodniopomorski Uniwersytet Technologiczny | 2017 - 2021</h4>
            {/* <p>In addition to many subjects related to automation, I learned:</p> */}
            <ul>
                <li>Basics of C programming</li>
                <li>Basics of C# OOP programming</li>
                <li>Microcontrollers programming</li>
                <li>PLC programming (LAD, FBD, SFC, ST)</li>
                <li>Matlab and Simulink</li>
                <li>Autocad and schematics</li>
            </ul>
        </div>
    )
}

export function ExperienceSeco() {
    return (
        <div className="about-field">
            <h3>Software Developer - Automation Industry</h3>
            <h4>Seco/Warwick | 11.2021 - 01.2023</h4>
            <ul>
                <li>
                    Providing remote support to customers from all over the world (China, USA, Europe)
                </li>
                <li>
                    Programming and working with various client
                    software
                </li>
                <li>
                    Software and user interface development,
                    including making crucial fixes
                </li>
                <li>
                    Simulation and visualization of technological
                    processes
                </li>
            </ul>
        </div>

    )
}

export function ExperienceRadex() {
    return (
        <div className="about-field">
            <h3>Automation Engineer</h3>
            <h4>Radex sp.j. | 07.2020 - 10.2021</h4>
            <ul>
                <li>
                    Working on various engineering documentation
                    and manuals written in Polish and English
                </li>
                <li>
                    Programming electrical devices and developing
                    user interface
                </li>
                <li>
                    Cooperation with many departments and
                    consulting contractors
                </li>
                <li>
                    Designing new software solutions and testing
                </li>

            </ul>
        </div>

    )
}


