export type Project = {
  id: string;
  index: string;
  title: string;
  description: string;
  year: string;
  role: string;
  stack: string[];
  accent: string;
  link?: string;
  repo?: string;
};

export type Experience = {
  year: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
};

export type Skill = {
  name: string;
  category: "Frontend" | "Backend" | "Tooling" | "Design" | "Scripting";
};

export const profile = {
  name: "Arnold",
  fullName: "Arnold CONVOLBO",
  role: "Full-Stack Developer",
  tagline: "I craft digital experiences that feel alive.",
  location: "Ouagadougou, Burkina Faso",
  email: "arnoldcnv99@gmail.com",
  status: "Available for new projects",
  bio: [
    "I'm a full-stack developer obsessed with the intersection of code and craft. I build fast, accessible web products with thoughtful motion and a sharp eye for detail.",
    "From APIs to pixels, I love shipping things that don't just work — they feel right.",
  ],
  socials: [
    { label: "GitHub", url: "https://github.com/Zeh-Eox" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/arnold-convolbo" },
    { label: "Twitter / X", url: "https://x.com/AConvolbo40654" },
    { label: "Email", url: "mailto:arnoldcnv99@gmail.com" },
  ],
};

export const skills: Skill[] = [
  { name: "TypeScript", category: "Frontend" },
  { name: "React.js", category: "Frontend" },
  { name: "React Native", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "GSAP", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },
  { name: "Three.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "Laravel", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "Redis", category: "Backend" },
  { name: "Python", category: "Scripting" },
  { name: "Bash", category: "Scripting" },
  { name: "Docker", category: "Tooling" },
  { name: "Git", category: "Tooling" },
  { name: "AWS", category: "Tooling" },
  { name: "Linux", category: "Tooling" },
  { name: "Figma", category: "Design" },
];

export const projects: Project[] = [
  {
    id: "solar-system",
    index: "01",
    title: "Solar System",
    description:
      "A high-performance solar system simulation built in C++20 — Newtonian physics engine with RK4 numerical integration for accurate orbital mechanics.",
    year: "2025",
    role: "Systems Dev",
    stack: ["C++20", "RK4", "Physics Simulation"],
    accent: "#FFB347",
    link: "https://github.com/Zeh-Eox/solar-system",
    repo: "https://github.com/Zeh-Eox/solar-system",
  },
  {
    id: "nymea",
    index: "02",
    title: "Nymea",
    description:
      "A mobile app for menstrual cycle tracking — Expo/React Native frontend paired with a Node.js REST API, Prisma ORM and PostgreSQL.",
    year: "2025",
    role: "Full-Stack",
    stack: ["React Native", "Expo", "Node.js", "Prisma", "PostgreSQL"],
    accent: "#F472B6",
    link: "https://github.com/Zeh-Eox/nymea",
    repo: "https://github.com/Zeh-Eox/nymea",
  },
  {
    id: "gensite",
    index: "03",
    title: "Gensite",
    description:
      "An AI-powered SaaS that generates full websites from a prompt — from layout to content, shipped and live in seconds.",
    year: "2024",
    role: "Full-Stack",
    stack: ["React", "TypeScript", "OpenAI", "PostgreSQL"],
    accent: "#C6FF3D",
    link: "https://github.com/Zeh-Eox/gensite",
    repo: "https://github.com/Zeh-Eox/gensite",
  },
  {
    id: "astrotalk",
    index: "04",
    title: "AstroTalk",
    description:
      "A real-time desktop chat app built on Socket.IO — bidirectional messaging, rooms and live presence, optimized for low-latency communication.",
    year: "2024",
    role: "Full-Stack",
    stack: ["TypeScript", "Socket.IO", "Node.js", "React"],
    accent: "#38BDF8",
    link: "https://github.com/Zeh-Eox/astrotalk",
    repo: "https://github.com/Zeh-Eox/astrotalk",
  },
  {
    id: "aether-ai",
    index: "05",
    title: "Aether AI",
    description:
      "An AI-powered SaaS platform for content generation and resume analysis — write, rewrite and score documents with a single click.",
    year: "2024",
    role: "Full-Stack",
    stack: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    accent: "#A78BFA",
    link: "https://github.com/Zeh-Eox/aether-ai",
    repo: "https://github.com/Zeh-Eox/aether-ai",
  },
  {
    id: "scripts",
    index: "06",
    title: "Scripts",
    description:
      "A curated toolbox of Python utility scripts for automating repetitive sysadmin and developer tasks — file ops, data wrangling and more.",
    year: "2024",
    role: "SysAdmin",
    stack: ["Python"],
    accent: "#FBBF24",
    link: "https://github.com/Zeh-Eox/scripts",
    repo: "https://github.com/Zeh-Eox/scripts",
  },
];

export const experiences: Experience[] = [
  {
    year: "Feb 2026 — Now",
    title: "Full-Stack Intern",
    company: "TEKRE Technologies",
    description:
      "Hands-on internship building cross-platform and enterprise-grade apps — diving deep into Angular frontends, React Native mobile, and Spring Boot backends.",
    tags: ["Angular", "React Native", "Spring Boot"],
  },
  {
    year: "2024 — Feb 2026",
    title: "Freelance Full-Stack Developer",
    company: "Freelance",
    description:
      "Building production web apps for startups: design systems, real-time features, and performance-critical interfaces.",
    tags: ["React", "Node", "Docker", "Postgres"],
  },
  {
    year: "2024",
    title: "Computer Science & Mathematics Graduate",
    company: "Université Virtuelle du Burkina Faso",
    description:
      "Graduated with honors. Specialised in computer science and mathematics.",
    tags: ["Programming", "Algorithms", "Systems"],
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Path" },
  { id: "contact", label: "Contact" },
];
