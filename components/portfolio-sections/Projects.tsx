"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { StaticImageData } from "next/image";
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
} from "lucide-react";

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

const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce platform with real-time inventory management and payment integration.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    role: "Lead Developer",
    type: "Client Project",
    link: "#",
    icon: Briefcase,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates and team collaboration features.",
    technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    role: "Full-Stack Developer",
    type: "Personal Project",
    link: "#",
    icon: Code2,
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard for tracking user engagement and business metrics.",
    technologies: ["React", "D3.js", "Express", "MongoDB"],
    role: "Lead Developer",
    type: "Client Project",
    link: "#",
    icon: BarChart3,
  },
  {
    id: 4,
    title: "Real Estate Platform",
    description:
      "Online property marketplace with virtual tours, listing management, and buyer-seller communication.",
    technologies: ["Vue.js", "Python", "Django", "PostgreSQL"],
    role: "Full-Stack Developer",
    type: "Client Project",
    link: "#",
    icon: Home,
  },
  {
    id: 5,
    title: "Social Media Analytics",
    description:
      "Advanced analytics tool for tracking social media performance across multiple platforms with AI insights.",
    technologies: ["React", "Node.js", "TensorFlow", "Redis"],
    role: "Lead Developer",
    type: "Startup Project",
    link: "#",
    icon: Zap,
  },
  {
    id: 6,
    title: "AI Chatbot Platform",
    description:
      "Conversational AI platform for customer support with Natural Language Processing and machine learning.",
    technologies: ["Python", "FastAPI", "OpenAI API", "PostgreSQL"],
    role: "Backend Lead",
    type: "Startup Project",
    link: "#",
    icon: MessageCircle,
  },
  {
    id: 7,
    title: "Mobile Banking App",
    description:
      "Cross-platform mobile banking application with secure transactions and account management.",
    technologies: ["React Native", "TypeScript", "Spring Boot", "PostgreSQL"],
    role: "Full-Stack Developer",
    type: "Client Project",
    link: "#",
    icon: Smartphone,
  },
  {
    id: 8,
    title: "Design System Library",
    description:
      "Comprehensive component library and design system documentation for enterprise applications.",
    technologies: ["React", "TypeScript", "Storybook", "Tailwind CSS"],
    role: "Lead Developer",
    type: "Internal Project",
    link: "#",
    icon: Layers,
  },
  {
    id: 9,
    title: "DevOps Automation Pipeline",
    description:
      "CI/CD pipeline automation tool with Docker containerization and Kubernetes orchestration.",
    technologies: ["Python", "Docker", "Kubernetes", "GitHub Actions"],
    role: "DevOps Engineer",
    type: "Internal Project",
    link: "#",
    icon: GitBranch,
  },
  {
    id: 10,
    title: "Cloud Infrastructure Manager",
    description:
      "Multi-cloud infrastructure management platform with real-time resource monitoring and optimization.",
    technologies: ["Go", "Terraform", "AWS", "Dashboard UI"],
    role: "Backend Lead",
    type: "SaaS Product",
    link: "#",
    icon: Cloud,
  },
];

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const IconComponent = project.icon;

  return (
    <Card className="border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40 hover:shadow-lg transition overflow-hidden">
      <div className="bg-slate-300 dark:bg-slate-800 h-48 flex items-center justify-center">
        <p className="text-slate-500 dark:text-slate-400">Project image</p>
      </div>
      <CardHeader>
        <div className="flex items-center gap-3">
          <IconComponent className="w-6 h-6 text-slate-600 dark:text-slate-400" />
          <CardTitle className="text-xl text-slate-900 dark:text-white">
            {project.title}
          </CardTitle>
        </div>
        <CardDescription className="dark:text-slate-400">
          {project.description}
        </CardDescription>
      </CardHeader>
      <Separator className="bg-slate-200 dark:bg-slate-700" />
      <CardContent className="pt-4">
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
          {project.role} • {project.type}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              className="p-4 text-sm bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant="ghost"
          className="text-blue-600 hover:text-blue-700 p-0"
          asChild
        >
          <a href={project.link}>View Project →</a>
        </Button>
      </CardFooter>
    </Card>
  );
}

interface ProjectsGridProps {
  projects: Project[];
}

function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

interface HorizontalProjectCardProps {
  project: Project;
}

function HorizontalProjectCardOld({ project }: HorizontalProjectCardProps) {
  const IconComponent = project.icon;

  // Handle both string paths and StaticImageData
  const imageSrc = typeof project.image === 'string' ? project.image : project.image?.src;

  return (
    <Card className="rounded-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40 hover:shadow-lg transition overflow-hidden">
      {/* Image Section - Full Width on Top */}
      <div className="bg-slate-300 dark:bg-slate-800 w-full h-96 flex items-center justify-center overflow-hidden">
        {imageSrc ? (
          <img src={imageSrc} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <p className="text-slate-500 dark:text-slate-400">Project image</p>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col p-6">
        <div className="flex items-center gap-3 mb-3">
          <IconComponent className="w-6 h-6 text-slate-600 dark:text-slate-400" />
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            {project.title}
          </h3>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
          {project.description}
        </p>
        <Separator className="bg-slate-200 dark:bg-slate-700 mb-4" />
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
          {project.role} • {project.type}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <Button variant="link" className="p-0 h-auto justify-start" asChild>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project →</a>
        </Button>
      </div>
    </Card>
  );
}

function HorizontalProjectCard({ project }: HorizontalProjectCardProps) {
  const IconComponent = project.icon;

  // Handle both string paths and StaticImageData
  const imageSrc = typeof project.image === 'string' ? project.image : project.image?.src;

  return (
    <Card className="rounded-xs border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40 hover:shadow-lg transition overflow-hidden flex flex-col">
      {/* Image Section - Full Width on Top */}
      <div className="bg-slate-300 dark:bg-slate-800 w-full h-96 flex items-center justify-center overflow-hidden">
        {imageSrc ? (
          <img src={imageSrc} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <p className="text-slate-500 dark:text-slate-400">Project image</p>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col p-6">
        <div className="flex items-center gap-3 mb-3">
          <IconComponent className="w-6 h-6 text-slate-600 dark:text-slate-400" />
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            {project.title}
          </h3>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
          {project.description}
        </p>
        <Separator className="bg-slate-200 dark:bg-slate-700 mb-4" />
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
          {project.role} • {project.type}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs p-4"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <Button variant="link" className="p-0 h-auto justify-start" asChild>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project →</a>
        </Button>
      </div>
    </Card>
  );
}

interface ProjectsListProps {
  projects: Project[];
}

function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <div className="space-y-6">
      {projects.map((project) => (
        <HorizontalProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-slate-900 dark:text-white">
          Featured Projects
        </h2>
        <ProjectsGrid projects={PROJECTS_DATA.slice(0, 3)} />
      </div>
    </section>
  );
}

export { ProjectsList };
