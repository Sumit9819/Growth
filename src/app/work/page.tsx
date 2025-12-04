"use client";

import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

export const dynamic = 'force-dynamic';

interface PortfolioProject {
    title: string;
    slug: { current: string };
    category: string;
    metric: string;
    description: string;
    tags: string[];
}

interface CategoryGroup {
    category: string;
    projects: PortfolioProject[];
}

const CATEGORY_LABELS: Record<string, { title: string; description: string }> = {
    'enterprise-seo': {
        title: 'Enterprise SEO Strategy',
        description: 'Driving organic growth for Fortune 500 companies through technical audits and content scaling.'
    },
    'lead-generation': {
        title: 'B2B Lead Generation Funnels',
        description: 'Constructing high-converting pipelines that turn cold traffic into qualified leads.'
    },
    'ui-ux-design': {
        title: 'High-Fidelity UI/UX Design',
        description: 'Crafting pixel-perfect, accessible, and performant interfaces that delight users.'
    },
    'social-media': {
        title: 'Social Media Marketing',
        description: 'Building engaged communities and driving conversions through strategic social campaigns.'
    },
    'ppc': {
        title: 'PPC & Paid Media',
        description: 'Maximizing ROI through data-driven paid advertising campaigns.'
    },
};

export default function WorkPage() {
    const [categoryGroups, setCategoryGroups] = useState<CategoryGroup[]>([]);

    useEffect(() => {
        const fetchPortfolio = async () => {
            const data = await client.fetch<PortfolioProject[]>(`*[_type == "portfolio"] | order(order asc, publishedAt desc){
        title,
        slug,
        category,
        metric,
        description,
        tags
      }`);

            // Group by category
            const grouped = data.reduce((acc, project) => {
                const existing = acc.find((g) => g.category === project.category);
                if (existing) {
                    existing.projects.push(project);
                } else {
                    acc.push({ category: project.category, projects: [project] });
                }
                return acc;
            }, [] as CategoryGroup[]);

            setCategoryGroups(grouped);
        };
        fetchPortfolio();
    }, []);

    return (
        <div className="flex flex-col min-h-screen pt-20 bg-background text-foreground">
            <Section>
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-sans mb-6 text-white">Our Work</h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        We don't just talk about growth. We engineer it.
                    </p>
                </div>

                {categoryGroups.length > 0 ? (
                    <div className="grid grid-cols-1 gap-12">
                        {categoryGroups.map((group) => {
                            const categoryInfo = CATEGORY_LABELS[group.category] || {
                                title: group.category,
                                description: ''
                            };

                            return (
                                <div key={group.category} className="space-y-6">
                                    <div className="border-l-4 border-primary pl-6">
                                        <h2 className="text-3xl font-bold font-sans text-white">{categoryInfo.title}</h2>
                                        {categoryInfo.description && (
                                            <p className="text-lg text-gray-400 mt-2">{categoryInfo.description}</p>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {group.projects.map((project) => (
                                            <Card key={project.slug.current} className="bg-[#0E0E0E] border-[#1F1F1F] hover:border-primary/50 transition-all duration-300 group">
                                                <CardHeader>
                                                    <CardTitle className="text-xl text-white group-hover:text-primary transition-colors">{project.title}</CardTitle>
                                                    <CardDescription className="text-primary font-medium text-lg">
                                                        {project.metric}
                                                    </CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    {project.description && (
                                                        <p className="text-gray-400 mb-4">{project.description}</p>
                                                    )}
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.tags?.map((tag) => (
                                                            <Badge key={tag} variant="glass" className="text-gray-300">
                                                                {tag}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-muted-foreground text-lg">
                            No portfolio items yet. Add projects in Sanity Studio!
                        </p>
                    </div>
                )}
            </Section>
        </div>
    );
}
