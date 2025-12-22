"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// More unique animation: Data network/graph visualization
export function HeroAnimation() {
    const [nodes] = useState(() =>
        Array.from({ length: 8 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 6 + 4,
            color: i % 3 === 0 ? '#3B82F6' : i % 3 === 1 ? '#10B981' : '#06B6D4'
        }))
    );

    return (
        <div className="relative w-full h-full min-h-[500px] overflow-hidden">
            {/* Animated Network Background */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                    <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
                    </linearGradient>
                    <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.2" />
                    </linearGradient>
                </defs>

                {/* Connecting Lines */}
                {nodes.map((node, i) =>
                    nodes.slice(i + 1).map((targetNode, j) => {
                        const distance = Math.sqrt(
                            Math.pow(node.x - targetNode.x, 2) +
                            Math.pow(node.y - targetNode.y, 2)
                        );
                        if (distance < 35) {
                            return (
                                <motion.line
                                    key={`${i}-${j}`}
                                    x1={`${node.x}%`}
                                    y1={`${node.y}%`}
                                    x2={`${targetNode.x}%`}
                                    y2={`${targetNode.y}%`}
                                    stroke={i % 2 === 0 ? "url(#lineGradient1)" : "url(#lineGradient2)"}
                                    strokeWidth="1"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        delay: (i + j) * 0.1,
                                    }}
                                    style={{ willChange: "opacity" }}
                                />
                            );
                        }
                        return null;
                    })
                )}
            </svg>

            {/* Animated Nodes */}
            {nodes.map((node, i) => (
                <motion.div
                    key={node.id}
                    className="absolute rounded-full backdrop-blur-sm"
                    style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        width: node.size,
                        height: node.size,
                        backgroundColor: node.color,
                        boxShadow: `0 0 15px ${node.color}`,
                        willChange: "transform, opacity",
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                        duration: 4 + (i % 3),
                        repeat: Infinity,
                        delay: i * 0.2,
                    }}
                />
            ))}

            {/* Animated Data Streams - Reduced count */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-64 h-px bg-gradient-to-r from-blue-500 via-green-500 to-transparent"
                animate={{
                    scaleX: [0, 1, 0],
                    x: [0, 100, 200],
                    opacity: [0, 1, 0]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{ willChange: "transform, opacity" }}
            />

            <motion.div
                className="absolute top-1/2 right-1/4 w-48 h-px bg-gradient-to-l from-green-500 via-cyan-500 to-transparent"
                animate={{
                    scaleX: [0, 1, 0],
                    x: [0, -80, -160],
                    opacity: [0, 1, 0]
                }}
                transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1.5,
                }}
                style={{ willChange: "transform, opacity" }}
            />

            {/* Pulsing Rings - Simplified */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                {[0, 1].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full border"
                        style={{
                            borderColor: i === 0 ? '#3B82F6' : '#10B981',
                            borderWidth: 1,
                            willChange: "width, height, opacity, transform",
                        }}
                        animate={{
                            width: [0, 300],
                            height: [0, 300],
                            opacity: [0.4, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            delay: i * 2.5,
                            ease: "easeOut",
                        }}
                    />
                ))}
            </div>

            {/* Floating Particles - Reduced count */}
            {Array.from({ length: 10 }).map((_, i) => (
                <motion.div
                    key={`particle-${i}`}
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                        backgroundColor: i % 2 === 0 ? '#3B82F6' : '#10B981',
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        willChange: "transform, opacity",
                    }}
                    animate={{
                        y: [0, -60, 0],
                        opacity: [0, 0.8, 0],
                    }}
                    transition={{
                        duration: 5 + Math.random() * 3,
                        repeat: Infinity,
                        delay: Math.random() * 4,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}
