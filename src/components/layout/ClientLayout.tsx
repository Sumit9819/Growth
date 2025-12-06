"use client";

import { Navbar } from "@/components/layout/navbar";
import { VisualEditingWrapper } from "@/components/VisualEditingWrapper";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/layout/footer").then((mod) => mod.Footer));

export default function ClientLayout({
    children,
    isDraftMode,
}: {
    children: React.ReactNode;
    isDraftMode: boolean;
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
            {isDraftMode && <VisualEditingWrapper />}
        </>
    );
}
