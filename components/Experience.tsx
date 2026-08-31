"use client";

import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Web Developer",
    company: "MarsCoders",
    period: "2025 - Present",
    description:
      "Developing modern and responsive web applications using Next.js, React, TypeScript, Tailwind CSS, and other modern web technologies. Working on real-world projects and collaborating with designers and developers.",
  },
  {
    title: "Frontend Intern",
    company: "Rubik",
    period: "6 Months",
    description:
      "Built responsive user interfaces and reusable components for web projects. Worked with React, Next.js, Tailwind CSS, and API integration to create scalable and user-friendly applications.",
  },
  {
    title: "Computer Science Student",
    company: "Herat University",
    period: "2022 - Present",
    description:
      "Studying Computer Science with a focus on networking and software development. Developing practical skills in web development, computer networks, and modern programming technologies.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-8 max-md:py-6 max-md:px-4">
      <div className="max-w-4xl w-full">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12 max-md:mb-6">
          <Briefcase className="w-6 h-6 text-green-500" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-border hover:border-green-500 transition-colors max-md:pl-4"
            >
              {/* Dot */}
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-2.25 rounded-full bg-green-500 max-md:w-3 max-md:h-3" />

              {/* Content */}
              <div className="bg-card/50 backdrop-blur-sm rounded-xl border border-border p-6 hover:border-green-500/50 transition-colors max-md:p-4">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2 max-md:mb-1.5">
                  <h3 className="text-xl font-semibold text-foreground max-md:text-lg">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-green-500 font-medium max-md:w-full ">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground mb-3">{exp.company}</p>
                <p className="text-muted-foreground/80 max-md:text-xs">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
