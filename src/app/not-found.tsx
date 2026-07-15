import Link from "next/link";
import { Compass, ArrowLeft, Home, Terminal } from "lucide-react";
import { Button } from "@heroui/react";

export default function NotFoundPage() {
  return (
    <div className="my-15 min-h-screen bg-brand-dark flex flex-col items-center justify-center text-zinc-100 p-4 font-sans">
      {/* Subtle Indigo Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03),transparent_60%)] pointer-events-none" />

      <div className="bg-zinc-950 border border-brand-muted max-w-lg w-full p-8 sm:p-12 rounded-3xl text-center space-y-8 shadow-2xl relative z-10 backdrop-blur-sm">
        {/* Animated Radar/Compass Section */}
        <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 bg-brand-accent/5 rounded-full animate-ping opacity-60" />
          <div className="relative bg-zinc-900 border border-brand-muted w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
            <Compass className="w-10 h-10 text-brand-accent animate-[spin_8s_linear_infinite]" />
          </div>
        </div>

        {/* Error Typography */}
        <div className="space-y-3">
          <div className="text-6xl font-black tracking-tighter text-zinc-800 font-mono select-none">
            404
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-mono uppercase">
            Route_Not_Found
          </h1>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-sm mx-auto">
            The endpoint or resource configuration grid you are attempting to
            traverse does not exist or has been relocated inside the cluster.
          </p>
        </div>

        {/* Terminal Simulation Log */}
        <div className="bg-brand-dark/50 border border-brand-muted/40 p-4 rounded-2xl font-mono text-left space-y-1.5 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>
              Resolution:{" "}
              <span className="text-amber-400 font-bold">ERR_NOT_FOUND</span>
            </span>
          </div>
          <div className="flex items-start gap-1">
            <Terminal className="w-3.5 h-3.5 text-zinc-600 mt-0.5 shrink-0" />
            <span>/ Index mapping returned 0 matching nodes.</span>
          </div>
          <div>/ Please verify URL parameters or structural integrity.</div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <Link href={"/"}>
            <Button className="w-full bg-brand-accent text-brand-dark hover:bg-brand-accent/90 font-bold text-xs rounded-xl py-6 transition-all shadow-lg shadow-brand-accent/10">
              <Home className="w-4 h-4 mr-1.5" />
              <span>Return to Dashboard</span>
            </Button>
          </Link>

          <Link href={"/projects"}>
            <Button className="w-full bg-brand-muted text-zinc-200 hover:bg-zinc-800/80 font-bold text-xs rounded-xl py-6 border border-brand-muted transition-all">
              <span>Explore Projects</span>
            </Button>
          </Link>
        </div>

        {/* Dynamic Back History Link */}
        <Link
          href="javascript:history.back()"
          className="inline-flex items-center gap-2 text-[11px] font-mono text-zinc-500 hover:text-brand-accent transition-colors group mt-2"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          <span>Step Back to Safe Directory</span>
        </Link>
      </div>
    </div>
  );
}
