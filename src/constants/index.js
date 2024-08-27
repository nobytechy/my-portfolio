import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;
export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;
export const PHONE_NUMBER='+263774603865';
export const SECRET="eg2zul3suichwy2l";
export const EXPERIENCES = [
  {
    year: "2019 - Present",
    role: "Full Stack Developer",
    company: "Devine Assignments",
    description:"Developed a fully functional grocery e-commerce website using Woo Commerce, and created a custom Ecocash payment plugin using Ecocash API to facilitate secure and seamless online transactions, addressing the increased demand for online shopping during the COVID-19 pandemic.",
    others:"Developed a WhatsApp Bot using the WhatsApp Group API to efficiently broadcast and manage over 800 groups, integrating news scraped from various sources. Implemented WhatsApp Online Ecocash for subscription and advertising payments, significantly increasing company revenue through automated services during high demand periods.",
    technologies: ["Pdox PHP", "Laravel", "WordPress", "MySql","JavaScript","Java"],
  },
  {
    year: "2017 - Present",
    role: "Freelance Developer",
    company: " ",
    description:"Developed an integrated company system for managing employee expense requests, including airtime and transport, with a multi-platform approval process via web, Android, or WhatsApp. Streamlined the approval workflow for administrators, enhancing efficiency, reducing processing time, and improving financial management records by ensuring accurate and timely documentation of expenses.",
    others:"Designed and developed custom portfolio websites for multiple clients, showcasing their work and services, leading to increased online presence and client acquisition.",
    technologies: ["Django","PHP","Java","Laravel","MongoDB","WordPress","MySql","JavaScript","ReactJS","Python"],
  },
 
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    url: "",
    image: project2,
    description:
      "Developed a responsive portfolio website with a sleek, modern UI to effectively showcase my expertise in full-stack development, software engineering, and project management. The platform is optimized for seamless user experience, featuring intuitive navigation and dynamic content. Integrated the WhatsApp Ultra API for real-time direct messaging, enabling instant client communication through the contact form.",
    technologies: ["React", "Tailwind CSS", "CSS"],
  },
  {
    title: "COVID-19 Updates Web App",
    url: "https://github.com/nobytechy/coronatracker",
    image: project4,
    description:
      "Developed a responsive web application during the COVID-19 pandemic to provide real-time updates on the virus's spread. Utilizing the Coronavirus API, this PHP and JavaScript-based app delivers up-to-date statistics on infection rates, recoveries, and fatalities worldwide.This project demonstrated my ability to integrate external APIs, manage asynchronous data processing, and create user-friendly web interfaces.",
    technologies: ["PHP", "Javascript", "Bootstrap CSS"],
  },
  {
    title: "2D Space Game",
    url: "https://github.com/nobytechy/python_space_game",
    image: project3,
    description:
      "Developed an interactive 2D space game using Python and Pygame.The game features smooth animations, collision detection, and increasing difficulty levels, all implemented using Pygame’s powerful game development libraries. Through this project, I gained a strong understanding of game mechanics, real-time rendering, and event-driven programming.",
    technologies: ["Python", "Pygame"],
  },
  {
    title: "Mashfield Engineering Website",
    url: "https://mashfield.co.zw/",
    image: project1,
    description:
      "Developed a comprehensive website for Mashfield Engineering, a company renowned for its dedicated project management services. The site highlights their commitment to overseeing all phases of project management—from initial planning to final commissioning.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  


];

export const CONTACT = {
  address: "Harare, Zimbabwe",
  phoneNo: "+263774603865",
  email: "nobytechy@gmail.com",
};
