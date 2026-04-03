"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BookOpen, GraduationCap, Zap, Award } from "lucide-react";

interface Education {
  id: number;
  degree: string;
  school: string;
  graduationYear: string;
  icon: React.ComponentType<{ className?: string }>;
  gpa?: string;
  honors?: string;
}

const EDUCATION_DATA: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    school: "Stanford University",
    graduationYear: "2020",
    icon: GraduationCap,
    gpa: "3.8",
    honors: "Magna Cum Laude",
  },
  {
    id: 2,
    degree: "Master of Science in Computer Engineering",
    school: "Carnegie Mellon University",
    graduationYear: "2022",
    icon: BookOpen,
    gpa: "3.9",
    honors: "Summa Cum Laude",
  },
  {
    id: 3,
    degree: "Full-Stack Web Development Bootcamp",
    school: "Springboard",
    graduationYear: "2018",
    icon: Zap,
  },
];

interface EducationCardProps {
  education: Education;
}

function EducationCard({ education }: EducationCardProps) {
  const IconComponent = education.icon;

  return (
    <Card className="border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40">
      <CardHeader>
        <div className="flex items-start gap-3">
          <IconComponent className="w-6 h-6 text-slate-600 dark:text-slate-400 mt-1 shrink-0" />
          <div className="flex-1">
            <CardTitle className="text-xl text-slate-900 dark:text-white">{education.degree}</CardTitle>
            <CardDescription className="text-base mt-2 dark:text-slate-400">{education.school}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <Separator className="bg-slate-200 dark:bg-slate-700" />
      <CardContent className="pt-4">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{education.graduationYear}</p>
          {(education.gpa || education.honors) && (
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {education.gpa && <span>GPA: {education.gpa}</span>}
              {education.gpa && education.honors && <span> � </span>}
              {education.honors && <span>{education.honors}</span>}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function Education() {
  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-slate-900 dark:text-white">Education</h2>
        <div className="space-y-6">
          {EDUCATION_DATA.map((edu) => (
            <EducationCard key={edu.id} education={edu} />
          ))}
        </div>
      </div>
    </section>
  );
}
