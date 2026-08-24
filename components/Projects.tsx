"use client";

import { GitFork, ExternalLink, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard. Built with Next.js 14, PostgreSQL, and Stripe.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "Tailwind CSS"],
    image: "/projects/ecommerce.png",
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, team workspaces, and advanced filtering. Inspired by Linear and Notion.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Redis", "TypeScript"],
    image: "/projects/taskapp.png",
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: true,
  },
  {
    title: "Developer Portfolio Template",
    description:
      "Modern, accessible portfolio template with dark mode, animations, and CMS integration. Open source with 2k+ stars on GitHub.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "MDX", "TypeScript"],
    image: "/projects/portfolio.png",
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: false,
  },
  {
    title: "Real-time Chat Application",
    description:
      "Scalable chat application with rooms, direct messages, file sharing, and end-to-end encryption. WebSocket-based architecture.",
    tech: ["React", "Node.js", "WebSocket", "PostgreSQL", "TypeScript", "Docker"],
    image: "/projects/chat.png",
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: false,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Business intelligence dashboard with customizable widgets, real-time data visualization, and export capabilities.",
    tech: ["React", "D3.js", "Node.js", "ClickHouse", "TypeScript", "Tailwind CSS"],
    image: "/projects/analytics.png",
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: false,
  },
  {
    title: "CI/CD Pipeline Tool",
    description:
      "Developer tool for managing CI/CD pipelines with visual workflow builder, deployment tracking, and rollback capabilities.",
    tech: ["React", "Go", "Kubernetes", "GraphQL", "TypeScript", "PostgreSQL"],
    image: "/projects/cicd.png",
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">
            Projects
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Selected <span className="text-primary">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects showcasing full-stack development expertise across various domains and technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary/90 text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6 space-y-4">
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
                      className="w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      aria-label="View Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
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