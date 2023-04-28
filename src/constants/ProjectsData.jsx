
import firstProjectScreen from "../assets/porfolio_screen1.png";
import secondProjectScreen from "../assets/porfolio_screen2.png";
import thirdProjectScreen from "../assets/porfolio_screen3.png";

export const projectsData = {
    screenShot: {
        first: firstProjectScreen,
        second: secondProjectScreen,
        third: thirdProjectScreen
    },
    descriptionMainText: {
        first: "Website developed as a portfolio showcasing the most relevant projects " +
            "that I made. Fully interactive, with customization possibilities, such as " +
            "color selection, dark and light modes, and a way to stop typing animation. " +
            "The project includes a functioning contact form implemented using EmailJS, " +
            "so there is a possibility to contact me directly through this website.",
        second: "",
        third: ""
    },
    descriptionSecondaryText: {
        first: "During development, instead of bootstrap, I used some functionalities provided " +
        "by Mui, such as icons, buttons, and a navigation tab, all of which were customized. " +
        "LazyLoad was used on images to optimize page load times. Most of the remaining " +
        " components were written entirely by me.",
        second: "",
        third: ""
    },
    linkToProject: {
        first: "",
        second: "",
        third: ""
    }
};