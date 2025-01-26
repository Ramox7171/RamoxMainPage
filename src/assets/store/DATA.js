import { v4 as uuidv4 } from "uuid";
import instagram from "../icons/Instagram.png";
import facebook from "../icons/Facebook.png";

// PEOPLE

import people1 from "../img/photos/people/people-1.png";
import people2 from "../img/photos/people/people-2.jpg";
import people3 from "../img/photos/people/people-3.jpg";
import people4 from "../img/photos/people/people-4.jpg";
import people5 from "../img/photos/people/people-5.jpg";
import people6 from "../img/photos/people/people-6.jpg";
import people7 from "../img/photos/people/people-7.jpg";
import people8 from "../img/photos/people/people-8.jpg";
import people9 from "../img/photos/people/people-9.jpg";
import people10 from "../img/photos/people/people-10.jpg";
import people11 from "../img/photos/people/people-11.jpg";
import people12 from "../img/photos/people/people-12.jpg";
//PRODUCT

import product1 from "../img/photos/product/prod-1.jpg";
import product2 from "../img/photos/product/prod-2.jpg";
import product3 from "../img/photos/product/prod-3.jpg";
import product4 from "../img/photos/product/prod-4.jpg";
import product5 from "../img/photos/product/prod-5.jpg";
import product6 from "../img/photos/product/prod-6.jpg";
import product7 from "../img/photos/product/prod-7.jpg";
import product8 from "../img/photos/product/prod-8.jpg";
import product9 from "../img/photos/product/prod-9.jpg";
import product10 from "../img/photos/product/prod-10.jpg";
import product11 from "../img/photos/product/prod-11.jpg";


//AUTOMOTIVE
import auto1 from "../img/photos/automotive/auto-1.jpg";
import auto2 from "../img/photos/automotive/auto-2.jpg";
import auto3 from "../img/photos/automotive/auto-3.jpg";
import auto4 from "../img/photos/automotive/auto-4.jpg";
import auto5 from "../img/photos/automotive/auto-5.jpg";
import auto6 from "../img/photos/automotive/auto-6.jpg";
import auto7 from "../img/photos/automotive/auto-7.jpg";
import auto8 from "../img/photos/automotive/auto-8.jpg";
import auto9 from "../img/photos/automotive/auto-9.jpg";
import auto10 from "../img/photos/automotive/auto-10.jpg";
import auto11 from "../img/photos/automotive/auto-11.jpg";

//ANIMALS
import animal1 from "../img/photos/animals/animal-1.jpg";
import animal2 from "../img/photos/animals/animal-2.jpg";
import animal3 from "../img/photos/animals/animal-3.jpg";
import animal4 from "../img/photos/animals/animal-4.jpg";
import animal5 from "../img/photos/animals/animal-5.jpg";
import animal6 from "../img/photos/animals/animal-6.jpg";
import animal7 from "../img/photos/animals/animal-7.jpg";
import animal8 from "../img/photos/animals/animal-8.jpg";
import animal9 from "../img/photos/animals/animal-9.jpg";
import animal10 from "../img/photos/animals/animal-10.jpg";
import animal11 from "../img/photos/animals/animal-11.jpg";
import animal12 from "../img/photos/animals/animal-12.jpg";




