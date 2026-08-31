"use client";

import { Layers } from "lucide-react";

const tools = [
  {
    name: "Next.js",
    description: "React Framework",
    icon: "▲",
    color: "bg-white/10 text-white",
  },
  {
    name: "React",
    description: "Frontend Library",
    icon: "⚛️",
    color: "bg-cyan-500/20 text-cyan-400",
  },
  {
    name: "TypeScript",
    description: "Programming Language",
    icon: "🔷",
    color: "bg-blue-500/20 text-blue-400",
  },
  {
    name: "JavaScript",
    description: "Programming Language",
    icon: "🟨",
    color: "bg-yellow-500/20 text-yellow-400",
  },
  {
    name: "Python",
    description: "Programming Language",
    icon: "🐍",
    color: "bg-green-500/20 text-green-400",
  },
  {
    name: "Java",
    description: "Programming Language",
    icon: "☕",
    color: "bg-orange-500/20 text-orange-400",
  },
  {
    name: "Tailwind CSS",
    description: "CSS Framework",
    icon: "🎨",
    color: "bg-cyan-500/20 text-cyan-400",
  },
  {
    name: "Git",
    description: "Version Control",
    icon: "🌿",
    color: "bg-orange-500/20 text-orange-400",
  },
  {
    name: "GitHub",
    description: "Code Hosting",
    icon: "🐙",
    color: "bg-white/10 text-white",
  },
  {
    name: "Vercel",
    description: "Deployment Platform",
    icon: "▲",
    color: "bg-white/10 text-white",
  },
];
export default function Skills() {
  return (
    <footer id="skills" className="py-6 px-8 max-md:px-4">
      <div className="flex items-center gap-2 mb-8">
        <Layers className="w-6 h-6 text-primary" />
        <h2 className="font-heading text-2xl font-bold">Stakes</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 me-2 md:me-5">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 rounded-xl border border-border bg-muted/30 hover:bg-muted/50 transition-colors"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${tool.color}`}>
              {tool.icon}
            </div>
            <div>
              <h3 className="font-semibold">{tool.name}</h3>
              <p className="text-sm text-muted-foreground">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}
