"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ServiceHeroProps {
    headline: string;
    subheadline: string;
    trustBadge?: string;
}

export function ServiceHero({ headline, subheadline, trustBadge }: ServiceHeroProps) {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-background to-green-500/5" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {trustBadge && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6"
                        >
                            <Badge variant="outline" className="border-primary/30 text-primary">
                                <CheckCircle2 className="h-3 w-3 mr-1" />
                                {trustBadge}
                            </Badge>
                        </motion.div>
                    )}

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold font-heading mb-6 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent"
                    >
                        {headline}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed"
                    >
                        {subheadline}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Button asChild size="lg" variant="primary" className="group">
                            <Link href="/contact">
                                Get Started Today
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <Link href="#how-it-works">
                                See How It Works
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
