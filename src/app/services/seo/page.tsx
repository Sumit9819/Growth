import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FAQ, type FAQItem } from "@/components/ui/faq";
import Link from "next/link";
import { CheckCircle2, TrendingUp, Search, BarChart3 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "SEO Services | GrowthMeta",
    description: "Dominate search results with enterprise-grade SEO strategies. Technical audits, content optimization, and link building that drives organic growth.",
};

const faqs: FAQItem[] = [
    {
        question: "How long does it take to see SEO results?",
        answer: "While some improvements can be seen within 4-6 weeks (especially technical fixes), meaningful organic traffic growth typically takes 3-6 months. SEO is a long-term investment that compounds over time. Our clients typically see 50-100% traffic increases within the first 6 months, with continued growth thereafter."
    },
    {
        question: "What's the difference between technical SEO and content SEO?",
        answer: "Technical SEO focuses on the backend: site speed, mobile-friendliness, crawlability, structured data, and architecture. Content SEO involves creating and optimizing pages, blog posts, and other content to rank for target keywords. Both are essential - technical SEO ensures search engines can properly crawl and index your site, while content SEO provides the relevance signals that drive rankings."
    },
    {
        question: "Do you guarantee first-page rankings?",
        answer: "While we can't ethically guarantee specific rankings (as search algorithms are controlled by Google, not us), we do guarantee measurable improvements in organic visibility, traffic, and conversions. We focus on sustainable, white-hat strategies that deliver long-term results rather than risky tactics that could result in penalties."
    },
    {
        question: "How do you approach keyword research?",
        answer: "Our keyword research goes beyond basic volume metrics. We analyze search intent, competition levels, conversion potential, and relevance to your business goals. We prioritize a mix of high-volume competitive terms, mid-tail opportunities, and long-tail keywords that drive qualified traffic. We also consider semantic relationships and topical authority."
    },
    {
        question: "What tools and technologies do you use?",
        answer: "We leverage industry-leading tools including Ahrefs, SEMrush, Google Search Console, Screaming Frog, and proprietary analytics platforms. We also use custom dashboards to track rankings, traffic, conversions, and ROI in real-time, giving you full transparency into performance."
    },
];

export default function SEOPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20">
            {/* Hero */}
            <Section className="border-b border-border">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                        Search Engine Optimization (SEO)
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Dominate search results and drive sustainable organic growth with data-driven SEO strategies engineered for the long term.
                    </p>
                </div>
            </Section>

            {/* What is SEO */}
            <Section>
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <h2 className="text-3xl font-bold font-heading mb-6">What is SEO?</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                        Search Engine Optimization (SEO) is the practice of improving your website's visibility in organic (non-paid) search engine results. When potential customers search for products, services, or information related to your business, SEO ensures your site appears prominently in the results.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                        Unlike paid advertising, which stops generating traffic the moment you stop paying, SEO builds long-term, sustainable visibility. It's not just about rankings—it's about attracting qualified traffic that converts into customers. Modern SEO encompasses technical optimization, content strategy, link building, user experience, and continuous adaptation to search algorithm updates.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        At GrowthMeta, we approach SEO holistically. We don't chase vanity metrics like keyword rankings in isolation. Instead, we focus on driving measurable business outcomes: traffic, leads, conversions, and revenue. Our strategies are built on data, tested through experimentation, and refined continuously based on performance.
                    </p>
                </div>
            </Section>

            {/* Why It Matters */}
            <Section className="bg-muted/5">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold font-heading mb-12 text-center">Why SEO Matters</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: TrendingUp,
                                title: "Sustainable Growth",
                                description: "Unlike paid ads that disappear when your budget runs out, SEO builds compounding returns. A well-optimized page can generate traffic for years with minimal ongoing investment."
                            },
                            {
                                icon: Search,
                                title: "High-Intent Traffic",
                                description: "People using search engines have clear intent. They're actively looking for solutions. SEO captures this demand, delivering visitors who are ready to engage and convert."
                            },
                            {
                                icon: BarChart3,
                                title: "Competitive Advantage",
                                description: "If your competitors rank above you, they're stealing your market share. Dominating search results establishes authority and ensures your brand is discovered first."
                            },
                            {
                                icon: CheckCircle2,
                                title: "Measurable ROI",
                                description: "Every aspect of SEO is trackable. From rankings and traffic to conversions and revenue attribution, you can see exactly how your investment pays off."
                            },
                        ].map((item, index) => (
                            <Card key={index} className="border-primary/10">
                                <CardHeader>
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                        <item.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Our Approach */}
            <Section>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold font-heading mb-6">Our SEO Approach</h2>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                        SEO isn't one-size-fits-all. What works for a local service business differs dramatically from what works for a SaaS platform or an e-commerce store. Our methodology is customized to your business model, competitive landscape, and growth goals.
                    </p>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold font-heading mb-4">1. Technical Foundation</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Before creating content or building links, we ensure your technical infrastructure is solid. This includes comprehensive audits of site speed, mobile usability, crawlability, indexability, structured data implementation, and internal linking architecture. We fix issues that prevent search engines from properly understanding and ranking your site.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold font-heading mb-4">2. Keyword Strategy & Content Optimization</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                We conduct deep keyword research to identify high-value opportunities aligned with your business goals. Then we create or optimize content that satisfies search intent, incorporates semantic relationships, and establishes topical authority. Every page is optimized for both search engines and humans, with clear CTAs and conversion pathways.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold font-heading mb-4">3. Authority Building</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Backlinks remain a critical ranking factor. We build high-quality, relevant links through strategic outreach, digital PR, content partnerships, and earned media placements. We focus on quality over quantity, pursuing links that drive referral traffic and enhance your brand reputation.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold font-heading mb-4">4. Continuous Optimization</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                SEO is never "done." Search algorithms evolve, competitors adjust, and opportunities emerge. We continuously monitor performance, test hypotheses, and refine strategies based on data. Monthly reporting keeps you informed, and regular strategy sessions ensure alignment with business objectives.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Key Benefits */}
            < Section className="bg-muted/5">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold font-heading mb-6">Key Benefits of Our SEO Services</h2>
                    <ul className="space-y-4">
                        {[
                            "Increased organic traffic from qualified, high-intent visitors",
                            "Higher search rankings for business-critical keywords",
                            "Improved user experience and site performance",
                            "Enhanced brand authority and trust signals",
                            "Better conversion rates through intent-optimized content",
                            "Long-term, compounding returns on investment",
                            "Reduced reliance on paid advertising",
                            "Full transparency with custom analytics dashboards",
                        ].map((benefit, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </Section>

            {/* FAQs */}
            <Section>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold font-heading mb-12 text-center">Frequently Asked Questions</h2>
                    <FAQ items={faqs} />
                </div>
            </Section>

            {/* CTA */}
            <Section className="border-t border-border">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready to Dominate Search Results?</h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Let's build an SEO strategy that drives sustainable organic growth for your business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="rounded-full">
                            <Link href="/contact">Get a Free SEO Audit</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="rounded-full">
                            <Link href="/services">View All Services</Link>
                        </Button>
                    </div>
                </div>
            </Section>
        </div>
    );
}
