/**
 * Karan Singh - Personal Portfolio Data
 * Grounded in authentic developer personality, clean hierarchy, and intentional storytelling.
 */

export const personalInfo = {
  name: "Karan Singh",
  firstName: "Karan",
  greeting: "Hey, I'm Karan.",
  bio: "I build full-stack web applications, solve problems, and occasionally spend way too long debugging one missing semicolon.",
  roleTitle: "MERN Stack Developer · CSE Student",
  location: "Pune, India",
  availability: "Open to internships & developer opportunities",
  email: "karansingh2436nda@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/karan-singh-465470337",
  githubUrl: "https://github.com/Karan-max-ux",
  githubDisplay: "github.com/Karan-max-ux",
  
  // Right side terminal widget data
  terminalWidget: {
    directory: "~/karan",
    whoami: "karan.dev",
    stack: ["React", "Node", "Express", "MongoDB"],
    status: "building"
  }
};

export const nowData = {
  sectionLabel: "NOW",
  headline: "What I'm up to right now",
  items: [
    {
      category: "Building",
      description: "Portfolio + personal projects",
      accent: "green"
    },
    {
      category: "Learning",
      description: "System Design, Advanced React & DSA",
      accent: "cyan"
    },
    {
      category: "Next",
      description: "Build a real-world SaaS project",
      accent: "purple"
    }
  ]
};

export const aboutData = {
  heading: "A little about me",
  paragraphs: [
    "I'm a Computer Science student who enjoys turning random ideas into working software.",
    "I started with frontend development, got curious about what happens behind the UI, and eventually ended up learning Node, Express and MongoDB.",
    "These days I'm focused on building full-stack applications and becoming a better engineer — not just writing code that works, but code that is actually maintainable."
  ],
  currentlyLearning: [
    "Advanced React",
    "System Design",
    "DSA"
  ],
  outsideCode: [
    "Music",
    "Exploring new places",
    "Late-night debugging"
  ]
};

export const projectsData = [
  {
    id: "budgetwise",
    number: "01",
    name: "BudgetWise",
    tagline: "Role-Based Institutional Budget Management System",
    description: "A multi-tier financial management platform built for institutional transparency, role-based budget allocations, and real-time expense oversight.",
    whyIBuiltIt: "I wanted to understand how real-world authentication and protected routes work instead of only following tutorials, especially when different departments need strict data isolation.",
    whatILearned: "Granular JWT role models, structuring interdependent MongoDB schemas, and rendering responsive financial metrics with Chart.js.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Chart.js", "JWT"],
    githubUrl: null, // Placeholder or link
    liveUrl: null,   // Placeholder or link
    previewLabel: "Institutional Dashboard & Analytics Preview"
  },
  {
    id: "swiftservice-now",
    number: "02",
    name: "SwiftService Now",
    tagline: "On-Demand Local Service Provider Matching Platform",
    description: "A platform connecting users with local service technicians through intelligent matching algorithms tailored to proximity and specialized requirements.",
    whyIBuiltIt: "Finding reliable local service providers is usually fragmented and slow. I wanted to build an automated matching pipeline to reduce waiting friction between client requests and technician dispatch.",
    whatILearned: "Implementing proximity-based recommendation heuristics, optimizing API response payloads, which reduced overall request fulfillment time by 20%.",
    technologies: ["React.js", "Node.js", "Express.js", "AI Matching Logic", "REST APIs"],
    githubUrl: "https://github.com/Karan-max-ux/swift-service-now",
    liveUrl: "https://swift-service-now.vercel.app/",
    previewLabel: "On-Demand Service Matching Live UI"
  }
];

export const skillsData = {
  heading: "Technical Toolkit",
  subheading: "Technologies I use to build scalable web products",
  groups: [
    {
      name: "Frontend",
      skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind"]
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs"]
    },
    {
      name: "Database",
      skills: ["MongoDB", "MySQL"]
    },
    {
      name: "Tools",
      skills: ["Git", "GitHub", "Postman", "VS Code"]
    },
    {
      name: "Languages",
      skills: ["C", "C++", "Java", "Python"]
    }
  ]
};

export const timelineData = [
  {
    type: "experience",
    role: "Full Stack Web Developer Intern",
    organization: "InternsVeda",
    period: "Nov 2024 — Present",
    location: "Pune / Remote",
    badge: "Current Role",
    summary: "Working across the full JavaScript stack, building modular UI components and scalable backend APIs.",
    points: [
      "Engineered 5+ responsive production features in React.js and Express.js with clean component architecture.",
      "Designed and deployed 10+ RESTful API endpoints with secure client-server communication.",
      "Worked with secure CRUD operations, database queries, and user authentication workflows.",
      "Collaborated with peers in code reviews and optimized API endpoints to reduce latency."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "REST APIs", "CRUD"]
  },
  {
    type: "education",
    role: "Computer Science and Engineering",
    organization: "Lovely Professional University (LPU)",
    period: "Graduation 2024",
    location: "Punjab, India",
    badge: "B.Tech CSE",
    summary: "Core foundations in computer engineering, algorithmic thinking, and modern web architecture.",
    points: [
      "Key coursework: Data Structures, Algorithms, Software Engineering, Database Systems, Computer Networks.",
      "Active participant in technical sprints, hackathons, and collaborative engineering builds.",
      "Focused practical specialization on MERN full-stack application development."
    ],
    technologies: ["Data Structures", "Algorithms", "DBMS", "System Architecture"]
  }
];

export const certificationsData = [
  {
    name: "Coding of Adobe India Hackathon",
    details: "Round 1 Online MCQ Assessment",
    issuer: "Adobe India / HackerRank",
    date: "2024",
    type: "Assessment",
    url: null
  },
  {
    name: "Full Stack Web Development Certification",
    details: "Comprehensive Full Stack Architecture & REST APIs",
    issuer: "Professional Course",
    date: "2024",
    type: "Certification",
    url: null
  },
  {
    name: "Linux for Developers",
    details: "Command Line, Environment Setup & Systems",
    issuer: "Technical Training",
    date: "2024",
    type: "Certification",
    url: null
  }
];

export const contactData = {
  heading: "Have an idea?",
  subheading: "Let's build something.",
  description: "I'm always interested in interesting projects, internships, collaborations, or simply talking about tech.",
  email: "karansingh2436nda@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/karan-singh-465470337",
  githubUrl: "https://github.com/Karan-max-ux",
  location: "Pune, India"
};

export const footerData = {
  heading: "That's all for now.",
  subtext: "If you made it this far, you should probably say hi.",
  tagline: "Built with React, caffeine & questionable debugging decisions.",
  copyright: "© 2026 Karan Singh"
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Now", href: "#now" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Timeline", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" }
];
