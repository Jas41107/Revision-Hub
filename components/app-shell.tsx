'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  CheckSquare,
  Code2,
  Flame,
  LayoutDashboard,
  Settings,
  Trophy,
} from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/learning", label: "Learning", icon: BookOpen },
  { href: "/dsa", label: "DSA", icon: BrainCircuit },
  { href: "/c-programming", label: "C Programming", icon: Code2 },
  { href: "/ltps", label: "LTPs", icon: CheckSquare },
  { href: "/habits", label: "Habits", icon: Flame },
  { href: "/contests", label: "Contests", icon: Trophy },
  { href: "/linkedin", label: "LinkedIn", icon: BriefcaseBusiness },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function AppShell({ children, title }: { children: ReactNode; title?: string }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#020817] text-slate-100">
      <div className="mx-auto flex max-w-[1600px] gap-6 px-4 py-6 lg:px-6">
        <aside className="hidden w-72 shrink-0 rounded-3xl border border-slate-800 bg-slate-950/70 p-5 lg:block">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 font-bold text-slate-950">
              RH
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.24em] text-sky-300">RevisionHub</div>
              <div className="text-sm text-slate-400">Productivity OS</div>
            </div>
          </div>

          <nav className="space-y-2">
            {navItems.map(({ href, label, icon: Icon }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm transition-colors",
                    active
                      ? "bg-sky-500/15 text-sky-100 ring-1 ring-sky-500/30"
                      : "text-slate-300 hover:bg-slate-800/80 hover:text-white",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-200">Focus score</span>
              <Badge>89%</Badge>
            </div>
            <div className="h-2 rounded-full bg-slate-800">
              <div className="h-2 w-[89%] rounded-full bg-gradient-to-r from-sky-500 to-violet-500" />
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <header className="mb-6 flex items-center justify-between rounded-3xl border border-slate-800 bg-slate-950/70 px-4 py-3 backdrop-blur">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Workspace</div>
              <h1 className="text-2xl font-semibold text-white">{title ?? "Dashboard"}</h1>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="secondary" className="hidden md:flex">
                Ctrl + K
              </Button>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900 px-3 py-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 text-sm font-semibold text-slate-950">
                  AK
                </div>
                <div className="hidden sm:block">
                  <div className="text-sm font-medium text-white">Aarav K.</div>
                  <div className="text-xs text-slate-400">Level 12</div>
                </div>
              </div>
            </div>
          </header>

          {children}
        </main>
      </div>

      <div className="fixed bottom-4 left-4 right-4 z-20 flex items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-950/90 p-2 shadow-lg lg:hidden">
        {navItems.slice(0, 5).map(({ href, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-1 items-center justify-center rounded-xl px-2 py-2 text-[11px]",
                active ? "bg-sky-500/15 text-sky-200" : "text-slate-400",
              )}
            >
              <Icon className="h-4 w-4" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
