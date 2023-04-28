import { projectsData } from "../constants/ProjectsData";

export default function ProjectsDescription(props) {

    const firstProjectDesc = projectsData.descriptionMainText.first;
    const secondProjectDesc = projectsData.descriptionMainText.second;
    const thirdProjectDesc = projectsData.descriptionMainText.third;
    const projectsDescriptionArray = [firstProjectDesc, secondProjectDesc, thirdProjectDesc];

    const firstProjectDescSecondary = projectsData.descriptionSecondaryText.first;
    const secondProjectDescSecondary = projectsData.descriptionSecondaryText.second;
    const thirdProjectDescSecondary = projectsData.descriptionSecondaryText.third;
    const projectsDescriptionArraySecond = [firstProjectDescSecondary,
        secondProjectDescSecondary, thirdProjectDescSecondary];

    return (
        <div>
            <p className="project-description">
                {projectsDescriptionArray[props.currentProjectNum]}
            </p>
            <p className="project-description">
                {projectsDescriptionArraySecond[props.currentProjectNum]}
            </p>
        </div>

    )
}