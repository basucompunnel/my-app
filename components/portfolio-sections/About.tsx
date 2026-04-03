"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-slate-900 dark:text-white">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              I'm a senior full stack developer with 5+ years of experience
              building scalable web applications, specializing in React
              (frontend). I've worked with clients ranging from startups to
              mid-size companies, bringing expertise in both client and
              server-side development.
            </p>
            <Separator className="my-6 bg-slate-200 dark:bg-slate-800" />
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              I'm passionate about writing clean, maintainable code and
              mentoring junior developers. I love solving complex problems and
              continuously learning new technologies in the evolving frontend
              landscape.
            </p>
            <Separator className="my-6 bg-slate-200 dark:bg-slate-800" />
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              My approach focuses on understanding business needs first, then
              crafting elegant technical solutions that deliver real value.
            </p>
          </div>
          <div className="flex justify-center">
            <Avatar className="w-64 h-64">
              <AvatarImage
                src="https://play-lh.googleusercontent.com/EnxJKkoXzxrmA0RA0gUie0K4gvbRLrQhpflyMzwSMvCfk2FA6o9sBLzfWtG5qLzIBIc"
                //   src="https://github.com/shadcn.png"
                alt="Profile"
              />
              <AvatarFallback>Your Name</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  );
}