export const lorem =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam impedit, error ad at aspernatur atque tempora aut adipisci omnis eveniet expedita aliquid deserunt, totam libero eligendi provident? Distinctio, ab fuga.";
export const PROJECTS = [
  {
    id: uuidv4(),
    imgSrc: "/img/qr-card.png",
    title: "QR generator",
    description:"This project is a QR Code Generator built using React and TypeScript. It allows users to input a URL, generate a QR code, and download it as a PNG file. The app uses the qrcode library to generate QR codes and is styled using SCSS for a clean and responsive user interface.",
    stack: ["React", "Vite.js", "TypeScript", "CSS/SCSS"],
    live: "https://www.google.pl",
    github: "https://github.com/Ramox7171/qrgenerator",
  },{
    id: uuidv4(),
    imgSrc: "/img/hood-card.png",
    title: "The Hood Project",
    description:
      "Project The Hood revitalizes the MTA game mod for GTA San Andreas. In collaboration with other developers and fans of this classic title, I create graphical interfaces for a custom server system. The project is centered around roleplay gameplay, where players immerse themselves in the server's life by portraying characters they've imagined, all within a unique district-based system.",
    stack: ["React", "Vite.js", "TypeScript", "CSS/SCSS"],
    live: "https://qrgenerator-f6t8du4d2-ramox7171s-projects.vercel.app/",
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
    id: uuidv4(),
    title: "Hetman-Sunset",
    img: animal1,
    description: "Hetman at Sunset",
    category: "animals",
  },
  {
    id: uuidv4(),
    title: "Hetman with flowers",
    img: animal12,
    description: "Hetman with flowers",
    category: "animals",
  },
  {
    id: uuidv4(),
    title: "Orkan at Moutain of Sand ",
    img: animal11,
    description: "Orkan at Moutain of Sand",
    category: "animals",
  },
  {
    id: uuidv4(),
    title: "Orkan with white flowers ",
    img: animal10,
    description: "Orkan with white flowers",
    category: "animals",
  },
  {
    id: uuidv4(),
    title: "Shema with stick ",
    img: animal9,
    description: "Shema with stick",
    category: "animals",
  },
  {
    id: uuidv4(),
    title: "Lucas in Park ",
    img: animal8,
    description: "Lucas in Park",
    category: "animals",
  },
  {
    id: uuidv4(),
    title: "Luna catching treat ",
    img: animal7,
    description: "Luna catching treat",
    category: "animals",
  },
  {
    id: uuidv4(),
    title: "Happy Chilla ",
    img: animal6,
    description: "Happy Chilla",
    category: "animals",
  },
  {
    id: uuidv4(),
    title: "Fanta at field ",
    img: animal5,
    description: "Fanta at field",
    category: "animals",
  },
  {
    id: uuidv4(),
    title: "Abra eyes",
    img: animal4,
    description: "Abra eyes",
    category: "animals",
  },
  {
    id: uuidv4(),
    title: "Hetman running",
    img: animal3,
    description: "Hetman running",
    category: "animals",
  },
  {
    id: uuidv4(),
    title: "Small Hetman with Snuffle Mat",
    img: animal2,
    description: "Small Hetman with Snuffle Mat",
    category: "animals",
  },
  {
    id: uuidv4(),
    title: "Indian Motorcycle",
    img: auto1,
    description: "Beautiful Indian",
    category: "automotive",
  },
  {
    id: uuidv4(),
    title: "370 Nismo Back",
    img: auto2,
    description: "Beautiful Nissan 370Z Nismo at night.",
    category: "automotive",
  },
  {
    id: uuidv4(),
    title: "Golf Mk IV Front",
    img: auto3,
    description: "Just Humble VAG",
    category: "automotive",
  },
  {
    id: uuidv4(),
    title: "Nismo Eye",
    img: auto4,
    description: "Beautiful Nissan 370Z Nismo headlight",
    category: "automotive",
  },
  {
    id: uuidv4(),
    title: "Mercedes Odometer",
    img: auto5,
    description: "Mercedes Odometer - nothing more",
    category: "automotive",
  },
  {
    id: uuidv4(),
    title: "E36 Odo",
    img: auto6,
    description: "E36 Odometer",
    category: "automotive",
  },
  {
    id: uuidv4(),
    title: "E36 Dakargelb back",
    img: auto7,
    description: "E36 Dakargelb back.",
    category: "automotive",
  },
  {
    id: uuidv4(),
    title: "E36 Dakargelb Front",
    img: auto8,
    description: "E36 Dakargelb Front ",
    category: "automotive",
  },
  {
    id: uuidv4(),
    title: "Nismo at sun",
    img: auto9,
    description: "Nismo at sun ",
    category: "automotive",
  },
  {
    id: uuidv4(),
    title: "Subaru Odometer",
    img: auto10,
    description: "Subaru Odometer",
    category: "automotive",
  },
  {
    id: uuidv4(),
    title: "911 front",
    img: auto11,
    description: "Just White 911 at Łódź Autodrome ",
    category: "automotive",
  },
  {
    id: uuidv4(),
    title: "Unicorn",
    img: people1,
    description: "UV Makeup. Mod. Nikola Cirocka MUA: Adrianna Talkowska",
    category: "people",
  },
  {
    id: uuidv4(),
    title:"Just Smile",
    img: people2,
    description: "Mod. Magda Rząp",
    category: "people",
  },
  {
    id: uuidv4(),
    title:"Black with RED",
    img: people3,
    description: "Mod. Natalia Sulak, MUA: Marta Balbuza",
    category: "people",
  },
  {
    id: uuidv4(),
    title:"Black Swan",
    img: people4,
    description: "Mod. Anita Sawicka, MUA: Marta Balbuza",
    category: "people",
  },
  {
    id: uuidv4(),
    title:"Black flower",
    img: people5,
    description: "Mod. Roksana Korzeniowska , MUA: Marta Balbuza",
    category: "people",
  },
  {
    id: uuidv4(),
    title:"Black Swan II",
    img: people6,
    description: "Mod. Anita Sawicka, MUA: Marta Balbuza",
    category: "people",
  },
  {
    id: uuidv4(),
    title:"Concept Glamour",
    img: people7,
    description: "Mod. Anita Sawicka, MUA: Marta Balbuza",
    category: "people",
  },
  {
    id: uuidv4(),
    title:"Clean Beauty",
    img: people8,
    description: "Mod. Anna Wiktorowska MUA: Marta Balbuza ",
    category: "people",
  },
  {
    id: uuidv4(),
    title:"Clean Beauty",
    img: people9,
    description: "Mod. Anna Wiktorowska MUA: Marta Balbuza ",
    category: "people",
  },
  {
    id: uuidv4(),
    title:"Color Rain",
    img: people10,
    description: "Mod.Roksana Sawicka, MUA: Adrianna Talkowska ",
    category: "people",
  },
  {
    id: uuidv4(),
    title:"Elegant",
    img: people11,
    description: "Mod. Dominika Tomaszewska MUA: Kinga Warakomska ",
    category: "people",
  },
  {
    id: uuidv4(),
    title:"Just Beauty",
    img: people12,
    description: "Mod. Ola Przywitowska MUA: Marta Balbuza ",
    category: "people",
  },
  {
    id: uuidv4(),
    title:"Heineken",
    img: product1,
    description: "Improvised staged photo",
    category: "product",
  },
  {
    id: uuidv4(),
    title:"Yellow Bulb",
    img: product2,
    description: "Yellow Bulb with water",
    category: "product",
  },
  {
    id: uuidv4(),
    title:"Kong Strong ",
    img: product3,
    description: "Testing new set",
    category: "product",
  },
  {
    id: uuidv4(),
    title:"Flower",
    img: product4,
    description: "Minimalism",
    category: "product",
  },
  {
    id: uuidv4(),
    title:"Razor",
    img: product5,
    description: "Colorful shot",
    category: "product",
  },
  {
    id: uuidv4(),
    title:"Merlin Steak",
    img: product6,
    description: "From favorite Steakhouse",
    category: "product",
  },
  {
    id: uuidv4(),
    title:"Coffe World",
    img: product7,
    description: "...",
    category: "product",
  },
  {
    id: uuidv4(),
    title:"Sand Sand Sand",
    img: product8,
    description: "Testing harsh light.",
    category: "product",
  },
  {
    id: uuidv4(),
    title:"Part of Zitrone",
    img: product9,
    description: "WTF",
    category: "product",
  },
  {
    id: uuidv4(),
    title:"Icy Ice",
    img: product10,
    description: "As you see",
    category: "product",
  },
  {
    id: uuidv4(),
    title:"5D Mark IV",
    img: product11,
    description: "Just camera",
    category: "product",
  },


];
