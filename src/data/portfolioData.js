/**
 * Karan Singh - Portfolio Data
 * Grounded strictly in verified details.
 * Contains clear placeholder fields for seamless updating.
 */

export const personalInfo = {
  name: "Karan Singh",
  title: "MERN Stack Developer | Full-Stack Developer | Aspiring Software Engineer",
  heroSubtitle: "MERN Stack Developer & Aspiring Software Engineer",
  heroIntro: "Computer Science and Engineering student passionate about building full-stack web applications that solve real-world problems.",
  location: "Pune / Pimpri-Chinchwad, India",
  email: "karansingh2436nda@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/karan-singh-465470337",
  linkedinDisplay: "linkedin.com/in/karan-singh-465470337",
  githubUrl: "https://github.com/Karan-max-ux",
  githubDisplay: "github.com/Karan-max-ux",
  githubPlaceholderLabel: "[Add GitHub URL]",
  statusBadge: "Available for Opportunities",
  primaryTech: ["MongoDB", "Express.js", "React.js", "Node.js"],
  otherTech: [
    "C", "C++", "Java", "JavaScript (ES6+)", "Python", 
    "TypeScript", "GitHub", "Mongoose", "REST APIs", "JWT", "Chart.js"
  ]
};

export const aboutData = {
  paragraphs: [
    "I'm a Computer Science and Engineering student at Lovely Professional University, passionate about building full-stack web applications that solve real problems.",
    "My primary focus is the MERN stack — MongoDB, Express.js, React.js, and Node.js.",
    "I enjoy turning ideas into functional, responsive, and user-friendly products. I also enjoy hackathons because they challenge me to build quickly, think creatively, and solve problems under pressure.",
    "I am continuously learning new technologies and looking for opportunities where I can grow as a software developer while contributing to meaningful projects."
  ],
  stats: [
    {
      value: "5+",
      label: "Responsive Web Features",
      subtext: "Engineered with modern architecture"
    },
    {
      value: "10+",
      label: "RESTful APIs",
      subtext: "Designed, tested & deployed"
    },
    {
      value: "2+",
      label: "Hackathon Projects",
      subtext: "High-pressure rapid prototypes"
    },
    {
      value: "MERN",
      label: "Stack Developer",
      subtext: "Full-stack specialization"
    }
  ]
};

export const skillsData = {
  categories: [
    {
      id: "all",
      name: "All Technologies"
    },
    {
      id: "frontend",
      name: "Frontend",
      description: "Building responsive, modern, and accessible user interfaces"
    },
    {
      id: "backend",
      name: "Backend",
      description: "Developing robust APIs, microservices, and server-side business logic"
    },
    {
      id: "database",
      name: "Database",
      description: "Managing data modeling, schemas, queries, and optimization"
    },
    {
      id: "languages",
      name: "Programming Languages",
      description: "Core languages for software engineering and problem solving"
    },
    {
      id: "tools",
      name: "Tools & Libraries",
      description: "Development workflows, version control, and data visualization"
    }
  ],
  items: [
    // Frontend
    { name: "HTML", category: "frontend", icon: "Code2", level: "Core Web" },
    { name: "CSS", category: "frontend", icon: "Palette", level: "Styling" },
    { name: "JavaScript", category: "frontend", icon: "Braces", level: "ES6+" },
    { name: "React.js", category: "frontend", icon: "Atom", level: "Framework" },
    { name: "TypeScript", category: "frontend", icon: "FileType", level: "Typed JS" },

    // Backend
    { name: "Node.js", category: "backend", icon: "Server", level: "Runtime" },
    { name: "Express.js", category: "backend", icon: "Cpu", level: "Backend Framework" },
    { name: "REST APIs", category: "backend", icon: "Network", level: "Architecture" },
    { name: "JWT Authentication", category: "backend", icon: "ShieldCheck", level: "Security" },

    // Database
    { name: "MongoDB", category: "database", icon: "Database", level: "NoSQL DB" },
    { name: "Mongoose", category: "database", icon: "Layers", level: "ODM" },

    // Programming Languages
    { name: "C", category: "languages", icon: "Terminal", level: "Systems" },
    { name: "C++", category: "languages", icon: "TerminalSquare", level: "Core Language" },
    { name: "Java", category: "languages", icon: "Coffee", level: "OOP" },
    { name: "JavaScript", category: "languages", icon: "FileCode", level: "Scripting & Web" },
    { name: "Python", category: "languages", icon: "Binary", level: "Scripting" },

    // Tools
    { name: "Git", category: "tools", icon: "GitBranch", level: "Version Control" },
    { name: "GitHub", category: "tools", icon: "Github", level: "Collaboration" },
    { name: "Chart.js", category: "tools", icon: "BarChart3", level: "Visualization" }
  ]
};

export const experienceData = [
  {
    company: "InternsVeda",
    role: "Full Stack Web Developer Intern",
    duration: "November 2024 - Present",
    type: "Internship",
    badge: "Current Role",
    highlights: [
      "Engineered 5+ responsive web features using React.js, Node.js, and Express.js.",
      "Implemented modular and reusable component architectures for enhanced maintainability.",
      "Designed and deployed 10+ RESTful APIs with secure client-server communication.",
      "Worked with secure CRUD operations, complex database queries, and user authentication.",
      "Collaborated closely with cross-functional engineering teams and participated in peer code reviews.",
      "Debugged critical issues, ensured cross-browser compatibility, and optimized API endpoints to reduce latency."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "REST APIs", "CRUD", "Authentication"]
  }
];

