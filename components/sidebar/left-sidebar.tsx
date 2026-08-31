"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Camera,
  AtSign,
  Video,
  PenTool,
  Globe,
  Download,
  Send,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";

function LeftSidebar() {
  return (
    <div id="about" className="relative flex flex-col items-center md:justify-center p-4 pt-10 md:pt-4 w-full md:h-screen md:overflow-y-auto overflow-x-hidden">
      <div className="w-full bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-3 md:p-5 flex flex-col items-center gap-4 md:gap-5">
        {/* Profile Image */}
        <div className="relative w-full h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-border">
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <Image
              src="/photo_mostafa.jpg"
              className="w-full h-full"
              alt="Profile"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
          </div>
        </div>
        {/* Available Badge */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/80">
          <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-foreground">Available for work</span>
        </div>

        {/* Name */}
        <h1 className="text-2xl font-bold text-foreground">Mostafa Ansari</h1>

        {/* Social Icons */}
        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="github.com/mossicode"
            target="_blank"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:border-accent transition-colors"
          >
            <Camera className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </a>
          <a
            href="linkedIn.com/mostafa-ansari"
            target="_blank"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:border-accent transition-colors"
          >
            <AtSign className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </a>
          <a
            href="mailto:mostafanasari3205@gmail.com"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:border-accent transition-colors"
          >
            <Mail className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </a>
          <a
            href="tel:0770616817"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:border-accent transition-colors"
          >
            <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </a>
          <a
            href="instagram.com/mostafanasari3205"
            target="_blank"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:border-accent transition-colors"
          >
            <Globe className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 md:gap-4 md:w-full maxw-full">
          <Button variant="outline" className="flex-1 gap-2 text-xs md:text-sm max-md:text-xs">
            <Download className="w-4 h-4" />
            Download CV
          </Button>
          <Button className="flex-1 gap-2 bg-green-600 hover:bg-green-700 text-white text-xs md:text-sm max-md:text-xs max-md:hidden">
            <Send className="w-4 h-4" />
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
