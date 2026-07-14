"use client";

import React, { useEffect, useState } from "react";
import { Code2, Star, ExternalLink, Terminal, AlertCircle } from "lucide-react";
import { Surface, Button } from "@heroui/react";
import { FaGithub } from "react-icons/fa6";

interface Project {
  _id: string;
  userId: string;
  title: string;
  description: string;
  tech: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  author: string;
  rating: number;
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
  priority: string;
}

export default function FeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProjects(data.slice(0, 4));
        } else if (data.success && Array.isArray(data.projects)) {
          setProjects(data.projects.slice(0, 4));
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full py-20 text-center bg-[#09090b]">
        <div className="inline-flex items-center gap-2 text-[#10b981] font-mono text-xs tracking-wider animate-pulse">
          <Terminal className="size-4" />
          <span>fetching_production_repositories.sh...</span>
        </div>
      </div>
    );
  }

  if (error || projects.length === 0) {
    return (
      <div className="w-full py-16 text-center bg-[#09090b] border border-dashed border-[#27272a] rounded-2xl max-w-6xl mx-auto">
        <AlertCircle className="size-6 text-zinc-500 mx-auto mb-2" />
        <p className="text-xs text-zinc-400 font-mono">Failed to compile cluster database assets index.</p>
      </div>
    );
  }

  return (
    <section className="bg-brand-dark text-zinc-100 w-full">
      <div className="mx-auto space-y-12 max-w-6xl my-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] rounded-md text-[11px] font-mono">
              <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full animate-ping" />
              <span>STAGING_ENVIRONMENT</span>
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-brand-accent to-emerald-300 bg-clip-text text-transparent">
              Featured Repository Index
            </h2>
            <p className="text-zinc-400 text-xs font-mono">
              Top performing application structures vetted by the peer validation protocol.
            </p>
          </div>
          
          <div className="text-[11px] font-mono text-zinc-500 hidden md:block">
            Showing {projects.length} of 4 cached nodes
          </div>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Surface 
              key={project._id} 
              variant="default" 
              className="bg-[#09090b] border border-[#27272a] rounded-xl overflow-hidden hover:border-[#10b981]/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="p-6 space-y-4">
                
                {/* Header info */}
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-white group-hover:text-[#10b981] transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-[11px] font-mono text-zinc-500">
                      Deployment by <span className="text-zinc-300">@{project.author}</span>
                    </p>
                  </div>
                  
                  {/* Rating Badge */}
                  <div className="flex items-center gap-1 px-2 py-0.5 bg-zinc-900 border border-[#27272a] rounded font-mono text-xs text-amber-400">
                    <Star className="size-3 fill-amber-400" />
                    <span>{project.rating.toFixed(1)}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-zinc-400 leading-relaxed font-sans line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tech.map((t, idx) => (
                    <span 
                      key={idx} 
                      className="text-[10px] font-mono bg-zinc-900 text-zinc-400 px-2 py-0.5 rounded border border-[#27272a]/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Footer Bar */}
              <div className="bg-zinc-900/30 border-t border-[#27272a] px-6 py-3.5 flex items-center justify-between">
                {/* Difficulty Scope */}
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500">
                  <Code2 className="size-3.5 text-[#10b981]" />
                  <span>Scope:</span>
                  <span className={
                    project.difficulty === "Advanced" ? "text-red-400" :
                    project.difficulty === "Intermediate" ? "text-amber-400" : "text-emerald-400"
                  }>
                    {project.difficulty}
                  </span>
                </div>

                {/* External Action Links */}
                <div className="flex items-center gap-3">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors"
                  >
                    <FaGithub className="size-4" />
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button 
                      size="sm"
                      className="h-7 bg-[#10b981] hover:bg-[#0da472] text-[#09090b] font-bold text-xs rounded-md flex items-center gap-1 py-1 px-2.5 transition-colors"
                    >
                      <span>Launch</span>
                      <ExternalLink className="size-3" />
                    </Button>
                  </a>
                </div>
              </div>

            </Surface>
          ))}
        </div>

      </div>
    </section>
  );
}