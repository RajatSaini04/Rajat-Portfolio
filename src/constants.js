// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import leetcodeLogo from './assets/tech_logo/leetCode.png'



// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import freelancerlogo from './assets/company_logo/freelancer_logo.jpeg';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import chitkaraLogo from './assets/education_logo/chitkara_logo.jpg';
import gjuLogo from './assets/education_logo/gju_logo.png';
import gssLogo from './assets/education_logo/Sfx School.jpg';
import gdvmLogo from './assets/education_logo/gdvm_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import chessLogo from './assets/work_logo/Chess.png'


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      // { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      // { name: 'C', logo: cLogo },
      // { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      // { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo }, 
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      // { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];


// LeetCode Stats Section
export const leetcodeStats = {
  username: "Harsh1516",
  profileUrl: "https://leetcode.com/Harsh1516/",
  apiUrl: "https://leetcode-stats-api.herokuapp.com/Harsh1516",
  
  heading: "🚀 My LeetCode Stats",
  statsToShow: [
    { label: "Total Solved", key: "totalSolved" },
    { label: "Medium", key: "mediumSolved" },
    { label: "Hard", key: "hardSolved" },
    { label: "Ranking", key: "ranking" }
  ],
};

  export const experiences = [
    {
      id: 0,
   img: freelancerlogo,
      role: " Freelance Web Developer",
      company: "Freelance (Client Work)",
      date: "Aug 2023 - Present",
      desc: "Developer Built 3 portfolio websites for local business using HTML, CSS, JavaScript.",
      skills: [
        "ReactJS",
        // "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 1,
    
      img: githubLogo,
      role: "Open Source Contributor",
      company: "GitHub",
      date: "Jan 2025 - Present",
      desc: "Contributed to bug fixes and feature enhancements in open-source React components.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        // "TypeScript",
        // "Node JS",
        "Tailwind CSS",
        // "MongoDb",
        // "Redux",
        // " Next Js",
      ],
    },
  //   {
  //     id: 2,
  //     img: newtonschoolLogo,
  //     role: "Frontend Intern",
  //     company: "Newton School",
  //     date: "September 2021 - August 2022",
  //     desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
  //     skills: [
  //       "HTML",
  //       "CSS",
  //       "Javascript",
  //       "Bootstrap",
  //       "Figma",
  //       "Material UI",
  //     ],
  //   },
  ];
  
  export const education = [
    {
      id: 0,
      img: chitkaraLogo,
      school: "Chitkara University, Patiala",
      date: "Sept 2024 - July 2026",
      grade: "8.63 CGPA",
      desc: "I am currently pursuing my Master’s degree (MCA) in Computer Applications at Chitkara University, Patiala (2024–2026). As part of the program, I’m building a strong foundation in programming, software development, and core computer science principles. I’m studying courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively take part in workshops and technical events, which help enhance my skills and knowledge. My journey at Chitkara University is playing a vital role in shaping my technical abilities and professional growth.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: gjuLogo,
      school: "Guru Jambheswar University, Hisar",
      date: "Sept 2021 - Aug 2024",
      grade: "7.45 CGPA",
      desc: "I completed my Bachelor's degree in Computer application (BCA) from Guru Jambheswar University, Hisar. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Guru Jambheswar University allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Computer Application - BCA (Computer Application)",
    },
    {
      id: 2,
      img: gssLogo,
      school: "Govt.Sr.Sec.School , Hisar ",
      date: "Apr 2020 - March 2021",
      grade: "78.8%",
      desc: "I completed my class 12 education from St. Francis Xavier School , Hisar, under the CBSE board, where I studied Accountancy, Business Studies, and Economics with Mathematics.",
      degree: "12th(XII) - Commerce With Maths",
    },
    // {
    //   id: 3,
    //   img: gdvmLogo,
    //   school: "Gomati Devi Vidya Mandir , Hisar",
    //   date: "Apr 2018 - March 2019",
    //   grade: "77.8%",
    //   desc: "I completed my class 10 education from Gomati Devi Vidya Mandir , Hisar, under the BSEH board, where I studied Science with Computer.",
    //   degree: "BSEH(X), Science with Computer Application",
    // },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Chess Game",
      description:
        "A work-in-progress chess game built using React and Vite. The project currently features a visually responsive 8x8 chessboard with piece rendering and basic player interactions. This project is focused on building UI structure and learning React state management for turn-based logic. Full rule validation and game mechanics are planned for future updates.",
      image: chessLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS",],
      github: "https://github.com/Harsh-shuklaa/Chess.git",
      webapp: "https://chess-kappa-flax.vercel.app/",
    },
    // {
    //   id: 1,
    //   title: "GitHub Profile Detective",
    //   description:
    //     "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    //   image: githubdetLogo,
    //   tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    //   github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
    //   webapp: "https://githubprofiledetective.netlify.app/",
    // },
    // {
    //   id: 2,
    //   title: "CS Prep",
    //   description:
    //     "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
    //   image: csprepLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    //   github: "https://github.com/codingmastr/CSPrep",
    //   webapp: "https://csprep.netlify.app/",
    // },
    // {
    //   id: 3,
    //   title: "Movie Recommendation App",
    //   description:
    //     "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    //   image: movierecLogo,
    //   tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    //   github: "https://github.com/codingmastr/Movie-Recommendation-App",
    //   webapp: "https://movie-recommendation-app-jet.vercel.app/",
    // },
    // {
    //   id: 4,
    //   title: "Email Validator NPM Package",
    //   description:
    //     "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    //   image: npmLogo,
    //   tags: ["React JS", "Node.js", "NPM", "Validation"],
    //   github: "https://github.com/codingmastr/cmtk-email-validator",
    //   webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    // },
    // {
    //   id: 5,
    //   title: "Task Reminder Chrome Extension Tool",
    //   description:
    //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    //   image: taskremLogo,
    //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    //   github: "https://github.com/codingmastr/Task-Reminder-Tool",
    //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    // },
    // {
    //   id: 6,
    //   title: "Webverse Digital",
    //   description:
    //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    //   image: webverLogo,
    //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    //   github: "https://github.com/codingmastr/Webverse-Digital",
    //   webapp: "https://webversedigital.com/",
    // },
    // {
    //   id: 7,
    //   title: "Coding Master",
    //   description:
    //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    //   image: cmLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    //   github: "https://codingmasterweb.in/",
    //   webapp: "https://codingmasterweb.in/",
    // },
    // {
    //   id: 8,
    //   title: "Image Search App",
    //   description:
    //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    //   image: imagesearchLogo,
    //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Search-App",
    //   webapp: "https://imagsearch.netlify.app/",
    // },
    // {
    //   id: 9,
    //   title: "Image Background Remover",
    //   description:
    //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    //   image: removebgLogo,
    //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Background-Remover",
    //   webapp: "https://removeyourbg.netlify.app/",
    // },
  ];  