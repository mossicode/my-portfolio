"use client";

import { GitFork, User, AtSign, Mail, Heart, Code } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: GitFork, href: "https://github.com", label: "GitHub" },
    { icon: User, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: AtSign, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:mostafa@example.com", label: "Email" },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-6 h-6 text-primary" />
              <span className="font-heading text-xl font-bold">Mostafa Ansari</span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              Full Stack Developer crafting digital experiences with modern technologies.
              Passionate about clean code, performance, and developer experience.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <nav className="space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <nav className="space-y-2">
              {[
                { label: "GitHub Profile", href: "https://github.com" },
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "Resume", href: "#" },
                { label: "Blog", href: "#" },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Mostafa Ansari. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              Built with
              <Code className="w-4 h-4" />
              Next.js, Tailwind CSS, and{" "}
              <Heart className="w-4 h-4 text-red-500" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}