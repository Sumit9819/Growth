import { getWorkCategories } from "@/lib/sanity";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Work | GrowthMeta",
    description: "Explore our expertise in Enterprise SEO, Lead Generation, and UI/UX Design.",
};

// ISR Configuration
export const revalidate = 3600; // Revalidate every hour

export default async function WorkPage() {
    const categories = await getWorkCategories();

    return (
        <div className="flex flex-col min-h-screen pt-20 bg-background text-foreground">
            <Section>
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-sans mb-6 text-white">Our Work</h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        We don't just talk about growth. We engineer it.
                        <br />
                        <span className="text-sm text-gray-600 mt-2 block">
                            (This page is statically generated and revalidated every hour)
                        </span>
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12">
                    {categories.map((category) => (
                        <div key={category._id} className="space-y-6">
                            <div className="border-l-4 border-primary pl-6">
                                <h2 className="text-3xl font-bold font-sans text-white">{category.title}</h2>
                                <p className="text-lg text-gray-400 mt-2">{category.description}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {category.projects.map((project, index) => (
                                    <Card key={index} className="bg-[#0E0E0E] border-[#1F1F1F] hover:border-primary/50 transition-all duration-300 group">
                                        <CardHeader>
                                            <CardTitle className="text-xl text-white group-hover:text-primary transition-colors">{project.title}</CardTitle>
                                            <CardDescription className="text-primary font-medium text-lg">
                                                {project.metric}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag) => (
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
                    ))}
                </div>
            </Section>
        </div>
    );
}
