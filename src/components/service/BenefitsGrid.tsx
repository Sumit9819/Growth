"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as Icons from "lucide-react";

interface Benefit {
    title: string;
    description: string;
    icon: string;
}

interface BenefitsGridProps {
    benefits: Benefit[];
}

export function BenefitsGrid({ benefits }: BenefitsGridProps) {
    return (
        <section className="py-20 bg-muted/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                        Why Choose Our Service
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Real benefits that drive measurable results for your business
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => {
                        const IconComponent = (Icons as any)[benefit.icon] || Icons.CheckCircle2;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full hover:border-primary/50 transition-colors duration-300 group">
                                    <CardHeader>
                                        <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-green-500/20 flex items-center justify-center mb-4">
                                            <IconComponent className="h-6 w-6 text-primary" />
                                        </div>
                                        <CardTitle className="text-xl">{benefit.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
