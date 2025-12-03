
import { ServiceHero } from "@/components/service/ServiceHero";
import { BenefitsGrid } from "@/components/service/BenefitsGrid";
import { ProcessTimeline } from "@/components/service/ProcessTimeline";
import { CaseStudyCard } from "@/components/service/CaseStudyCard";
import { TrustSignals } from "@/components/service/TrustSignals";
import { FAQ } from "@/components/ui/faq";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface ServicePageProps {
    params: { slug: string };
}

import { sanityFetch } from "@/sanity/lib/fetch";

async function getService(slug: string) {
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
    content
  }`;

    try {
        const service = await sanityFetch<any>({
            query,
            params: { slug },
            tags: [`service:${slug}`],
        });
        return service;
    } catch (error) {
        console.error("Error fetching service:", error);
        return null;
    }
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const service = await getService(params.slug);

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
    const service = await getService(params.slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <ServiceHero
                headline={service.heroHeadline || service.title}
                subheadline={service.heroSubheadline || service.description}
                trustBadge="Trusted by 750+ Businesses"
            />

            {/* Trust Signals */}
            <TrustSignals />

            {/* Benefits Section */}
            {service.benefits && service.benefits.length > 0 && (
                <BenefitsGrid benefits={service.benefits} />
            )}

            {/* Process/How It Works */}
            {service.process && service.process.length > 0 && (
                <ProcessTimeline steps={service.process} />
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
