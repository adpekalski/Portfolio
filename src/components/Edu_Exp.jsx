import { AutoStories } from '@mui/icons-material';
import { EducationCourse, EducationUni, ExperienceRadex, ExperienceSeco } from "../constants/AboutTexts";

export default function EduExpSection(props) {
    return (
        <div className="eduexp">
            <div className='text-fields'>
                <div className="education">
                    <div className="edu-content">
                        <h2>Education</h2>
                        <EducationCourse />
                        <EducationUni />
                    </div>
                </div>

                <div className="experience">
                    <div className="exp-content">
                        <h2>Experience</h2>
                        <ExperienceSeco />
                        <ExperienceRadex />
                    </div>
                </div>
            </div>

            {/* <div className='next-page-eduexp-field'> */}
                <p
                    className='next-page-eduexp colorful'
                    onClick={() => {
                        props.switchPage(0);
                    }}
                >
                    Switch Page <AutoStories className='next-page-icon-eduexp' sx={{ fontSize: 32 }} />
                </p>
            {/* </div> */}

        </div>

    )

}