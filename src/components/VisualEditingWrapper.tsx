"use client";

import { useEffect } from "react";

export function VisualEditingWrapper() {
    useEffect(() => {
        // Dynamically import and enable visual editing
        // The enableVisualEditing function will automatically detect
        // when the page is being viewed in Sanity Presentation tool
        if (typeof window !== "undefined") {
            import("@sanity/visual-editing").then(({ enableVisualEditing }) => {
                const cleanup = enableVisualEditing();
                return () => {
                    if (cleanup) cleanup();
                };
            });
        }
    }, []);

    return null;
}
