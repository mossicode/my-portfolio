"use client";

import { ArrowRight, Code, GitFork, Mail, Terminal, User } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-8 py-20">
      <div className="max-w-4xl w-full text-center">
        <p className="text-primary font-mono text-sm tracking-wider uppercase mb-6 animate-fade-in-up">
          Full Stack Developer
        </p>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-fade-in-up delay-100">
          Mostafa <span className="text-primary">Ansari</span>
        </h1>

        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-up delay-200">
          <span className="bg-muted px-4 py-2 rounded-full text-sm font-medium border border-border">
            React / Next.js
          </span>
          <span className="bg-muted px-4 py-2 rounded-full text-sm font-medium border border-border">
            TypeScript
          </span>
          <span className="bg-muted px-4 py-2 rounded-full text-sm font-medium border border-border">
            Node.js
          </span>
          <span className="bg-muted px-4 py-2 rounded-full text-sm font-medium border border-border">
            PostgreSQL
          </span>
          <span className="bg-muted px-4 py-2 rounded-full text-sm font-medium border border-border">
            Tailwind CSS
          </span>
          <span className="bg-muted px-4 py-2 rounded-full text-sm font-medium border border-border">
            Docker
          </span>
        </div>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up delay-300">
          Building scalable web applications with clean architecture and modern technologies.
          Passionate about developer experience and performant user interfaces.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up delay-400">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-none text-sm font-semibold tracking-widest uppercase hover:bg-primary/80 transition-colors group"
          >
            View Projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border bg-transparent text-foreground rounded-none text-sm font-semibold tracking-widest uppercase hover:bg-muted transition-colors"
          >
            <Mail className="w-4 h-4" />
            Get In Touch
          </a>
        </div>

        <div className="flex justify-center gap-6 animate-fade-in-up delay-500">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted"
            aria-label="GitHub"
          >
            <GitFork className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted"
            aria-label="LinkedIn"
          >
            <User className="w-6 h-6" />
          </a>
          <a
            href="mailto:mostafa@example.com"
            className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-muted-foreground/50 animate-fade-in-up delay-600">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            <span className="text-sm font-mono">npm run dev</span>
          </div>
          <div className="w-px h-6 bg-border" />
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4" />
            <span className="text-sm font-mono">git push origin main</span>
          </div>
          <div className="w-px h-6 bg-border" />
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4" />
            <span className="text-sm font-mono">docker compose up</span>
          </div>
        </div>
      </div>
    </section>
  );
}