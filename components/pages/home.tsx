"use client";

import Hero from "@/components/portfolio-sections/Hero";
import About from "@/components/portfolio-sections/About";
import Skills from "@/components/portfolio-sections/Skills";
import Projects from "@/components/portfolio-sections/Projects";
import Experience from "@/components/portfolio-sections/Experience";
import Contact from "@/components/portfolio-sections/Contact";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
