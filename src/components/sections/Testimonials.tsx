"use client";

import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Testimonials() {
    return (
        <Section>
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold font-sans mb-4 text-white">Trusted by Industry Leaders</h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    See the measurable impact we've delivered for ambitious brands.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
                {/* Large Card 1 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="md:col-span-2 bg-[#0E0E0E] border border-[#1F1F1F] rounded-[32px] p-10 flex flex-col justify-between relative overflow-hidden group hover:border-primary/30 transition-colors"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                        <span className="text-9xl font-bold font-sans text-white">300</span>
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-6xl font-bold font-sans text-white">300</span>
                            <span className="text-xl font-medium text-primary">%</span>
                        </div>
                        <p className="text-xl font-medium text-gray-300 mb-8">
                            Organic traffic increase in 6 months.
                        </p>
                        <blockquote className="text-gray-400 mb-8 text-lg leading-relaxed">
                            "GrowthMeta's SEO strategy transformed our visibility. We went from page 3 to dominating page 1 for our core keywords. The technical audits uncovered issues we didn't even know existed."
                        </blockquote>
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">SM</div>
                            <div>
                                <div className="font-bold text-white">Sarah Mitchell</div>
                                <div className="text-sm text-gray-500">CMO</div>
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
                    className="md:row-span-2 bg-gradient-to-b from-[#141414] to-[#0E0E0E] border border-[#1F1F1F] rounded-[32px] p-10 flex flex-col justify-between relative overflow-hidden group hover:border-primary/30 transition-colors"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-50" />
                    <div className="relative z-10">
                        <div className="text-7xl font-bold font-sans text-primary/20 mb-6">5.2x</div>
                        <p className="text-2xl font-medium text-white mb-8">
                            Return on ad spend with our PPC campaigns.
                        </p>
                        <blockquote className="text-gray-400 mb-8 text-lg leading-relaxed">
                            "Moving from our in-house PPC to GrowthMeta was the best decision we made. Their data-driven approach and constant optimization brought our ROAS from 2.1x to 5.2x in three months."
                        </blockquote>
                        <div className="flex items-center gap-4 mt-auto">
                            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">MT</div>
                            <div>
                                <div className="font-bold text-white">Michael Torres</div>
                                <div className="text-sm text-gray-500">Director</div>
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
                    className="bg-[#0E0E0E] border border-[#1F1F1F] rounded-[32px] p-10 flex flex-col justify-between hover:border-primary/30 transition-colors"
                >
                    <blockquote className="text-gray-400 mb-6 text-base leading-relaxed">
                        "The email marketing automation they built for us is incredible. We're seeing 45% open rates and a 12% conversion rate on our nurture sequences."
                    </blockquote>
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">LC</div>
                        <div>
                            <div className="font-bold text-white">Lisa Chen</div>
                            <div className="text-xs text-gray-500">VP Marketing</div>
                        </div>
                    </div>
                </motion.div>

                {/* Small Card 2 (Light -> Dark Accent) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bg-white/5 border border-white/10 rounded-[32px] p-10 flex flex-col justify-between hover:bg-white/10 transition-colors"
                >
                    <blockquote className="text-gray-300 mb-6 text-base font-medium leading-relaxed">
                        "Their brand refresh was phenomenal. The new visual identity perfectly captures our mission, and our engagement rates have doubled since the rebrand."
                    </blockquote>
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-sm">JP</div>
                        <div>
                            <div className="font-bold text-white">James Park</div>
                            <div className="text-xs text-gray-300">CEO</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
