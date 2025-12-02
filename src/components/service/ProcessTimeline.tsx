"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface ProcessStep {
    step: string;
    title: string;
    description: string;
}

interface ProcessTimelineProps {
    steps: ProcessStep[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
    return (
        <section id="how-it-works" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                        How It Works
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Our proven process for delivering exceptional results
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 pb-12 last:pb-0"
                        >
                            {/* Timeline line */}
                            {index < steps.length - 1 && (
                                <div className="absolute left-[15px] top-12 w-0.5 h-full bg-gradient-to-b from-blue-500 to-green-500 opacity-30" />
                            )}

                            {/* Step indicator */}
                            <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                                {index + 1}
                            </div>

                            <div className="bg-card border border-border rounded-lg p-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold font-heading mb-2 flex items-center gap-2">
                                            {step.title}
                                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
