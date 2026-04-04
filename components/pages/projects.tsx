"use client";

import ProjectsHeader from "@/components/projects-header";
import { ProjectsList } from "@/components/portfolio-sections/Projects";
import {
  Briefcase,
  Code2,
  BarChart3,
  Home,
  Zap,
  Lock,
  Smartphone,
  Layers,
  GitBranch,
  Cloud,
  MessageCircle,
  CheckSquare,
  Wallet,
  Gamepad2,
  BookOpen,
  Calculator,
  Code,
  Rocket,
  Inbox,
  TrendingUp,
} from "lucide-react";
import { StaticImageData } from "next/image";
import Images from "@/lib/images";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  role: string;
  type: string;
  link: string;
  icon: React.ComponentType<{ className?: string }>;
  image?: string | StaticImageData;
}

const ALL_PROJECTS: Project[] = [
  
  {
    id: 9,
    title: "Vercel Landing Page Clone",
    description:
      "A pixel-perfect recreation of Vercel's landing page built with Next.js 14, TypeScript, and Tailwind CSS. This project demonstrates advanced React component architecture, responsive design patterns, and modern web development best practices.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    role: "Front-end",
    type: "Personal Project",
    link: "https://basugm.github.io/vercel-launch-clone/",
    icon: Rocket,
    image: Images.VercelLaunchClone,
  },
  {
    id: 10,
    title: "Linear Landing Page Clone",
    description:
      "A pixel-perfect clone of the Linear app built to explore modern frontend architecture, performance, and UX patterns.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    role: "Front-end",
    type: "Personal Project",
    link: "https://basugm.github.io/Linear-App-Clone/",
    icon: Inbox,
    image: Images.LinearAppClone,
  },
  {
    id: 1,
    title: "Personal Kanban Board",
    description:
      "A modern, full-stack task management application showcasing production-ready React patterns, optimistic UI updates, and thoughtful component architecture.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    role: "Full-Stack",
    type: "Personal Project",
    link: "https://personal-kanban-board-ten.vercel.app/",
    icon: CheckSquare,
    image: Images.PersonalKanbanBoard,
  },
  {
    id: 2,
    title: "Expense Tracker",
    description:
      "A full-stack personal finance management application built with modern web technologies. This project demonstrates proficiency in full-stack development, system design, and creating intuitive user experiences for financial data management.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    role: "Full-Stack",
    type: "Personal Project",
    link: "https://expense-tracker-lake-theta-87.vercel.app/",
    icon: Wallet,
    image: Images.ExpenseTracker,
  },
  {
    id: 3,
    title: "Snake Game",
    description:
      "A modern, interactive Snake game built with Next.js 14, TypeScript, and React, showcasing frontend development best practices and contemporary web technologies.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    role: "Front-end",
    type: "Personal Project",
    link: "https://basugm.github.io/snake-game/",
    icon: Gamepad2,
    image: Images.SnakeGame,
  },
  {
    id: 4,
    title: "Memory Card Game",
    description:
      "A modern, interactive memory card game built with cutting-edge web technologies. This project demonstrates proficiency in React, Next.js, TypeScript, and modern UI/UX patterns.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    role: "Front-end",
    type: "Personal Project",
    link: "https://basugm.github.io/memory-card-game/",
    icon: Gamepad2,
    image: Images.MemoryCardGame,
  },
  {
    id: 5,
    title: "React Basics Tutorial",
    description:
      "A comprehensive, interactive learning platform for mastering React fundamentals. This project demonstrates modern full-stack development practices with a focus on building scalable, component-driven applications.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    role: "Front-end",
    type: "Personal Project",
    link: "https://basugm.github.io/react-basics-tutorial/",
    icon: BookOpen,
    image: Images.ReactBasicsTutorial,
  },
  {
    id: 6,
    title: "Practical Investment Calculators",
    description:
      "A comprehensive suite of financial planning and investment calculators built with modern web technologies. This project demonstrates full-stack development skills, complex financial calculations, data visualization, and responsive UI/UX design.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    role: "Front-end",
    type: "Personal Project",
    link: "https://basugm.github.io/practical-investment-calculators/",
    icon: Calculator,
    image: Images.PracticalInvestmentCalculators,
  },
  {
    id: 7,
    title: "JSON Tools",
    description:
      "A comprehensive suite of 8 professional JSON utilities built with modern web technologies. Features a clean, responsive interface with dark mode support and real-time syntax highlighting powered by Monaco Editor.",
    technologies: ["React", "TypeScript", "Monaco Editor", "Tailwind CSS"],
    role: "Front-end",
    type: "Personal Project",
    link: "https://basugm.github.io/json-tools/",
    icon: Code,
    image: Images.JsonTools,
  },
  {
    id: 8,
    title: "Financial Calculators",
    description:
      "A comprehensive web application featuring 8+ financial calculators built with Next.js 15, TypeScript, and modern React patterns. This project demonstrates proficiency in building complex financial applications with clean architecture, excellent UX, and production-ready code.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    role: "Front-end",
    type: "Personal Project",
    link: "https://basugm.github.io/financial-calculator/",
    icon: TrendingUp,
    image: Images.FinancialCalculator,
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <ProjectsHeader />
      <section className="px-4 bg-white dark:bg-black">
        <div className="max-w-5xl mx-auto mb-12">
          <ProjectsList projects={ALL_PROJECTS} />
        </div>
      </section>
    </main>
  );
}
