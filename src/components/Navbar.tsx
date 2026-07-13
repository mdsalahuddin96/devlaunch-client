"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Terminal,
  Compass,
  Info,
  BookOpen,
  Layers,
  PlusCircle,
  LayoutDashboard,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { signOut, useSession } from "@/lib/auth-client";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();
  const { data, isPending } = useSession();
  const user = data?.user;
  const isLoggedIn = !!user;
  // Requirement Minimum 3 Public Routes for Logged Out users
  const publicRoutes = [
    {
      name: "Explore",
      href: "/projects",
      icon: <Compass className="w-4 h-4" />,
    },
    { name: "About", href: "/about", icon: <Info className="w-4 h-4" /> },
    { name: "Blog", href: "/blog", icon: <BookOpen className="w-4 h-4" /> },
  ];

  // Requirement Minimum 5 Routes for Logged In users
  const privateRoutes = [
    {
      name: "Explore",
      href: "/projects",
      icon: <Compass className="w-4 h-4" />,
    },
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="w-4 h-4" />,
    },
    {
      name: "Add Project",
      href: "/items/add",
      icon: <PlusCircle className="w-4 h-4" />,
    },
    {
      name: "Manage",
      href: "/items/manage",
      icon: <Layers className="w-4 h-4" />,
    },
    { name: "About Us", href: "/about", icon: <Info className="w-4 h-4" /> },
  ];

  const currentRoutes = isLoggedIn ? privateRoutes : publicRoutes;

  const handleSignout = async () => {
    await signOut();
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-brand-muted/40 h-16 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Left Section: Logo & Toggle */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 rounded-xl text-zinc-400 hover:bg-brand-muted/40 hover:text-white transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
          {/* Core App Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-xl bg-brand-muted border border-brand-muted/60 group-hover:border-brand-accent/40 transition-colors">
              <Terminal className="w-5 h-5 text-brand-accent" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              Dev<span className="text-brand-accent">Launch</span>
            </span>
          </Link>
        </div>

        {/* Center Section: Desktop Desktop Items */}
        <div className="hidden sm:flex items-center gap-6">
          {currentRoutes.map((route, index) => (
            <Link
              key={index}
              href={route.href}
              className={` hover:text-brand-accent flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${route.href === pathName ? "text-brand-accent bg-brand-accent/15 p-2 rounded-2xl" : "text-zinc-400"}`}
            >
              {route.icon}
              {route.name}
            </Link>
          ))}
        </div>

        {/* Right Section: Action CTA Flows */}
        <div className="flex items-center gap-3">
          {isPending ? (
            <div>user...</div>
          ) : isLoggedIn ? (
            <div className="flex items-center gap-3">
              {/* Quick User Avatar Display Frame */}
              <div className="w-8 h-8 text-zinc-50 rounded-full border border-brand-accent overflow-hidden hidden  sm:flex justify-center items-center">
                {user?.image ? (
                  <Image
                    src={user?.image}
                    alt="User Avatar"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div>{user?.name.slice(0, 1).toUpperCase()}</div>
                )}
              </div>
              <button
                onClick={handleSignout}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-rose-500/30 text-rose-400 hover:bg-rose-500/10 text-xs font-medium transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="text-zinc-400 hover:text-white px-3 py-1.5 text-sm font-medium transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="bg-brand-accent text-brand-dark font-semibold text-sm rounded-xl px-4 py-1.5 transition-transform active:scale-95 shadow-md shadow-brand-accent/10 hover:brightness-110"
              >
                Join Free
              </Link>
              {/* Development helper controller to switch between testing views */}
              <button
                // onClick={() => setIsLoggedIn(true)}
                className="hidden lg:block border border-brand-muted text-zinc-500 hover:text-zinc-300 text-[10px] px-2 py-1 rounded-md transition-colors"
              >
                Simulate Auth
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Drawer Menu Layout Overlay */}
      {isMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-16 bg-brand-dark/95 border-b border-brand-muted/60 backdrop-blur-lg animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {currentRoutes.map((route, index) => (
              <Link
                key={index}
                href={route.href}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl hover:text-brand-accent hover:bg-brand-muted/30 text-base font-medium transition-all ${route.href === pathName ? "text-brand-accent" : "text-zinc-400"} `}
              >
                {route.icon}
                {route.name}
              </Link>
            ))}
            {/* Mobile View Simulate Toggle Wrapper */}
            {!isLoggedIn && (
              <button
                onClick={() => {
                  // setIsLoggedIn(true);
                  setIsMenuOpen(false);
                }}
                className="w-full text-left flex items-center gap-3 px-3 py-2 text-zinc-500 text-xs border-t border-brand-muted/20 pt-4"
              >
                Terminal Check: Simulate Member Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
