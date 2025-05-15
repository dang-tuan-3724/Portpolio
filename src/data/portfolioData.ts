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
  figmaUrl?: string;
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
    title: "Tessel - an Ecommerce Website",
    description: "[Web] An e-commerce website which sells technology devices and accessories.This is a project in “Đồ án tổng hợp - hướng Công nghệ phần mềm” subject. Collaborated on UI design and frontend feature development.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "online shopping",
    tags: ["React", "JavaScript", "Tailwind CSS", "MongoDB", "REST API"],
    liveUrl: "#",
    repoUrl: "https://github.com/HCMUT-Tesell/Tesell",
    figmaUrl: "https://www.figma.com/design/chzwSn4BlVLg79SETqcwSJ/Tesell",
  },
  {
    id: 2,
    title: "BK.Print <> - a website for “Print service”",
    description: "[Web] A website for “Print service” a service that helps HCMUT students print their documents securely and easily. This is a project in “Software Engineering” subject. Collaborated on UI design and frontend feature development.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "Print service website",
    tags: ["React", "JavaScript", "Tailwind CSS", "MongoDB", "REST API"],
    liveUrl: "#",
    repoUrl:"#",
    figmaUrl: "https://www.figma.com/design/chzwSn4BlVLg79SETqcwSJ/Tesell",
  },
  {
    id: 3,
    title: "ZOIZOI - An application to control IOT devices",
    description: "[Mobile App] This is a project in “Thực tập đồ án đa ngành - hướng CNPM” subject. Collaborated on UI design and frontend feature development.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "IOT web",
    tags: ["React Native", "TypeScript", "Tailwind CSS", "REST API", "mySQL", "Expo"],
    liveUrl: "#",
    repoUrl: "#",
    figmaUrl: "https://www.figma.com/design/chzwSn4BlVLg79SETqcwSJ/Tesell",

  },
   {
    id: 4,
    title: "NiceFrais - An Ecommercial website selling agricultural products",
    description: "This is a mini team project I participated in. Collaborated on UI design and frontend feature development.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "sell agricultural products ",
    tags: ["React", "JavaScript", "Tailwind CSS", "REST API", "MongoDB"],
    liveUrl: "#",
    repoUrl: "#",
    figmaUrl: "https://www.figma.com/design/chzwSn4BlVLg79SETqcwSJ/Tesell",

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

