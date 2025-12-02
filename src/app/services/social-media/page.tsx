import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FAQ, type FAQItem } from "@/components/ui/faq";
import Link from "next/link";
import { CheckCircle2, Users, MessageCircle, TrendingUp, Heart } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Social Media Marketing | GrowthMeta",
    description: "Build engaged communities and drive conversions through strategic social media marketing across Facebook, Instagram, LinkedIn, Twitter, and TikTok.",
};

const faqs: FAQItem[] = [
    {
        question: "Which social platforms should my business be on?",
        answer: "The right platforms depend on your audience and business goals. B2B companies typically see success on LinkedIn and Twitter. E-commerce brands thrive on Instagram and Facebook. Gen Z audiences are on TikTok. We analyze your customer demographics, content capabilities, and goals to recommend the platforms most likely to drive ROI."
    },
    {
        question: "How often should we post on social media?",
        answer: "Frequency matters less than consistency and quality. We recommend 3-5 posts per week on primary platforms, but this varies by platform and audience engagement patterns. LinkedIn posts might be 2-3x per week, while TikTok might be daily. We establish posting schedules based on when your audience is most active and what drives engagement."
    },
    {
        question: "Should we use organic social media or paid ads?",
        answer: "Both. Organic builds community, authority, and brand awareness. Paid accelerates reach and drives conversions. The best social strategies combine organic content for engagement with paid amplification to reach new audiences and drive specific business outcomes. We create integrated strategies that leverage both."
    },
    {
        question: "How do you measure social media ROI?",
        answer: "We track metrics beyond vanity numbers like followers. Key metrics include engagement rate, click-through rate, conversion rate, cost per lead, customer acquisition cost, and revenue attributed to social channels. We implement tracking pixels and UTM parameters to measure how social traffic converts into customers and revenue."
    },
    {
        question: "What makes social media content perform well?",
        answer: "High-performing social content is authentic, valuable, and platform-native. It resonates emotionally, provides utility (education, entertainment, inspiration), and encourages interaction. We create content pillars aligned with your brand, test formats (images, videos, carousels, stories), and optimize based on engagement data."
    },
];

export default function SocialMediaPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20">
            {/* Hero */}
            <Section className="border-b border-border">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                        Social Media Marketing (SMM)
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Build engaged communities, amplify your brand, and drive conversions through strategic social media marketing.
                    </p>
                </div>
            </Section>

            {/* What is SMM */}
            <Section>
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <h2 className="text-3xl font-bold font-heading mb-6">What is Social Media Marketing?</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                        Social Media Marketing (SMM) is the use of social platforms—Facebook, Instagram, LinkedIn, Twitter, TikTok, and others—to build brand awareness, engage audiences, and drive business results. Unlike traditional advertising, social media is inherently two-way: it's not just broadcasting messages, but fostering conversations and building relationships.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                        Effective social media marketing combines organic content strategy (posts, stories, videos) with paid advertising (sponsored posts, carousel ads, video ads) to reach both existing followers and new audiences. The goal isn't just accumulating followers—it's building an engaged community that drives brand loyalty, referrals, and revenue.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        At GrowthMeta, we approach social media strategically. We don't post for the sake of posting. Every piece of content serves a purpose: building awareness, driving engagement, generating leads, or nurturing customers. We create integrated social strategies that align with your broader marketing goals and deliver measurable business outcomes.
                    </p>
                </div>
            </Section>

            {/* Why It Matters */}
            <Section className="bg-muted/5">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold font-heading mb-12 text-center">Why Social Media Marketing Matters</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: Users,
                                title: "Massive Reach",
                                description: "Over 4.7 billion people use social media globally. Your customers are there. Social gives you direct access to massive, targeted audiences."
                            },
                            {
                                icon: MessageCircle,
                                title: "Direct Engagement",
                                description: "Social media enables real-time conversations with customers. Answer questions, gather feedback, and build relationships at scale."
                            },
                            {
                                icon: TrendingUp,
                                title: "Brand Awareness",
                                description: "Social amplifies your brand story. Through consistent presence and shareable content, you build recognition and top-of-mind awareness."
                            },
                            {
                                icon: Heart,
                                title: "Community Building",
                                description: "Loyal communities drive long-term business growth. Social platforms let you cultivate passionate advocates who promote your brand organically."
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
                    <h2 className="text-3xl font-bold font-heading mb-6">Our Social Media Approach</h2>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                        Social media success requires strategy, creativity, and consistent execution. Here's how we build social programs that drive results:
                    </p>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold font-heading mb-4">1. Platform Strategy & Audience Analysis</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                We start by identifying where your audience spends time and what platforms align with your business goals. We analyze demographic data, competitive positioning, and content consumption patterns. Then we create platform-specific strategies that leverage each channel's unique strengths.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold font-heading mb-4">2. Content Planning & Creation</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                We develop content calendars that balance promotional posts with value-driven content (education, entertainment, inspiration). We create or coordinate the creation of images, videos, graphics, and copy that align with your brand voice. Content pillars ensure variety while maintaining strategic focus.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold font-heading mb-4">3. Community Management & Engagement</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Social media is about conversation, not monologue. We monitor comments, messages, and mentions, responding promptly and authentically. We engage with followers, participate in relevant conversations, and foster a sense of community. Active community management builds loyalty and turns followers into advocates.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold font-heading mb-4">4. Paid Social Campaigns & Optimization</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Organic reach is limited. We complement organic efforts with strategic paid campaigns that amplify top-performing content, target new audiences, and drive conversions. We continuously test creative, audiences, and placements to maximize ROAS. Monthly reporting shows exactly how social drives business outcomes.
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
                            "Increased brand awareness and recognition",
                            "Direct engagement with customers and prospects",
                            "Enhanced brand loyalty and community",
                            "Cost-effective customer acquisition",
                            "Improved customer service and support",
                            "Valuable audience insights and feedback",
                            "Content amplification and virality potential",
                            "Multi-touchpoint customer journeys",
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
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready to Build Your Community?</h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Let's create a social media strategy that drives engagement and business growth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="rounded-full">
                            <Link href="/contact">Get a Social Audit</Link>
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
