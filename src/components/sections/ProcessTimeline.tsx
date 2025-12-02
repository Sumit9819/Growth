"use client";
"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Search, Compass, Zap, BarChart } from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "Discovery",
        description: "We dive deep into your data, market, and competitors to identify untapped opportunities.",
        color: "from-blue-500 to-blue-600",
        shadowColor: "rgba(59, 130, 246, 0.4)"
    },
    {
        icon: Compass,
        title: "Strategy",
        description: "We craft a bespoke roadmap aligning technical SEO, paid media, and design with your KPIs.",
        color: "from-green-500 to-green-600",
        shadowColor: "rgba(16, 185, 129, 0.4)"
    },
    {
        icon: Zap,
        title: "Execution",
        description: "Our team deploys high-impact campaigns and optimizations with agile precision.",
        color: "from-cyan-500 to-cyan-600",
        shadowColor: "rgba(6, 182, 212, 0.4)"
    },
    {
        icon: BarChart,
        title: "Reporting",
        description: "Transparent, real-time reporting ensures you always know where every dollar goes.",
        color: "from-blue-600 to-green-500",
        shadowColor: "rgba(59, 130, 246, 0.4)"
    },
];

export function ProcessTimeline() {
    return (
        <Section className="bg-muted/5">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">How We Work</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    A proven framework for predictable growth.
                </p>
            </div>

            <div className="relative">
                {/* Connecting Line (Desktop) - Gradient */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-green-500 to-cyan-500 -translate-y-1/2 z-0 opacity-30" />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col items-center text-center bg-background md:bg-transparent p-6 md:p-0 rounded-xl border md:border-none border-border hover:scale-105 transition-transform duration-300"
                        >
                            <div
                                className={`h-16 w-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6`}
                                style={{
                                    boxShadow: `0 0 30px ${step.shadowColor}`
                                }}
                            >
                                <step.icon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold font-heading mb-3">{step.title}</h3>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
