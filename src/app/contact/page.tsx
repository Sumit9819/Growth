"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20 bg-background text-foreground">
            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold font-sans mb-6 text-white">Let's Talk Growth</h1>
                            <p className="text-xl text-gray-400">
                                Ready to scale? Fill out the form or reach out directly. We're here to help.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="h-12 w-12 rounded-2xl bg-[#141414] border border-[#1F1F1F] flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:border-primary/30 transition-all duration-300">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-white">Email</h3>
                                    <p className="text-gray-400">hello@growthmeta.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="h-12 w-12 rounded-2xl bg-[#141414] border border-[#1F1F1F] flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:border-primary/30 transition-all duration-300">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-white">Phone</h3>
                                    <p className="text-gray-400">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="h-12 w-12 rounded-2xl bg-[#141414] border border-[#1F1F1F] flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:border-primary/30 transition-all duration-300">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-white">Office</h3>
                                    <p className="text-gray-400">123 Growth St, Tech City, TC 90210</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Card className="bg-[#0E0E0E] border-[#1F1F1F] shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-white">Send us a message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="first-name" className="text-sm font-medium text-gray-400">First name</label>
                                        <input id="first-name" className="flex h-12 w-full rounded-lg border border-[#333333] bg-black px-4 py-2 text-sm text-white placeholder:text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent transition-all" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="last-name" className="text-sm font-medium text-gray-400">Last name</label>
                                        <input id="last-name" className="flex h-12 w-full rounded-lg border border-[#333333] bg-black px-4 py-2 text-sm text-white placeholder:text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent transition-all" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                                    <input id="email" type="email" className="flex h-12 w-full rounded-lg border border-[#333333] bg-black px-4 py-2 text-sm text-white placeholder:text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent transition-all" placeholder="john@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                                    <textarea id="message" className="flex min-h-[120px] w-full rounded-lg border border-[#333333] bg-black px-4 py-2 text-sm text-white placeholder:text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent transition-all resize-none" placeholder="Tell us about your project..." />
                                </div>
                                <Button type="submit" className="w-full h-12 text-base" variant="primary">Send Message</Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </Section>
        </div>
    );
}
