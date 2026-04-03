"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  //   const backgroundImage =
  //     theme === "dark"
  //       ? "https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  //       : "https://images.unsplash.com/photo-1523297927020-8b58406e40f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const backgroundImage =
    theme === "dark"
      ? "https://images.unsplash.com/photo-1665922370438-5e2014ef60bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      : "https://images.unsplash.com/photo-1529236183275-4fdcf2bc987e?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  if (!mounted) return null;
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Content Layer */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-black dark:text-white">
          Basavachetan Mathapati
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8">
          Senior Full-Stack Developer | Building scalable web experiences
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button
            size="lg"
            className="rounded-sm px-8 text-base"
            // className="rounded-sm px-8 text-base bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-slate-800 dark:hover:bg-slate-100"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-sm px-8 text-base"

            // className="rounded-sm px-8 text-base border-slate-900 dark:border-white text-slate-900 dark:text-white hover:bg-slate-900/10 dark:hover:bg-white/10"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
