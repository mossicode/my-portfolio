"use client";

const skillCategories = [
  {
    title: "Frontend",
    icon: "⚛️",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 85 },
      { name: "React Query", level: 88 },
      { name: "Zustand", level: 85 },
      { name: "NextUI / shadcn", level: 88 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express / Fastify", level: 85 },
      { name: "tRPC", level: 82 },
      { name: "GraphQL", level: 78 },
      { name: "REST APIs", level: 92 },
      { name: "Authentication (NextAuth)", level: 88 },
    ],
  },
  {
    title: "Database & ORM",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "Redis", level: 85 },
      { name: "Prisma", level: 90 },
      { name: "Drizzle ORM", level: 78 },
      { name: "Supabase", level: 85 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "☁️",
    skills: [
      { name: "Docker", level: 85 },
      { name: "AWS (EC2, S3, RDS)", level: 80 },
      { name: "Vercel", level: 92 },
      { name: "GitHub Actions", level: 88 },
      { name: "Kubernetes", level: 70 },
      { name: "Linux / Bash", level: 82 },
    ],
  },
  {
    title: "Testing & Quality",
    icon: "🧪",
    skills: [
      { name: "Jest / Vitest", level: 85 },
      { name: "Playwright", level: 80 },
      { name: "React Testing Library", level: 88 },
      { name: "ESLint / Prettier", level: 92 },
      { name: "TypeScript Strict Mode", level: 90 },
      { name: "Husky / lint-staged", level: 85 },
    ],
  },
  {
    title: "Other",
    icon: "🛠️",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "CI/CD Pipelines", level: 85 },
      { name: "WebSockets / Socket.io", level: 82 },
      { name: "Micro-frontends", level: 75 },
      { name: "Monorepos (Turborepo)", level: 78 },
      { name: "Technical Writing", level: 88 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">
            Skills
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proficient in modern web development stack with focus on type safety, performance, and developer experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="bg-card rounded-2xl border border-border p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="font-heading text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Always learning — currently exploring:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Rust", "Go", "WebAssembly", "Edge Computing", "AI/ML Integration"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
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