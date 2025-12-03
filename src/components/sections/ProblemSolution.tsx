"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ProblemSolution() {
    return (
        <Section>
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold font-sans mb-4 text-white">The Difference</h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Why ambitious brands choose GrowthMeta over traditional agencies.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* The Struggle */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <Card className="h-full bg-[#0A0A0A] border border-[#1F1F1F] opacity-70 hover:opacity-100 transition-opacity duration-300">
                        <CardContent className="p-10">
                            <h3 className="text-2xl font-bold font-sans mb-6 text-gray-400">Traditional Agencies</h3>
                            <div className="space-y-6">
                                {[
                                    "Generic, cookie-cutter strategies",
                                    "Opaque reporting & vanity metrics",
                                    "Slow execution & communication",
                                    "Disconnected design & marketing"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 text-gray-500">
                                        <X className="h-6 w-6 text-red-500/50 shrink-0" />
                                        <span className="text-lg">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* The Solution */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <Card className="h-full bg-[#0E0E0E] border border-primary/20 shadow-[0_0_40px_rgba(59,130,246,0.1)] relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
                        <CardContent className="p-10">
                            <h3 className="text-2xl font-bold font-sans mb-6 text-white">The GrowthMeta Way</h3>
                            <div className="space-y-6">
                                {[
                                    "Data-backed, bespoke growth engines",
                                    "Real-time, transparent ROI tracking",
                                    "Agile squads & rapid deployment",
                                    "Unified brand & performance strategy"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 text-white">
                                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                            <Check className="h-4 w-4 text-primary" />
                                        </div>
                                        <span className="text-lg font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </Section>
    );
}
