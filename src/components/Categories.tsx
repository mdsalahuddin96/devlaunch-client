import React from "react";
import { LayoutGrid, Globe, Cpu, Smartphone, ShieldCheck, Terminal } from "lucide-react";
import { Surface } from "@heroui/react";
import Link from "next/link";

export default function Categories() {
  const categories = [
    { name: "Full-Stack Web", count: "142 Projects", icon: <Globe className="size-5 text-indigo-400" /> },
    { name: "IoT & Hardware", count: "48 Projects", icon: <Cpu className="size-5 text-amber-400" /> },
    { name: "Mobile Apps", count: "64 Projects", icon: <Smartphone className="size-5 text-cyan-400" /> },
    { name: "Cybersecurity / SecOps", count: "29 Projects", icon: <ShieldCheck className="size-5 text-red-400" /> },
    { name: "CLI Tools & Packages", count: "53 Projects", icon: <Terminal className="size-5 text-emerald-400" /> },
  ];

  return (
    <section className="py-20 border-b border-zinc-900 bg-zinc-950/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <LayoutGrid className="size-5 text-indigo-400" />
            <span>Browse by Category</span>
          </h2>
          <p className="text-zinc-400 text-sm mt-1">Discover specialized software architectural layouts and deployment setups.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <Link href={`/projects/explore?category=${cat.name.toLowerCase()}`} key={i}>
              <Surface variant="default" className="bg-zinc-900/40 border border-zinc-900 p-5 rounded-2xl hover:border-brand-accent/40 hover:bg-zinc-900/60 transition-all cursor-pointer group h-full flex flex-col justify-between">
                <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-xl w-fit mb-4 group-hover:scale-105 transition-transform">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-100 group-hover:text-white transition-colors">{cat.name}</h3>
                  <p className="text-xs text-zinc-500 font-mono mt-1">{cat.count}</p>
                </div>
              </Surface>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}