import type React from 'react';
import { Palette, Code2, Users2, Sparkles, Figma, Codepen, Smartphone, Braces, FileCode2, MessageCircle, Languages, Users, Clock, Puzzle, Lightbulb, Github, ChevronsLeftRightEllipsis, Database, Server, Bot } from 'lucide-react';
import nicefrais from "@/assets/demo/Nicefrais.png";
import zoizoi from "@/assets/demo/zoizoi.png";
import zenit from "@/assets/demo/zenit.jpg";
import campuseats from "@/assets/demo/campuseats.jpg";

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  figmaUrl?: string;
  imageHint?: string;
}

export interface SkillItem {
  name: string;
  icon?: React.ElementType;
}

export interface SkillCategory {
  id: number;
  categoryName: string;
  categoryIcon?: React.ElementType;
  skills: SkillItem[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Zenit - Personal Finance Management Application",
    description: "[Mobile App] Graduation Thesis. Designed a scalable Design System, engineered a cross-platform mobile frontend with advanced financial workflows. Integrated conversational AI Agents and executed a strict testing strategy (70%+ coverage).",
    imageUrl: zenit.src, 
    imageHint: "Finance management app",
    tags: ["Flutter", "Dart", "AI Agents", "lcov/genhtml"],
    liveUrl: "https://youtube.com/shorts/fDT-ZyT5uZQ",
    repoUrl: "https://github.com/DACN-DATN-magift-shun/Zenit-app.git",
  },
  {
    id: 2,
    title: "Campus Eats - Student Food Delivery Network",
    description: "[Mobile App] Spearheaded UI design and developed the responsive merchant portal and admin management dashboards. Collaborated on Node.js backend API integration for real-time delivery tracking.",
    imageUrl: campuseats.src,
    imageHint: "Food delivery app",
    tags: ["React Native", "Expo", "TailwindCSS", "Node.js", "PostgreSQL"],
    liveUrl: "https://youtube.com/watch?v=qxFmiczVoGA",
    repoUrl: "https://github.com/campus-eats-hcmut/mobile-app.git",
  },
  {
    id: 3,
    title: "ZoiZoi - Smart Garden Monitoring Application",
    description: "[Mobile App] Developed core operational screens and interactive dashboards for real-time IoT environmental status tracking. Implemented an automated garden health analysis module.",
    imageUrl: zoizoi.src,
    imageHint: "IOT control app",
    tags: ["React Native", "Expo", "TypeScript", "Tailwind CSS", "REST API"],
    repoUrl: "https://github.com/dang-tuan-3724/ZOIZOI",
  },
  {
    id: 4,
    title: "NiceFrais - Online fresh food store",
    description: "[Web] Designed UI and developed: login page, product cards, search, category filtering, and shopping cart. Built admin-side features to manage products.",
    imageUrl: nicefrais.src,
    imageHint: "Agricultural e-commerce",
    tags: ["React", "JavaScript", "Tailwind CSS", "REST API", "MongoDB"],
    repoUrl: "https://github.com/longhoang130704/Agriculture-Ecommerce.git",
  },

];

export const skillsData: SkillCategory[] = [
  {
    id: 1,
    categoryName: "Programming & Frontend",
    categoryIcon: Code2,
    skills: [
      { name: "Flutter", icon: Smartphone },
      { name: "Dart", icon: FileCode2 },
      { name: "React Native", icon: Smartphone },
      { name: "ReactJS", icon: Codepen },
      { name: "JavaScript", icon: Braces },
      { name: "TypeScript", icon: Braces },
      { name: "C++", icon: FileCode2 },
    ],
  },
  {
    id: 2,
    categoryName: "Backend & Databases",
    categoryIcon: Server,
    skills: [
      { name: "Ruby on Rails", icon: Server },
      { name: "PostgreSQL", icon: Database },
      { name: "RESTful API", icon: ChevronsLeftRightEllipsis },
    ],
  },
  {
    id: 3,
    categoryName: "AI Tools",
    categoryIcon: Bot,
    skills: [
      { name: "GitHub Copilot", icon: Github },
      { name: "Codex", icon: Sparkles },
      { name: "Antigravity", icon: Sparkles },
    ],
  },
  {
    id: 4,
    categoryName: "Languages & UI Design",
    categoryIcon: Languages,
    skills: [
      { name: "English (TOEIC L&R 820)", icon: MessageCircle },
      { name: "Figma", icon: Figma },
    ],
  },
  {
    id: 5,
    categoryName: "Other Skills",
    categoryIcon: Users2,
    skills: [
      { name: "Teamwork", icon: Users },
      { name: "Time management", icon: Clock },
      { name: "Problem-solving", icon: Puzzle },
      { name: "Creativity", icon: Lightbulb },
    ],
  },
];