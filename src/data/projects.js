export const projects = [
  // ── FLAGSHIP CASE STUDIES ──────────────────────────────────
  {
    id          : 1,
    type        : "featured",
    title       : "ExamCore",
    subtitle    : "Computer-Based Testing Engine",
    description : "A secure, role-based exam administration and real-time student testing platform built to run testing centers smoothly.",
    problem     : "Traditional testing centers face network dropouts, complex login setups, and security lapses when running large-scale tests, resulting in student exam disruptions and complex admin workflows.",
    solution    : "Developed a serverless testing engine with real-time state listeners. Designed separate Student and Administrator workspaces, implemented auto-saving answers to firestore local caches, and added role-based route middleware to prevent unauthorized access.",
    result      : "Created a secure, crash-resilient portal that updates status dynamically. Admins can track active exam sessions in real-time, and students can submit tests without data loss even under unstable network conditions.",
    image       : "/images/projects/examcore.jpg",
    tech        : ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Firebase Auth", "Firestore"],
    github      : "", // Will be filled by user
    live        : "", // Will be filled by user
    status      : "live"
  },
  {
    id          : 2,
    type        : "featured",
    title       : "T.O.C – The Ola Collection",
    subtitle    : "Luxury E-Commerce Storefront",
    description : "An editorial digital shopping experience combining print magazine aesthetics with fluid search and client cart logic.",
    problem     : "Generic e-commerce templates feel cluttered, run slowly, and fail to convey the exclusivity and clean design essential for premium fashion and lifestyle brands.",
    solution    : "Engineered a high-contrast React storefront using custom CSS layouts and slide animations. Implemented client-side filtering logic to allow instant catalog sorting and integrated Firebase storage for media catalogs.",
    result      : "Produced an elegant storefront that functions like a digital lookbook. Improved page speeds and created a fluid checkout interface with reactive client-side state handling.",
    image       : "/images/projects/toc-collection.jpg",
    tech        : ["React", "Firebase", "Tailwind CSS", "React Router"],
    github      : "", // Will be filled by user
    live        : "", // Will be filled by user
    status      : "live"
  },
  {
    id          : 3,
    type        : "featured",
    title       : "Portfolio Website",
    subtitle    : "Personal Brand & Case Studies Showcase",
    description : "A premium, tree-shaken developer portfolio that visualizes career journey narratives and technical data pipelines.",
    problem     : "Standard developer portfolios rely on heavy dynamic libraries, resulting in 5MB+ JavaScript bundles and slow visual rendering, which fails to showcase clean engineering skill.",
    solution    : "Developed a custom editorial layout using React, Vite, and tailwind. Optimized the JS bundle from 5.18 MB to under 300 KB by replacing dynamic icon imports with static mappings. Integrated an interactive vertical journey timeline.",
    result      : "Achieved a 95%+ bundle reduction, leading to instant loads. Created an accessible, high-contrast, espresso-styled showcase that clearly details my Mass Comm background as an engineering asset.",
    image       : "/images/projects/portfolio.jpg",
    tech        : ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    github      : "", // Will be filled by user
    live        : "", // Will be filled by user
    status      : "live"
  },

  // ── ARCHIVE & EARLY BUILDS ─────────────────────────────────
  {
    id          : 4,
    type        : "archive",
    title       : "YouTube UI Clone",
    description : "A high-fidelity replica of the YouTube video listing layout, practicing CSS Flexbox and Grid alignments.",
    tech        : ["HTML", "CSS", "JavaScript"],
    github      : "",
    status      : "completed"
  },
  {
    id          : 5,
    type        : "archive",
    title       : "Recharge Card Generator",
    description : "A utility application that generates and records pin sequences, practicing JS array manipulation and session storage.",
    tech        : ["HTML", "CSS", "JavaScript"],
    github      : "",
    status      : "completed"
  },
  {
    id          : 6,
    type        : "archive",
    title       : "Student Information Table",
    description : "A dynamic records manager executing CRUD actions on tables, practicing DOM element instantiation and form validation.",
    tech        : ["HTML", "CSS", "JavaScript"],
    github      : "",
    status      : "completed"
  },
  {
    id          : 7,
    type        : "archive",
    title       : "Grade Checker",
    description : "A calculation tool that parses numeric grades and outputs grade letter reviews based on standard scales.",
    tech        : ["HTML", "CSS", "JavaScript"],
    github      : "",
    status      : "completed"
  }
]
