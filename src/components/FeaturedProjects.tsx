"use client";

import React, { useEffect, useState } from "react";
import { Code2, Star, ExternalLink, Terminal, AlertCircle, Eye } from "lucide-react";
import { Surface, Button } from "@heroui/react";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import { useRouter } from "next/navigation";


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
  const router=useRouter()
  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((res) => res.json())
      .then((data) => {
        if (data?.projects) {
          setProjects(data?.projects.slice(0, 4));
        } 
        // else if (data.success && Array.isArray(data.projects)) {
        //   setProjects(data.projects.slice(0, 4));
        // }
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
        <p className="text-xs text-zinc-400 font-mono">
          Failed to compile cluster database assets index.
        </p>
      </div>
    );
  }

  return (
    <section className="bg-brand-dark text-zinc-100 w-full border-b border-brand-muted/30">
      <div className="max-w-7xl sm:px-6 lg:px-8 mx-auto space-y-12 my-10">
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
              Top performing application structures vetted by the peer
              validation protocol.
            </p>
          </div>

          <div className="text-[11px] font-mono text-zinc-500 hidden md:block">
            Showing {projects.length} of 4 cached nodes
          </div>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
                    <span className="text-xs text-amber-400 font-medium">
                      ★ {project.rating}
                    </span>
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
                    <span
                      key={i}
                      className="text-[10px] font-mono bg-brand-muted text-zinc-300 px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  onClick={() => router.push(`/projects/${project._id}`)}
                  className="w-full bg-brand-muted group-hover:bg-brand-accent text-zinc-300 group-hover:text-brand-dark font-bold text-xs rounded-xl py-4 transition-all"
                >
                  <Eye className="w-3.5 h-3.5 mr-1" />
                  <span>View Cluster Details</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
