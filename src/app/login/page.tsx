"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button, Spinner } from "@heroui/react";
import { Terminal, KeyRound, LogIn } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Requirement 7 Match: Demo login handler code template string fields
  const handleDemoLogin = () => {
    setEmail("salauddincse96@email.com"); // Real context user fallback criteria data syntax context
    setPassword("SecureDevPass96!");
  };

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Better Auth runtime logic pipeline connection anchor parameter layout
    // await authClient.signIn.email({ email, password });

    setTimeout(() => setLoading(false), 1000); // Latency simulation loop
  };

  return (
      <div className="mt-10 container mx-auto min-h-screen bg-brand-dark flex flex-col justify-center items-center px-4 relative">
        <div className="w-full max-w-md bg-zinc-950 border border-brand-muted rounded-2xl p-8 shadow-2xl space-y-6">
          {/* Component Header Identity Branding Context Branding block Layout */}
          <div className="text-center space-y-2">
            <div className="inline-flex p-3 rounded-2xl bg-brand-muted border border-brand-muted/60 text-brand-accent mx-auto">
              <Terminal className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Welcome Back
            </h2>
            <p className="text-xs text-zinc-400">
              Continue building on the DevLaunch sandbox engine.
            </p>
          </div>

          {/* HeroUI Custom Form Primitives setup */}
          <form className="space-y-4" onSubmit={handleLoginSubmit}>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-zinc-400 block">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="developer@example.com"
                className="w-full px-3 py-2.5 text-sm bg-brand-dark border border-brand-muted rounded-xl focus:border-brand-accent/60 outline-none text-white transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-zinc-400 block">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3 py-2.5 text-sm bg-brand-dark border border-brand-muted rounded-xl focus:border-brand-accent/60 outline-none text-white transition-colors"
              />
            </div>

            <Button
              type="submit"
              isDisabled={loading}
              className="w-full bg-brand-accent text-brand-dark font-bold rounded-xl mt-2 py-5 shadow-lg shadow-brand-accent/10"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <Spinner className="text-brand-dark" />
                  <span className="text-xs text-brand-dark">Signing In</span>
                </div>
              ) : (
                <span className="flex items-center gap-2">
                  <LogIn className="w-4 h-4 mr-1" /> Sign In to Dashboard
                </span>
              )}
            </Button>
          </form>

          {/* Requirement 7 Match: Demo Login Button Panel structure */}
          <div className="border-t border-brand-muted/40 pt-4 text-center space-y-3">
            <p className="text-[11px] text-zinc-500 font-mono">
              /&#47; Quick verification bypass validation state
            </p>
            <Button
              onClick={handleDemoLogin}
            //   variant="flat"
              className="w-full border border-brand-accent/30 text-brand-accent bg-brand-accent/5 font-semibold rounded-xl py-5 hover:bg-brand-accent/10 transition-colors"
            >
              <KeyRound className="w-4 h-4 mr-1" />
              <span>Auto-fill Reviewer Credentials</span>
            </Button>
          </div>

          <p className="text-xs text-center text-zinc-400">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-brand-accent hover:underline font-medium"
            >
              Create account
            </Link>
          </p>
        </div>
      </div>
  );
}
