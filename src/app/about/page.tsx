"use client";

import React from "react";
import { Terminal, Cpu, Target, Users, ShieldAlert, Code2 } from "lucide-react";
import { Surface } from "@heroui/react";

export default function AboutPage() {
  // মিনিমালিস্ট প্রফেশনাল জাভাস্ক্রিপ্ট কোড সনিপেট ব্যানারের জন্য
  const configSnippet = `const platformEngine = {
  name: "DevLaunch",
  purpose: "Developer Project Showcase & Collaboration Hub",
  architecture: "MERN Stack + Next.js App Router",
  features: ["Dynamic Telemetry", "Peer Evaluations", "Hardware Log Hooks"],
  status: "Operational",
  compile: () => true
};`;

  return (
    <div className="my-15 bg-zinc-950 text-zinc-100 min-h-screen py-16 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* 1. HERO HEADER */}
        <div className="space-y-4 text-center ">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-full text-xs font-mono">
            <Terminal className="size-3.5" />
            <span>sys.init(&quot;about_v1.0.0&quot)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Production-Grade Command Center <br className="hidden md:inline" />
            for Modern Developers.
          </h1>
          <p className="text-zinc-400 text-sm  leading-relaxed">
            DevLaunch is a structured ecosystem built for full-stack engineers and system architects to deploy, evaluate, and scale software layouts while maintaining complete code transparency.
          </p>
        </div>

        {/* 2. MEANINGFUL CODE BANNER */}
        <Surface variant="default" className="bg-zinc-900/30 border border-zinc-900 rounded-2xl overflow-hidden font-mono text-xs shadow-2xl">
          <div className="bg-zinc-900/80 border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            </div>
            <span className="text-zinc-500 text-[11px]">devlaunch-manifest.js</span>
            <Code2 className="size-4 text-zinc-600" />
          </div>
          <pre className="p-6 overflow-x-auto text-indigo-300 leading-relaxed bg-zinc-950/60">
            <code>{configSnippet}</code>
          </pre>
        </Surface>

        {/* 3. CORE VALUES & MISSION PILLARS */}
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Target className="size-5 text-indigo-400" />
              <span>Operational Objectives</span>
            </h2>
            <p className="text-zinc-500 text-xs font-mono mt-0.5">Core primitives driving the deployment workspace.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Surface variant="default" className="bg-zinc-900/20 border border-zinc-900 p-5 rounded-2xl flex items-start gap-4">
              <div className="p-2.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-xl mt-0.5">
                <Cpu className="size-4" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-zinc-200">Hardware & Web Fusion</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  We bridge the gap between heavy software systems and lightweight telemetric data logs, supporting everything from raw MERN web layers to specialized microcontrollers like ESP32 or NodeMCU.
                </p>
              </div>
            </Surface>

            <Surface variant="default" className="bg-zinc-900/20 border border-zinc-900 p-5 rounded-2xl flex items-start gap-4">
              <div className="p-2.5 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-xl mt-0.5">
                <Users className="size-4" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-zinc-200">No-Fluff Feedback Loops</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  DevLaunch prioritizes constructive evaluations. Developers gain access to critical peer assessment matrices and metric analytics tracking language frequency and interaction parameters.
                </p>
              </div>
            </Surface>
          </div>
        </div>

        {/* 4. FOOTNOTE ACCENT */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs font-mono text-zinc-600">
          <div className="flex items-center gap-1.5">
            <ShieldAlert className="size-3.5 text-zinc-500" />
            <span>Strict minimal aesthetic config active.</span>
          </div>
          <span>Built for engineers, by engineers.</span>
        </div>

      </div>
    </div>
  );
}