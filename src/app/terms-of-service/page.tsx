import { Section } from "@/components/ui/section";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | GrowthMeta",
    description: "Terms of Service for GrowthMeta - The rules and regulations for the use of our website.",
};

export default function TermsOfServicePage() {
    return (
        <div className="flex flex-col min-h-screen pt-20 bg-background text-foreground">
            <Section>
                <div className="max-w-4xl mx-auto prose prose-invert">
                    <h1 className="text-4xl font-bold font-sans mb-8 text-white">Terms of Service</h1>
                    <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Agreement to Terms</h2>
                    <p className="text-gray-400">
                        These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and GrowthMeta ("we," "us," or "our"), concerning your access to and use of the GrowthMeta website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Intellectual Property Rights</h2>
                    <p className="text-gray-400">
                        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. User Representations</h2>
                    <p className="text-gray-400">
                        By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service; (4) you are not a minor in the jurisdiction in which you reside.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Prohibited Activities</h2>
                    <p className="text-gray-400">
                        You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Limitation of Liability</h2>
                    <p className="text-gray-400">
                        In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Contact Us</h2>
                    <p className="text-gray-400">
                        In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                    </p>
                    <p className="text-gray-400 mt-4">
                        <strong>GrowthMeta</strong><br />
                        Taudaha, Kirtipur, Nepal<br />
                        info@growthmeta.com
                    </p>
                </div>
            </Section>
        </div>
    );
}
