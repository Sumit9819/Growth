import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="border-t border-border bg-background py-12 md:py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                                <Image
                                    src="/logo.png"
                                    alt="GrowthMeta"
                                    width={40}
                                    height={40}
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-xl font-bold font-heading tracking-tight">GrowthMeta</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Data-driven digital marketing for modern enterprises. We build engines of growth.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-foreground">Pages</h4>
                        <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</Link>
                        <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
                        <Link href="/work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Our Work</Link>
                        <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
                        <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-foreground">Contact</h4>
                        <a href="mailto:info@growthmeta.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">info@growthmeta.com</a>
                        <a href="tel:9764183384" className="text-sm text-muted-foreground hover:text-foreground transition-colors">(976) 418-3384</a>
                        <p className="text-sm text-muted-foreground">Taudaha, Kirtipur, Nepal</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-foreground">Legal</h4>
                        <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
                        <Link href="/cookie-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</Link>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} GrowthMeta. All rights reserved.
                    </div>
                    <div className="flex gap-6">
                        {/* Social icons could go here */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
