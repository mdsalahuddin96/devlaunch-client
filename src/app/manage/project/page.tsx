import { Settings, ArrowLeft, Globe, ExternalLink, Eye } from "lucide-react";
import { Button } from "@heroui/react";
import Link from "next/link";
import EditProjectButton from "./EditProjectBtn";
import DeleteProjectBtn from "./DeleteProjectBtn";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

// Project type define
interface Project {
  _id: string;
  title: string;
  author: string;
  difficulty: string;
  liveUrl: string;
  imageUrl: string;
}

// Data Fetching
async function getProjects(): Promise<Project[]> {
  try {
    const res = await fetch("http://localhost:5000/projects", {
      cache: "no-store",
    });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Failed to fetch projects for management:", error);
    return [];
  }
}

export default async function ManageProjectsPage() {
  const projects = await getProjects();
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    redirect(`/login?redirectTo=manage/project`);
  }
  return (
    <div className="min-h-screen bg-brand-dark pt-28 pb-16 text-zinc-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        {/* Navigation Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-brand-accent transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO EXPLORER</span>
        </Link>

        {/* Card Panel */}
        <div className="bg-zinc-950 border border-brand-muted rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          {/* Header */}
          <div className="border-b border-brand-muted/30 pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
                <Settings className="w-6 h-6 text-brand-accent" />
                <span>Manage Projects</span>
              </h1>
              <p className="text-xs text-zinc-400 mt-1">
                Control, monitor, or remove existing project workspaces from the
                live database.
              </p>
            </div>

            <Link href="/add/project">
              <Button
                size="sm"
                className="bg-brand-accent text-brand-dark font-bold rounded-xl px-4 py-2 text-xs"
              >
                + Add New Project
              </Button>
            </Link>
          </div>

          {/* Projects Table / List */}
          {projects.length === 0 ? (
            <div className="text-center py-16 bg-brand-dark/40 border border-brand-muted/40 rounded-2xl text-sm text-zinc-500">
              <p>
                No projects available to manage. Try publishing a new one first!
              </p>
            </div>
          ) : (
            <div className="border border-brand-muted/40 rounded-2xl overflow-hidden bg-brand-dark/20">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-zinc-900/60 border-b border-brand-muted/30 text-[11px] font-mono tracking-wider text-zinc-400 uppercase">
                      <th className="py-3.5 px-4 font-semibold">
                        Project Details
                      </th>
                      <th className="py-3.5 px-4 font-semibold hidden sm:table-cell">
                        Author
                      </th>
                      <th className="py-3.5 px-4 font-semibold hidden md:table-cell">
                        Tier
                      </th>
                      <th className="py-3.5 px-4 font-semibold text-center">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-muted/20 text-sm">
                    {projects.map((project) => (
                      <tr
                        key={project._id}
                        className="hover:bg-zinc-900/30 transition-colors"
                      >
                        {/* Title & Live Link */}
                        <td className="py-4 px-4 font-medium text-white max-w-[200px] sm:max-w-none truncate">
                          <div className="flex flex-col gap-1">
                            <span className="text-sm font-bold tracking-tight text-zinc-100">
                              {project.title}
                            </span>
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-xs text-brand-accent/80 hover:underline flex items-center gap-1 font-mono"
                            >
                              <Globe className="w-3 h-3" />
                              <span className="truncate max-w-[150px] sm:max-w-xs">
                                {project.liveUrl}
                              </span>
                              <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                          </div>
                        </td>

                        {/* Author */}
                        <td className="py-4 px-4 text-zinc-300 font-normal hidden sm:table-cell">
                          @{project.author}
                        </td>

                        {/* Difficulty Badge */}
                        <td className="py-4 px-4 hidden md:table-cell">
                          <span className="text-[10px] font-mono font-bold bg-zinc-900 border border-brand-muted/60 px-2 py-0.5 rounded-md text-zinc-400">
                            {project.difficulty}
                          </span>
                        </td>

                        {/* Actions (Delete Form) */}
                        <td className="py-4 px-4 text-center flex gap-1 items-center">
                          <Link href={`/projects/${project._id}`}>
                            <Button
                              type="submit"
                              size="sm"
                              className="bg-brand-dark border border-brand-muted/60 hover:bg-zinc-900 text-white rounded-lg transition-all"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                          </Link>
                          <DeleteProjectBtn id={project._id} />
                          <EditProjectButton project={project} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
