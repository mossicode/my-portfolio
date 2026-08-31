"use client";

import { GitFork, ExternalLink, Star, DecimalsArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "MyHerat",
    description:
      "A comprehensive web platform for Herat featuring hotels, vehicle rentals, tour guides, and local services. Built with a modern multilingual interface and an admin dashboard for managing platform content.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Prisma",
      "MongoDB",
      "next-intl",
    ],
    image: "/projects/myherat.png",
    github: "https://github.com/mossicode/mossicode",
    demo: "https://myherat.com",
    featured: true,
  },
  {
    title: "EIMS",
    description:
      "A modern management system designed to organize and manage business data through a responsive dashboard with forms, tables, filtering, and administrative features.",
    tech: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Prisma",
      "MongoDB",
    ],
    image: "/projects/eims.png",
    github: "https://github.com/mossicode/mossicode",
    demo: "https://demo.example.com",
    featured: true,
  },
  {
    title: "Hotel Management System",
    description:
      "A hotel management platform with multilingual hotel information, room management, ratings, filtering, image galleries, and an administrative interface for creating and editing hotels.",
    tech: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "React Hook Form",
      "Zod",
      "Prisma",
    ],
    image: "/projects/hotel-management.png",
    github: "https://github.com/mossicode",
    demo: "https://demo.example.com",
    featured: true,
  },
  {
    title: "Vehicle Rental Management",
    description:
      "A vehicle rental management system with administrative pages for managing rental vehicles, detailed vehicle information, forms, filtering, and CRUD operations.",
    tech: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "React Hook Form",
      "Zod",
      "Prisma",
    ],
    image: "/projects/vehicle-rental.png",
    github: "https://github.com/mossicode",
    demo: "https://demo.example.com",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8 max-md:py-12 max-md:px-4">
      <div className="max-w-7xl">
        <div className=" mb-10">
          <div className="flex items-center gap-2 mb-4">
        <DecimalsArrowRightIcon className="w-8 h-8 text-primary max-md:h-6 max-md:w-6" />
        <h2 className="font-heading text-4xl max-md:text-2xl font-bold">Projects</h2>
      </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className={cn(
                "bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300",
                project.featured && "ring-2 ring-primary/20"
              )}
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50">
                  <span className="text-sm font-mono">Project Preview</span>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 group">
                    <span className="bg-primary/90 text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6 space-y-4 group">
                <h3 className="font-heading text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-muted rounded text-xs font-medium border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-4 text-muted-foreground/70 text-sm">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      247
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      42
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      aria-label="View on GitHub"
                    >
                      <GitFork className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-lg  text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      aria-label="View Demo"
                    >
                      <ExternalLink className="w-4 h-4 group-hover:w-6 group-hover:h-6 group-hover:text-green-600" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/mossicode"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border bg-transparent text-foreground rounded-none text-sm font-semibold tracking-widest uppercase hover:bg-muted transition-colors"
          >
            View All Projects
            <GitFork className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}