import Portret from "../assets/Pękalski_Adrian_CV_Photo.jpg";

import * as React from 'react';
// import LazyLoad from "react-lazy-load";
import Button from "@mui/material/Button";

export default function HomeSection(props) {
    
    const typingFlag = props.animationState;
    const dynamicClass = typingFlag ? "typed colorful typedOn " : "typed colorful";

    const quoteArray = ["Web Designer", "Software Developer", "Programmer"];
    const quoteLength = quoteArray.length - 1;

    const [typedText, createText] = React.useState("");

    const [deleteFlag, changeDeleteFlag] = React.useState(false);

    const [fullText, changeFullText] = React.useState(quoteArray[quoteLength]);

    const [index, setIndex] = React.useState(0);
    let [whichWord, nextWord] = React.useState(0);

    // is 1000x
    React.useEffect(() => {
        if (index < fullText.length && deleteFlag === false) {
            setTimeout(() => {
                createText(typedText + fullText[index]);
                setIndex(index + 1);
                // WRITE SPEED (120) ↓
            }, 160);
        } else if (index === fullText.length || deleteFlag === true) {

            changeDeleteFlag(true);
            setTimeout(() => {
                createText(typedText.slice(0, -1));
                setIndex(index - 1);
                // DELETE SPEED (120) AND WAIT TIME (3000) BEFORE NEW QUOTE ↓
            }, index < fullText.length ? 80 : 3000);
            if (index === 1) {
                if (whichWord < quoteLength) {
                    nextWord(prev => prev + 1);
                } else {
                    nextWord(0);
                }
                changeFullText(quoteArray[whichWord]);
                createText("");
                setIndex(0);

                changeDeleteFlag(false);
            }
        }
    }, [index]);

    return (
        <div className="home-center">
            <div className="home">

                <div className="introduction-field">
                    <h1>
                        Welcome, my name is
                        <span className="decorative colorful"> Adrian Pękalski</span>
                    </h1>
                    <h2>
                        I am a self-taught
                        <span className={dynamicClass}> {typingFlag ? typedText : quoteArray[0]}</span>
                    </h2>
                    <p className="home-text">
                        A graduate of automation and robotics nominated for the
                        best diploma thesis award. Highly motivated, striving for
                        challenges and continuously working on self-improvement.
                        Looking for an opportunity to gain experience as a web
                        developer by working on my first commercial project.
                        A self-taught programmer who has learned JavaScript, Node.js,
                        and React.js. Currently learning TypeScript.
                    </p>

                    <Button
                        className="more-button"
                        variant="outlined"
                        onClick={() => {
                            props.moreClicked(1);
                        }}
                    >
                        More about me
                    </Button>
                </div>

                <div className="portret-field">
                    <div className="portret-space">
                        <img src={Portret} alt="Portret" className="portret" />
                    </div>
                </div>

            </div>
        </div>

    )
}