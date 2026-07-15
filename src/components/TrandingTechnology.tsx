"use client";

import React from "react";
import { Cpu, Terminal, Flame } from "lucide-react";
import { Surface } from "@heroui/react";

export default function TrandingTechnology() {
  const technologies = [
    { name: "Next.js 15", projects: "140+ Projects", growth: "+24%" },
    { name: "TypeScript", projects: "210+ Projects", growth: "+38%" },
    { name: "Tailwind v4", projects: "95+ Projects", growth: "+15%" },
    { name: "MongoDB", projects: "180+ Projects", growth: "+19%" },
    { name: "Docker", projects: "60+ Projects", growth: "+12%" },
    { name: "NodeMCU / IoT", projects: "45+ Projects", growth: "+30%" },
  ];

  return (
    <section className="bg-[#09090b] text-zinc-100 w-full border-b border-brand-muted/30">
      <div className="max-w-7xl sm:px-6 lg:px-8 mx-auto space-y-10 my-10">
        
        {/* Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] rounded-md text-[11px] font-mono">
            <Flame className="size-3" />
            <span>POPULAR STACKS</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight bg-gradient-to-r from-brand-accent to-emerald-300 bg-clip-text text-transparent">Trending Technologies</h2>
          <p className="text-zinc-400 text-xs">The most used programming languages and frameworks right now.</p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {technologies.map((tech, idx) => (
            <Surface 
              key={idx} 
              variant="default" 
              className="bg-[#09090b] border border-[#27272a] p-5 rounded-xl hover:border-[#10b981]/30 transition-all duration-300 flex items-center justify-between"
            >
              <div className="space-y-1">
                <p className="text-sm font-bold text-white">{tech.name}</p>
                <p className="text-xs text-zinc-500 font-mono">{tech.projects}</p>
              </div>
              <span className="text-xs font-mono text-[#10b981] bg-[#10b981]/5 px-2 py-0.5 rounded border border-[#10b981]/10">
                {tech.growth}
              </span>
            </Surface>
          ))}
        </div>

      </div>
    </section>
  );
}