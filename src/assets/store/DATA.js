import { v4 as uuidv4 } from 'uuid';
import instagram from '../icons/Instagram.png';
import facebook from '../icons/Facebook.png';
export const PROJECTS = [
    
    {
      id: uuidv4(),
      imgSrc:  '/img/hood-card.png',
      title: 'The Hood Project',
      description: "Project The Hood revitalizes the MTA game mod for GTA San Andreas. In collaboration with other developers and fans of this classic title, I create graphical interfaces for a custom server system. The project is centered around roleplay gameplay, where players immerse themselves in the server's life by portraying characters they've imagined, all within a unique district-based system.",
      stack: ['React', 'Vite.js', 'TypeScript','CSS/SCSS'],
      live: 'https://www.google.pl',
      github: 'https://www.git.com',
    },
    {
      id: uuidv4(),
      imgSrc:  '/img/website-card.png',
      title: 'Personal Website',
      description: 'A personal website project showcasing information about my work as a developer. The design evolves with me, incorporating various technologies, and includes a hidden link to my photography portfolio. Try to find it :)',
      stack: ['JavaScript','React.JS','React Router','FRAMER MOTION','CSS/SCSS','EMAIL.JS','ADOBE PHOTOSHOP'],
      live: 'www.google.pl',
      github: 'www.git.com',
    },
    {
      id: uuidv4(),
      imgSrc:  '/img/rsp-card.png',
      title: 'RSP Console',
      description: 'This is a simple yet fun project developed while I was learning JavaScript in November 2023. The game mimics a classic handheld console experience, where you can play the iconic Rock, Paper, Scissors game.',
      stack: ['JavaScript','HTML','CSS/SCSS'],
      live: 'https://ramox-rsp-game.vercel.app',
      github: 'https://github.com/Ramox7171/Ramox-RSP-Game',
    },
    {
      id: uuidv4(),
      imgSrc:  '/img/calc-card.png',
      title: 'Retro Calculator',
      description: ' This is a web-based calculator with a delightful retro design reminiscent of old-school displays. It features animated buttons and a stylish interface to make calculations enjoyable. Note: This project was created at the very beginning of my journey with JavaScript.',
      stack: ['JavaScript','HTML', 'CSS'],
      live: 'https://ramox-retro-calc.vercel.app',
      github: 'https://github.com/Ramox7171/Ramox-Retro-Calc',
    },
    
  ];

  export const SKILLS = [
    {
      id: (Math.random() *100)/2,
      skill: 'JavaScript',
    },
    {
      id: (Math.random() *100)/2,
      skill: 'React.js',
    },
    {
      id: (Math.random() *100)/2,
      skill: 'Vite.js',
    },
    {
      id: (Math.random() *100)/2,
      skill: 'TypeScript',
    },
    {
      id: (Math.random() *100)/2,
      skill: 'Node.js',
    },
    {
      id: (Math.random() *100)/2,
      skill: 'Webpack',
    },
    {
      id: (Math.random() *100)/2,
      skill: 'REST API',
    },
    {
      id: (Math.random() *100)/2,
      skill: 'HTML',
    },

    {
      id: (Math.random() *100)/2,
      skill: 'SCSS/CSS',
    },
    {
      id: (Math.random() *100)/2,
      skill: 'Tailwind CSS',
    },
    {
      id: (Math.random() *100)/2,
      skill: 'Photoshop',
    },
   
  ]


  export const contactText ='Old school, huh? Personally, I would prefer if you contacted me on one of the platforms available above this paragraph, in the top right corner, or in the About tab. However, if you really want to send me an email from here, you can use the form below. The truth is, it only exists here as a proof of concept.';

  export const bioText =
  'I am an experienced professional with a diverse technical background, including roles as a computer technician, Delphi developer, and technical support specialist. Currently, I am passionately returning to programming as a FrontEnd Developer, dedicating every free moment to exploring the vast world of JavaScript.I possess excellent communication skills, the ability to work well in a team, and a high level of professionalism. I am punctual, goal-oriented, and ready for new challenges as a Frontend Developer.';
  
export const homepageText =`Maybe I'm not a full-stack developer yet, but I'm always stack-ing up nicely.`;

// 'Coding with curiosity, creating with conviction, and moving forward with sheer will, unwavering commitment, and intense focus—one line at a time.'

export const links = [
  {name: 'Instagram', url: 'https://www.instagram.com/ra.mox', icon:instagram},
  {name: 'Facebook', url: 'https://www.facebook.com/ramoxpl', icon:facebook},
]

