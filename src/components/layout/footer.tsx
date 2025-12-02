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
                        <h4 className="font-semibold text-foreground">Legal</h4>
                        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
                        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</Link>
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
