"use client";

import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

export const dynamic = 'force-dynamic';

interface BlogPost {
    title: string;
    slug: { current: string };
    excerpt: string;
    author: string;
    publishedAt: string;
    category: string;
}

export default function BlogPage() {
    const [posts, setPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await client.fetch(`*[_type == "post"] | order(publishedAt desc){
        title,
        slug,
        excerpt,
        author,
        publishedAt,
        category
      }`);
            setPosts(data);
        };
        fetchPosts();
    }, []);

    return (
        <div className="flex flex-col min-h-screen pt-20">
            <Section>
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                            Blog & Insights
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Latest strategies, tips, and industry insights to grow your business
                        </p>
                    </motion.div>
                </div>

                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link href={`/blog/${post.slug.current}`}>
                                    <Card className="h-full hover:border-primary/50 transition-all duration-300 group">
                                        <CardHeader>
                                            {post.category && (
                                                <Badge variant="outline" className="w-fit mb-3">
                                                    {post.category}
                                                </Badge>
                                            )}
                                            <CardTitle className="text-2xl group-hover:text-primary transition-colors flex items-start gap-2">
                                                {post.title}
                                                <ArrowRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0 mt-1" />
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground mb-4 line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                {post.author && (
                                                    <div className="flex items-center gap-1">
                                                        <User className="h-4 w-4" />
                                                        {post.author}
                                                    </div>
                                                )}
                                                {post.publishedAt && (
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="h-4 w-4" />
                                                        {new Date(post.publishedAt).toLocaleDateString()}
                                                    </div>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-muted-foreground text-lg">
                            No blog posts yet. Check back soon!
                        </p>
                    </div>
                )}
            </Section>
        </div>
    );
}
