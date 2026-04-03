"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-black dark:bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-xl text-slate-300 mb-12">
          Have a project in mind? Let's discuss how I can help bring your ideas to life.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
          <Button size="lg" className="px-8 text-base dark:text-white" asChild>
            <a href="mailto:your.email@example.com">Send Email</a>
          </Button>
          <Button variant="outline" size="lg" className="px-8 text-base border-white text-white hover:bg-white hover:text-black" asChild>
            <a href="#">LinkedIn</a>
          </Button>
          <Button variant="outline" size="lg" className="px-8 text-base border-white text-white hover:bg-white hover:text-black" asChild>
            <a href="#">GitHub</a>
          </Button>
        </div>
        <Separator className="my-6 bg-slate-700" />
        <p className="text-slate-400 text-sm">
          © 2026 Your Name. All rights reserved.
        </p>
      </div>
    </section>
  );
}
