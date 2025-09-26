// Mock data for Alejandro Sobrino Murillo's Portfolio
export const personalInfo = {
  name: "Alejandro Sobrino Murillo",
  role: "Developer",
  location: "Leganés, Madrid",
  email: "alejandro.sobrino@example.com",
  phone: "+34 600 000 000",
  linkedin: "https://linkedin.com/in/alejandro-sobrino-murillo",
  bio: "Passionate developer with strong analytical skills and a dedication to continuous learning. Known for perseverance, excellent teamwork abilities, and the capacity to perform effectively under pressure. Committed to leveraging technology to solve complex problems and drive innovation."
};

export const skills = {
  technical: [
    { name: "HTML5", level: 90, icon: "Code" },
    { name: "CSS3", level: 85, icon: "Palette" },
    { name: "JavaScript", level: 80, icon: "Code2" },
    { name: "TypeScript", level: 75, icon: "FileType" },
    { name: "Angular", level: 70, icon: "Globe" },
    { name: "PHP", level: 75, icon: "Server" },
    { name: "Java", level: 80, icon: "Coffee" },
    { name: "Python", level: 75, icon: "Bot" },
    { name: "Spring Boot", level: 70, icon: "Zap" },
    { name: "MySQL", level: 80, icon: "Database" },
    { name: "MongoDB", level: 75, icon: "Database" },
    { name: "H2", level: 70, icon: "HardDrive" }
  ],
  soft: [
    { name: "Time Management", icon: "Clock" },
    { name: "Teamwork", icon: "Users" },
    { name: "Problem Solving", icon: "Lightbulb" },
    { name: "Decision Making", icon: "Target" },
    { name: "Analytical Thinking", icon: "BarChart3" },
    { name: "Communication", icon: "MessageSquare" }
  ]
};

export const experience = [
  {
    id: 1,
    company: "MELIT Technologies",
    position: "Development Intern",
    duration: "3 months",
    type: "DAM Internship",
    location: "Madrid",
    description: "Gained hands-on experience in multiplatform application development, working with modern development frameworks and contributing to real-world projects.",
    achievements: [
      "Collaborated on multiplatform application development projects",
      "Learned industry best practices and development workflows",
      "Contributed to team deliverables and project milestones"
    ]
  },
  {
    id: 2,
    company: "Universidad Politécnica de Madrid",
    position: "Research Team Member",
    duration: "3 months",
    type: "Research",
    location: "Madrid",
    description: "Participated in the GEOQUIBIDY research team, contributing to innovative projects and gaining valuable research experience.",
    achievements: [
      "Participated in cutting-edge research initiatives",
      "Collaborated with academic professionals",
      "Developed analytical and research methodologies"
    ]
  },
  {
    id: 3,
    company: "Event Services",
    position: "Event Host (Azafato de Eventos)",
    duration: "2023 – Present",
    type: "Part-time",
    location: "Madrid",
    description: "Providing professional event hosting services, demonstrating excellent communication skills and adaptability in dynamic environments.",
    achievements: [
      "Enhanced communication and interpersonal skills",
      "Managed multiple events simultaneously",
      "Maintained professionalism in high-pressure situations"
    ]
  },
  {
    id: 4,
    company: "Federación Madrileña de Natación",
    position: "Swimming Referee",
    duration: "2022 – Present",
    type: "Part-time",
    location: "Madrid",
    description: "Certified swimming referee overseeing competitive events, ensuring fair play and maintaining high standards of competition.",
    achievements: [
      "Certified as an official swimming referee",
      "Oversee regional swimming competitions",
      "Demonstrate attention to detail and quick decision-making"
    ]
  }
];

export const education = [
  {
    id: 1,
    institution: "Higher Education Institution",
    degree: "Double Degree: Multiplatform Application Development & Web Application Development",
    duration: "2023 – 2025 (Current)",
    type: "Higher Degree",
    status: "In Progress",
    description: "Comprehensive program covering both multiplatform and web application development technologies and methodologies."
  },
  {
    id: 2,
    institution: "Technical College",
    degree: "Systems Microinformatics",
    duration: "2021 – 2023",
    type: "Technical Degree",
    status: "Completed",
    description: "Foundational program in computer systems and microinformatics, providing essential technical knowledge."
  }
];

export const courses = [
  "Artificial Intelligence Fundamentals",
  "Virtual Assistants Development",
  "Process Automation",
  "Database Design and Management",
  "Web Development Best Practices",
  "Software Engineering Principles"
];

export const languages = [
  { name: "Spanish", level: "Native", proficiency: 100 },
  { name: "English", level: "Intermediate", proficiency: 70 }
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Web Application",
    description: "Full-stack web application with Angular frontend and Spring Boot backend, featuring user authentication and payment integration.",
    technologies: ["Angular", "Spring Boot", "MySQL", "TypeScript"],
    status: "In Development",
    category: "Web Development"
  },
  {
    id: 2,
    title: "Database Management System",
    description: "Comprehensive database solution for small businesses with automated reporting and data analytics capabilities.",
    technologies: ["Java", "MySQL", "H2", "Spring Boot"],
    status: "Planned",
    category: "Database Systems"
  },
  {
    id: 3,
    title: "Process Automation Tool",
    description: "Python-based automation tool for streamlining repetitive tasks and improving workflow efficiency.",
    technologies: ["Python", "JavaScript", "MongoDB"],
    status: "Concept",
    category: "Automation"
  }
];

export const additionalInfo = {
  drivingLicense: "Class B",
  availability: "Available for internships and entry-level positions",
  relocate: "Open to relocation within Spain and Europe"
};