"use client";

import { Users2, Code2, MessageSquare, Activity, ShieldCheck } from "lucide-react";
import { Surface } from "@heroui/react";

export default function CommunityStats() {
  const stats = [
    {
      label: "Active Developers",
      value: "1,200+",
      icon: <Users2 className="size-4" />,
    },
    {
      label: "Codebases Deployed",
      value: "450+",
      icon: <Code2 className="size-4" />,
    },
    {
      label: "Reviews Submitted",
      value: "3,800+",
      icon: <MessageSquare className="size-4" />,
    },
    {
      label: "Daily Operations",
      value: "24k",
      icon: <Activity className="size-4" />,
    },
  ];

  return (
    <section className="bg-[#09090b] text-zinc-100 border-b border-brand-muted/30 w-full">
      <div className="max-w-7xl sm:px-6 lg:px-8 mx-auto space-y-12 my-10">
        {/* Added Header with Title and Subtitle */}
        <div className="space-y-1 text-center">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] rounded-md text-[11px] font-mono">
            <ShieldCheck className="size-3" />
            <span>GLOBAL METRICS</span>
          </div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-brand-accent to-emerald-300 bg-clip-text text-transparent tracking-tight">
            Our Community Growth
          </h2>
          <p className="text-zinc-400 text-xs">
            Real-time telemetry showing the scale of our developer network.
          </p>
        </div>
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <Surface
              key={idx}
              variant="default"
              className="bg-zinc-900/20 border border-[#27272a] p-6 rounded-xl text-center space-y-2"
            >
              <div className="mx-auto w-8 h-8 rounded-full bg-zinc-900 border border-[#27272a] flex items-center justify-center text-[#10b981]">
                {stat.icon}
              </div>
              <div className="space-y-0.5">
                <p className="text-2xl font-extrabold text-white font-mono tracking-tight">
                  {stat.value}
                </p>
                <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </Surface>
          ))}
        </div>
      </div>
    </section>
  );
}
