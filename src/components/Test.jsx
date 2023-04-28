import Button from "@mui/material/Button";

import CV from "../assets/Pękalski_Adrian_CV.pdf";
import { AboutSkills } from "../constants/AboutTexts";

export default function AboutSection(props) {
    return (
        <div className="test-about">

            <div className="test-page-title-box">
                <h1 className="test-page-title">About me</h1>
            </div>

            <div className="test-button-box">

                <div className="test-cv-button-field">
                    <a href={CV} download="Pękalski_Adrian_CV.pdf">
                        <Button
                            className="test-cv-button"
                            variant="outlined"
                        >
                            Download CV
                        </Button>
                    </a>
                </div>

                <div className="test-contact-button-field">

                    <Button
                        className="test-contact-button"
                        variant="outlined"
                        onClick={() => {
                            props.contactClicked(4);
                        }}
                    >
                        Contact me
                    </Button>

                </div>

            </div>

            <AboutSkills />

        </div>
    )
}