"use client";

import { useState } from "react";
import { Mail, GitFork, MapPin, Send, Loader2, User, AtSign } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setStatus("idle"), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const socialLinks = [
    { icon: GitFork, href: "https://github.com/mossicode", label: "GitHub" },
    { icon: User, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: AtSign, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:mostafa@example.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">
            Contact
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Let&rsquo;s <span className="text-primary">Work Together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I&apos;d love to hear from you.
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-heading text-xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "mostafa@example.com", href: "mailto:mostafa@example.com" },
                  { icon: MapPin, label: "Location", value: "San Francisco, CA", href: undefined },
                  { icon: GitFork, label: "GitHub", value: "@mostafa", href: "https://github.com" },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href ? "_blank" : undefined}
                    rel={item.href ? "noopener noreferrer" : undefined}
                    className={cn(
                      "flex items-center gap-4 p-3 rounded-xl border border-border hover:border-primary/50 transition-colors",
                      item.href ? "hover:bg-primary/5 cursor-pointer" : "cursor-default"
                    )}
                  >
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-heading text-xl font-bold mb-6">Follow Me</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8 space-y-6" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
                  placeholder="Tell me about your project, idea, or just say hi..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-none text-sm font-semibold tracking-widest uppercase hover:bg-primary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <Send className="w-4 h-4" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="text-green-600 dark:text-green-400 text-sm animate-fade-in">
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p className="text-red-600 dark:text-red-400 text-sm animate-fade-in">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              <p className="text-xs text-muted-foreground text-center md:text-left">
                By submitting this form, you agree to my{" "}
                <a href="#" className="underline hover:text-primary">Privacy Policy</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}