"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button, Spinner } from "@heroui/react";
import { Terminal, UserPlus, ArrowLeft } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


export default function RegisterPage() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router=useRouter()
  const handleRegisterSubmit = async (
    e: React.SubmitEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    setError(null);

    // Client execution primitive verification criteria logic map
    if (name.length < 3) {
      setError(
        "Username character allocation must beat minimum of 3 index strings.",
      );
      return;
    }
    if (password.length < 6) {
      setError(
        "Security parameter sequence logic requires minimum 6 items code lengths.",
      );
      return;
    }

    setLoading(true);
    // Better Auth server pipeline endpoint bridge map execution
    const { error: loginErr } = await authClient.signUp.email({
      email,
      password,
      name, 
    },{
      onSuccess:()=>{
        router.push("/")
        router.refresh()
      }
    });
    if (loginErr) {
      if (loginErr?.message) {
        setError(loginErr?.message);
      } else {
        setError(null);
      }
      setTimeout(() => setLoading(false));
    } else {
      toast.success("Register Successful!");
      setTimeout(() => setLoading(false), 1200);
    }
  };

  return (
    <div className="mt-10 min-h-screen bg-brand-dark flex flex-col justify-center items-center px-4 relative">
      <div className="w-full max-w-md bg-zinc-950 border border-brand-muted rounded-2xl p-8 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex p-3 rounded-2xl bg-brand-muted border border-brand-muted/60 text-brand-accent mx-auto">
            <UserPlus className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Create Developer Profile
          </h2>
          <p className="text-xs text-zinc-400">
            Join the node matrix index to distribute custom application
            configurations.
          </p>
        </div>

        {/* Alert dynamic banner wrapper interface handles errors */}
        {error && (
          <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono">
            Error: {error}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleRegisterSubmit}>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-zinc-400 block">
              Full Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Salauddin"
              className="w-full px-3 py-2.5 text-sm bg-brand-dark border border-brand-muted rounded-xl focus:border-brand-accent/60 outline-none text-white transition-colors"
            />
            <p className="text-[10px] text-zinc-500 font-mono">
              Minimum 3 characters allocation block.
            </p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-zinc-400 block">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="salauddincse96@email.com" // Consistent identifier usage validation
              className="w-full px-3 py-2.5 text-sm bg-brand-dark border border-brand-muted rounded-xl focus:border-brand-accent/60 outline-none text-white transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-zinc-400 block">
              Security Password
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
            className="w-full bg-brand-accent text-brand-dark font-bold rounded-xl mt-4 py-5 shadow-lg shadow-brand-accent/10"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <Spinner className="text-brand-dark" />
                <span className="text-xs text-brand-dark">
                  Creating Profile
                </span>
              </div>
            ) : (
              <span className="flex items-center gap-2">
                <Terminal className="w-4 h-4 mr-1" /> Register Profile
              </span>
            )}
          </Button>
        </form>

        <p className="text-xs text-center text-zinc-400 pt-2">
          Already verified inside engine index?{" "}
          <Link
            href="/login"
            className="text-brand-accent hover:underline font-medium"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
