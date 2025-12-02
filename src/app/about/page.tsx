import { Section } from "@/components/ui/section";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | GrowthMeta",
    description: "Learn about the team behind GrowthMeta.",
};

export default function AboutPage() {
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
        </div>
    );
}
