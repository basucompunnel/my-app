"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Code, Server, Settings, Users } from "lucide-react";

interface SkillCategory {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: string[];
}

function SkillCategoryCard({ category }: { category: SkillCategory }) {
  const IconComponent = category.icon;

  return (
    <Card className="border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40">
      <CardHeader>
        <div className="flex items-center gap-3">
          <IconComponent className="w-6 h-6 text-slate-600 dark:text-slate-400" />
          <CardTitle className="text-2xl font-semibold text-slate-900 dark:text-white">
            {category.name}
          </CardTitle>
        </div>
      </CardHeader>
      <Separator className="bg-slate-200 dark:bg-slate-700" />
      <CardContent>
        <div className="flex flex-wrap gap-3">
          {category.skills.map((skill) => (
            <Badge
              key={skill}
              className="p-4 text-base bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      icon: Code,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    },
    {
      name: "Backend",
      icon: Server,
      skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
    },
    {
      name: "DevOps",
      icon: Settings,
      skills: ["Docker", "AWS", "Git", "CI/CD", "Linux"],
    },
    {
      name: "Soft Skills",
      icon: Users,
      skills: [
        "Leadership",
        "Mentoring",
        "Communication",
        "Problem-solving",
        "Agile",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-slate-900 dark:text-white">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <SkillCategoryCard key={category.name} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
