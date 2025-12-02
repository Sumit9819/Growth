"use client";

export const dynamic = 'force-dynamic';

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
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

// Map icon names to Lucide components
const iconMap: Record<string, any> = {
    Search, MousePointerClick, Share2, Mail, Users,
    BarChart3, TrendingUp, Megaphone, Video, Palette,
    MessageSquare, Layout, Fingerprint
};

interface Service {
    title: string;
    slug: { current: string };
    description: string;
    icon: string;
}

export default function ServicesPage() {
    const [services, setServices] = useState<Service[]>([]);

    useEffect(() => {
        const fetchServices = async () => {
            const data = await client.fetch(`*[_type == "service"]{
        title,
        slug,
        description,
        icon
      }`);
            setServices(data);
        };
        fetchServices();
    }, []);

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
                    {services.length > 0 ? (
                        services.map((service, index) => {
                            const IconComponent = iconMap[service.icon] || Search;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="md:col-span-1"
                                >
                                    <Link href={`/services/${service.slug.current}`} className="block h-full">
                                        <Card className="h-full hover:scale-[1.02] transition-all duration-300 group overflow-hidden border-border/50 hover:border-primary/50 bg-card">
                                            <CardHeader>
                                                <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-4 bg-primary/10">
                                                    <IconComponent className="h-6 w-6 text-primary" />
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
                            );
                        })
                    ) : (
                        <div className="col-span-3 text-center py-12 text-muted-foreground">
                            <p>No services found. Please add services in the Sanity Studio.</p>
                            <Button asChild variant="outline" className="mt-4">
                                <Link href="/studio">Go to Studio</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </Section>
        </div>
    );
}
