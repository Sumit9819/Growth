"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Search, Compass, Zap, BarChart } from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "Discovery",
        description: "We analyze your data and market to find untapped growth opportunities.",
        step: "01"
    },
    {
        icon: Compass,
        title: "Strategy",
        description: "We build a roadmap aligning SEO, paid media, and design with your KPIs.",
        step: "02"
    },
    {
        icon: Zap,
        title: "Execution",
        description: "We deploy high-impact campaigns and optimize with agile precision.",
        step: "03"
    },
    {
        icon: BarChart,
        title: "Reporting",
        description: "Transparent, real-time insights so you know exactly what's working.",
        step: "04"
    },
];

export function ProcessTimeline() {
    return (
        <Section className="bg-black/50 backdrop-blur-sm border-y border-white/5">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-bold font-sans mb-6 text-white tracking-tight">How We Work</h2>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light">
                    A refined framework for predictable, scalable growth.
                </p>
            </div>

            <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent z-0" />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="relative mb-8">
                                <div className="h-24 w-24 rounded-full bg-[#0E0E0E] border border-white/10 flex items-center justify-center relative z-10 group-hover:border-primary/50 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                                    <step.icon className="h-10 w-10 text-gray-400 group-hover:text-primary transition-colors duration-500" />
                                </div>
                                <div className="absolute -top-3 -right-3 bg-primary/10 border border-primary/20 text-primary text-xs font-bold px-2 py-1 rounded-full backdrop-blur-md">
                                    {step.step}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold font-sans mb-4 text-white group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                            <p className="text-sm text-gray-300 leading-relaxed max-w-[250px] mx-auto group-hover:text-gray-200 transition-colors duration-300">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
