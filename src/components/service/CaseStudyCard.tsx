"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface CaseStudy {
    metric: string;
    description: string;
    clientName: string;
    clientRole: string;
    testimonial: string;
}

interface CaseStudyCardProps {
    caseStudy: CaseStudy;
    index: number;
}

export function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
        >
            <Card className="h-full bg-gradient-to-br from-blue-500/5 to-green-500/5 border-primary/20">
                <CardContent className="p-8">
                    <div className="mb-6">
                        <div className="text-5xl font-bold font-heading bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent mb-2">
                            {caseStudy.metric}
                        </div>
                        <div className="text-lg font-medium text-foreground">
                            {caseStudy.description}
                        </div>
                    </div>

                    <div className="relative">
                        <Quote className="h-8 w-8 text-primary/20 mb-4" />
                        <p className="text-muted-foreground italic mb-6 leading-relaxed">
                            "{caseStudy.testimonial}"
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-primary/20" />
                            <div>
                                <div className="font-bold text-foreground">{caseStudy.clientName}</div>
                                <div className="text-sm text-muted-foreground">{caseStudy.clientRole}</div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
