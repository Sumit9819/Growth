
import { ServiceHero } from "@/components/service/ServiceHero";
import { BenefitsGrid } from "@/components/service/BenefitsGrid";
import { ProcessTimeline } from "@/components/service/ProcessTimeline";
import { CaseStudyCard } from "@/components/service/CaseStudyCard";
import { TrustSignals } from "@/components/service/TrustSignals";
import { FAQ } from "@/components/ui/faq";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Target, Zap, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PortableText } from '@portabletext/react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SchemaScript } from "@/components/seo/SchemaScript";

interface ServicePageProps {
    params: { slug: string };
}

import { sanityFetch } from "@/sanity/lib/fetch";
import { client } from "@/sanity/lib/client";


async function getService(slug: string) {
    console.log('[getService] Fetching service with slug:', slug);

    const query = `*[_type == "service" && slug.current == $slug][0]{
    title,
    metaDescription,
    description,
    heroHeadline,
    heroSubheadline,
    problemStatement,
    solutionOverview,
    benefits,
    process,
    results,
    faqs,
    results,
    faqs,
    content,
    customSchema
  }`;

    try {
        console.log('[getService] Executing sanityFetch...');
        const service = await sanityFetch<any>({
            query,
            params: { slug },
            tags: [`service:${slug}`],
        });
        console.log('[getService] Result:', service ? `Found: ${service.title}` : 'NULL');
        return service;
    } catch (error) {
        console.error("[getService] Error fetching service:", error);
        return null;
    }
}

// Generate static params for all services
export async function generateStaticParams() {
    const services = await client.fetch<Array<{ slug: { current: string } }>>(
        `*[_type == "service"]{ slug }`
    );

    return services.map((service) => ({
        slug: service.slug.current,
    }));
}

// Allow dynamic params for services created after build
export const dynamicParams = true;

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = await getService(slug);

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: `${service.title} | GrowthMeta - Drive Real Results`,
        description: service.metaDescription || service.description,
        openGraph: {
            title: service.title,
            description: service.metaDescription || service.description,
            type: "website",
        },
    };
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = await getService(slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen">
            <SchemaScript schema={service.customSchema} />
            {/* Hero Section */}
            <ServiceHero
                headline={service.heroHeadline || service.title}
                subheadline={service.heroSubheadline || service.description}
                trustBadge="Trusted by 750+ Businesses"
            />

            {/* Trust Signals */}
            <TrustSignals />

            {/* Problem Statement Section */}
            {service.problemStatement && service.problemStatement.length > 0 && (
                <Section className="py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-background via-red-500/5 to-background pointer-events-none" />
                    <div className="max-w-4xl mx-auto relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                                The Challenge
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                Understanding the obstacles standing in your way
                            </p>
                        </div>

                        <div className="bg-card border border-red-500/20 rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden group hover:border-red-500/40 transition-colors duration-500">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                                <Target className="w-32 h-32 text-red-500" />
                            </div>

                            <div className="flex items-start gap-6 relative z-10">
                                <div className="hidden md:flex h-16 w-16 rounded-full bg-red-500/10 items-center justify-center flex-shrink-0 border border-red-500/20">
                                    <Target className="h-8 w-8 text-red-500" />
                                </div>
                                <div className="prose prose-lg prose-invert max-w-none md:pr-12">
                                    <PortableText value={service.problemStatement} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            )}

            {/* Solution Overview Section */}
            {service.solutionOverview && service.solutionOverview.length > 0 && (
                <Section className="py-20 bg-muted/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-background via-green-500/5 to-background pointer-events-none" />
                    <div className="max-w-4xl mx-auto relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                                Our Solution
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                A strategic approach tailored to your success
                            </p>
                        </div>

                        <div className="bg-card border border-green-500/20 rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden group hover:border-green-500/40 transition-colors duration-500">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                                <Zap className="w-32 h-32 text-green-500" />
                            </div>

                            <div className="flex items-start gap-6 relative z-10">
                                <div className="hidden md:flex h-16 w-16 rounded-full bg-green-500/10 items-center justify-center flex-shrink-0 border border-green-500/20">
                                    <Zap className="h-8 w-8 text-green-500" />
                                </div>
                                <div className="prose prose-lg prose-invert max-w-none md:pr-12">
                                    <PortableText value={service.solutionOverview} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            )}

            {/* Benefits Section */}
            {service.benefits && service.benefits.length > 0 && (
                <BenefitsGrid benefits={service.benefits} />
            )}

            {/* Process/How It Works */}
            {service.process && service.process.length > 0 && (
                <ProcessTimeline steps={service.process} />
            )}

            {/* Main Content Section */}
            {service.content && service.content.length > 0 && (
                <Section className="py-20 relative">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-background/50 backdrop-blur-sm border-l-4 border-primary pl-6 md:pl-10 pr-6 md:pr-10 py-4">
                            <div className="prose prose-lg prose-invert max-w-none">
                                <PortableText value={service.content} />
                            </div>
                        </div>
                    </div>
                </Section>
            )}

            {/* Results/Case Studies */}
            {service.results && service.results.length > 0 && (
                <Section className="py-20 bg-muted/5">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                            Proven Results
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Real outcomes from real clients
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.results.map((result: any, index: number) => (
                            <CaseStudyCard key={index} caseStudy={result} index={index} />
                        ))}
                    </div>
                </Section>
            )}

            {/* FAQ Section */}
            {service.faqs && service.faqs.length > 0 && (
                <Section className="py-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                                Frequently AskedQuestions
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                Everything you need to know about our {service.title.toLowerCase()}
                            </p>
                        </div>
                        <FAQ items={service.faqs} />
                    </div>
                </Section>
            )}

            {/* Final CTA */}
            <Section className="py-20 bg-gradient-to-br from-blue-500/10 via-background to-green-500/10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-10">
                        Let's discuss how we can help you achieve your goals with our {service.title.toLowerCase()}.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" variant="primary" className="group">
                            <Link href="/contact">
                                Schedule a Free Consultation
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <Link href="/work">
                                View Our Work
                            </Link>
                        </Button>
                    </div>
                    <p className="mt-6 text-sm text-muted-foreground">
                        No commitment required • Free 30-minute consultation
                    </p>
                </div>
            </Section>
        </div>
    );
}
