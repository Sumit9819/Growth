"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
    className?: string;
}

export function FAQ({ items, className }: FAQProps) {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    return (
        <div className={cn("space-y-4", className)}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className="border border-border rounded-lg bg-card overflow-hidden"
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/20 transition-colors"
                    >
                        <span className="font-semibold text-foreground pr-4">{item.question}</span>
                        <ChevronDown
                            className={cn(
                                "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200",
                                openIndex === index && "rotate-180"
                            )}
                        />
                    </button>
                    <AnimatePresence initial={false}>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                exit={{ height: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                                    {item.answer}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}
