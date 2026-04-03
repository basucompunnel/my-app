"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Award, TrendingUp, Briefcase } from "lucide-react";

interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const EXPERIENCE_DATA: Experience[] = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    company: "Tech Company Inc.",
    duration: "2022 - Present",
    responsibilities: [
      "Led development of microservices architecture serving 100k+ users",
      "Mentored team of 5 junior developers",
      "Improved application performance by 40% through optimization",
    ],
    icon: Award,
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    company: "Startup Labs",
    duration: "2020 - 2022",
    responsibilities: [
      "Built and deployed 3 production applications",
      "Implemented CI/CD pipelines reducing deployment time by 50%",
      "Collaborated with product team to deliver features on time",
    ],
    icon: TrendingUp,
  },
  {
    id: 3,
    title: "Junior Developer",
    company: "Web Solutions",
    duration: "2018 - 2020",
    responsibilities: [
      "Developed responsive web applications using React and Vue.js",
      "Fixed bugs and implemented new features in legacy codebase",
      "Participated in code reviews and improved code quality",
    ],
    icon: Briefcase,
  },
];

interface ExperienceCardProps {
  job: Experience;
}

function ExperienceCard({ job }: ExperienceCardProps) {
  const IconComponent = job.icon;

  return (
    <Card className="border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40">
      <CardHeader>
        <div className="flex items-start gap-3">
          <IconComponent className="w-6 h-6 text-slate-600 dark:text-slate-400 mt-1 shrink-0" />
          <div className="flex-1">
            <div className="flex justify-between items-start gap-4">
              <div>
                <CardTitle className="text-xl text-slate-900 dark:text-white">{job.title}</CardTitle>
                <CardDescription className="text-base mt-2 dark:text-slate-400">{job.company}</CardDescription>
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-400 font-medium shrink-0">{job.duration}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <Separator className="bg-slate-200 dark:bg-slate-700" />
      <CardContent>
        <ul className="space-y-2">
          {job.responsibilities.map((resp, respIdx) => (
            <li key={respIdx} className="text-slate-600 dark:text-slate-300 flex items-start">
              <span className="mr-3 text-slate-400 dark:text-slate-500 shrink-0">•</span>
              <span>{resp}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default function Experience() {

  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-slate-900 dark:text-white">Experience</h2>
        <div className="space-y-6">
          {EXPERIENCE_DATA.map((job) => (
            <ExperienceCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}
