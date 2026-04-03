"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce platform with real-time inventory management and payment integration.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      role: "Lead Developer",
      type: "Client Project",
      link: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
      role: "Full-Stack Developer",
      type: "Personal Project",
      link: "#",
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard for tracking user engagement and business metrics.",
      technologies: ["React", "D3.js", "Express", "MongoDB"],
      role: "Lead Developer",
      type: "Client Project",
      link: "#",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-slate-900 dark:text-white">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition overflow-hidden dark:border-slate-700">
              <div className="bg-slate-300 dark:bg-slate-800 h-48 flex items-center justify-center">
                <p className="text-slate-500 dark:text-slate-400">Project image</p>
              </div>
              <CardHeader>
                <CardTitle className="text-xl dark:text-white">{project.title}</CardTitle>
                <CardDescription className="dark:text-slate-400">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">{project.role} • {project.type}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0" asChild>
                  <a href={project.link}>View Project →</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
