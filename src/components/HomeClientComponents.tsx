"use client";

import dynamic from "next/dynamic";

export const HeroAnimation = dynamic(() => import("@/components/ui/hero-animation").then(mod => mod.HeroAnimation), {
    ssr: false,
    loading: () => <div className="w-full h-full min-h-[500px]" />
});

export const StatsSection = dynamic(() => import("@/components/sections/StatsSection").then(mod => mod.StatsSection), { ssr: false });
