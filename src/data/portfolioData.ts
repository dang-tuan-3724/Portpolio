import type React from 'react';
import { Laptop, Smartphone, Database, Cloud, Server, Github } from 'lucide-react'; // Example icons

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  imageHint?: string;
}

export interface Skill {
  id: number;
  name: string;
  level: number; // Percentage 0-100
  icon?: React.ElementType;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with modern UI and robust backend integration, designed for scalability and user engagement.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "online shopping",
    tags: ["React", "Node.js", "Stripe", "Tailwind CSS", "PostgreSQL"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management tool to boost productivity and team efficiency, featuring real-time updates and a clean interface.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "to-do list",
    tags: ["Next.js", "Firebase", "GraphQL", "Material UI", "TypeScript"],
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description: "This very portfolio website, showcasing my projects and skills with a clean, modern design and smooth animations.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "web design",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    repoUrl: "#",
  },
   {
    id: 4,
    title: "Recipe Sharing App",
    description: "A community-driven platform for users to share and discover new recipes, with features like user accounts, ratings, and search.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "food cooking",
    tags: ["Vue.js", "Django", "REST API", "Bootstrap"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

export const skillsData: Skill[] = [
  { id: 1, name: "JavaScript (ES6+)", level: 90, icon: Laptop },
  { id: 2, name: "React & Next.js", level: 85, icon: Smartphone },
  { id: 3, name: "Node.js & Express", level: 75, icon: Server },
  { id: 4, name: "Python & Django", level: 70, icon: Server },
  { id: 5, name: "Tailwind CSS", level: 95, icon: Laptop },
  { id: 6, name: "TypeScript", level: 80, icon: Laptop },
  { id: 7, name: "SQL & NoSQL Databases", level: 78, icon: Database },
  { id: 8, name: "Git & GitHub", level: 90, icon: Github },
  { id: 9, name: "RESTful APIs & GraphQL", level: 82, icon: Cloud },
  { id: 10, name: "Docker & CI/CD", level: 65, icon: Cloud },
];

