"use client";

"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ProblemSolution() {
    return (
        <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* The Problem */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div>
                        <h2 className="text-3xl font-bold font-heading mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">The Struggle</h2>
                        <p className="text-muted-foreground text-lg">
                            Modern businesses are drowning in data but starving for insights.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            "Leads drying up despite increased ad spend.",
                            "Opaque reporting that hides true ROI.",
                            "Generic designs that fail to convert.",
                            "Disconnect between marketing and sales."
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-3 text-muted-foreground/80"
                            >
                                <XCircle className="h-6 w-6 text-red-500/70 shrink-0" />
                                <span>{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* The Solution */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <Card className="bg-gradient-to-br from-blue-500/10 via-background to-green-500/10 border-blue-500/20 shadow-[0_0_50px_rgba(59,130,246,0.1)]">
                        <CardContent className="p-8 space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold font-heading mb-4 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">The GrowthMeta Way</h2>
                                <p className="text-foreground text-lg">
                                    We build precision growth engines powered by data.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    "Predictive analytics to forecast lead quality.",
                                    "Real-time dashboards with transparent metrics.",
                                    "High-fidelity, conversion-focused design systems.",
                                    "Full-funnel alignment from click to close."
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-3 text-foreground"
                                    >
                                        <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                                        <span>{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </Section>
    );
}
