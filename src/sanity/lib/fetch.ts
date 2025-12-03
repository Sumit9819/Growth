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

    if (isDraftMode && !process.env.SANITY_API_READ_TOKEN) {
        throw new Error(
            "The `SANITY_API_READ_TOKEN` environment variable is required."
        );
    }

    return client.fetch<QueryResponse>(query, params, {
        ...(isDraftMode && {
            token: process.env.SANITY_API_READ_TOKEN,
            perspective: "previewDrafts",
            stega: true,
        }),
        next: {
            revalidate: isDraftMode ? 0 : 60,
            tags,
        },
    });
}
