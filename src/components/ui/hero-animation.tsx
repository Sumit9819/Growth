"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// More unique animation: Data network/graph visualization
export function HeroAnimation() {
    const [nodes] = useState(() =>
        Array.from({ length: 12 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 8 + 4,
            color: i % 3 === 0 ? '#3B82F6' : i % 3 === 1 ? '#10B981' : '#06B6D4'
        }))
    );

    return (
        <div className="relative w-full h-full min-h-[500px] overflow-hidden">
            {/* Animated Network Background */}
            <svg className="absolute inset-0 w-full h-full">
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
                        if (distance < 40) {
                            return (
                                <motion.line
                                    key={`${i}-${j}`}
                                    x1={`${node.x}%`}
                                    y1={`${node.y}%`}
                                    x2={`${targetNode.x}%`}
                                    y2={`${targetNode.y}%`}
                                    stroke={i % 2 === 0 ? "url(#lineGradient1)" : "url(#lineGradient2)"}
                                    strokeWidth="1"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        delay: (i + j) * 0.1,
                                    }}
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
                        boxShadow: `0 0 20px ${node.color}`,
                    }}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                        duration: 3 + (i % 3),
                        repeat: Infinity,
                        delay: i * 0.2,
                    }}
                />
            ))}

            {/* Animated Data Streams */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-64 h-px bg-gradient-to-r from-blue-500 via-green-500 to-transparent"
                animate={{
                    scaleX: [0, 1, 0],
                    x: [0, 100, 200],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            <motion.div
                className="absolute top-1/2 right-1/4 w-48 h-px bg-gradient-to-l from-green-500 via-cyan-500 to-transparent"
                animate={{
                    scaleX: [0, 1, 0],
                    x: [0, -80, -160],
                }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.5,
                }}
            />

            <motion.div
                className="absolute bottom-1/3 left-1/2 w-56 h-px bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent rotate-45"
                animate={{
                    scaleX: [0, 1, 0],
                    x: [0, 120, 240],
                }}
                transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1,
                }}
            />

            {/* Pulsing Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full border"
                        style={{
                            borderColor: i === 0 ? '#3B82F6' : i === 1 ? '#10B981' : '#06B6D4',
                            borderWidth: 1,
                        }}
                        animate={{
                            width: [0, 300, 400],
                            height: [0, 300, 400],
                            opacity: [0.5, 0.2, 0],
                            x: [0, -150, -200],
                            y: [0, -150, -200],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 1.3,
                            ease: "easeOut",
                        }}
                    />
                ))}
            </div>

            {/* Floating Particles */}
            {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                    key={`particle-${i}`}
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                        backgroundColor: i % 2 === 0 ? '#3B82F6' : '#10B981',
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}
