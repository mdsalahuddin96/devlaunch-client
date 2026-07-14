import {
  PlusCircle,
  ArrowLeft,
  Code,
  Layers,
  Globe,
  Image,
  Layout,
  User,
} from "lucide-react";
import { Button } from "@heroui/react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { createProjectAction } from "@/lib/actions/createProjectAction";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function AddProjectPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if(!session?.user){
    redirect(`/login?redirectTo=add/project`)
  }
  return (
    <div className="min-h-screen bg-brand-dark pt-28 pb-16 text-zinc-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 space-y-6">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-brand-accent transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO EXPLORER</span>
        </Link>

        {/* Main Form Container */}
        <div className="bg-zinc-950 border border-brand-muted rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
          {/* Header */}
          <div className="border-b border-brand-muted/30 pb-4">
            <h1 className="text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
              <PlusCircle className="w-6 h-6 text-brand-accent" />
              <span>Add New Project</span>
            </h1>
            <p className="text-xs text-zinc-400 mt-1">
              Submit your workspace project to the global community database.
            </p>
          </div>

          {/* Form */}
          <form action={createProjectAction} className="space-y-5">
            {/* Title & Author */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-300 flex items-center gap-1.5">
                  <Layout className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Project Title *</span>
                </label>
                <input
                  type="text"
                  name="title"
                  required
                  placeholder="e.g. DigiTools Platform"
                  className="w-full px-3.5 py-2.5 bg-brand-dark border border-brand-muted rounded-xl text-sm text-white focus:border-brand-accent/50 outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-300 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Author / Creator *</span>
                </label>
                <input
                  type="text"
                  name="author"
                  required
                  placeholder="e.g. Salauddin"
                  className="w-full px-3.5 py-2.5 bg-brand-dark border border-brand-muted rounded-xl text-sm text-white focus:border-brand-accent/50 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-zinc-300">
                Project Description *
              </label>
              <textarea
                name="description"
                rows={4}
                required
                placeholder="Describe the main features, objectives, and what this project does..."
                className="w-full p-3.5 bg-brand-dark border border-brand-muted rounded-xl text-sm text-white focus:border-brand-accent/50 outline-none transition-colors resize-none"
              />
            </div>

            {/* Tech Stack & Difficulty */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-300 flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Tech Stack (Comma Separated) *</span>
                </label>
                <input
                  type="text"
                  name="tech"
                  required
                  placeholder="React, Node.js, MongoDB"
                  className="w-full px-3.5 py-2.5 bg-brand-dark border border-brand-muted rounded-xl text-sm text-white focus:border-brand-accent/50 outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-300 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Difficulty Level *</span>
                </label>
                <select
                  name="difficulty"
                  required
                  className="w-full px-3.5 py-2.5 bg-brand-dark border border-brand-muted rounded-xl text-sm text-zinc-300 focus:border-brand-accent/50 outline-none cursor-pointer"
                >
                  <option value="Beginner">Beginner Tier</option>
                  <option value="Intermediate">Intermediate Tier</option>
                  <option value="Advanced">Advanced Tier</option>
                </select>
              </div>
            </div>

            {/* Image URL */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-zinc-300 flex items-center gap-1.5">
                <Image className="w-3.5 h-3.5 text-zinc-500" />
                <span>Thumbnail Image URL *</span>
              </label>
              <input
                type="url"
                name="imageUrl"
                required
                placeholder="https://example.com/image.jpg"
                className="w-full px-3.5 py-2.5 bg-brand-dark border border-brand-muted rounded-xl text-sm text-white focus:border-brand-accent/50 outline-none transition-colors"
              />
            </div>

            {/* Live Link & GitHub Link */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-300 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Live Deployment URL *</span>
                </label>
                <input
                  type="url"
                  name="liveUrl"
                  required
                  placeholder="https://myproject.com"
                  className="w-full px-3.5 py-2.5 bg-brand-dark border border-brand-muted rounded-xl text-sm text-white focus:border-brand-accent/50 outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-300 flex items-center gap-1.5">
                  <FaGithub className="w-3.5 h-3.5 text-zinc-500" />
                  <span>GitHub Repository URL</span>
                </label>
                <input
                  type="url"
                  name="githubUrl"
                  placeholder="https://github.com/username/repo"
                  className="w-full px-3.5 py-2.5 bg-brand-dark border border-brand-muted rounded-xl text-sm text-white focus:border-brand-accent/50 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-brand-accent text-brand-dark hover:bg-brand-accent/90 font-bold text-sm rounded-xl py-6 transition-all shadow-lg shadow-brand-accent/10"
              >
                <span>Publish Project Workspace</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
