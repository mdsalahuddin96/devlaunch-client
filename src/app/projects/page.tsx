"use client";

import React, { useState, useEffect } from "react";
import { Compass, Search, Eye } from "lucide-react";
import { Button } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";


interface Project {
  _id: string;
  title: string;
  description: string;
  tech: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  author: string;
  rating: number;
  imageUrl: string;
  liveUrl: string;
}

export default function ExplorePage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [techFilter, setTechFilter] = useState("All");
  const [diffFilter, setDiffFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const router=useRouter()
  // Live Async Data API Fetch Module Engine Matrix
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        // Dynamic Query String configuration mappings
        const queryParams = new URLSearchParams({
          search: search,
          tech: techFilter,
          difficulty: diffFilter,
        });

        const response = await fetch(`http://localhost:5000/projects?${queryParams}`);
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Failed to query live engine logs:", error);
      } finally {
        setLoading(false);
      }
    };

    // Debounce processing window to reduce instant redundant cluster stress
    const delayDebounceFn = setTimeout(() => {
      fetchProjects();
    }, 400);

    return () => clearTimeout(delayDebounceFn);
  }, [search, techFilter, diffFilter]);

  return (
    <div className="min-h-screen bg-brand-dark pt-24 pb-16 text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Identity Header */}
        <div className="space-y-1 border-b border-brand-muted/30 pb-6">
          <h1 className="text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
            <Compass className="w-7 h-7 text-brand-accent" />
            <span>Live Build Cluster Explorer</span>
          </h1>
          <p className="text-sm text-zinc-400">Query direct application configurations stored inside cloud repository indices.</p>
        </div>

        {/* Double Filter Toolbar (Requirement 6 Active Execution) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-zinc-950 border border-brand-muted p-4 rounded-2xl shadow-xl">
          <div className="md:col-span-6 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input 
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search builds by keyword index title..."
              className="w-full pl-10 pr-4 py-2.5 bg-brand-dark border border-brand-muted rounded-xl text-sm focus:border-brand-accent/50 outline-none transition-colors"
            />
          </div>

          <div className="md:col-span-3">
            <select
              value={techFilter}
              onChange={(e) => setTechFilter(e.target.value)}
              className="w-full px-3 py-2.5 bg-brand-dark border border-brand-muted rounded-xl text-sm text-zinc-300 focus:border-brand-accent/50 outline-none cursor-pointer"
            >
              <option value="All">All Technologies</option>
              <option value="TypeScript">TypeScript</option>
              <option value="React">React</option>
              <option value="Next.js">Next.js</option>
              <option value="Node.js">Node.js</option>
            </select>
          </div>

          <div className="md:col-span-3">
            <select
              value={diffFilter}
              onChange={(e) => setDiffFilter(e.target.value)}
              className="w-full px-3 py-2.5 bg-brand-dark border border-brand-muted rounded-xl text-sm text-zinc-300 focus:border-brand-accent/50 outline-none cursor-pointer"
            >
              <option value="All">All Difficulties</option>
              <option value="Beginner">Beginner Tier</option>
              <option value="Intermediate">Intermediate Tier</option>
              <option value="Advanced">Advanced Tier</option>
            </select>
          </div>
        </div>

        {/* Requirements 4 Core Grid Display Block */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="bg-zinc-950 border border-brand-muted rounded-2xl h-90 animate-pulse p-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="bg-brand-muted aspect-video rounded-xl w-full" />
                  <div className="bg-brand-muted h-5 rounded w-3/4" />
                  <div className="bg-brand-muted h-3 rounded w-full" />
                </div>
                <div className="bg-brand-muted h-9 rounded-xl w-full" />
              </div>
            ))}
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-16 bg-zinc-950 rounded-2xl border border-brand-muted font-mono text-zinc-500">
            <span>/ No compilation blocks match current criteria configuration query.</span>
          </div>
        ) : (
          // Strict 4 Cards Per Row Alignment Rule on Desktop Viewports
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div 
                key={project._id} 
                className="group flex flex-col justify-between bg-zinc-950 border border-brand-muted hover:border-brand-accent/30 rounded-2xl p-5 shadow-lg transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Dynamic Database Image Render */}
                  <div className="aspect-video bg-brand-dark rounded-xl border border-brand-muted/40 overflow-hidden relative">
                    <Image
                      src={project.imageUrl} 
                      alt={project.title}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-brand-accent uppercase bg-brand-accent/5 px-2 py-0.5 rounded-md border border-brand-accent/10">
                        {project.difficulty}
                      </span>
                      <span className="text-xs text-amber-400 font-medium">★ {project.rating}</span>
                    </div>
                    <h3 className="font-bold text-base text-white group-hover:text-brand-accent transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed h-8">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tag, i) => (
                      <span key={i} className="text-[10px] font-mono bg-brand-muted text-zinc-300 px-2 py-0.5 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  
                  <Button 
                    onClick={()=>router.push(`/projects/${project._id}`)}
                    className="w-full bg-brand-muted group-hover:bg-brand-accent text-zinc-300 group-hover:text-brand-dark font-bold text-xs rounded-xl py-4 transition-all"
                  >
                    <Eye className="w-3.5 h-3.5 mr-1" />
                    <span>View Cluster Details</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}