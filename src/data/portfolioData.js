/**
 * Karan Singh — Editorial Portfolio Data
 * Grounded in verified details, journal updates, and project records.
 */

export const personalInfo = {
  name: "Karan Singh",
  title: "MERN Stack Developer & CSE Student",
  heroHeadline: "Hey, I'm Karan.",
  heroSubheadline: "I build full-stack web applications and solve problems.",
  metadataLine: "MERN STACK DEVELOPER · CSE STUDENT",
  statusLine: "Open to internships & developer opportunities",
  location: "Pune, India",
  email: "karansingh2436nda@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/karan-singh-465470337",
  githubUrl: "https://github.com/Karan-max-ux",
  resumeUrl: "https://drive.google.com/file/d/1YvNBd0ZyZafaIB31DuoaLH2uIwLWlNWt/view?usp=sharing",
};

export const aboutData = {
  narrative: [
    "I'm a CSE student and MERN stack developer focused on building practical, scalable web applications.",
    "Currently learning DSA, Next.js and modern web development while building projects that solve real problems."
  ]
};

export const nowData = {
  lastUpdated: "Last updated — 2026",
  statusItems: [
    "Working full-time as a Full Stack Developer Intern at InternsVeda",
    "Practicing DSA in C++",
    "Exploring TypeScript",
    "Open to full-time software engineering roles"
  ]
};

export const timelineData = [
  {
    year: "2024",
    title: "Lovely Professional University",
    role: "B.Tech in Computer Science and Engineering",
    description: "Enrolled in core software engineering, computer science fundamentals, data structures, and algorithms."
  },
  {
    year: "2024",
    title: "Tata Group (via Forage)",
    role: "Data & Technology Virtual Intern",
    description: "Analyzed business workflows and enterprise architectures to map client requirements to practical technology solutions."
  },
  {
    year: "Nov 2024 → Present",
    title: "InternsVeda",
    role: "Full Stack Web Developer Intern",
    description: "Architecting responsive interfaces, designing scalable micro-services, and optimizing API performance.",
    isCurrent: true,
    expandedDetails: [
      "Engineered 5+ responsive web features using React.js, Node.js, and Express.js with modular, reusable component architecture",
      "Designed and deployed 10+ RESTful APIs handling secure CRUD operations, authentication, and complex database queries",
      "Partnered with cross-functional teams on peer code reviews and debugging",
      "Optimized API endpoints, measurably reducing latency"
    ]
  },
  {
    year: "2025",
    title: "BudgetWise Hackathon Build",
    role: "48-Hour Sprint Project",
    description: "Architected a role-based institutional budget management system with secure JWT authentication and Chart.js dashboards."
  },
  {
    year: "2025",
    title: "SwiftService Now Hackathon Build",
    role: "36-Hour Sprint Project",
    description: "Engineered an AI-powered on-demand provider connection platform, improving service fulfillment time by 20%."
  },
  {
    year: "2026",
    title: "Professional Certifications",
    role: "Full Stack & Linux Engineering",
    description: "Certified in Full Stack Web Development, Linux for Developers, and competitive Adobe India Hackathon online assessment."
  }
];

export const projectsData = [
  {
    id: "budgetwise",
    title: "BudgetWise",
    context: "Group Project",
    constraintLabel: "PROJECT TYPE",
    description: "Full-stack institutional budget management system with role-based approvals, budget tracking and analytics.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/Parssharma/Blank",
    liveUrl: "https://budegt-wise.vercel.app/login.html",
    metrics: "Collaborative Build · Financial Analytics",
    specimenType: "Fintech Dashboard",
    coreArchitecture: "Role-based access hierarchy with budget tracking and Chart.js reporting."
  },
  {
    id: "swiftservice-now",
    title: "SwiftService Now",
    context: "36-Hour Hackathon",
    constraintLabel: "SPRINT CONSTRAINT",
    description: "On-demand local service provider platform with intelligent matching algorithms, improving service fulfillment velocity by 20%.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/Karan-max-ux/swift-service-now",
    liveUrl: "https://swift-service-now.vercel.app/",
    metrics: "36-Hour Sprint · AI Matching",
    specimenType: "AI Matching Platform",
    coreArchitecture: "Intelligent heuristic algorithm matching service requests with local specialists."
  }
];

export const skillsGrouped = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "JavaScript", "HTML", "CSS"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "REST APIs"]
  },
  {
    category: "Database",
    skills: ["MongoDB", "MySQL"]
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code"]
  }
];

export const certificationsData = [
  {
    name: "Full Stack Web Development Certification",
    type: "Professional Certification",
    url: "https://drive.google.com/file/d/1H853TxkQ3kXsELb5DT3ypWO_WZnHDlle/view?usp=sharing"
  },
  {
    name: "Linux for Developers Certification",
    type: "System Engineering",
    url: "https://drive.google.com/file/d/10i0W6Z7tbnZSBb7vrdrLEdseZshzMupm/view?usp=sharing"
  },
  {
    name: "Certificate of Participation in Round 1 - Online MCQ Assessment + Coding of Adobe India Hackathon",
    type: "Competitive Hackathon Assessment",
    url: "https://unstop.com/certificate-preview/2603663a-f24d-4e15-bade-4aeacfb8873c?utm_campaign=site-emails"
  }
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
];
