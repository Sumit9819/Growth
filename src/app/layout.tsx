import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GrowthMeta - Digital Growth Agency",
  description: "GrowthMeta combines technical SEO, data-driven lead generation, and high-fidelity design to build engines of growth for ambitious brands.",
  openGraph: {
    title: "GrowthMeta - Digital Growth Agency",
    description: "GrowthMeta combines technical SEO, data-driven lead generation, and high-fidelity design to build engines of growth for ambitious brands.",
    type: "website",
    locale: "en_US",
    siteName: "GrowthMeta",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowthMeta - Digital Growth Agency",
    description: "GrowthMeta combines technical SEO, data-driven lead generation, and high-fidelity design to build engines of growth for ambitious brands.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased bg-background text-foreground font-sans flex flex-col min-h-screen`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
