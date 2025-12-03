"use client";

import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { VisualEditingWrapper } from "@/components/VisualEditingWrapper";
import { usePathname } from "next/navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isStudioRoute = pathname?.startsWith("/studio");

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased bg-background text-foreground font-sans ${!isStudioRoute ? 'flex flex-col min-h-screen' : ''}`}
      >
        {!isStudioRoute && <Navbar />}
        <main className={!isStudioRoute ? "flex-1" : ""}>
          {children}
        </main>
        {!isStudioRoute && <Footer />}
        <VisualEditingWrapper />
      </body>
    </html>
  );
}
