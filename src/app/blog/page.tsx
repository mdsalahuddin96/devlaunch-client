"use client";

import React, { useState } from "react";
import { BookOpen, Search, Clock, ArrowUpRight, Tag, Terminal } from "lucide-react";
import { Surface, Button } from "@heroui/react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: "Full Stack" | "IoT Architecture" | "Database" | "UI & UX";
  readTime: string;
  date: string;
  slug: string;
}

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Optimizing MongoDB Embedded Document Array Pipelines for Real-time Reviews",
      excerpt: "Deep dive into data aggregation structures when handling embedded sub-document arrays inside a MERN production architecture. Learn how to fetch metrics with single query execution blocks.",
      category: "Database",
      readTime: "5 min read",
      date: "Jul 12, 2026",
      slug: "mongodb-embedded-document-pipelines"
    },
    {
      id: "2",
      title: "Building Low-Latency SMS Alert Systems via NodeMCU and Gas Leak Telemetry Sensors",
      excerpt: "A practical guide to connecting hardware telemetry modules (ESP32/NodeMCU) directly to cloud SMS gateways without triggering heavy web layer overheads.",
      category: "IoT Architecture",
      readTime: "8 min read",
      date: "Jun 28, 2026",
      slug: "nodemcu-gas-leak-sms-telemetry"
    },
    {
      id: "3",
      title: "The Minimalist Design Manifest: Restructuring Web Workspaces using Slate & Indigo Colors",
      excerpt: "Why clean typography like the Inter font combined with deep zinc color schemas maximize focus, code readability, and system telemetry clarity for modern application developers.",
      category: "UI & UX",
      readTime: "4 min read",
      date: "May 15, 2026",
      slug: "minimalist-design-manifest-slate-indigo"
    },
    {
      id: "4",
      title: "State Hydration and Real-Time Graph Telemetry in Next.js App Router Environments",
      excerpt: "How to bundle light libraries like Recharts with Next.js dynamic client wrappers without inducing hydration compilation crashes or blocking main-thread engine pipelines.",
      category: "Full Stack",
      readTime: "6 min read",
      date: "Apr 02, 2026",
      slug: "nextjs-recharts-telemetry-hydration"
    }
  ];

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="my-15 bg-zinc-950 text-zinc-100 min-h-screen py-16 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* 1. BLOG HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-900">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <BookOpen className="size-5 text-indigo-400" />
              <span>Technical Logs</span>
            </h1>
            <p className="text-zinc-500 text-xs font-mono">
              Engineering insights, system architectural deep dives, and hardware telemetry case logs.
            </p>
          </div>

          {/* Minimal Search Bar */}
          <div className="relative w-full md:w-72">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-zinc-600">
              <Search className="size-3.5" />
            </span>
            <input
              type="text"
              placeholder="Search index schemas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900/60 border border-zinc-900/80 rounded-xl pl-9 pr-4 py-2 text-xs font-mono text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
            />
          </div>
        </div>

        {/* 2. POSTS GRID/LIST LAYOUT */}
        <div className="space-y-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Surface 
                key={post.id} 
                variant="default" 
                className="bg-zinc-900/10 border border-zinc-900 p-6 rounded-2xl hover:border-zinc-800/80 transition-all duration-300 group flex flex-col justify-between gap-4"
              >
                <div className="space-y-3">
                  {/* Meta Tags */}
                  <div className="flex items-center gap-4 text-[11px] font-mono text-zinc-500">
                    <span className="flex items-center gap-1 text-indigo-400 bg-indigo-500/5 border border-indigo-500/10 px-2 py-0.5 rounded-md">
                      <Tag className="size-3" />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="size-3" />
                      {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>

                  {/* Title & Excerpt */}
                  <div className="space-y-1.5">
                    <h2 className="text-base font-bold text-zinc-100 group-hover:text-white transition-colors tracking-tight leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Read Action Line */}
                <div className="flex justify-end pt-2 border-t border-zinc-900/40">
                  <Button 
                    size="sm" 
                    className="text-xs font-mono text-zinc-400 group-hover:text-indigo-400 transition-colors flex items-center gap-1 p-0 min-w-0 bg-transparent"
                  >
                    <span>Read Manifest</span>
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Button>
                </div>
              </Surface>
            ))
          ) : (
            <div className="text-center py-12 border border-dashed border-zinc-900 rounded-2xl">
              <Terminal className="size-6 text-zinc-700 mx-auto mb-2" />
              <p className="text-xs text-zinc-500 font-mono">No telemetry files matched your filter pattern.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}