import project1 from "/assets/projects/project-1.jpg";
import project2 from "/assets/projects/project-2.jpg";
import project3 from "/assets/projects/project-3.jpg";
import project4 from "/assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am Nilesh Kumar Shukla, Fresh B.Tech passout, with a CGPA of 8.34. I’m skilled in C, Java, Golang, JavaScript, and frameworks like React.js, Next.js, and Tailwind CSS. I’ve worked as a Front-end Developer at VEGFED, focusing on authentication and dashboards, and as a Blockchain Research Intern at DRDO, developing Hyperledger Fabric-based applications. My projects include Stumart, Cryptoverse, and RealState. Received a Letter of Recommendation from DRDO for my contributions.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Software developer with a passion for creating efficient and user-friendly web applications. With couple of internship experience and freelancing, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - May 2024",
    role: "Front-end Developer ",
    company: "VEGFED",
    description: `  • I built the login/authentication functionality and handled the ReactJS front-end integration.\n
 • Solving front-end bugs/issues, and investigating new tools and technologies.\n
 • Dashboard: Build a dashboard for admins to review post reports, analyse user data.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "jun 2023 - Aug 2023",
    role: "Blockchain Research Intern",
    company: " DRDO, Ministry Of Defence, Govt Of India.",
    description: ` • Worked on Hyperledger Fabric Based Blockchain Network.\n
 • Developed and implemented chaincode using Golang.\n
 • Working on the development of web3 application.`,
    technologies: ["Blockchain", "web3", "GoLang", "chaincode", "Network & Information Security", "Node", "Research"],
  },
 ];

 export const PROJECTS = [
  {
    title: "Stumart",
    image: project1,
    description:
      "A marketplace for selling used items with features like CRUD operations for user profiles and posts, OpenAI integration for writing product descriptions, and responsive design.",
    technologies: ["Next.js", "Node.js", "Express.js", "MongoDB", "OpenAI", "Redux Toolkit", "TailwindCSS"],
  },
  {
    title: "Cryptoverse",
    image: project2,
    description:
      "A fully responsive web application for state management using Context API, UI creation with Tailwind CSS, and data visualization using Chart.js. The app fetches data from multiple sources using RapidAPI.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Context API", "SchadcnUI", "Chart.js", "RapidAPI"],
  },
  {
    title: "RealState",
    image: project3,
    description:
      "A real estate marketplace with features like location-based sorting, property type filtering, and multi-story sorting. The application is fully responsive and handles API calls using Axios.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Axios", "Redux"],
  },
  {
    title: "Wisetech Solution",
    image: project4,
    description:
      "developes this website as a freelancing project for a interior design company and hosted it on the hostinger with domain name - wisetechsolutions.in",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Axios", "Redux"],
  }
];


export const CONTACT = {
  address: "Bellandur, Bangalore, Karnataka - 560103",
  phoneNo: "7366866911",
  email: "nilesh.shukla47@gmail.com",
  website: "nileshshukla.tech"
};
