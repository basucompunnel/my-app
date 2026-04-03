"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Share2, Code2 } from "lucide-react";

interface CTAButton {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  variant: "default" | "outline";
}

const CTA_BUTTONS: CTAButton[] = [
  {
    label: "Send Email",
    href: "mailto:your.email@example.com",
    icon: Mail,
    variant: "outline",
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: Share2,
    variant: "outline",
  },
  {
    label: "GitHub",
    href: "#",
    icon: Code2,
    variant: "outline",
  },
];

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-black dark:bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-slate-100">Let's Work Together</h2>
        <p className="text-xl text-slate-300 mb-12">
          Let's connect and discuss exciting roles!
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
          {CTA_BUTTONS.map((button) => {
            const Icon = button.icon;
            return (
              <Button
                key={button.label}
                variant={button.variant}
                size="lg"
                className={`rounded-sm px-8 text-base flex items-center gap-2 ${
                  button.variant === "outline"
                    ? "text-slate-900 border-slate-400 hover:bg-slate-100 dark:text-slate-100 dark:border-slate-600 dark:hover:bg-slate-900 dark:hover:text-slate-100"
                    : "text-slate-900 dark:text-white"
                }`}
                asChild
              >
                <a href={button.href}>
                  <Icon className="w-4 h-4" />
                  <span>{button.label}</span>
                </a>
              </Button>
            );
          })}
        </div>
        <Separator className="my-6 bg-slate-700 dark:bg-slate-800" />
        <p className="text-slate-400 text-sm">
          © 2026. All rights reserved.
        </p>
      </div>
    </section>
  );
}
