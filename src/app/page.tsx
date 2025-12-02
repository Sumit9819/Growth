"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, BarChart3, Globe, Zap, Check } from "lucide-react";
import { StatsSection } from "@/components/sections/StatsSection";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Testimonials } from "@/components/sections/Testimonials";
import { HeroAnimation } from "@/components/ui/hero-animation";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

        <div className="container mx-auto px-4 h-full min-h-[90vh] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Text Content - Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                Accepting New Enterprise Clients for Q1
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/40 leading-[1.1]">
                Scale Your Digital Presence with Data-Driven Precision.
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                GrowthMeta combines enterprise SEO, B2B lead generation, and high-fidelity design to build engines of growth for modern businesses.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="rounded-full px-8 h-12 text-base">
                  <Link href="/contact">Start Growing <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 text-base backdrop-blur-sm bg-background/50">
                  <Link href="/work">View Our Work</Link>
                </Button>
              </div>
            </motion.div>

            {/* Animation - Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="hidden lg:block"
            >
              <HeroAnimation />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Problem / Solution */}
      <ProblemSolution />

      {/* Services Preview */}
      <Section className="bg-muted/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Our Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We focus on three core pillars to drive measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Enterprise SEO",
              description: "Technical audits and content strategies that dominate search results.",
              icon: Globe,
            },
            {
              title: "Lead Generation",
              description: "High-converting funnels that turn traffic into revenue.",
              icon: BarChart3,
            },
            {
              title: "UI/UX Design",
              description: "Pixel-perfect interfaces that build trust and engagement.",
              icon: Zap,
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-background/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-all duration-300 group">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* Testimonials */}
      <Testimonials />

      {/* Why Choose Us */}
      <Section>
        <div className="bg-gradient-to-br from-muted/20 to-background border border-border rounded-3xl p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Why GrowthMeta?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We don't just execute; we partner. Our unique blend of technical prowess and creative strategy sets us apart.
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link href="/about">Meet the Team</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Proprietary Data Modeling",
                "Agile Execution Squads",
                "Full-Funnel Attribution",
                "Enterprise-Grade Security"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 bg-background/50 p-4 rounded-xl border border-border">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="border-t border-border">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Ready to Accelerate?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join the forward-thinking companies using GrowthMeta to redefine their digital strategy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg">
              <Link href="/contact">Get a Free Audit</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-14 text-lg">
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
