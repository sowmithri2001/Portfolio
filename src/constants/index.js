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
  Aakriti,
  Envision,
  CloudE,
  git,
  SIT,
  food,
  sczCollege,
  Robo,
  vivekananda,
  cornerstone,
  password,
  weather,
  Cognitive,
  pvk,
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
    id: "technologies",
    title: "Technologies",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "React & NextJs Developer",
    icon: mobile,
  },
  {
    title: "Backend Expert Developer",
    icon: backend,
  },
  {
    title: "Data Science and Deep Learning self-student",
    icon: creator,
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
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Associate Software Engineer",
    company_name: "Robosoft Technologies PVT LTD, Udupi",
    icon: Robo,
    iconBg: "#D2042D",
    date: "January 2023 - Present",
    points: [
      "Implemented complex user interfaces using advanced HTML, CSS, and JavaScript, typescript techniques.",
      "Identified web based user interactions and developed UI components via React concepts.",
      "Translated designs and wire-frames into high quality code and wrote application interface code following ReactJs workflows.collaborated closely with the back-end development team to ensure that the front-end and back-end components of the application were tightly integrated and worked seamlessly together."
    ],
  },
  {
    title: "Trainee Software Engineer",
    company_name: "Robosoft Technologies PVT LTD, Udupi",
    icon: Robo,
    iconBg: "#D2042D",
    date: "August 2022 - December 2022",
    points: [
      "Implemented complex user interfaces using advanced HTML, CSS, and JavaScript techniques.",
      "Utilized React for frontend web development.",
      "Collaborated on optimizing app performance and enhancing user experience.",
    ],
  },
  {
    title: "Web development Intern",
    company_name: "Cognitive Solutions, Mangalore",
    icon: Cognitive,
    iconBg: "#ffff",
    date: "September 2021 - October 2021",
    points: [
      "LAW PARTNER PORTAL Project",
      "Internship on Web Development using PHP",
      "Languages used: HTML, CSS, PHP",
    ],
  },
  {
    title: "Bachelor of Engineering",
    company_name: "Srinivas Institute of Technology | CGPA : 7.8/10",
    icon: SIT,
    iconBg: "#012f5c",
    date: "2018-2022",
    points: [
    ],
  },
  {
    title: " Class 11th & 12th",
    company_name: "Vivekananda PU college | 74.4/100",
    icon: vivekananda,
    iconBg: "#ffff",
    date: "2016-2018",
    points: [
    ],
  },
  {
    title: "High School",
    company_name: "Prashanthi Vidya Kendra | CGPA : 9.6/10",
    icon: pvk,
    iconBg: "#ffff",
    date: "2015-2016",
    points: [
    ],
  },
];

const educations = [
  {
    title: "Full Stack Web Development Co-op Course",
    company_name: "Cornerstone College - Vancouver, Canada",
    icon: cornerstone,
    iconBg: "#283b8a",
    date: "August 2022 - Present",
    points: [
      "Participated in a rigorous co-op program with a focus on full-stack web development.",
      "Gained expertise in both frontend and backend technologies, including React, Node.js, and databases.",
      "Contributed to real-world projects, practicing software engineering best practices.",
    ],
  },
  {
    title: "Full Stack Web and Mobile Development Course",
    company_name: "Community College - Santa Cruz, Bolivia",
    icon: sczCollege,
    iconBg: "#036838",
    date: "January 2019 - March 2020",
    points: [
      "Studied web and mobile development concepts, including HTML, CSS, JavaScript, and mobile app development.",
      "Worked with various programming languages and frameworks, such as React, React Native, and Node.js.",
      "Developed and deployed web and mobile applications for practical experience.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "Elected as Vice-President if IEI Student Chapter",
    name: "2020-2021",
    company: "Srinivas Institie Of Technology, Valachil",
    image: SIT,
  },
  {
    testimonial:
      "Elected as Cultural Secretary Of College",
    name: "2021-2022",
    company: "Srinivas Institie Of Technology, Valachil",
    image: SIT,
  },
  {
    testimonial:
      "Secured 1st place in Inter-Collegiate Techno-Cultural Event organised by Canara Engineering College, Benjanapadav",
    name: "2020",
    company: "Aakriti",
    image: Aakriti,
  },
  {
    testimonial:
      "Secured 1st place in Inter-Collegiate Techno-Cultural Event organised by Srinivas Institie Of Technology, Valachil",
    name: "2020",
    company: "Envision",
    image: Envision,
    CloudE,
  },
  {
    testimonial:
      "Secured 1st place in C Programming Puzzles organized by CloudE",
    name: "2019",
    company: "CloudE",
    image: CloudE,
  },
];

const projects = [
  {
    name: "Password Manager",
    description:
      "A stand-alone system, which stores password for different websites.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "text-green-600",
      },
      {
        name: "React JS",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "text-blue-600",
      },
    ],
    image: password,
    source_code_link: "https://github.com/sowmithri2001/password_manager",
  },
  {
    name: "Weather-app",
    description:
      "Open Weather Map API to get weather data of any city searched by the user. All the recent searches and favorite city details are stored to enhance the user experience",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "text-green-600",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "text-yellow-500",
      },
      {
        name: "Redux",
        color: "text-purple-500",
      },
      {
        name: "material-UI",
        color: "text-yellow-500",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/sowmithri2001/weather_app",
  },
  {
    name: "Food-App",
    description:
      "Management System App built for Puerto Madero, a real estate company located in Bolivia. It allows employees inside the company to have their accounts, schedule viewings, manage company business and share photos and information valuable that could be useful for other employees such as photos, ads media, etc.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "text-green-600",
      },
      {
        name: "javascript",
        color: "text-yellow-500",
      },
      {
        name: "Axios",
        color: "green-text-gradient",
      },
      {
        name: "css3",
        color: "text-pink-500",
      },
      
    ],
    image: food,
    source_code_link: "https://github.com/sowmithri2001/Food_App",
  },

];

export { services, technologies, experiences, educations, testimonials, projects };
