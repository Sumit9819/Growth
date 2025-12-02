"use client";

import { motion } from "framer-motion";
import { Shield, Users, Award, TrendingUp } from "lucide-react";

export function TrustSignals() {
    const signals = [
        { icon: Users, label: "750+ Clients Served", color: "text-blue-500" },
        { icon: Award, label: "10+ Years Experience", color: "text-green-500" },
        { icon: TrendingUp, label: "Average 400% ROI", color: "text-cyan-500" },
        { icon: Shield, label: "Money-Back Guarantee", color: "text-blue-400" },
    ];

    return (
        <section className="py-12 bg-muted/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {signals.map((signal, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center text-center"
                        >
                            <div className={`h-16 w-16 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center mb-4 ${signal.color}`}>
                                <signal.icon className="h-8 w-8" />
                            </div>
                            <p className="font-medium text-sm">{signal.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
