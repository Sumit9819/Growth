export interface CategoryOfExperience {
    _id: string;
    title: string;
    description: string;
    projects: {
        title: string;
        metric: string;
        tags: string[];
    }[];
}

const MOCK_CATEGORIES: CategoryOfExperience[] = [
    {
        _id: "1",
        title: "Enterprise SEO Strategy",
        description: "Driving organic growth for Fortune 500 companies through technical audits and content scaling.",
        projects: [
            { title: "FinTech Giant", metric: "+150% Organic Traffic", tags: ["Technical SEO", "Content Strategy"] },
            { title: "E-commerce Platform", metric: "2M+ Monthly Visits", tags: ["Migration", "Link Building"] },
        ],
    },
    {
        _id: "2",
        title: "B2B Lead Generation Funnels",
        description: "Constructing high-converting pipelines that turn cold traffic into qualified leads.",
        projects: [
            { title: "SaaS Startup", metric: "400% Pipeline Growth", tags: ["LinkedIn Ads", "Email Automation"] },
            { title: "Consulting Firm", metric: "50+ High-Ticket Leads/Mo", tags: ["Webinar Funnel", "CRO"] },
        ],
    },
    {
        _id: "3",
        title: "High-Fidelity UI/UX Design",
        description: "Crafting pixel-perfect, accessible, and performant interfaces that delight users.",
        projects: [
            { title: "HealthTech App", metric: "4.9 App Store Rating", tags: ["Mobile Design", "Design System"] },
            { title: "Crypto Exchange", metric: "Reduced Churn by 20%", tags: ["User Research", "Prototyping"] },
        ],
    },
];

export async function getWorkCategories(): Promise<CategoryOfExperience[]> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real app, this would be:
    // return client.fetch(query, {}, { next: { revalidate: 3600 } });

    return MOCK_CATEGORIES;
}
