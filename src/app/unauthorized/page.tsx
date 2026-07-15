import Link from "next/link";
import { ShieldAlert, ArrowLeft, Home, KeyRound } from "lucide-react";
import { Button } from "@heroui/react";

export default function UnauthorizedPage() {
  return (
    <div className="my-15 min-h-screen bg-brand-dark flex flex-col items-center justify-center text-zinc-100 p-4 font-sans">
      {/* Global Background Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05),transparent_50%)] pointer-events-none" />

      <div className="bg-zinc-950 border border-brand-muted max-w-lg w-full p-8 sm:p-12 rounded-3xl text-center space-y-8 shadow-2xl relative z-10 backdrop-blur-sm">
        {/* Animated Icon Section */}
        <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 bg-rose-500/10 rounded-full animate-ping opacity-75" />
          <div className="relative bg-rose-500/10 border border-rose-500/20 w-20 h-20 rounded-full flex items-center justify-center shadow-lg shadow-rose-500/5">
            <ShieldAlert className="w-10 h-10 text-rose-500" />
          </div>
        </div>

        {/* Error Messages */}
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-mono">
            ACCESS_DENIED_CORE
          </h1>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-sm mx-auto">
            You do not have permission to access this directory or system
            architecture. Your session may have expired or the security token
            validation failed.
          </p>
        </div>

        {/* Formatted System Info Log */}
        <div className="bg-brand-dark/50 border border-brand-muted/40 p-4 rounded-2xl font-mono text-left space-y-1.5 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span>
              Status:{" "}
              <span className="text-rose-400 font-bold">401 Unauthorized</span>
            </span>
          </div>
          <div>/ Pipeline validation token rejected or missing.</div>
          <div>/ Target cluster requires an active authorization layer.</div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <Link href={"/login"}>
            <Button className="w-full bg-brand-accent text-brand-dark hover:bg-brand-accent/90 font-bold text-xs rounded-xl py-6 transition-all shadow-lg shadow-brand-accent/10">
              <KeyRound className="w-4 h-4 mr-1.5" />
              <span>Go to Login Panel</span>
            </Button>
          </Link>

          <Link href={"/"}>
            <Button className="w-full bg-brand-muted text-zinc-200 hover:bg-zinc-800/80 font-bold text-xs rounded-xl py-6 border border-brand-muted transition-all">
              <Home className="w-4 h-4 mr-1.5" />
              <span>Return to Home</span>
            </Button>
          </Link>
        </div>

        {/* Back Link */}
        <Link
          href="javascript:history.back()"
          className="inline-flex items-center gap-2 text-[11px] font-mono text-zinc-500 hover:text-brand-accent transition-colors group mt-2"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          <span>Go Back to Previous Session</span>
        </Link>
      </div>
    </div>
  );
}
