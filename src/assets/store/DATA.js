import { v4 as uuidv4 } from "uuid";
import instagram from "../icons/Instagram.png";
import facebook from "../icons/Facebook.png";

import img1 from "../img/photos/portrait/1.jpg";
import img2 from "../img/photos/portrait/2.jpg";
import img3 from "../img/photos/portrait/3.jpg";
import img4 from "../img/photos/portrait/4.jpg";
import img5 from "../img/photos/portrait/5.jpg";
import img6 from "../img/photos/portrait/6.jpg";
import img7 from "../img/photos/portrait/7.jpg";
import img8 from "../img/photos/portrait/8.jpg";
import img9 from "../img/photos/portrait/9.jpg";
import img10 from "../img/photos/portrait/10.jpg";

export const lorem =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam impedit, error ad at aspernatur atque tempora aut adipisci omnis eveniet expedita aliquid deserunt, totam libero eligendi provident? Distinctio, ab fuga.";
export const PROJECTS = [
  {
    id: uuidv4(),
    imgSrc: "/img/hood-card.png",
    title: "The Hood Project",
    description:
      "Project The Hood revitalizes the MTA game mod for GTA San Andreas. In collaboration with other developers and fans of this classic title, I create graphical interfaces for a custom server system. The project is centered around roleplay gameplay, where players immerse themselves in the server's life by portraying characters they've imagined, all within a unique district-based system.",
    stack: ["React", "Vite.js", "TypeScript", "CSS/SCSS"],
    live: "https://www.google.pl",
    github: "https://www.git.com",
  },
  {
    id: uuidv4(),
    imgSrc: "/img/quiz.png",
    title: "Roleplay Quiz",
    description: "Quiz App is an interactive quiz application built with React. It was created to verify the knowledge of players on the GTA San Andreas Roleplay server, but you can integrate any question source you like.",
    stack: ["JavaScript", "React.JS", "UUIDv4", "CSS/SCSS", "ADOBE PHOTOSHOP"],
    live: "https://hood-quiz.vercel.app/",
    github: "https://github.com/Ramox7171/roleplay-quiz",
  },{
    id: uuidv4(),
    imgSrc: "/img/website-card.png",
    title: "Personal Website",
    description: "A personal website project showcasing information about my work as a developer. The design evolves with me, incorporating various technologies, and includes a hidden link to my photography portfolio. Try to find it :)",
    stack: ["JavaScript", "React.JS", "React Router", "FRAMER MOTION", "CSS/SCSS", "EMAIL.JS", "ADOBE PHOTOSHOP"],
    live: "www.google.pl",
    github: "www.git.com",
  },
  {
    id: uuidv4(),
    imgSrc: "/img/rsp-card.png",
    title: "RSP Console",
    description: "This is a simple yet fun project developed while I was learning JavaScript in November 2023. The game mimics a classic handheld console experience, where you can play the iconic Rock, Paper, Scissors game.",
    stack: ["JavaScript", "HTML", "CSS/SCSS"],
    live: "https://ramox-rsp-game.vercel.app",
    github: "https://github.com/Ramox7171/Ramox-RSP-Game",
  },
  {
    id: uuidv4(),
    imgSrc: "/img/calc-card.png",
    title: "Retro Calculator",
    description:
      " This is a web-based calculator with a delightful retro design reminiscent of old-school displays. It features animated buttons and a stylish interface to make calculations enjoyable. Note: This project was created at the very beginning of my journey with JavaScript.",
    stack: ["JavaScript", "HTML", "CSS"],
    live: "https://ramox-retro-calc.vercel.app",
    github: "https://github.com/Ramox7171/Ramox-Retro-Calc",
  },
];

