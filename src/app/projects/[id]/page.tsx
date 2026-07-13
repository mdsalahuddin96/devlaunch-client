import { redirect } from "next/navigation";
import Image from "next/image";
import {
  ArrowLeft,
  ExternalLink,
  Star,
  ShieldAlert,
  Cpu,
  MessageSquare,
  Send,
  User,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@heroui/react";
import Link from "next/link";

import { headers } from "next/headers";
import { auth } from "@/lib/auth";

interface Project {
  _id: string;
  title: string;
  description: string;
  tech: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  author: string;
  rating: number;
  imageUrl: string;
  liveUrl: string;
  githubUrl?: string;
  priority?: "Low" | "Medium" | "High";
  reviews?: Review[];
}

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const isUserLoggedIn = session?.user || false;

  if (!isUserLoggedIn) {
    // Dynamic access blocker mechanism triggered immediately before components mounting execution matrix loop
    redirect(`/login?redirectTo=/projects/${id}`);
  }

  let project: Project | null = null;
  try {
    const response = await fetch(`http://localhost:5000/projects/${id}`, {
      cache: "no-store",
    });

    if (response.ok) {
      project = await response.json();
    }
  } catch (error) {
    console.error("Cluster instance fetch failed tracking parameters:", error);
  }

  // Fallback interface block mapping layout error context
  if (!project) {
    return (
      <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center text-zinc-100 p-4">
        <div className="bg-zinc-950 border border-brand-muted max-w-md w-full p-8 rounded-3xl text-center space-y-4 shadow-2xl">
          <ShieldAlert className="w-12 h-12 text-rose-500 mx-auto animate-pulse" />
          <h2 className="text-xl font-bold text-white">
            Compilation Registry Index Broken
          </h2>
          <p className="text-sm text-zinc-400">
            The specific structural profile block reference does not correspond
            to an established architecture array inside MongoDB.
          </p>
          <Link
            href="/projects/explore"
            className="w-full bg-brand-muted text-white font-medium rounded-xl"
          >
            Return to Explorer Registry
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-dark pt-28 pb-16 text-zinc-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Navigation Action Control Bar */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-brand-accent transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO SYSTEM EXPLORER CLUSTER</span>
        </Link>

        {/* Core Profile Structural Body Grid Layout Layout Context */}
        <div className="bg-zinc-950 border border-brand-muted rounded-3xl overflow-hidden shadow-2xl">
          {/* Cover Media Rendering Block Container */}
          <div className="aspect-video w-full bg-brand-dark relative border-b border-brand-muted/50">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              priority
              className="object-cover opacity-90"
            />
            {project.priority && (
              <span
                className={`absolute top-6 right-6 text-[10px] font-mono font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border shadow-xl ${
                  project.priority === "High"
                    ? "bg-rose-500/10 text-rose-400 border-rose-500/20"
                    : project.priority === "Medium"
                      ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                      : "bg-zinc-500/10 text-zinc-400 border-zinc-500/20"
                }`}
              >
                Priority Matrix: {project.priority}
              </span>
            )}
          </div>

          {/* Component Parameter Descriptions Blocks */}
          <div className="p-6 sm:p-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase text-brand-dark bg-brand-accent px-2.5 py-1 rounded-md">
                  {project.difficulty} Tier
                </span>
                <span className="text-xs font-mono text-zinc-500">
                  &#47;&#47; Node ID: {project._id}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-400 font-medium bg-amber-400/5 border border-amber-400/10 px-3 py-1 rounded-xl text-sm">
                <Star className="w-4 h-4 fill-amber-400" />
                <span>{project.rating} Core Rating</span>
              </div>
            </div>

            <div className="space-y-3">
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                {project.title}
              </h1>
              <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            {/* Architecture Details Specifications Component Panel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-brand-dark/50 border border-brand-muted/40 p-4 rounded-2xl font-mono text-xs">
              <div className="flex items-center gap-2 border-b sm:border-b-0 sm:border-r border-brand-muted/30 pb-2 sm:pb-0">
                <Cpu className="w-4 h-4 text-brand-accent" />
                <span className="text-zinc-500">System Architect:</span>
                <span className="text-white font-bold">{project.author}</span>
              </div>
              <div className="flex items-center gap-2 sm:pl-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-zinc-500">Validation Core Status:</span>
                <span className="text-emerald-400 font-bold">
                  Active Stream Pipeline
                </span>
              </div>
            </div>

            {/* Technology Stack Allocation Chip Array */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                &#47;&#47; Component Technology Mappings
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono bg-brand-muted border border-brand-muted text-zinc-200 px-3 py-1 rounded-xl shadow-inner"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Execution Redirect Action Gateways Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-brand-muted/30">
              <Button
                // as="a"
                // href={project.liveUrl}
                // target="_blank"
                // rel="noopener noreferrer"
                className="w-full bg-brand-accent text-brand-dark hover:bg-brand-accent/90 font-bold text-xs rounded-xl py-6 transition-all shadow-lg shadow-brand-accent/10"
              >
                <ExternalLink className="w-4 h-4 mr-1.5" />
                <span>Launch Distributed Application</span>
              </Button>

              <Button
                // as="a"
                // href={project.githubUrl || "#"}
                // target="_blank"
                // rel="noopener noreferrer"
                isDisabled={!project.githubUrl}
                className="w-full bg-brand-muted text-zinc-200 hover:bg-brand-muted/80 font-bold text-xs rounded-xl py-6 border border-brand-muted transition-all"
              >
                <FaGithub className="w-4 h-4 mr-1.5" />
                <span>Query Repository Codebase</span>
              </Button>
            </div>
          </div>

          {/* ========================================== */}
          {/* 💬 SYSTEM REVIEW SUBSECTION MATRIX COMPONENT */}
          {/* ========================================== */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-8 border-t border-brand-muted/30">
            {/* Add a Review Form */}
            <form
            //   action={handleReviewSubmission}
              className="md:col-span-5 bg-zinc-950 border border-brand-muted p-6 rounded-2xl space-y-4 shadow-xl"
            >
              <div className="border-b border-brand-muted/30 pb-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-brand-accent" />
                  <span>Leave a Review</span>
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Share your feedback about this project with the community.
                </p>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-zinc-300">
                  Your Name / Username
                </label>
                <input
                  type="text"
                  name="username"
                  required
                  placeholder="e.g. salauddin_cse"
                  className="w-full px-3 py-2 bg-brand-dark border border-brand-muted rounded-xl text-sm text-white focus:border-brand-accent/50 outline-none transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-zinc-300">
                  Select Rating
                </label>
                <select
                  name="rating"
                  className="w-full px-3 py-2 bg-brand-dark border border-brand-muted rounded-xl text-sm text-zinc-300 focus:border-brand-accent/50 outline-none cursor-pointer"
                >
                  <option value="5">★ 5 Stars - Excellent Project</option>
                  <option value="4">★ 4 Stars - Very Good</option>
                  <option value="3">★ 3 Stars - Good / Standard</option>
                  <option value="2">★ 2 Stars - Needs Improvement</option>
                  <option value="1">★ 1 Star - Poor Quality</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-zinc-300">
                  Your Comment
                </label>
                <textarea
                  name="comment"
                  rows={4}
                  required
                  placeholder="Write your thoughts about the design, features, or code quality..."
                  className="w-full p-3 bg-brand-dark border border-brand-muted rounded-xl text-sm text-white focus:border-brand-accent/50 outline-none transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-brand-accent text-brand-dark hover:bg-brand-accent/90 font-bold text-sm rounded-xl py-4 transition-all shadow-lg"
              >
                <Send className="w-4 h-4 mr-1.5" />
                <span>Submit Review</span>
              </Button>
            </form>

            {/* Display Reviews List */}
            <div className="md:col-span-7 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>User Reviews</span>
                <span className="text-xs font-normal text-zinc-400">
                  ({project.reviews?.length || 0} comments)
                </span>
              </h3>

              {!project.reviews || project.reviews.length === 0 ? (
                <div className="text-center py-12 bg-zinc-950/40 border border-brand-muted/40 rounded-2xl text-sm text-zinc-500">
                  <p>No reviews yet. Be the first to leave your feedback!</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-[420px] overflow-y-auto pr-2">
                  {project.reviews.map((review, i) => (
                    <div
                      key={i}
                      className="bg-zinc-950 border border-brand-muted p-4 rounded-xl space-y-2 shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm font-semibold text-white">
                          <User className="w-4 h-4 text-brand-accent" />
                          <span>@{review.username}</span>
                        </div>
                        <span className="text-xs text-amber-400 font-bold bg-amber-400/10 px-2 py-0.5 border border-amber-400/20 rounded-md">
                          ★ {review.rating}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
