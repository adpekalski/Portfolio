// import styled, { css } from 'styled-components'

// sprawdzic w lighthouse

import HomeSection from './Home';
import AboutSection from './About';
import PortfolioSection from './Portfolio';
import ContactSection from './Contact';

import { lightColors, darkColors } from '../constants/Colors';

import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import IconButton from '@mui/material/IconButton';
import { TabPanel, TabContext, TabList } from '@mui/lab';
import { DarkMode, LightMode, Brush, PlayCircle, PauseCircle, Circle } from '@mui/icons-material';

export default function App() {

  // const mediaQuery = window.matchMedia("(max-width: 128px)");

  const rootStyles = document.querySelector(":root");
  const rootColors = window.getComputedStyle(rootStyles);
  const stylesFirstColor = rootColors.getPropertyValue("--first-color");
  const stylesSecondColor = rootColors.getPropertyValue("--second-color");
  const stylesThirdColor = rootColors.getPropertyValue("--third-color");
  const stylesFourthColor = rootColors.getPropertyValue("--fourth-color");
  const stylesFifthColor = rootColors.getPropertyValue("--fifth-color");
  const stylesSixthColor = rootColors.getPropertyValue("--sixth-color");

  // default - "Home"
  const [value, chooseValue] = React.useState("Home");
  const [animationButton, changeAnimation] = React.useState(true);
  // default - true ↓
  const [modeButton, changeMode] = React.useState(true);
  const [colorButton, openColorMenu] = React.useState(false);
  const [choosenColor, memberColor] = React.useState(stylesFourthColor);

  const handleChange = (event) => {
    const newValue = event.nativeEvent.target.innerText;
    chooseValue(newValue);
  }

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

  return (
    <div className="container">
      <TabContext value={value}>

        <Box className='tab-space'>

          <TabList
            className='tab-list'
            orientation="horizontal"
            onChange={handleChange}
            centered
          >
            <Tab
              value="Home"
              label="Home"
            />

            <Tab
              value="About"
              label="About"
            />

            <Tab
              value="Portfolio"
              label="Portfolio"
            />

            <Tab
              value="Contact"
              label="Contact"
            />

          </TabList>

          <Box className={colorButton ? "colors-box" : "colors-box display-none"}>

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
              className="sticky-button"
              onClick={() => {
                openColorMenu(prev => !prev);
              }}
            >
              <Brush className='icon' />
            </IconButton>
            <IconButton
              className='sticky-button'
              onClick={() => {
                changeAnimation(prev => !prev);
              }}
            >
              {animationButton ? <PauseCircle className='icon' /> : <PlayCircle className='icon' />}

            </IconButton>

          </Box>

        </Box>

        <TabPanel className="content" value="Home">
          <HomeSection
            moreClicked={chooseValue}
            animationState={animationButton}
          />
        </TabPanel>

        <TabPanel className="content" value="About">
          <AboutSection
            moreClicked={chooseValue}
          />
        </TabPanel>

        <TabPanel className="content" value="Portfolio">
          <PortfolioSection

          />
        </TabPanel>

        <TabPanel className="content" value="Contact">
          <ContactSection

          />
        </TabPanel>

      </TabContext>
    </div>

  );
}