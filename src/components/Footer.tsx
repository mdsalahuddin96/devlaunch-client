"use client";

import React from "react";
import { Terminal, Cpu } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#09090b] text-zinc-100 border-t border-brand-muted/30">
      <div className="max-w-7xl sm:px-6 lg:px-8 mx-auto space-y-12 my-10">
        
        {/* Top Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand/Platform Info */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2 text-white font-bold text-sm tracking-tight">
              <div className="p-1.5 bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg text-[#10b981]">
                <Terminal className="size-4" />
              </div>
              <span>DevLaunch</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              An open platform engineered for showcasing scalable full-stack software schemas and real-time hardware logging.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs text-zinc-400 font-mono">
              <li><a href="/explore" className="hover:text-[#10b981] transition-colors">Explore Index</a></li>
              <li><a href="/dashboard" className="hover:text-[#10b981] transition-colors">Console Dashboard</a></li>
              <li><a href="/blog" className="hover:text-[#10b981] transition-colors">Technical Logs</a></li>
            </ul>
          </div>

          {/* System Environment Metrics */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider">System Info</h4>
            <div className="space-y-1.5 text-xs text-zinc-500 font-mono">
              <p className="flex items-center gap-1.5">
                <Cpu className="size-3.5 text-[#10b981]" />
                <span>Node Layer: v20.x</span>
              </p>
              <p className="text-[11px] text-zinc-600">Status: Fully Operational</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono text-zinc-600">
          <div>
            © {new Date().getFullYear()} DevLaunch. Built for engineers.
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              <FaGithub className="size-4" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#10b981] transition-colors"
            >
              <FaLinkedin className="size-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}