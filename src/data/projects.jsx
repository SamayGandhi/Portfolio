const projects = [
  {
  id: 1,

  title: "CareerPath",

  category: "Full Stack",

  status: "Completed",

  featured: true,

  coverImage: "/projects/careerpath/cover.png",

  gallery: [
    "/projects/careerpath/1.png",
    "/projects/careerpath/2.png",
    "/projects/careerpath/3.png",
    "/projects/careerpath/4.png",
  ],

  githubRepo: "CareerPath",

  live: {
    enabled: false,
    url: "",
  },

  technologies: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
  ],

  description:
    "Full-stack career guidance and learning platform that helps users assess their skills, identify skill gaps, explore career paths, get personalized course recommendations, and follow structured learning roadmaps.",

  features: [
    "Career path exploration",
    "Skill assessment",
    "Skill gap analysis",
    "Personalized course recommendations",
    "Learning roadmap generation",
    "Course comparison",
    "Interview preparation",
    "Resume, GitHub & portfolio analyzers",
    "Progress tracking",
    "User authentication",
    "Dashboard",
    "Admin panel",
  ],

  challenges:
    "Building a connected career guidance workflow that combines skill assessment, skill gap analysis, course recommendations and roadmap generation while keeping user data and progress consistent.",

  learnings:
    "Full-stack development with React, Node.js, Express.js and MongoDB, along with authentication, REST APIs, data modeling, recommendation logic and roadmap generation.",

  future:
    "Enhanced AI-assisted recommendations, expanded course and career data, improved analytics and additional career development features.",
},

  {
    id: 2,

    title: "Weather Forecast System",

    category: "Full Stack",

    status: "Completed",

    featured: true,

    coverImage: "/projects/Weather_Forecast_System/cover.png",

    gallery: [
      "/projects/Weather_Forecast_System/1.png",
      "/projects/Weather_Forecast_System/2.png",
      "/projects/Weather_Forecast_System/3.png",
      "/projects/Weather_Forecast_System/4.png",
    ],

    githubRepo: "Weather-App",

    live: {
      enabled: true,
      url: "https://weather-app-kappa-blond-45.vercel.app/",
    },

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "GraphQL",
      "API Integration(Twilio)",
      "Redis",
      "OAuth2 & JWT"
    ],

    description:
      "A full-stack, secure weather forecast application for tracking real-time weather, managing favorite cities, and receiving automated SMS alerts.",

    features: [
      "Authentication",
      "Real-Time Weather Tracking",
      "Automated SMS Alerts",
      "Favorite City Management",
      "REST APIs",
      "MongoDB",
      "Responsive Design",
      "Background Cron Jobs"
    ],

    challenges:
      "Implementing strict security layers for the API and orchestrating reliable background Cron jobs for automated alerts.",

    learnings:
      "Advanced backend architecture, API security protocols, caching strategies with Redis, and third-party API integration.",

    future:
      "Interactive radar maps, extended 7-day forecasting, push notifications and multi-language support."
},

  {
    id: 3,

    title: "Smart Interviewer",

    category: "AI",

    status: "Planned",

    featured: true,

    coverImage: "/projects/smart-interviewer/cover.jpg",

    gallery: [
      "/projects/smart-interviewer/1.jpg",
      "/projects/smart-interviewer/2.jpg",
      "/projects/smart-interviewer/3.jpg",
    ],

    githubRepo: "Smart-Interviewer",

    live: {
      enabled: false,
      url: "",
    },

    technologies: [
      "React",
      "Node.js",
      "AI",
    ],

    description:
      "AI interview preparation platform providing intelligent interview questions, feedback and performance evaluation.",

    features: [
      "AI Questions",
      "Technical Interviews",
      "Behavioral Interviews",
      "Performance Report",
      "Question History",
      "Responsive UI",
      "Authentication",
      "Dashboard",
    ],

    challenges:
      "Designing meaningful interview flow and AI response evaluation.",

    learnings:
      "Prompt engineering, React UI architecture and AI workflow design.",

    future:
      "Voice interview, webcam analysis and coding interview support.",
  },

  {
    id: 4,

    title: "System Architect AI",

    category: "AI",

    status: "Planned",

    featured: true,

    coverImage: "/projects/system-architect-ai/cover.jpg",

    gallery: [
      "/projects/system-architect-ai/1.jpg",
      "/projects/system-architect-ai/2.jpg",
      "/projects/system-architect-ai/3.jpg",
    ],

    githubRepo: "System-Architect-AI",

    live: {
      enabled: false,
      url: "",
    },

    technologies: [
      "React",
      "AI",
      "Mermaid",
    ],

    description:
      "AI powered software architecture assistant capable of generating scalable system design diagrams and architecture suggestions.",

    features: [
      "Architecture Generator",
      "Mermaid Diagram",
      "Flow Charts",
      "System Design",
      "Microservice Suggestion",
      "Cloud Ready Design",
      "Modern UI",
      "Export Diagram",
    ],

    challenges:
      "Generating accurate architecture diagrams for different software systems.",

    learnings:
      "Prompt engineering, architecture planning and diagram generation.",

    future:
      "AWS deployment architecture, Kubernetes diagrams and database optimization suggestions.",
  },
  {
    id: 5,

    title: "Stadium360",

    category: "Web",

    status: "Completed",

    featured: false,

    coverImage: "/projects/stadium360/cover.png",

    gallery: [
      "/projects/stadium360/1.png",
      "/projects/stadium360/2.png",
      "/projects/stadium360/3.jpg",
      "/projects/stadium360/4.jpg",
    ],

    githubRepo: "Stadium360",

    live: {
      enabled: false,
      url: "",
    },

    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Vite",
    ],

    description:
      "A modern sports stadium information platform that allows users to explore famous stadiums with advanced search, filtering and responsive user interface.",

    features: [
      "Stadium Search",
      "Responsive Design",
      "Sports Categories",
      "Interactive Cards",
      "Detailed Stadium View",
      "Modern UI",
      "Fast Performance",
      "Reusable Components",
    ],

    challenges:
      "Designing a scalable component structure while keeping the interface responsive across different devices.",

    learnings:
      "React component architecture, routing, responsive UI design and reusable component development.",

    future:
      "Google Maps integration, stadium booking and AI recommendations.",
  },

  {
    id: 6,

    title: "Inventory Management System",

    category: "Academic",

    status: "Completed",

    featured: false,

    coverImage: "/projects/inventory/cover.png",

    gallery: [
      "/projects/inventory/1.png",
      "/projects/inventory/2.png",
      "/projects/inventory/3.png",
    ],

    githubRepo: "Inventory-Management-System",

    live: {
      enabled: false,
      url: "",
    },

    technologies: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],

    description:
      "Web application for managing products, stock, suppliers and inventory transactions efficiently.",

    features: [
      "Product Management",
      "Stock Management",
      "Supplier Management",
      "Sales Reports",
      "Authentication",
      "CRUD Operations",
      "Dashboard",
      "Responsive Layout",
    ],

    challenges:
      "Managing relational database operations and maintaining data consistency.",

    learnings:
      "PHP backend development, MySQL database design and CRUD application development.",

    future:
      "Barcode scanning, invoice generation and analytics dashboard.",
  },

  {
    id: 7,

    title: "Employee Payroll Management System",

    category: "Academic",

    status: "Completed",

    featured: false,

    coverImage: "/projects/payroll/cover.png",

    gallery: [
      "/projects/payroll/1.png",
      "/projects/payroll/2.png",
      "/projects/payroll/3.png",
    ],

    githubRepo: "Employee-Payroll-Management-System",

    live: {
      enabled: false,
      url: "",
    },

    technologies: [
      "JAVA",
      "MySQL",
      "HTML",
      "CSS",
    ],

    description:
      "Payroll management system developed to manage employee records, salary calculations and payroll reports.",

    features: [
      "Employee Management",
      "Salary Calculation",
      "Attendance",
      "Payroll Reports",
      "Admin Dashboard",
      "Authentication",
      "CRUD Operations",
      "Database Management",
    ],

    challenges:
      "Implementing accurate payroll calculations and report generation.",

    learnings:
      "Database normalization, backend logic and payroll workflow implementation.",

    future:
      "PDF salary slips, email notifications and tax calculation module.",
  },

  {
    id: 8,

    title: "Course Comparator",

    category: "Education",

    status: "In Progress",

    featured: false,

    coverImage: "/projects/course-comparator/cover.png",

    gallery: [
      "/projects/course-comparator/1.png",
      "/projects/course-comparator/2.png",
      "/projects/course-comparator/3.png",
      "/projects/course-comparator/4.png",
    ],

    githubRepo: "Course-Comparator",

    live: {
      enabled: false,
      url: "",
    },

    technologies: [
      "HTML",
      "JavaScript",
      "CSS",
      "React",
    ],

    description:
      "Platform for comparing online courses based on fees, duration, ratings, skills and learning outcomes to help students choose the best course.",

    features: [
      "Course Comparison",
      "Advanced Filters",
      "Search",
      "Course Details",
      "Responsive Design",
      "Sorting",
      "Bookmark Courses",
      "Modern UI",
    ],

    challenges:
      "Presenting large amounts of course information in a clean and user-friendly interface.",

    learnings:
      "Filtering algorithms, React state management and responsive UI development.",

    future:
      "AI course recommendation, price tracking and direct enrollment support.",
  },
];

export default projects;