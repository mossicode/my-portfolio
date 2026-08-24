"use client";

import { Award, BookOpen, Code, Coffee, Heart, Users } from "lucide-react";

const stats = [
  { value: "5+", label: "Years Experience", icon: Code },
  { value: "50+", label: "Projects Completed", icon: Award },
  { value: "20+", label: "Happy Clients", icon: Users },
  { value: "∞", label: "Cups of Coffee", icon: Coffee },
];

const values = [
  {
    icon: Heart,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies and best practices.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Building great products through effective teamwork.",
  },
  {
    icon: Award,
    title: "Quality First",
    description: "Delivering excellence in every line of code.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">
            About Me
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Passionate Developer <span className="text-primary">Crafting Digital Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Full Stack Developer with 5+ years of experience building modern web applications.
            Specialized in React ecosystem, TypeScript, and cloud-native architectures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Started as a frontend developer fascinated by the intersection of design and code.
                Over the years, expanded expertise to full-stack development, embracing the
                challenges of building scalable backend systems and intuitive user interfaces.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Currently focused on the React/Next.js ecosystem, TypeScript, and modern
                infrastructure. Advocate for clean architecture, testing practices, and
                developer experience optimization.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When not coding, you&apos;ll find me contributing to open-source projects,
                mentoring junior developers, or exploring the latest tech trends.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors"
                >
                  <stat.icon className="w-6 h-6 text-primary mb-2" />
                  <p className="font-heading text-3xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-bold">Core Values</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors"
                >
                  <value.icon className="w-6 h-6 text-primary mb-3" />
                  <h4 className="font-semibold text-lg mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-card rounded-2xl border border-border p-8">
          <h3 className="font-heading text-2xl font-bold mb-6 text-center">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "PostgreSQL",
              "MongoDB",
              "Redis",
              "Docker",
              "AWS",
              "Vercel",
              "Tailwind CSS",
              "Prisma",
              "tRPC",
              "Zustand",
              "React Query",
              "Jest",
              "Playwright",
              "GitHub Actions",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-muted rounded-full text-sm font-medium border border-border hover:border-primary/50 hover:bg-primary/10 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}