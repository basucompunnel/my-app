"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Experience() {
  const experience = [
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
    },
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-slate-900 dark:text-white">Experience</h2>
        <div className="space-y-8">
          {experience.map((job, idx) => (
            <div key={job.id}>
              <Card className="border-l-4 border-l-blue-600 dark:border-l-blue-400 dark:bg-slate-950 dark:border-slate-700">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl dark:text-white">{job.title}</CardTitle>
                      <CardDescription className="text-base mt-2 dark:text-slate-400">{job.company}</CardDescription>
                    </div>
                    <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">{job.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp, respIdx) => (
                      <li key={respIdx} className="text-slate-600 dark:text-slate-300 flex items-start">
                        <span className="mr-3 text-blue-600 dark:text-blue-400">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              {idx < experience.length - 1 && <Separator className="my-4 bg-slate-200 dark:bg-slate-800" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
