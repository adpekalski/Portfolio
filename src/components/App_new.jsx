
// to change to one scroll at a time

import HomeSection from './Home';
import AboutSection from './About';
import EduExpSection from './Edu_Exp';
import PortfolioSection from './Portfolio';
import ContactSection from './Contact';
import { lightColors, darkColors } from '../constants/Colors';

import * as React from 'react';
import Box from '@mui/material/Box';
// import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { DarkMode, LightMode, Brush, PlayCircle, PauseCircle, Circle } from '@mui/icons-material';

export default function App() {

    const rootStyles = document.querySelector(":root");
    const rootColors = window.getComputedStyle(rootStyles);
    const stylesFirstColor = rootColors.getPropertyValue("--first-color");
    const stylesSecondColor = rootColors.getPropertyValue("--second-color");
    const stylesThirdColor = rootColors.getPropertyValue("--third-color");
    const stylesFourthColor = rootColors.getPropertyValue("--fourth-color");
    const stylesFifthColor = rootColors.getPropertyValue("--fifth-color");
    const stylesSixthColor = rootColors.getPropertyValue("--sixth-color");

    // default - 0 ↓
    const [value, chooseValue] = React.useState(1);
    const [whatPage, switchPage] = React.useState(0);
    // default - true ↓
    const [animationButton, changeAnimation] = React.useState(true);
    const [modeButton, changeMode] = React.useState(true);
    // default - false ↓
    const [colorButton, openColorMenu] = React.useState(false);
    // default - stylesFourthColor ↓
    const [choosenColor, memberColor] = React.useState(stylesFourthColor);

    const webPartArray = [
        <HomeSection
            moreClicked={chooseValue}
            animationState={animationButton}
        />,
        whatPage === 0 ?
            <AboutSection
                contactClicked={chooseValue}
                switchPage={switchPage}
            />
            :
            <EduExpSection
                switchPage={switchPage}
            />,
        <PortfolioSection

        />,
        <ContactSection
            isContact={value}
        />,
    ];

    const modeColorBackground = modeButton ? darkColors.background : lightColors.background;
    const modeColorNavigation = modeButton ? darkColors.boxes : lightColors.boxes;
    const modeColorBorder = modeButton ? darkColors.borders : lightColors.borders;
    const modeColorText = modeButton ? darkColors.texts : lightColors.texts;

    const stylesDOM = document.documentElement.style;

    stylesDOM.setProperty("--default-element", choosenColor);
    stylesDOM.setProperty("--default-background", modeColorBackground);
    stylesDOM.setProperty("--default-text", modeColorText);
    stylesDOM.setProperty("--default-boxes", modeColorNavigation);
    stylesDOM.setProperty("--default-border", modeColorBorder);

    const handleScroll = React.useCallback((e) => {
        if (e.deltaY < 0) {
            // chooseValue(value - 1)
            value === 0 ? chooseValue(webPartArray.length - 1) : chooseValue(value - 1);
        } else if (e.deltaY > 0) {
            // chooseValue(value + 1);
            value === webPartArray.length - 1 ? chooseValue(0) : chooseValue(value + 1);
        }
    }, [value, webPartArray.length]);

    React.useEffect(() => {
        window.addEventListener("wheel", handleScroll);
        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, [handleScroll]);

    return (
        <div className='box-for-all'>

            <div className='left-panel'>

                <div className='left-line-through'>

                    <div className='click-me-text'>
                        <p>OR CLICK IT</p>
                    </div>

                    <div className='vertical-center'>

                        <div
                            className={
                                value === 0 ?
                                    'scroll-single-button colorful-bck'
                                    : 'scroll-single-button darker'
                            }
                            onClick={() => {
                                chooseValue(0);
                            }}
                        ></div>

                        <div
                            className={
                                value === 1 ?
                                    'scroll-single-button colorful-bck'
                                    : 'scroll-single-button darker'
                            }
                            onClick={() => {
                                chooseValue(1);
                            }}
                        ></div>

                        <div
                            className={
                                value === 2 ?
                                    'scroll-single-button colorful-bck'
                                    : 'scroll-single-button darker'
                            }
                            onClick={() => {
                                chooseValue(2);
                            }}
                        ></div>

                        <div
                            className={
                                value === 3 ?
                                    'scroll-single-button colorful-bck'
                                    : 'scroll-single-button darker'
                            }
                            onClick={() => {
                                chooseValue(3);
                            }}
                        ></div>

                    </div>

                    <div className='scroll-me-text'>
                        <p>SCROLL ME</p>
                    </div>

                </div>

            </div>

            <div className="web-part-container">
                {
                    webPartArray.map((item, index) => {
                        return <div
                            key={index}
                            className='web-part-content'
                            style={{ transform: `translateY(-${value * 100}%)` }}
                        >
                            {item}
                        </div>

                    })
                }
            </div>

            <div className='right-panel'>
                <Box className="icon-box">

                    <IconButton
                        className="sticky-button"
                        onClick={() => {
                            changeMode(prev => !prev);
                        }}
                    >
                        {modeButton ? <LightMode className='icon' /> : <DarkMode className='icon' />}
                    </IconButton>
                    <IconButton
                        className='sticky-button'
                        onClick={() => {
                            changeAnimation(prev => !prev);
                        }}
                    >
                        {animationButton ? <PauseCircle className='icon' /> : <PlayCircle className='icon' />}

                    </IconButton>
                    <IconButton
                        className="sticky-button"
                        onClick={() => {
                            openColorMenu(prev => !prev);
                        }}
                    >
                        <Brush className='icon' />
                    </IconButton>

                </Box>
                <Box className={colorButton ? "colors-box display-flex" : "colors-box display-none"}>

                    <IconButton
                        className='first-dot-field'
                        onClick={() => {
                            memberColor(stylesFirstColor);
                        }}
                    >
                        <Circle className='first-dot' />
                    </IconButton>

                    <IconButton
                        className='second-dot-field'
                        onClick={() => {
                            memberColor(stylesSecondColor);
                        }}
                    >
                        <Circle className='second-dot' />
                    </IconButton>

                    <IconButton
                        className='third-dot-field'
                        onClick={() => {
                            memberColor(stylesThirdColor);
                        }}
                    >
                        <Circle className='third-dot' />
                    </IconButton>

                    <IconButton
                        className='fourth-dot-field'
                        onClick={() => {
                            memberColor(stylesFourthColor);
                        }}
                    >
                        <Circle className='fourth-dot' />
                    </IconButton>

                    <IconButton
                        className='fifth-dot-field'
                        onClick={() => {
                            memberColor(stylesFifthColor);
                        }}
                    >
                        <Circle className='fifth-dot' />
                    </IconButton>

                    <IconButton
                        className='sixth-dot-field'
                        onClick={() => {
                            memberColor(stylesSixthColor);
                        }}
                    >
                        <Circle className='sixth-dot' />
                    </IconButton>

                </Box>
            </div>

        </div>


    );
}