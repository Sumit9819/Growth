import { Section } from "@/components/ui/section";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cookie Policy | GrowthMeta",
    description: "Cookie Policy for GrowthMeta - How we use cookies and similar technologies.",
};

export default function CookiePolicyPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20 bg-background text-foreground">
            <Section>
                <div className="max-w-4xl mx-auto prose prose-invert">
                    <h1 className="text-4xl font-bold font-sans mb-8 text-white">Cookie Policy</h1>
                    <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. What Are Cookies</h2>
                    <p className="text-gray-400">
                        Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. How We Use Cookies</h2>
                    <p className="text-gray-400">
                        We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. The Cookies We Set</h2>
                    <ul className="list-disc pl-6 text-gray-400 space-y-2 mt-4">
                        <li>
                            <strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.
                        </li>
                        <li>
                            <strong>Third Party Cookies:</strong> In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.
                        </li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Disabling Cookies</h2>
                    <p className="text-gray-400">
                        You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. More Information</h2>
                    <p className="text-gray-400">
                        Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.
                    </p>
                    <p className="text-gray-400 mt-4">
                        However if you are still looking for more information then you can contact us through one of our preferred contact methods:
                    </p>
                    <p className="text-gray-400 mt-4">
                        <strong>Email:</strong> info@growthmeta.com
                    </p>
                </div>
            </Section>
        </div>
    );
}
