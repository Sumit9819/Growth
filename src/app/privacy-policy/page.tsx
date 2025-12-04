import { Section } from "@/components/ui/section";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | GrowthMeta",
    description: "Privacy Policy for GrowthMeta - How we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20 bg-background text-foreground">
            <Section>
                <div className="max-w-4xl mx-auto prose prose-invert">
                    <h1 className="text-4xl font-bold font-sans mb-8 text-white">Privacy Policy</h1>
                    <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Introduction</h2>
                    <p className="text-gray-400">
                        Welcome to GrowthMeta ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Data We Collect</h2>
                    <p className="text-gray-400">
                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                    </p>
                    <ul className="list-disc pl-6 text-gray-400 space-y-2 mt-4">
                        <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                        <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                        <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
                        <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. How We Use Your Data</h2>
                    <p className="text-gray-400">
                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                    </p>
                    <ul className="list-disc pl-6 text-gray-400 space-y-2 mt-4">
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                        <li>Where we need to comply with a legal or regulatory obligation.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Data Security</h2>
                    <p className="text-gray-400">
                        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Contact Us</h2>
                    <p className="text-gray-400">
                        If you have any questions about this privacy policy or our privacy practices, please contact us at:
                    </p>
                    <p className="text-gray-400 mt-4">
                        <strong>Email:</strong> info@growthmeta.com<br />
                        <strong>Address:</strong> Taudaha, Kirtipur, Nepal
                    </p>
                </div>
            </Section>
        </div>
    );
}
