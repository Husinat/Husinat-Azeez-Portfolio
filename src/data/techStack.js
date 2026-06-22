// Icon keys map to react-icons/si (Simple Icons).
// Items without a Simple Icon use the TechCard fallback initial.

export const techStack = [
  {
    category : "Frontend",
    items    : [
      { name: "HTML5",             icon: "SiHtml5",       color: "#E34F26" },
      { name: "CSS3",              icon: "SiCss3",        color: "#1572B6" },
      { name: "JavaScript",        icon: "SiJavascript",  color: "#F7DF1E" },
      { name: "React",             icon: "SiReact",       color: "#61DAFB" },
      { name: "Tailwind CSS",      icon: "SiTailwindcss", color: "#06B6D4" },
      { name: "Bootstrap",         icon: "SiBootstrap",   color: "#7952B3" },
      { name: "Responsive Design", icon: "",              color: "#5FBFAD" }
    ]
  },
  {
    category : "Backend",
    items    : [
      { name: "Node.js",                 icon: "SiNodedotjs",   color: "#339933" },
      { name: "Express.js",              icon: "SiExpress",     color: "#E8EDF5" },
      { name: "REST APIs",               icon: "",              color: "#5FBFAD" },
      { name: "Firebase Authentication", icon: "SiFirebase",    color: "#FFCA28" },
      { name: "JWT Authentication",      icon: "SiJsonwebtokens", color: "#E8EDF5" }
    ]
  },
  {
    category : "Database",
    items    : [
      { name: "MongoDB",            icon: "SiMongodb",  color: "#47A248" },
      { name: "Mongoose",           icon: "",           color: "#880000" },
      { name: "Firebase Firestore", icon: "SiFirebase", color: "#FFCA28" }
    ]
  },
  {
    category : "Tools",
    items    : [
      { name: "Git",     icon: "SiGit",              color: "#F05032" },
      { name: "GitHub",  icon: "SiGithub",           color: "#E8EDF5" },
      { name: "Postman", icon: "SiPostman",          color: "#FF6C37" },
      { name: "VS Code", icon: "SiVisualstudiocode", color: "#007ACC" },
      { name: "Figma",   icon: "SiFigma",            color: "#F24E1E" }
    ]
  }
]
