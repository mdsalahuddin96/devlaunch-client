import { Cpu } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center text-zinc-100 p-4 font-sans relative overflow-hidden">
      {/* Radial Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.04),transparent_50%)] pointer-events-none" />

      <div className="flex flex-col items-center space-y-6 relative z-10">
        
        {/* Animated Tech/Core Spinner Container */}
        <div className="relative w-20 h-20 flex items-center justify-center">
          
          {/* Outer Segmented Spinning Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-t-brand-accent border-r-transparent border-b-brand-accent/20 border-l-transparent animate-[spin_1.5s_linear_infinite]" />
          
          {/* Inner Reverse Spinning Ring */}
          <div className="absolute w-14 h-14 rounded-full border border-b-brand-accent/40 border-t-transparent border-r-brand-accent border-l-transparent animate-[spin_1s_linear_reverse_infinite] opacity-60" />
          
          {/* Static Center Core Icon */}
          <div className="relative bg-zinc-950 border border-brand-muted w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
            <Cpu className="w-5 h-5 text-brand-accent animate-pulse" />
          </div>
        </div>

        {/* Loading Message and Micro-interactions */}
        <div className="text-center space-y-1.5">
          <h2 className="text-sm font-mono font-bold tracking-widest text-white uppercase animate-pulse">
            INITIALIZING_PIPELINE
          </h2>
          <p className="text-[11px] font-mono text-zinc-500">
            / Pulling data arrays from MongoDB cluster...
          </p>
        </div>

      </div>
    </div>
  );
}