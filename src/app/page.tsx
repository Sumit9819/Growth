"use client";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, BarChart3, Globe, Zap, Check, PenTool, Layout, Search } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";

const HeroAnimation = dynamic(() => import("@/components/ui/hero-animation").then(mod => mod.HeroAnimation), {
  ssr: false,
  loading: () => <div className="w-full h-full min-h-[500px]" />
});

const StatsSection = dynamic(() => import("@/components/sections/StatsSection").then(mod => mod.StatsSection), { ssr: false });
const ProblemSolution = dynamic(() => import("@/components/sections/ProblemSolution").then(mod => mod.ProblemSolution));
const ProcessTimeline = dynamic(() => import("@/components/sections/ProcessTimeline").then(mod => mod.ProcessTimeline));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(mod => mod.Testimonials));

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 -z-10 bg-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-50" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Text Content - Left */}
            <div className="space-y-8 text-center lg:text-left animate-fade-in-left">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm mx-auto lg:mx-0">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse shadow-[0_0_10px_#3B82F6]"></span>
                <span className="tracking-wide uppercase text-xs font-bold">Accepting New Clients</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold font-sans tracking-tight text-white leading-[1.1]">
                Scale Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Digital Presence</span> with Precision.
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                GrowthMeta combines technical SEO, data-driven lead generation, and high-fidelity design to build engines of growth for ambitious brands.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <Button asChild size="lg" variant="primary" showIcon aria-label="Start Growing with GrowthMeta">
                  <Link href="/contact">Start Growing</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-base backdrop-blur-sm bg-white/5 border-white/10 hover:bg-white/10 text-white" aria-label="View Our Work">
                  <Link href="/work">View Our Work</Link>
                </Button>
              </div>
            </div>

            {/* Animation - Right */}
            <div className="hidden lg:block relative animate-fade-in-scale">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl opacity-30 animate-pulse" />
              <HeroAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Problem / Solution */}
      <ProblemSolution />

      {/* Services Preview */}
      <Section className="bg-black/50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-sans mb-6 text-white">Our Expertise</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            We focus on core pillars to drive measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Technical SEO",
              description: "Deep audits and strategies that dominate search results.",
              icon: Search,
            },
            {
              title: "Paid Media",
              description: "High-converting campaigns across Google, Meta, and LinkedIn.",
              icon: BarChart3,
            },
            {
              title: "Content Strategy",
              description: "Storytelling that builds authority and engages your audience.",
              icon: PenTool,
            },
            {
              title: "Web Design",
              description: "Pixel-perfect, responsive interfaces that build trust.",
              icon: Layout,
            },
            {
              title: "Analytics",
              description: "Advanced tracking and reporting for total transparency.",
              icon: Globe,
            },
            {
              title: "Brand Identity",
              description: "Cohesive visual systems that make your brand unforgettable.",
              icon: Zap,
            },
          ].map((service, index) => (
            <div
              key={index}
              className={`animate-fade-in-up animate-stagger-${index + 1}`}
            >
              <Card className="h-full bg-[#0E0E0E] border-[#1F1F1F] hover:border-primary/50 group transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-[#141414] border border-[#1F1F1F] flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300">
                    <service.icon className="h-6 w-6 text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-gray-300">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* Testimonials */}
      <Testimonials />

      {/* Why Choose Us */}
      <Section>
        <div className="bg-[#0E0E0E] border border-[#1F1F1F] rounded-[32px] p-8 md:p-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent opacity-50" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-sans mb-6 text-white">Why GrowthMeta?</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We don't just execute; we partner. Our unique blend of technical prowess and creative strategy sets us apart.
              </p>
              <Button asChild size="lg" variant="primary" showIcon aria-label="Meet the Team">
                <Link href="/about">Meet the Team</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Proprietary Data Modeling",
                "Agile Execution Squads",
                "Full-Funnel Attribution",
                "Bank-Grade Security"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-4 bg-[#141414] p-5 rounded-2xl border border-[#1F1F1F] hover:border-primary/30 transition-colors group">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium text-sm text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="border-t border-[#1F1F1F]">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold font-sans mb-8 text-white tracking-tight">Ready to Accelerate?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join the forward-thinking companies using GrowthMeta to redefine their digital strategy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button asChild size="lg" variant="primary" showIcon className="h-14 px-10 text-lg" aria-label="Get a Free Audit">
              <Link href="/contact">Get a Free Audit</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-14 text-lg bg-transparent border-[#333333] text-white hover:bg-white/5 hover:border-white/50" aria-label="Contact Sales">
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
