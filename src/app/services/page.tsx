"use client";

import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Search, MousePointerClick, Share2, Mail, Users,
    BarChart3, TrendingUp, Megaphone, Video, Palette,
    MessageSquare, Layout, Fingerprint, ArrowRight
} from "lucide-react";

const services = [
    {
        title: "Search Engine Optimization (SEO)",
        slug: "seo",
        description: "Dominate search results with data-backed technical and content strategies.",
        icon: Search,
        colSpan: "md:col-span-2",
        gradient: "from-blue-500/20 to-blue-600/5",
        border: "border-blue-500/20",
        iconColor: "text-blue-500"
    },
    {
        title: "PPC Advertising",
        slug: "ppc",
        description: "Maximize ROI with precision-targeted paid campaigns.",
        icon: MousePointerClick,
        colSpan: "md:col-span-1",
        gradient: "from-green-500/20 to-green-600/5",
        border: "border-green-500/20",
        iconColor: "text-green-500"
    },
    {
        title: "Social Media Marketing",
        slug: "social-media",
        description: "Build engaged communities and drive conversions.",
        icon: Share2,
        colSpan: "md:col-span-1",
        gradient: "from-cyan-500/20 to-cyan-600/5",
        border: "border-cyan-500/20",
        iconColor: "text-cyan-500"
    },
    {
        title: "Email Marketing",
        slug: "email-marketing",
        description: "Turn subscribers into customers with personalized campaigns.",
        icon: Mail,
        colSpan: "md:col-span-2",
        gradient: "from-blue-600/20 to-green-500/20",
        border: "border-blue-500/20",
        iconColor: "text-blue-400"
    },
    // Standard grid items
    { title: "Affiliate Marketing", slug: "affiliate-marketing", icon: Users },
    { title: "Marketing Analytics", slug: "analytics", icon: BarChart3 },
    { title: "CRO", slug: "cro", icon: TrendingUp },
    { title: "Online PR", slug: "online-pr", icon: Megaphone },
    { title: "Video Marketing", slug: "video-marketing", icon: Video },
    { title: "Graphic Design", slug: "graphic-design", icon: Palette },
    { title: "Chatbot Marketing", slug: "chatbot-marketing", icon: MessageSquare },
    { title: "Interactive Content", slug: "interactive-content", icon: Layout },
    { title: "Branding", slug: "branding", icon: Fingerprint },
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20">
            <Section>
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                            Our Services
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Comprehensive digital marketing solutions tailored for sustainable, data-driven growth.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={`${service.colSpan || "md:col-span-1"}`}
                        >
                            <Link href={`/services/${service.slug}`} className="block h-full">
                                <Card className={`h-full hover:scale-[1.02] transition-all duration-300 group overflow-hidden border-border/50 hover:border-primary/50 ${service.gradient ? `bg-gradient-to-br ${service.gradient}` : "bg-card"}`}>
                                    <CardHeader>
                                        <div className={`h-12 w-12 rounded-lg flex items-center justify-center mb-4 ${service.gradient ? "bg-background/50 backdrop-blur-sm" : "bg-primary/10"}`}>
                                            <service.icon className={`h-6 w-6 ${service.iconColor || "text-primary"}`} />
                                        </div>
                                        <CardTitle className="text-xl mb-2 flex items-center gap-2">
                                            {service.title}
                                            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                                        </CardTitle>
                                        {service.description && (
                                            <CardDescription className="text-base leading-relaxed">
                                                {service.description}
                                            </CardDescription>
                                        )}
                                    </CardHeader>
                                    <CardContent>
                                        {!service.description && (
                                            <p className="text-sm text-muted-foreground">
                                                Learn more about our {service.title.toLowerCase()} services.
                                            </p>
                                        )}
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
