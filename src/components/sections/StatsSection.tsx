"use client";

"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
    { label: "Campaigns Launched", value: 750, suffix: "+", color: "from-blue-500 to-blue-600" },
    { label: "Average ROI", value: 400, suffix: "%", color: "from-green-500 to-green-600" },
    { label: "Years Experience", value: 10, suffix: "+", color: "from-cyan-500 to-cyan-600" },
    { label: "Client Retention", value: 98, suffix: "%", color: "from-blue-600 to-green-500" },
];

function Counter({ from, to, duration }: { from: number; to: number; duration: number }) {
    const [count, setCount] = useState(from);
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true });

    useEffect(() => {
        if (!inView) return;

        let startTime: number;
        let animationFrame: number;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

            setCount(Math.floor(progress * (to - from) + from));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(step);
            }
        };

        animationFrame = requestAnimationFrame(step);

        return () => cancelAnimationFrame(animationFrame);
    }, [inView, from, to, duration]);

    return <span ref={nodeRef}>{count}</span>;
}

export function StatsSection() {
    return (
        <Section className="border-y border-border bg-gradient-to-br from-blue-500/5 via-background to-green-500/5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex flex-col items-center text-center group"
                    >
                        <div className={`text-4xl md:text-5xl font-bold font-heading mb-2 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                            <Counter from={0} to={stat.value} duration={2} />
                            {stat.suffix}
                        </div>
                        <div className="text-sm md:text-base text-muted-foreground font-medium">
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
