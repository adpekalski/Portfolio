import { projectsData } from "../constants/ProjectsData";
import ProjectsDescription from "./Project_Description";

import * as React from 'react';
import { Box } from "@mui/material";
// import LazyLoad from "react-lazy-load";

export default function PortfolioSection() {
    const firstProjectSS = projectsData.screenShot.first;
    const secondProjectSS = projectsData.screenShot.second;
    const thirdProjectSS = projectsData.screenShot.third;
    const projectsArray = [firstProjectSS, secondProjectSS, thirdProjectSS];

    const [currentScreen, changeScreen] = React.useState(0);

    const nextProject = () => {
        currentScreen === projectsArray.length - 1 ? changeScreen(0) : changeScreen(currentScreen + 1);
    }

    const previousProject = () => {
        currentScreen === 0 ? changeScreen(projectsArray.length - 1) : changeScreen(currentScreen - 1);
    }

    return (
        <div className="portfolio">

            <div className="page-title-box">
                <h1 className="page-title">My projects</h1>
            </div>

            <div className="projects-carousel-field">

                <div className="left-button" onClick={previousProject}>
                    <div className="arrow-left"></div>
                </div>

                {/* <LazyLoad> */}
                    <div>
                        <Box className="screenshot-space">

                            {
                                projectsArray.map((item, index) => {
                                    return <div key={index} className="single-screenshot">
                                        <img
                                            style={{ transform: `translate(-${currentScreen * 100}%)` }}
                                            src={item}
                                            alt="Project-Screenshot"
                                        />
                                    </div>
                                })
                            }

                        </Box>
                    </div>
                {/* </LazyLoad> */}

                <div className="right-button" onClick={nextProject}>
                    <div className="arrow-right"></div>
                </div>

            </div>

            <div className="project-description-field">
                <ProjectsDescription
                    currentProjectNum={currentScreen}
                />
            </div>

        </div>
    )
}