"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { VisualEditingWrapper } from "@/components/VisualEditingWrapper";
import { usePathname } from "next/navigation";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isStudioRoute = pathname?.startsWith("/studio");

    return (
        <>
            {!isStudioRoute && <Navbar />}
            <main className={!isStudioRoute ? "flex-1" : ""}>
                {children}
            </main>
            {!isStudioRoute && <Footer />}
            <VisualEditingWrapper />
        </>
    );
}
