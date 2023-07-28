import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  indeed,
  threejs,
  player2,
  brisa,
  lpc,
  niicaz,
  botpravender,
  gifapp,
  weatherapp,
  oldportfolio,
  adss,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "ReactJS Developer",
    icon: creator,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Quality Assurance Analyst",
    company_name: "BRISA",
    icon: brisa,
    iconBg: "white",
    date: "Dec 2014 - Dec 2015",
    points: [
      "Black-box testing for LG's products.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in bug reports and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "ADSS",
    icon: adss,
    iconBg: "#FFFFFF",
    date: "Jan 2016 - Dec 2017",
    points: [
      "Developing and maintaining web and mobile applications using AngularJS and other related technologies.",
      "Developing and maintaining scalable backend for applications using Python, Django, and other related technologies",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Player 2",
    icon: player2,
    iconBg: "#383E56",
    date: "Jun 2020 - Sep 2021",
    points: [
      "Developing and maintaining web applications using React.js, React Native, and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Indeed",
    icon: indeed,
    iconBg: "white",
    date: "Sep 2021 - Dec 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Developing unit test for web applications using JEST and other related technologies",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "Laboratório LPC",
    description:
      "Web and Mobile application for iOS and Android developed while I was working at ADSS. Contains Django Framework, Angular and Ionic Framework.",
    tags: [
      {
        name: "ionic",
        color: "blue-text-gradient",
      },
      {
        name: "angular",
        color: "green-text-gradient",
      },
      {
        name: "django framework",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      }
    ],
    image: lpc,
  },
  {
    name: "Niicaz",
    description:
      "Discontinued Web and Mobile e-commerce application developed when I was working at Player 2. ReactJS and React Native were used.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react native",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      }
    ],
    image: niicaz,
  },
  {
    name: "Bot Pra Vender",
    description:
      "Web application for online sales through WhatsApp developed when I was working at Player 2.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "whatsapp",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: botpravender,
  },
  {
    name: "Gif App",
    description:
      "Simple GIF generator to demonstrate good use of react hooks.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react hooks",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: gifapp,
    source_code_link: "https://github.com/giovannicucchi/gif-app",
  },
  {
    name: "Weather PWA",
    description:
      "Simple Weather Progressive Web Application that allows the user to check the current weather in any city.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react hooks",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: weatherapp,
    source_code_link: "https://github.com/giovannicucchi/pwa-weather-app",
  },
  {
    name: "Old Portfolio",
    description:
      "Before creating this current portfolio I had an older one. Check it out!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: oldportfolio,
    source_code_link: "https://github.com/giovannicucchi/my-portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
