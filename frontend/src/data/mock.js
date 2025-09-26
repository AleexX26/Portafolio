// Mock data for Alejandro Sobrino Murillo's Portfolio
export const personalInfo = {
  name: "Alejandro Sobrino Murillo",
  role: "Developer",
  location: "Leganés, Madrid",
  email: "alsomu26@gmail.com",
  phone: "676641686",
  linkedin: "https://www.linkedin.com/in/asobrinomurillo",
  bio: "Joven desarrollador con formación en desarrollo de aplicaciones y experiencia en proyectos de investigación y prácticas profesionales. Destaca por su capacidad de análisis, toma de decisiones bajo presión, atención al detalle, trabajo en equipo y pasión por la tecnología."
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
    { name: "Trabajo en equipo", icon: "Users" },
    { name: "Gestión de tiempo", icon: "Clock" },
    { name: "Capacidad de análisis", icon: "BarChart3" },
    { name: "Toma de decisiones bajo presión", icon: "Target" },
    { name: "Trato con clientes", icon: "MessageSquare" },
    { name: "Atención al detalle", icon: "Eye" }
  ]
};

export const experience = [
  {
    id: 1,
    company: "MELIT Technologies",
    position: "Prácticas de Grado Superior (DAM)",
    duration: "3 meses",
    type: "Prácticas",
    location: "Madrid",
    description: "Experiencia práctica en desarrollo de aplicaciones multiplataforma, trabajando con frameworks modernos y contribuyendo a proyectos reales.",
    achievements: [
      "Colaboré en proyectos de desarrollo de aplicaciones multiplataforma",
      "Aprendí mejores prácticas de la industria y flujos de trabajo",
      "Contribuí a entregables del equipo y milestones del proyecto"
    ]
  },
  {
    id: 2,
    company: "Universidad Politécnica de Madrid",
    position: "Grupo de investigación GEOQUIBIDY",
    duration: "3 meses",
    type: "Investigación",
    location: "Madrid",
    description: "Participación en el equipo de investigación GEOQUIBIDY, contribuyendo a proyectos innovadores y ganando experiencia valiosa en investigación.",
    achievements: [
      "Participé en iniciativas de investigación de vanguardia",
      "Colaboré con profesionales académicos",
      "Desarrollé metodologías analíticas y de investigación"
    ]
  },
  {
    id: 3,
    company: "Servicios de Eventos",
    position: "Azafato de Eventos",
    duration: "2023 – Actualidad",
    type: "Tiempo parcial",
    location: "Madrid",
    description: "Prestación de servicios profesionales de azafato en eventos, demostrando excelentes habilidades de comunicación y adaptabilidad en entornos dinámicos.",
    achievements: [
      "Mejoré habilidades de comunicación e interpersonales",
      "Gestión de múltiples eventos simultáneamente",
      "Mantuve profesionalismo en situaciones de alta presión"
    ]
  },
  {
    id: 4,
    company: "Federación Madrileña de Natación",
    position: "Árbitro de Natación",
    duration: "2022 – Actualidad",
    type: "Tiempo parcial",
    location: "Madrid",
    description: "Árbitro certificado de natación supervisando eventos competitivos, asegurando el juego limpio y manteniendo altos estándares de competición.",
    achievements: [
      "Certificado como árbitro oficial de natación",
      "Supervisó competiciones regionales de natación",
      "Demostré atención al detalle y toma de decisiones rápida"
    ]
  }
];

export const education = [
  {
    id: 1,
    institution: "Centro de Educación Superior",
    degree: "Doble Grado: Desarrollo de Aplicaciones Multiplataforma & Desarrollo de Aplicaciones Web",
    duration: "2023 – 2025 (Actualidad)",
    type: "Grado Superior",
    status: "En curso",
    description: "Programa integral que cubre tecnologías y metodologías tanto de desarrollo de aplicaciones multiplataforma como de desarrollo web."
  },
  {
    id: 2,
    institution: "Instituto Técnico",
    degree: "Sistemas Microinformáticos",
    duration: "2021 – 2023",
    type: "Grado Medio",
    status: "Completado",
    description: "Programa fundamental en sistemas informáticos y microinformática, proporcionando conocimientos técnicos esenciales."
  }
];

export const courses = [
  "IA: Asistentes Virtuales, Automatizaciones y Soluciones Inteligentes para el Transporte",
  "Fundamentos de Inteligencia Artificial",
  "Desarrollo de Asistentes Virtuales",
  "Automatización de Procesos",
  "Diseño y Gestión de Bases de Datos",
  "Mejores Prácticas de Desarrollo Web",
  "Principios de Ingeniería de Software"
];

export const languages = [
  { name: "Español", level: "Nativo", proficiency: 100 },
  { name: "Inglés", level: "Medio", proficiency: 70 }
];

export const projects = [
  {
    id: 1,
    title: "Aplicación Web E-Commerce",
    description: "Aplicación web full-stack con frontend Angular y backend Spring Boot, con autenticación de usuarios e integración de pagos.",
    technologies: ["Angular", "Spring Boot", "MySQL", "TypeScript"],
    status: "En desarrollo",
    category: "Desarrollo Web"
  },
  {
    id: 2,
    title: "Sistema de Gestión de Base de Datos",
    description: "Solución integral de base de datos para pequeñas empresas con reportes automatizados y capacidades de análisis de datos.",
    technologies: ["Java", "MySQL", "H2", "Spring Boot"],
    status: "Planificado",
    category: "Sistemas de Bases de Datos"
  },
  {
    id: 3,
    title: "Herramienta de Automatización de Procesos",
    description: "Herramienta basada en Python para automatizar tareas repetitivas y mejorar la eficiencia del flujo de trabajo.",
    technologies: ["Python", "JavaScript", "MongoDB"],
    status: "Concepto",
    category: "Automatización"
  }
];

export const additionalInfo = {
  drivingLicense: "Carnet B",
  availability: "Disponible para prácticas y puestos de nivel inicial",
  relocate: "Abierto a reubicación dentro de España y Europa"
};