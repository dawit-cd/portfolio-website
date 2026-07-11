export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const myInfo = {
  name: "Dawit Elias", 
  role: "Full-Stack Software Engineer",
  status: "Open to Full-Stack Engineering Roles",
  bio: "Specializing in building robust, high-performance web systems using React, TypeScript, and Tailwind CSS. Cultivating a deep architectural focus on type-safe microservices and relational database designs using Nest.js and PostgreSQL.",
  githubUrl: "https://github.com",
  linkedinUrl: "https://linkedin.com", 
  email: "eliasdawit439@gmail.com",
  resumeUrl: "/resume.pdf", 
  formspreeId: "xkolddek", 
};

export const skillsData: SkillGroup[] = [
  {
    category: "Core Frontend Architecture",
    skills: ["React 19", "TypeScript", "Tailwind CSS v4", "shadcn/ui Design Systems", "Next.js Framework"],
  },
  {
    category: "Backend Systems & Database Design",
    skills: ["Node.js Runtime", "Express.js", "Nest.js Architecture", "PostgreSQL", "MongoDB NoSQL"],
  },
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: "EthioAcademy Mobile App (In Development)",
    description: "Engineering a cross-platform mobile learning management system designed for localized educational delivery. Features include offline video caching architecture, progressive localized synchronization, and interactive student assessment modules.",
    technologies: ["React Native", "TypeScript", "Nest.js", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/ethio-academy",
    featured: true,
  },
  {
    id: 2,
    title: "HabeshaCrop - AgriTech Logistics Engine (In Development)",
    description: "Designing a high-throughput supply chain marketplace mapping rural Ethiopian farm yields directly to regional distributors. Implementing advanced GIS spatial querying, automated inventory tracking, and dynamic regional pricing algorithms.",
    technologies: ["Node.js", "Express.js", "MongoDB", "TypeScript", "PostgreSQL"],
    githubUrl: "https://github.com/habeshacrop",
    featured: true,
  },
];
