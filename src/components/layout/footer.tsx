import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-border bg-background py-12 md:py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="flex flex-col gap-4">
                        <span className="text-xl font-bold font-heading tracking-tight">GrowthMeta</span>
                        <p className="text-sm text-muted-foreground">
                            Data-driven digital marketing for modern enterprises. We build engines of growth.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-foreground">Company</h4>
                        <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
                        <Link href="/work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Our Work</Link>
                        <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-foreground">Services</h4>
                        <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Enterprise SEO</Link>
                        <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Lead Generation</Link>
                        <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">UI/UX Design</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-foreground">Contact</h4>
                        <a href="mailto:info@growthmeta.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">info@growthmeta.com</a>
                        <a href="tel:9764183384" className="text-sm text-muted-foreground hover:text-foreground transition-colors">(976) 418-3384</a>
                        <p className="text-sm text-muted-foreground">Taudaha, Kirtipur, Nepal</p>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                        <div className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} GrowthMeta. All rights reserved.
                        </div>
                        <div className="flex gap-4 text-sm">
                            <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
                            <Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
                            <Link href="/cookie-policy" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</Link>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        {/* Social icons could go here */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
