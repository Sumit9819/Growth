import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FAQ, type FAQItem } from "@/components/ui/faq";
import Link from "next/link";
import { CheckCircle2, Target, DollarSign, Zap, BarChart3 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "PPC Advertising Services | GrowthMeta",
    description: "Maximize ROI with precision-targeted PPC campaigns. Expert Google Ads, Facebook Ads, and multi-platform paid advertising management.",
};

const faqs: FAQItem[] = [
    {
        question: "What's a good ROAS (Return on Ad Spend) for PPC campaigns?",
        answer: "ROAS varies significantly by industry, business model, and margins. E-commerce typically targets 3-5x ROAS, while B2B services with high lifetime values might accept 2x ROAS knowing the long-term customer value. We focus on profitable ROAS that supports your business goals, not arbitrary benchmarks. What matters is that your ad spend generates more profit than it costs."
    },
    {
        question: "How much should I budget for PPC advertising?",
        answer: "Budget depends on your goals, industry competition, and customer acquisition costs. We typically recommend starting with at least $3,000-$5,000/month for meaningful testing and optimization on platforms like Google Ads. Competitive industries may require higher budgets. We help you determine the right budget based on keyword costs, conversion rates, and target customer volume."
    },
    {
        question: "How quickly can I see results from PPC?",
        answer: "Unlike SEO, PPC can drive traffic immediately once campaigns launch. However, optimal performance takes 30-60 days of testing, data collection, and optimization. The first month establishes baselines, the second month refines targeting and messaging, and by month three you should see consistent, profitable performance."
    },
    {
        question: "Which platforms should I advertise on?",
        answer: "Platform selection depends on where your customers are and how they buy. Google Search Ads capture high-intent demand. Facebook/Instagram work well for visual products and impulse purchases. LinkedIn is ideal for B2B. YouTube drives awareness. We analyze your customer journey and recommend the platforms most likely to drive ROI."
    },
    {
        question: "How do you prevent wasted ad spend?",
        answer: "We use negative keywords to block irrelevant searches, implement conversion tracking to measure true ROI, constantly test ad creative and landing pages, set up audience exclusions, and use automated rules to pause underperforming campaigns. We also monitor search term reports daily to identify and eliminate wasteful clicks."
    },
];

export default function PPCPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20">
            {/* Hero */}
            <Section className="border-b border-border">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                        Pay-Per-Click (PPC) Advertising
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Turn clicks into customers with precision-targeted paid campaigns that maximize ROI across Google, Facebook, LinkedIn, and beyond.
                    </p>
                </div>
            </Section>

            {/* What is PPC */}
            <Section>
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <h2 className="text-3xl font-bold font-heading mb-6">What is PPC Advertising?</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                        Pay-Per-Click (PPC) advertising is a digital marketing model where you pay each time someone clicks your ad. Unlike traditional advertising where you pay for impressions regardless of results, PPC ensures you only pay when someone shows genuine interest by clicking through to your website.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                        The most common PPC platforms include Google Ads (search, display, YouTube), Facebook/Instagram Ads, LinkedIn Ads, and Microsoft Advertising. Each platform offers unique targeting capabilities, audience demographics, and ad formats. When executed strategically, PPC drives immediate, qualified traffic that converts into leads and sales.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        At GrowthMeta, we don't just "run ads." We build profit-generating systems. Our PPC strategies combine rigorous audience targeting, compelling creative, optimized landing pages, and continuous testing to maximize return on ad spend (ROAS). We're not satisfied with driving clicks—we focus on driving revenue.
                    </p>
                </div>
            </Section>

            {/* Why It Matters */}
            <Section className="bg-muted/5">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold font-heading mb-12 text-center">Why PPC Matters</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: Zap,
                                title: "Immediate Results",
                                description: "While SEO takes months, PPC drives qualified traffic within hours of launching. Need sales this quarter? PPC delivers fast."
                            },
                            {
                                icon: Target,
                                title: "Precision Targeting",
                                description: "Target by keywords, demographics, interests, behaviors, job titles, locations, devices, and more. Reach exactly who you want, when you want."
                            },
                            {
                                icon: DollarSign,
                                title: "Measurable ROI",
                                description: "Every click, conversion, and dollar spent is tracked. Know exactly which campaigns, keywords, and ads drive profit."
                            },
                            {
                                icon: BarChart3,
                                title: "Scalable Growth",
                                description: "When you find winning campaigns, scale them. PPC allows you to grow revenue predictably by increasing budget on what works."
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
                    <h2 className="text-3xl font-bold font-heading mb-6">Our PPC Management Approach</h2>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                        Successful PPC requires more than setting up ads and hoping for the best. It demands strategic planning, relentless optimization, and deep platform expertise. Here's how we drive results:
                    </p>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold font-heading mb-4">1. Strategic Campaign Architecture</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                We structure campaigns for maximum control and performance. This means proper account hierarchy, tightly themed ad groups, keyword match type strategies, and bid management that aligns with your goals. We also implement conversion tracking, audience segmentation, and attribution modeling from day one.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold font-heading mb-4">2. Audience Research & Targeting</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                We identify your most valuable audiences through customer data analysis, competitive research, and platform insights. For search ads, we target high-intent keywords. For display and social, we leverage demographic, interest, and behavioral targeting. We also build custom and lookalike audiences based on your existing customers.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold font-heading mb-4">3. Creative Testing & Optimization</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Ad creative makes or breaks performance. We continuously test headlines, descriptions, images, videos, and calls-to-action. Using structured A/B testing methodology, we identify winners and scale them. We also ensure ads align with landing page messaging for maximum conversion rates.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold font-heading mb-4">4. Continuous Optimization & Scaling</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                PPC management is an ongoing process. We monitor campaigns daily, adjust bids based on performance, add negative keywords, test new audiences, and optimize landing pages. As profitable campaigns emerge, we scale them aggressively while maintaining or improving ROAS. Monthly strategy sessions keep you informed and aligned with business objectives.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Key Benefits */}
            <Section className="bg-muted/5">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold font-heading mb-6">Key Benefits</h2>
                    <ul className="space-y-4">
                        {[
                            "Immediate qualified traffic and leads",
                            "Full control over budget, targeting, and messaging",
                            "Detailed performance analytics and attribution",
                            "Ability to test markets, products, and messaging quickly",
                            "Scalable growth as you identify winning campaigns",
                            "Retargeting capabilities to recapture lost visitors",
                            "Multi-platform reach across Google, Facebook, LinkedIn, and more",
                            "Dedicated account management and strategy",
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
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready to Scale with PPC?</h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Let's build campaigns that drive immediate, profitable growth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="rounded-full">
                            <Link href="/contact">Schedule a Strategy Call</Link>
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