export const projectsData = [
  {
    id: "budgetwise",
    title: "BudgetWise",
    category: "Full Stack / Fintech",
    tagline: "Role-Based Institutional Budget Management System",
    description: "A role-based institutional budget management system built during a 48-hour hackathon, enabling secure organizational financial management and interactive analytical reporting.",
    hackathonTag: "48-Hour Hackathon",
    technologies: ["MERN Stack", "JWT Authentication", "Chart.js"],
    keyFeatures: [
      "Role-based access control for institutional members and administrators",
      "Secure JWT authentication for stateful and protected sessions",
      "Institutional budget management and structured financial allocation",
      "Interactive data visualization dashboards powered by Chart.js"
    ],
    githubUrl: "https://github.com/Parssharma/Blank",
    liveUrl: "https://budegt-wise.vercel.app/login.html",
    screenshotPlaceholder: "[Project Screenshot]"
  },
  {
    id: "swiftservice-now",
    title: "SwiftService Now",
    category: "Full Stack / AI Services",
    tagline: "On-Demand Local Service Provider Matching Platform",
    description: "A platform connecting users with local service providers, engineered during an intensive 36-hour hackathon with intelligent matching capabilities.",
    hackathonTag: "36-Hour Hackathon",
    technologies: ["AI-Based Matching", "Full Stack Web"],
    keyFeatures: [
      "Direct connection engine between users and nearby service providers",
      "AI-based intelligent matching system matching requirements with local providers",
      "Optimized fulfillment pipeline resulting in measurable efficiency gains"
    ],
    achievement: "The AI-based matching approach improved fulfillment time by 20%.",
    githubUrl: "https://github.com/Karan-max-ux/swift-service-now",
    liveUrl: "https://swift-service-now.vercel.app/",
    screenshotPlaceholder: "[Project Screenshot]"
  }
];

export const hackathonsData = [
  {
    projectTitle: "BudgetWise",
    durationBadge: "48-Hour Hackathon",
    headline: "Institutional Budget Management System",
    roleContribution: "Helped build a role-based institutional budget management system with secure JWT authentication and Chart.js dashboards.",
    keyOutcomes: [
      "Integrated secure authentication and role separation under rapid hackathon constraints",
      "Built dynamic financial chart dashboards using Chart.js for instant analytics",
      "Engineered end-to-end full-stack workflows from MongoDB data models to React UI"
    ],
    githubUrl: "https://github.com/Parssharma/Blank",
    liveUrl: "https://budegt-wise.vercel.app/login.html",
    accentColor: "emerald"
  },
  {
    projectTitle: "SwiftService Now",
    durationBadge: "36-Hour Hackathon",
    headline: "AI-Powered Local Service Provider Platform",
    roleContribution: "Engineered a platform connecting users with local service providers and integrated AI-based matching.",
    achievementHighlight: "Improved fulfillment time by 20%",
    keyOutcomes: [
      "Built on-demand service request and local provider connection workflows in 36 hours",
      "Implemented AI-based matching logic to rapidly pair service requests with qualified specialists",
      "Achieved a 20% improvement in service request fulfillment speed"
    ],
    githubUrl: "https://github.com/Karan-max-ux/swift-service-now",
    liveUrl: "https://swift-service-now.vercel.app/",
    accentColor: "cyan"
  }
];

export const certificationsData = [
  {
    id: 1,
    title: "Certificate of Participation in Round 1 - Online MCQ Assessment",
    subTitle: "Coding of Adobe India Hackathon",
    type: "Hackathon Assessment",
    icon: "Award",
    credentialUrl: null // [Add Certificate Link]
  },
  {
    id: 2,
    title: "Full Stack Web Development Certification",
    subTitle: "Comprehensive Web Architecture & Technologies",
    type: "Professional Certification",
    icon: "BadgeCheck",
    credentialUrl: null // [Add Certificate Link]
  },
  {
    id: 3,
    title: "Linux for Developers Certification",
    subTitle: "Command Line, System Fundamentals & Environments",
    type: "Technical Certification",
    icon: "Terminal",
    credentialUrl: null // [Add Certificate Link]
  }
];

export const educationData = [
  {
    institution: "Lovely Professional University (LPU)",
    degree: "Computer Science and Engineering",
    year: "2024",
    status: "Engineering Graduate / Student",
    highlights: [
      "Core coursework in Data Structures, Algorithms, Software Engineering, Database Systems, and Web Technologies.",
      "Active participant in technical hackathons, collaborative team builds, and competitive engineering challenges.",
      "Dedicated focus on modern Full-Stack web architecture (MERN stack)."
    ]
  }
];

export const contactInfo = {
  heading: "Let's Build Something Together",
  subheading: "I'm always looking to learn, build, and collaborate on projects that challenge me to grow as a developer.",
  email: "karansingh2436nda@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/karan-singh-465470337",
  githubUrl: "https://github.com/Karan-max-ux",
  githubDisplay: "github.com/Karan-max-ux",
  githubPlaceholder: "[Add GitHub URL]",
  location: "Pune / Pimpri-Chinchwad, India"
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];
