"use client";

import React from "react";
import { Code2, Cpu, Database, Layout, ArrowRight } from "lucide-react";
import { Surface } from "@heroui/react";

export default function ProjectCategories() {
  const categories = [
    {
      title: "Full Stack Web",
      description: "Complete web applications built with frontend, backend, and database structures.",
      icon: <Code2 className="size-5 text-[#10b981]" />,
      count: "120 Projects"
    },
    {
      title: "IoT & Hardware",
      description: "Smart systems using NodeMCU, ESP32, and sensors with real-time web connections.",
      icon: <Cpu className="size-5 text-[#10b981]" />,
      count: "45 Projects"
    },
    {
      title: "Database Engines",
      description: "Advanced database structures, schemas, and high-performance server logic.",
      icon: <Database className="size-5 text-[#10b981]" />,
      count: "35 Projects"
    },
    {
      title: "UI & UX Showcases",
      description: "Beautiful frontend designs, dashboards, and smooth animation layouts.",
      icon: <Layout className="size-5 text-[#10b981]" />,
      count: "60 Projects"
    }
  ];

  return (
    <section className="bg-[#09090b] text-zinc-100 w-full border-b border-brand-muted/30">
      <div className="max-w-7xl sm:px-6 lg:px-8 mx-auto space-y-10 my-10">
        
        {/* Header */}
        <div className="space-y-1">
          <h2 className="text-xl font-bold tracking-tight bg-gradient-to-r from-brand-accent to-emerald-300 bg-clip-text text-transparent">Browse by Category</h2>
          <p className="text-zinc-400 text-xs">Explore different types of codebases and engineering fields.</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((cat, idx) => (
            <Surface 
              key={idx} 
              variant="default" 
              className="bg-[#09090b] border border-[#27272a] p-6 rounded-xl hover:border-[#10b981]/30 transition-all duration-300 flex flex-col justify-between gap-4 group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-zinc-900 border border-[#27272a] rounded-lg">
                  {cat.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white group-hover:text-[#10b981] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-2 border-t border-zinc-900 font-mono text-[11px] text-zinc-500">
                <span>{cat.count}</span>
                <span className="flex items-center gap-1 text-zinc-400 group-hover:text-[#10b981] transition-colors">
                  <span>Explore</span>
                  <ArrowRight className="size-3" />
                </span>
              </div>
            </Surface>
          ))}
        </div>

      </div>
    </section>
  );
}