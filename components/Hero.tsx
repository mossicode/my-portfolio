"use client";
import { useEffect, useState } from "react";

const titles = ["Web developer", "Full Stack Developer", "Creative Programmer"];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentTitle) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }, 0);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentTitle.substring(0, displayText.length - 1)
              : currentTitle.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 50 : 100
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section id="hero" className="min-h-[80vh] md:min-h-screen flex flex-col justify-center px-8 py-20 max-md:py-12 max-md:px-4 overflow-hidden">
      <div className="max-w-4xl w-full">
        {/* Say Hello */}
        <div className="flex items-center gap-2 mb-2 animate-fade-in-up">
          <span className="text-2xl">👋</span>
          <span className="text-muted-foreground text-lg">Say Hello</span>
        </div>

        {/* Main Heading */}
        <h1 className=" text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-0 animate-fade-in-up delay-100">
          I&apos;m <span className="text-foreground">Mostafa Ansari,</span>
        </h1>

        {/* Typing Animation */}
        <div className="h-16 md:h-24 flex items-center mb-0 animate-fade-in-up delay-200">
          <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-green-500">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        {/* Location */}
        <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold leading-tight mb-8 animate-fade-in-up delay-300">
          Based in Herat, AF.
        </h2>

        {/* Description */}
        <p className="text-muted-foreground text-sm md:text-xl max-w-3xl mb-12 leading-relaxed animate-fade-in-up delay-400">
          I specialize in creating clean, user-friendly digital experiences by
          blending creativity with functionality. With a strong background in
          interactive design, I focus on crafting designs that not only look
          great but also provide smooth and engaging user interactions, helping
          ideas come to life seamlessly.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up delay-500">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              30+
            </p>
            <p className="text-muted-foreground">Completed Projects</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              2+
            </p>
            <p className="text-muted-foreground">Years of Experience</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              6+
            </p>
            <p className="text-muted-foreground">Happy Clients</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              5+
            </p>
            <p className="text-muted-foreground">Awards Received</p>
          </div>
        </div>
      </div>
    </section>
  );
}
