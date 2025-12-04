import { client } from "@/sanity/lib/client";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PortableText } from '@portabletext/react';
import { SchemaScript } from "@/components/seo/SchemaScript";

interface BlogPostPageProps {
    params: { slug: string };
}

async function getPost(slug: string) {
    const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    author,
    publishedAt,
    category,
    content,
    metaDescription,
    content,
    metaDescription,
    excerpt,
    customSchema
  }`;

    try {
        const post = await client.fetch(query, { slug });
        return post;
    } catch (error) {
        console.error("Error fetching post:", error);
        return null;
    }
}

// Generate static params for all posts
export async function generateStaticParams() {
    const posts = await client.fetch<Array<{ slug: { current: string } }>>(
        `*[_type == "post"]{ slug }`
    );

    return posts.map((post) => ({
        slug: post.slug.current,
    }));
}

// Allow dynamic params for posts created after build
export const dynamicParams = true;

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        return { title: "Post Not Found" };
    }

    return {
        title: `${post.title} | GrowthMeta Blog`,
        description: post.metaDescription || post.excerpt,
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen pt-32">
            <SchemaScript schema={post.customSchema} />
            <Section>
                <article className="max-w-4xl mx-auto">
                    {/* Header */}
                    <header className="mb-12">
                        {post.category && (
                            <Badge variant="outline" className="mb-4">
                                {post.category}
                            </Badge>
                        )}
                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-6 text-muted-foreground">
                            {post.author && (
                                <div className="flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    <span>{post.author}</span>
                                </div>
                            )}
                            {post.publishedAt && (
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    <span>{new Date(post.publishedAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}</span>
                                </div>
                            )}
                        </div>
                    </header>

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        <PortableText value={post.content} />
                    </div>
                </article>
            </Section>
        </div>
    );
}
