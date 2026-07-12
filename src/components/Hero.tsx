"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Terminal, Code2,} from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"frontend"|"fullstack"|"backend">("fullstack");
  const [animatedText, setAnimatedText] = useState("");
  const fullText:string = "npx create-devlaunch-app@latest";

  // Typing effect terminal placeholder pipeline er jonne
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setAnimatedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        setTimeout(() => { index = 0; }, 2000); // Reset delay tracking loop
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Real context feature data cards 
  const previewFeatures = {
    fullstack: { title: "MERN Stack Engine", lines: ["import { auth } from '@/lib/auth';", "const db = await connectMongo();", "Status: 🚀 Live & Secure Engine ready."] },
    frontend: { title: "Next.js 15 UI Shell", lines: ["export default function Shell() {", "  return <Navbar theme='emerald' />", "Status: 🎨 Pixel Perfect Grid loaded."] },
    backend: { title: "TypeScript Server Layer", lines: ["interface Project { id: string; }", "router.post('/projects', guard);", "Status: 🔒 Auth Tokens encrypted."] },
  };

  return (
    <section className="relative pt-24 pb-12 overflow-hidden flex items-center justify-center min-h-[65vh] md:min-h-[70vh] border-b border-brand-muted/30">
      
      {/* Eye-catching Tech Background Radial Glow Spotlights */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-zinc-700/20 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Call to Action Details Framework */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/5 border border-brand-accent text-xs font-medium text-brand-accent mx-auto lg:mx-0 animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Premier Platform for Full Stack Engineers</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Showcase Your <br />
            <span className="bg-gradient-to-r from-brand-accent to-emerald-300 bg-clip-text text-transparent">
              Production Builds
            </span>
          </h1>

          {/* Description (Real Project Content Context) */}
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
            Publish your TypeScript applications, link live repositories, capture peer code reviews, and track performance analytics in one clean space.
          </p>

          {/* Interactive CTA Controls Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <Link 
              href="/projects/explore"
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 bg-brand-accent text-brand-dark font-bold rounded-xl px-6 py-3.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-brand-accent/20 hover:brightness-110"
            >
              <span>Explore Builds</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/register"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-brand-muted/10 bg-brand-muted  hover:text-white hover:bg-brand-muted/90 font-semibold rounded-xl px-6 py-3.5 transition-colors"
            >
              <span>Publish Yours</span> <Code2/>
            </Link>
          </div>
        </div>

        {/* Right Side: Interactive Mock Interactive Coding Terminal */}
        <div className="lg:col-span-5 w-full max-w-md mx-auto">
          <div className="bg-zinc-950 border border-brand-muted rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-brand-accent/30">
            
            {/* Terminal Header Panel */}
            <div className="bg-brand-dark px-4 py-3 flex items-center justify-between border-b border-brand-muted/50">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-brand-accent/80" />
              </div>
              <div className="text-[11px] font-mono text-zinc-500 flex items-center gap-1">
                <Terminal className="w-3 h-3" />
                <span>bash - engine_v1.0.sh</span>
              </div>
            </div>

            {/* Terminal Live Command Simulation Line */}
            <div className="p-4 bg-zinc-950 font-mono text-xs text-zinc-400 min-h-[48px] border-b border-brand-muted/20">
              <span className="text-brand-accent font-bold">~</span> <span className="text-white">{animatedText}</span>
              <span className="w-1.5 h-4 bg-brand-accent inline-block animate-ping ml-0.5" />
            </div>

            {/* Interactive Dynamic Core View Tabs switcher logic */}
            <div className="grid grid-cols-3 bg-brand-dark/40 border-b border-brand-muted/20 text-[11px] font-medium font-mono text-center">
              {(["fullstack", "frontend", "backend"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 capitalize transition-colors ${
                    activeTab === tab 
                      ? "bg-zinc-950 text-brand-accent font-bold border-b-2 border-brand-accent" 
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Dynamic Console Logs Screen Output Render context matrix */}
            <div className="p-5 font-mono text-xs space-y-2 min-h-[120px] bg-zinc-950/90 select-none">
              <p className="text-zinc-500 font-bold">/{previewFeatures[activeTab].title}</p>
              {previewFeatures[activeTab].lines.map((line, i) => (
                <p key={i} className={i === 2 ? "text-brand-accent font-medium pt-1" : "text-emerald-400/90"}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}