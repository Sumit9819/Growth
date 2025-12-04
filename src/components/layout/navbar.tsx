"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Our Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                        <Image
                            src="/logo.png"
                            alt="GrowthMeta"
                            width={40}
                            height={40}
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <span className="text-xl font-bold font-heading tracking-tight text-white group-hover:text-primary transition-colors">GrowthMeta</span>
                </Link>

                {/* Desktop Nav - Centered */}
                <nav className="hidden md:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1 border border-white/5 absolute left-1/2 -translate-x-1/2 backdrop-blur-md">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                                pathname === item.href
                                    ? "bg-white/10 text-white shadow-sm"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button - Right */}
                <div className="hidden md:block">
                    <Button asChild size="sm" variant="primary" showIcon>
                        <Link href="/contact">Get Started</Link>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-b border-white/5 bg-black/95 backdrop-blur-xl absolute w-full top-20 left-0">
                    <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-lg font-medium transition-colors py-2 border-b border-white/5",
                                    pathname === item.href
                                        ? "text-primary"
                                        : "text-gray-400 hover:text-white"
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <Button asChild className="w-full" size="lg" variant="primary" showIcon>
                                <Link href="/contact" onClick={() => setIsOpen(false)}>Get Started</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
