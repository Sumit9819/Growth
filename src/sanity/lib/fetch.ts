import { draftMode } from "next/headers";
import { client } from "./client";
import { type QueryParams } from "next-sanity";

export async function sanityFetch<QueryResponse>({
    query,
    params = {},
    tags,
}: {
    query: string;
    params?: QueryParams;
    tags?: string[];
}) {
    const isDraftMode = (await draftMode()).isEnabled;
    const hasToken = !!process.env.SANITY_API_READ_TOKEN;

    // If draft mode is enabled but no token, warn and fallback to published
    if (isDraftMode && !hasToken) {
        console.warn(
            "Draft Mode is enabled but SANITY_API_READ_TOKEN is missing. Falling back to published content."
        );
    }

    const useDraftMode = isDraftMode && hasToken;

    return client.fetch<QueryResponse>(query, params, {
        ...(useDraftMode && {
            token: process.env.SANITY_API_READ_TOKEN,
            perspective: "previewDrafts",
            stega: true,
        }),
        next: {
            revalidate: useDraftMode ? 0 : 60,
            tags,
        },
    });
}
