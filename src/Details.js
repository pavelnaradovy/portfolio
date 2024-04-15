// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import saga from "./assets/techstack/saga.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import thunk from "./assets/techstack/thunk.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.png";
import projectImage4 from "./assets/projects/project4.png";
import projectImage5 from "./assets/projects/project5.png";
import projectImage6 from "./assets/projects/project6.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Pavel Naradovy",
  tagline: "I'm Software Engineer",
  img: profile,
  about: `Hi, I'm Pavel, a web developer based in Kyiv. I hold a bachelor's degree in computer science and have over four years of professional experience. My career started with one year in embedded development, followed by three years as a JavaScript developer. I've worked on various projects, including booking systems, media storage, and social networks, etc.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/pavlo-naradovy-6926811b1/",
  github: "https://github.com/pavelnaradovy",
  // twitter: "https://twitter.com/",
  // instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Web Developer (Junior ->  Senior Software Engineer)",
    Company: `Viaduct`,
    Location: "Ukraine, Kyiv",
    Type: "Full Time / Part Time",
    Duration: "Feb 2021 - Present",
  },
  {
    Position: "Junior C/C++ developer",
    Company: `Scarosy`,
    Location: "Ukraine, Kyiv",
    Type: "Full Time",
    Duration: "Jul 2018 - Dec 2019",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor in Computer Science (Software Development)",
    Company: `National Academy of personnel management`,
    Location: "Kyiv, Ukraine",
    Type: "Full Time",
    Duration: "Aug 2016 - Aug 2020",
  },
  {
    Position: "Kyiv Technical College of Electronic Devices",
    Company: "KTEP",
    Location: "Kyiv, Ukraine",
    Type: "Full-time",
    Duration: "Sep 2011 - Jul 2015",
  },
  {
    Position: "HTML CSS Pascal Dreamweaver MS Office",
    Company: "Extra lessons after school",
    Location: "Kyiv, Ukraine",
    Type: "5-10h for week",
    Duration: "Jan 2008 - Feb 2010",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  saga: saga,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  thunk: thunk,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Kidas Dashboard",
    image: projectImage6,
    description: `React dashboard inside WordPress.`,
    techstack: "HTML/CSS, JavaScript, React , SCSS",
    previewLink: "https://getkidas.com/",
    // githubLink: "https://github.com",
  },
  {
    title: "Medialove",
    image: projectImage5,
    description: `Project based system which allows subscribers to store, review, organize media content. Creating decks from media content. Share files, projects, decks, castings, locations`,
    techstack: "HTML/CSS, JavaScript, React, Redux-Saga",
    // previewLink: "https://google.com",
    // githubLink: "https://github.com",
  },
  {
    title: "Office exchange",
    image: projectImage4,
    description: `Booking - appartment, office, co-working`,
    techstack: "HTML/CSS, JavaScript, React, Redux-Saga",
    // previewLink: "https://google.com",
    // githubLink: "https://github.com",
  },
  {
    title: "StoryLine",
    image: projectImage3,
    description: `Create an event and share it with your friends and family
    What is an event? Let’s say you had a birthday - this is an event, and you invited friends to it, and after a fun event, there are a lot of memories in a photo and video format. Storyline helps users share media memories in events by posting photos and videos of each other, as well as commenting them.`,
    techstack: "HTML/CSS, JavaScript, React, Redux-Saga",
    // previewLink: "https://google.com",
    // githubLink: "https://github.com",
  },
  {
    title: "Unifai",
    image: projectImage2,
    description: `Messaging applications are very convenient, practical, and ideal for internal corporate correspondence. They are the perfect way to bring all team together, and have become one of the most popular media in recent years. Due to their high popularity, many companies and organizations are starting to develop and invest in messaging apps. These are computer programs that people interact with through voice, text or video calls.`,
    techstack: "HTML/SASS, JavaScript, React, Redux-Thunk",
    previewLink: "https://app.unifai.us",
    // githubLink: "https://github.com",
  },

  {
    title: "Vinovest",
    image: projectImage1,
    description: `Have you ever made any investments? And in what? We all got used to the idea to invest our financial resources in bank deposits, stocks, bonds, precious metals, residential and commercial properties. But can you imagine to invest money in wine?`,
    techstack: "HTML/SASS, JavaScript, React, MobX",
    previewLink: "https://www.vinovest.co/",
    // githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "p.naradovy@gmail.com",
  phone: "+38 093 006 07 07",
};
