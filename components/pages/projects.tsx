"use client";

import ProjectsHeader from "@/components/projects-header";
import { ProjectsList } from "@/components/portfolio-sections/Projects";
import { Briefcase, Code2, BarChart3, Home, Zap, Lock, Smartphone, Layers, GitBranch, Cloud, MessageCircle } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  role: string;
  type: string;
  link: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ALL_PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce platform with real-time inventory management and payment integration.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    role: "Lead Developer",
    type: "Client Project",
    link: "#",
    icon: Briefcase,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team collaboration features.",
    technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    role: "Full-Stack Developer",
    type: "Personal Project",
    link: "#",
    icon: Code2,
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard for tracking user engagement and business metrics.",
    technologies: ["React", "D3.js", "Express", "MongoDB"],
    role: "Lead Developer",
    type: "Client Project",
    link: "#",
    icon: BarChart3,
  },
  {
    id: 4,
    title: "Real Estate Platform",
    description: "Online property marketplace with virtual tours, listing management, and buyer-seller communication.",
    technologies: ["Vue.js", "Python", "Django", "PostgreSQL"],
    role: "Full-Stack Developer",
    type: "Client Project",
    link: "#",
    icon: Home,
  },
  {
    id: 5,
    title: "Social Media Analytics",
    description: "Advanced analytics tool for tracking social media performance across multiple platforms with AI insights.",
    technologies: ["React", "Node.js", "TensorFlow", "Redis"],
    role: "Lead Developer",
    type: "Startup Project",
    link: "#",
    icon: Zap,
  },
  {
    id: 6,
    title: "AI Chatbot Platform",
    description: "Conversational AI platform for customer support with Natural Language Processing and machine learning.",
    technologies: ["Python", "FastAPI", "OpenAI API", "PostgreSQL"],
    role: "Backend Lead",
    type: "Startup Project",
    link: "#",
    icon: MessageCircle,
  },
  {
    id: 7,
    title: "Mobile Banking App",
    description: "Cross-platform mobile banking application with secure transactions and account management.",
    technologies: ["React Native", "TypeScript", "Spring Boot", "PostgreSQL"],
    role: "Full-Stack Developer",
    type: "Client Project",
    link: "#",
    icon: Smartphone,
  },
  {
    id: 8,
    title: "Design System Library",
    description: "Comprehensive component library and design system documentation for enterprise applications.",
    technologies: ["React", "TypeScript", "Storybook", "Tailwind CSS"],
    role: "Lead Developer",
    type: "Internal Project",
    link: "#",
    icon: Layers,
  },
  {
    id: 9,
    title: "DevOps Automation Pipeline",
    description: "CI/CD pipeline automation tool with Docker containerization and Kubernetes orchestration.",
    technologies: ["Python", "Docker", "Kubernetes", "GitHub Actions"],
    role: "DevOps Engineer",
    type: "Internal Project",
    link: "#",
    icon: GitBranch,
  },
  {
    id: 10,
    title: "Cloud Infrastructure Manager",
    description: "Multi-cloud infrastructure management platform with real-time resource monitoring and optimization.",
    technologies: ["Go", "Terraform", "AWS", "Dashboard UI"],
    role: "Backend Lead",
    type: "SaaS Product",
    link: "#",
    icon: Cloud,
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <ProjectsHeader />
      <section className="py-20 px-4 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto">
          <ProjectsList projects={ALL_PROJECTS} />
        </div>
      </section>
    </main>
  );
}
