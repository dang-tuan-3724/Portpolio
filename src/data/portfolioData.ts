import type React from 'react';
import { Palette, Code2, Users2, Sparkles, Figma, Codepen, Smartphone, Braces, FileCode2, MessageCircle, Languages, Users, Clock, Puzzle, Lightbulb, Github, ChevronsLeftRightEllipsis  } from 'lucide-react';
import nicefrais from "@/assets/demo/Nicefrais.png"
import tesell from "@/assets/demo/tesell.png"
import zoizoi from "@/assets/demo/zoizoi.png"
import bkprint from "@/assets/demo/bkprint.png"
import portfolio from "@/assets/demo/port.png"

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
    title: "Tessel - an Ecommerce Website",
    description: "[Web] An e-commerce website which sells technology devices and accessories.This is a project in “Đồ án tổng hợp - hướng Công nghệ phần mềm” subject. Collaborated on UI design and frontend feature development.",
    imageUrl: tesell.src, // Use .src for StaticImageData
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
    imageUrl: bkprint.src, // Use .src for StaticImageData
    imageHint: "Print service website",
    tags: ["React", "JavaScript", "Tailwind CSS", "MongoDB", "REST API"],
    liveUrl: "#",
    repoUrl:"https://github.com/vmanhhh/hcmut_print_service.git",
    figmaUrl: "https://www.figma.com/design/vuFRKDd7eN0T3TkV1u0L7R/BK.Print",
  },
  {
    id: 3,
    title: "ZOIZOI - An application to control IOT devices",
    description: "[Mobile App] This is a project in “Thực tập đồ án đa ngành - hướng CNPM” subject. Collaborated on UI design and frontend feature development.",
    imageUrl: zoizoi.src, // Use .src for StaticImageData
    imageHint: "IOT web",
    tags: ["React Native", "TypeScript", "Tailwind CSS", "REST API", "mySQL", "Expo"],
    liveUrl: "#",
    repoUrl: "https://github.com/dang-tuan-3724/DOIDOI.git",
    figmaUrl: "https://www.figma.com/design/hWWmFA7sC9dEKfpamM7NHY/zoizoi",

  },
   {
    id: 4,
    title: "NiceFrais - An Ecommercial website selling agricultural products",
    description: "This is a mini team project I participated in. Collaborated on UI design and frontend feature development.",
    imageUrl: nicefrais.src, // Use .src for StaticImageData
    imageHint: "sell agricultural products ",
    tags: ["React", "JavaScript", "Tailwind CSS", "REST API", "MongoDB"],
    liveUrl: "#",
    repoUrl: "https://github.com/longhoang130704/Agriculture-Ecommerce.git",
    figmaUrl: "https://www.figma.com/design/7brQ3qWdFTYALF7j2trLPH/nicefrais",
  },
  {
    id: 5,
    title: "Portfolio",
    description: "This is a portpolio project to introduce myself.",
    imageUrl: portfolio.src, // Use .src for StaticImageData
    imageHint: "sell agricultural products ",
    tags: ["React", "Tailwind CSS", "NextJs","TypeScript", "Framer Motion"],
    repoUrl: "https://github.com/dang-tuan-3724/Portpolio.git",
  },
];

export const skillsData: SkillCategory[] = [
  {
    id: 1,
    categoryName: "Programming Languages & Frameworks",
    categoryIcon: Code2,
    skills: [
      { name: "ReactJS", icon: Codepen }, // Using Codepen as a stand-in for React logo
      { name: "React Native", icon: Smartphone },
      { name: "JavaScript", icon: Braces },
      { name: "C++", icon: FileCode2 },
      { name: "Github", icon: Github },
      { name: "RESTfull API", icon: ChevronsLeftRightEllipsis  },
      
    ],
  },
  {
    id: 2,
    categoryName: "Soft Skills",
    categoryIcon: Users2,
    skills: [
      { name: "Strong communication skills", icon: MessageCircle },
      { name: "Basic English proficiency", icon: Languages },
    ],
  },
  {
    id: 3,
    categoryName: "UI Design",
    categoryIcon: Palette,
    skills: [
      { name: "Figma", icon: Figma },
    ],
  },
  {
    id: 4,
    categoryName: "Other Skills",
    categoryIcon: Sparkles,
    skills: [
      { name: "Teamwork", icon: Users },
      { name: "Time management", icon: Clock },
      { name: "Problem-solving", icon: Puzzle },
      { name: "Creativity", icon: Lightbulb },
    ],
  },
];