export const SKILLS = [
  {
    id: (Math.random() * 100) / 2,
    skill: "JavaScript",
  },
  {
    id: (Math.random() * 100) / 2,
    skill: "React.js",
  },
  {
    id: (Math.random() * 100) / 2,
    skill: "Vite.js",
  },
  {
    id: (Math.random() * 100) / 2,
    skill: "TypeScript",
  },
  {
    id: (Math.random() * 100) / 2,
    skill: "Node.js",
  },
  {
    id: (Math.random() * 100) / 2,
    skill: "Webpack",
  },
  {
    id: (Math.random() * 100) / 2,
    skill: "REST API",
  },
  {
    id: (Math.random() * 100) / 2,
    skill: "HTML",
  },

  {
    id: (Math.random() * 100) / 2,
    skill: "SCSS/CSS",
  },
  {
    id: (Math.random() * 100) / 2,
    skill: "Tailwind CSS",
  },
  {
    id: (Math.random() * 100) / 2,
    skill: "Photoshop",
  },
];

export const contactText =
  "Old school, huh? Personally, I would prefer if you contacted me on one of the platforms available above this paragraph, in the top right corner, or in the About tab. However, if you really want to send me an email from here, you can use the form below. The truth is, it only exists here as a proof of concept.";

export const bioText =
  "I am an experienced professional with a diverse technical background, including roles as a computer technician, Delphi developer, and technical support specialist. Currently, I am passionately returning to programming as a FrontEnd Developer, dedicating every free moment to exploring the vast world of JavaScript.I possess excellent communication skills, the ability to work well in a team, and a high level of professionalism. I am punctual, goal-oriented, and ready for new challenges as a Frontend Developer.";

export const homepageText = `Maybe I'm not a full-stack developer yet, but I'm always stack-ing up nicely.`;
export const photoAboutText = `
I embarked on my photography journey in 2016, dedicating every spare moment to a long-hidden passion that had always been a part of me. With enthusiasm, I explored various fields of photography – from portrait and beauty to product and automotive – delving into the many facets of commercial photography.

Over the years, I collaborated with private companies, modeling agencies, and individual clients. My work has been featured in fashion magazines promoting young creators and the next generation of artists. For a time, I also specialized in kink (intimate) photography, producing both photographic and video content for subscription-based platforms.

However, the relentless pace of new challenges and the demand to constantly present oneself on social media led me to shift photography back to a personal passion. I’ve never been someone who enjoys maintaining a constant online presence; instead, I’ve always seen myself as someone who simply gets the job done without seeking unnecessary publicity.

I’ve also had the privilege of mentoring a few photographers who have gone on to become remarkable specialists in their respective fields.

So, if you'd like me to capture something special for you, feel free to get in touch.
`;

// 'Coding with curiosity, creating with conviction, and moving forward with sheer will, unwavering commitment, and intense focus—one line at a time.'

export const links = [
  { name: "Instagram", url: "https://www.instagram.com/ra.mox", icon: instagram },
  { name: "Facebook", url: "https://www.facebook.com/ramoxpl", icon: facebook },
];

export const photos = [
  {
    id: 1,
    title: "studio1",
    img: img1,
    description: "Zdjęcie studyjne 1",
    category: "people",
  },
  {
    id: 2,
    title: "studio2",
    img: img2,
    description: "Zdjęcie studyjne 2",
    category: "people",
  },
  {
    id: 3,
    title: "studio3",
    img: img3,
    description: "Zdjęcie studyjne 3",
    category: "people",
  },
  {
    id: 4,
    title: "studio4",
    img: img4,
    description: "Zdjęcie studyjne 4",
    category: "people",
  },
  {
    id: 5,
    title: "studio5",
    img: img5,
    description: "Zdjęcie studyjne 5",
    category: "people",
  },
  {
    id: 6,
    title: "studio6",
    img: img6,
    description: "Zdjęcie studyjne 6",
    category: "people",
  },
  {
    id: 7,
    title: "studio7",
    img: img7,
    description: "Zdjęcie studyjne 7",
    category: "people",
  },
  {
    id: 8,
    title: "studio8",
    img: img8,
    description: "Zdjęcie studyjne 8",
    category: "people",
  },
  {
    id: 9,
    title: "studio9",
    img: img9,
    description: "Zdjęcie studyjne 9",
    category: "people",
  },
  {
    id: 10,
    title: "studio10",
    img: img10,
    description: "Zdjęcie studyjne 10",
    category: "people",
  },
];
