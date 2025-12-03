"use client";

import { useEffect } from "react";

export function VisualEditingWrapper() {
    useEffect(() => {
        // Only do this on the client side and in preview mode
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            if (params.get("preview") === "true") {
                import("@sanity/visual-editing").then(({ enableVisualEditing }) => {
                    const disable = enableVisualEditing();
                    return () => disable && disable();
                });
            }
        }
    }, []);

    return null;
}
