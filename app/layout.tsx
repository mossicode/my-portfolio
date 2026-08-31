import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Noto_Sans, Playfair_Display } from "next/font/google";

const playfairDisplayHeading = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" });

const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Mostafa Ansari | Full-Stack Web Developer",

  description:
    "Full-Stack Web Developer specializing in building modern, responsive, and scalable web applications with Next.js, React, TypeScript, and modern web technologies.",

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Mostafa Ansari | Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer building modern, responsive, and scalable web applications with Next.js, React, and TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "dark", "antialiased", "font-sans", notoSans.variable, playfairDisplayHeading.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
