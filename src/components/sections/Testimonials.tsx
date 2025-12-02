"use client";

import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Testimonials() {
    return (
        <Section>
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Trusted by Industry Leaders</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    See the measurable impact we've delivered for ambitious brands.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
                {/* Large Card 1 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="md:col-span-2 bg-card border border-border rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="text-9xl font-bold font-heading">300</span>
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-5xl font-bold font-heading text-foreground">300</span>
                            <span className="text-sm font-medium text-muted-foreground">%</span>
                        </div>
                        <p className="text-lg font-medium text-foreground/80 mb-8">
                            Organic traffic increase in 6 months.
                        </p>
                        <blockquote className="text-muted-foreground mb-8">
                            "GrowthMeta's SEO strategy transformed our visibility. We went from page 3 to dominating page 1 for our core keywords. The technical audits uncovered issues we didn't even know existed."
                        </blockquote>
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-primary/20" />
                            <div>
                                <div className="font-bold text-foreground">Sarah Mitchell</div>
                                <div className="text-xs text-muted-foreground">CMO, TechStart Inc.</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Tall Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="md:row-span-2 bg-black border border-border rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />
                    <div className="relative z-10">
                        <div className="text-6xl font-bold font-heading text-primary/20 mb-4">5.2x</div>
                        <p className="text-xl font-medium text-foreground mb-8">
                            Return on ad spend with our PPC campaigns.
                        </p>
                        <blockquote className="text-muted-foreground mb-8">
                            "Moving from our in-house PPC to GrowthMeta was the best decision we made. Their data-driven approach and constant optimization brought our ROAS from 2.1x to 5.2x in three months."
                        </blockquote>
                        <div className="flex items-center gap-4 mt-auto">
                            <div className="h-10 w-10 rounded-full bg-primary/20" />
                            <div>
                                <div className="font-bold text-foreground">Michael Torres</div>
                                <div className="text-xs text-muted-foreground">Director of Growth, ShopNow</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Small Card 1 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-card border border-border rounded-3xl p-8 flex flex-col justify-between"
                >
                    <blockquote className="text-muted-foreground mb-6 text-sm">
                        "The email marketing automation they built for us is incredible. We're seeing 45% open rates and a 12% conversion rate on our nurture sequences."
                    </blockquote>
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/20" />
                        <div>
                            <div className="font-bold text-foreground">Lisa Chen</div>
                            <div className="text-xs text-muted-foreground">VP Marketing, CloudFlow</div>
                        </div>
                    </div>
                </motion.div>

                {/* Small Card 2 (Light) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bg-white text-black rounded-3xl p-8 flex flex-col justify-between"
                >
                    <blockquote className="text-black/80 mb-6 text-sm font-medium">
                        "Their brand refresh was phenomenal. The new visual identity perfectly captures our mission, and our engagement rates have doubled since the rebrand."
                    </blockquote>
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-black/10" />
                        <div>
                            <div className="font-bold text-black">James Park</div>
                            <div className="text-xs text-black/60">CEO, EcoVentures</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
