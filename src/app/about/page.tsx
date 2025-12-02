"use client";

import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import type { Metadata } from "next";

export const dynamic = 'force-dynamic';

interface TeamMember {
    name: string;
    role: string;
    bio: string;
    linkedIn?: string;
    twitter?: string;
}

export default function AboutPage() {
    const [teamMembers, setTeamMembers] = useState < Team Member[]> ([]);

    useEffect(() => {
        const fetchTeam = async () => {
            const data = await client.fetch(`*[_type == "teamMember"] | order(order asc){
        name,
        role,
        bio,
        linkedIn,
        twitter
      }`);
            setTeamMembers(data);
        };
        fetchTeam();
    }, []);

    return (
        <div className="flex flex-col min-h-screen pt-20">
            <Section>
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading">Who We Are</h1>
                        <p className="text-xl text-muted-foreground">
                            GrowthMeta was founded on a simple premise: Digital marketing shouldn't be a black box.
                        </p>
                    </div>

                    <div className="prose prose-invert max-w-none text-muted-foreground">
                        <p className="text-lg leading-relaxed">
                            We are a team of data obsessives, creative strategists, and technical experts.
                            Unlike traditional agencies that rely on gut feeling, we rely on data.
                            Our approach is rooted in the belief that every marketing dollar should have a measurable return.
                        </p>
                        <p className="text-lg leading-relaxed mt-6">
                            Founded by industry veterans with deep expertise in SEO, paid media, and product design,
                            GrowthMeta bridges the gap between creative storytelling and technical performance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold font-heading text-foreground">Our Mission</h3>
                            <p className="text-muted-foreground">
                                To empower businesses with the tools, strategies, and insights they need to achieve sustainable, long-term growth.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold font-heading text-foreground">Our Vision</h3>
                            <p className="text-muted-foreground">
                                To be the definitive partner for companies looking to scale their digital presence through transparency and excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Team Section */}
            {teamMembers.length > 0 && (
                <Section className="bg-muted/5">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                            Meet Our Team
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            The experts behind your growth
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full hover:border-primary/50 transition-colors">
                                    <CardContent className="p-6 text-center">
                                        {/* Avatar placeholder */}
                                        <div className="h-24 w-24 rounded-full bg-gradient-to-br from-blue-500 to-green-500 mx-auto mb-4" />

                                        <h3 className="text-xl font-bold font-heading mb-1">{member.name}</h3>
                                        <p className="text-primary mb-4">{member.role}</p>

                                        {member.bio && (
                                            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                                                {member.bio}
                                            </p>
                                        )}

                                        {/* Social Links */}
                                        <div className="flex justify-center gap-4">
                                            {member.linkedIn && (
                                                <a
                                                    href={member.linkedIn}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-muted-foreground hover:text-primary transition-colors"
                                                >
                                                    <Linkedin className="h-5 w-5" />
                                                </a>
                                            )}
                                            {member.twitter && (
                                                <a
                                                    href={member.twitter}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-muted-foreground hover:text-primary transition-colors"
                                                >
                                                    <Twitter className="h-5 w-5" />
                                                </a>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </Section>
            )}
        </div>
    );
}
