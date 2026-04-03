"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Award, Trophy, Medal, CheckCircle2 } from "lucide-react";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  icon: React.ComponentType<{ className?: string }>;
  credentialUrl?: string;
}

const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect Associate",
    issuer: "Amazon Web Services",
    date: "January 2024",
    icon: Award,
    credentialUrl: "https://aws.amazon.com/certification/",
  },
  {
    id: 2,
    title: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "August 2023",
    icon: Trophy,
    credentialUrl: "https://cloud.google.com/certification/",
  },
  {
    id: 3,
    title: "Azure Solutions Architect Expert",
    issuer: "Microsoft",
    date: "May 2023",
    icon: Medal,
    credentialUrl: "https://learn.microsoft.com/en-us/certifications/",
  },
  {
    id: 4,
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "March 2023",
    icon: CheckCircle2,
    credentialUrl: "https://www.cncf.io/certification/cka/",
  },
];

interface CertificationCardProps {
  certification: Certification;
}

function CertificationCard({ certification }: CertificationCardProps) {
  const IconComponent = certification.icon;

  return (
    <Card className="border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40">
      <CardHeader>
        <div className="flex items-start gap-3">
          <IconComponent className="w-6 h-6 text-slate-600 dark:text-slate-400 mt-1 shrink-0" />
          <div className="flex-1">
            <CardTitle className="text-xl text-slate-900 dark:text-white">{certification.title}</CardTitle>
            <CardDescription className="text-base mt-2 dark:text-slate-400">{certification.issuer}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <Separator className="bg-slate-200 dark:bg-slate-700" />
      <CardContent className="pt-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{certification.date}</p>
          {certification.credentialUrl && (
            <a
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 underline"
            >
              View Credential →
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function Certification() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-slate-900 dark:text-white">Certifications</h2>
        <div className="space-y-6">
          {CERTIFICATIONS_DATA.map((cert) => (
            <CertificationCard key={cert.id} certification={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
