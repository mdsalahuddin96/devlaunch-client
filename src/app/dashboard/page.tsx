"use client";

import React, { useEffect, useState } from "react";
import { FolderGit2, MessageSquare, Star, Activity, BarChart3, TrendingUp } from "lucide-react";
import { Surface } from "@heroui/react";
import { authClient, useSession } from "@/lib/auth-client";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area 
} from "recharts";
import { useRouter } from "next/navigation";

interface Stats {
  totalProjects: number;
  totalReviews: number;
  avgRating: number;
}

interface RecentReview {
  projectTitle: string;
  username: string;
  rating: number;
  comment: string;
  createdAt: string;
}

interface TechData {
  name: string;
  value: number;
}
interface ActivityTrend{
    name: string,
    uploads:number,
    interactions:number
}

export default function DashboardOverview() {
    const router=useRouter()
  const [data, setData] = useState<{ stats: Stats; recentReviews: RecentReview[]; techDistribution: TechData[]; activityTrendData:ActivityTrend[] } | null>(null);
  const [loading, setLoading] = useState(true);
  const { data: userData } = useSession();
  const userId = userData?.user?.id;
  if(!userId){
    router.replace("/login?redirectTo=/dashboard")
    router.refresh()
  }
  useEffect(() => {
  if (!userId) return;

  const fetchDashboardData = async () => {
    try {
      const {data} = await authClient.token();
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/dashboard/stats?userId=${userId}`, {
        headers: {
          authorization: `Bearer ${data?.token}` 
        }
      });
      const resData = await response.json();

      if (resData.success) {
        setData({ 
          stats: resData.stats, 
          recentReviews: resData.recentReviews,
          techDistribution: resData.techDistribution,
          activityTrendData: resData.activityTrendData
        });
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };
  fetchDashboardData();
}, [userId]);
  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-zinc-500 font-mono text-sm">
        Loading core command console layers...
      </div>
    );
  }

  const stats = data?.stats || { totalProjects: 0, totalReviews: 0, avgRating: 0 };
  const techChartData = data?.techDistribution || [];
  const activityTrendData=data?.activityTrendData;
  return (
    <div className="my-15 space-y-8 p-6 max-w-6xl mx-auto bg-zinc-950 text-zinc-100 min-h-screen">
      
      {/* Welcome Header */}
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Workspace Console</h1>
        <p className="text-zinc-400 text-xs font-mono mt-1">Logged in user session scope telemetry metrics.</p>
      </div>

      {/* 1. QUICK STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Total Projects */}
        <Surface variant="default" className="bg-zinc-900/40 border border-zinc-900 p-6 rounded-2xl flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Total Codebases</p>
            <p className="text-3xl font-extrabold text-white font-mono">{stats.totalProjects}</p>
          </div>
          <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl">
            <FolderGit2 className="size-5" />
          </div>
        </Surface>

        {/* Total Reviews */}
        <Surface variant="default" className="bg-zinc-900/40 border border-zinc-900 p-6 rounded-2xl flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Accumulated Reviews</p>
            <p className="text-3xl font-extrabold text-white font-mono">{stats.totalReviews}</p>
          </div>
          <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl">
            <MessageSquare className="size-5" />
          </div>
        </Surface>

        {/* Avg Rating */}
        <Surface variant="default" className="bg-zinc-900/40 border border-zinc-900 p-6 rounded-2xl flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Average Evaluation</p>
            <p className="text-3xl font-extrabold text-white font-mono">★ {stats.avgRating.toFixed(1)}</p>
          </div>
          <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl">
            <Star className="size-5" />
          </div>
        </Surface>
      </div>

      {/* 2. DYNAMIC ANALYTICS CHARTS LAYER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Chart A: Projects by Tech Stack */}
        <Surface variant="default" className="bg-zinc-900/20 border border-zinc-900 p-6 rounded-2xl space-y-4">
          <div className="flex items-center gap-2">
            <BarChart3 className="size-4 text-indigo-400" />
            <h2 className="text-sm font-bold font-mono text-zinc-300">Projects by Technology</h2>
          </div>
          <div className="h-64 w-full pt-4">
            {techChartData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={techChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="name" stroke="#71717a" fontSize={11}  tickLine={false} />
                  <YAxis stroke="#71717a" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: "#18181b", borderColor: "#27272a", borderRadius: "12px" }}
                    itemStyle={{ color: "#a5b4fc", fontFamily: "monospace", fontSize: "12px" }}
                    labelStyle={{ color: "#fff", fontWeight: "bold", fontSize: "12px" }}
                  />
                  <Bar dataKey="value" fill="#6366f1" radius={[6, 6, 0, 0]} maxBarSize={45} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex items-center justify-center text-xs font-mono text-zinc-600">
                No technology vectors index mapped yet.
              </div>
            )}
          </div>
        </Surface>

        {/* Chart B: Activity & Interaction Trend */}
        <Surface variant="default" className="bg-zinc-900/20 border border-zinc-900 p-6 rounded-2xl space-y-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="size-4 text-emerald-400" />
            <h2 className="text-sm font-bold font-mono text-zinc-300">User Activity Stream Index</h2>
          </div>
          <div className="h-64 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activityTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="name" stroke="#71717a" fontSize={11}  tickLine={false} />
                <YAxis stroke="#71717a" fontSize={11}  tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: "#18181b", borderColor: "#27272a", borderRadius: "12px" }}
                  itemStyle={{ color: "#34d399", fontFamily: "monospace", fontSize: "12px" }}
                  labelStyle={{ color: "#fff", fontWeight: "bold", fontSize: "12px" }}
                />
                <defs>
                  <linearGradient id="colorInteractions" x1="0" y1="0" x2="0" y2="100%">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="interactions" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorInteractions)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Surface>

      </div>

      {/* 3. RECENT ACTIVITY FEED */}
      <div className="space-y-4">
        <h2 className="text-sm font-bold font-mono text-zinc-400 flex items-center gap-2">
          <Activity className="size-4 text-indigo-400" />
          <span>Recent Activity Stream</span>
        </h2>

        <div className="grid grid-cols-1 gap-3">
          {data?.recentReviews && data.recentReviews.length > 0 ? (
            data.recentReviews.map((rev, idx) => (
              <Surface key={idx} variant="default" className="bg-zinc-900/20 border border-zinc-900/60 p-5 rounded-2xl space-y-2">
                <div className="flex justify-between items-start text-xs font-mono">
                  <span className="text-zinc-400">
                    @{rev.username} reviewed <span className="text-white font-sans font-bold">&quot;{rev.projectTitle}&quot;</span>
                  </span>
                  <span className="text-[10px] text-zinc-600">
                    {new Date(rev.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed italic">&quot;{rev.comment}&quot;</p>
                <div className="text-[11px] text-amber-400 font-mono">Rating Input: {rev.rating}/5</div>
              </Surface>
            ))
          ) : (
            <p className="text-xs text-zinc-500 font-mono p-6 border border-dashed border-zinc-900 rounded-2xl text-center">
              No active event log telemetry caught in this cycle.
            </p>
          )}
        </div>
      </div>

    </div>
  );
}