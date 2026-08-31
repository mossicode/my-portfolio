"use client";

import { Mail, MapPin, Phone, Share } from "lucide-react";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/mossicode", icon: Share, color: "hover:text-gray-400" },
  { name: "LinkedIn", href: "https://linkedin.com/in/mostafaansari", icon: Phone, color: "hover:text-blue-400" },
  { name: "instagram", href: "https://instagram.com/mostafaansari3205", icon: Phone, color: "hover:text-sky-400" },
];

const contactInfo = [
  { label: "Email", value: "mostafaansari@gmail.com", icon: Mail, href: "mailto:mostafaansari3205@gmail.com" },
  { label: "Location", value: "Herat, Afghanistan", icon: MapPin },
  { label: "Phone", value: "+93 770616817", icon: Phone, href: "tel:+93 770616817" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* About / Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-heading font-bold text-foreground">MA</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
              Full-stack developer crafting clean, user-friendly digital experiences.
              Blending creativity with functionality to bring ideas to life.
            </p>
            <div className="flex items-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-muted-foreground transition-colors ${social.color} text-xl`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="font-heading text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              {contactInfo.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="text-xs text-muted-foreground/70 uppercase tracking-wider">{item.label}</span>
                    <p className="text-sm text-foreground">
                      {item.href ? (
                        <a href={item.href} className="hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="font-heading text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <a href="#hero" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#projects" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#skills" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Skills</a>
              <a href="#experience" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Experience</a>
              <a href="#contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Mostafa Ansari. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground/70">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}