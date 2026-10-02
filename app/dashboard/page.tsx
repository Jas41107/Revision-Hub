"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { AppShell } from "@/components/app-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { achievementVault, dashboardStats, revisionQueue, studyTrend, weakTopics } from "@/lib/mock-data";

const toneMap = {
  sky: "from-sky-500/20 to-sky-500/5 text-sky-200",
  emerald: "from-emerald-500/20 to-emerald-500/5 text-emerald-200",
  amber: "from-amber-500/20 to-amber-500/5 text-amber-200",
  violet: "from-violet-500/20 to-violet-500/5 text-violet-200",
};

export default function DashboardPage() {
  return (
    <AppShell title="Dashboard">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <Card key={stat.label} className="overflow-hidden border-slate-800 bg-slate-950/60">
            <CardContent className="p-4">
              <div className={`rounded-2xl bg-gradient-to-br p-3 ${toneMap[stat.tone as keyof typeof toneMap]}`}>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-300">{stat.label}</div>
                <div className="mt-3 flex items-end justify-between">
                  <div className="text-3xl font-semibold text-white">{stat.value}</div>
                  <div className="rounded-full bg-slate-950/40 px-2 py-1 text-xs font-medium text-white">{stat.change}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6">
        <Card className="border-slate-800 bg-slate-950/60">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>Achievement Vault</CardTitle>
            <Badge>18 / 50 unlocked</Badge>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="mb-4 flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-3">
              <div className="text-xl font-semibold text-white">36%</div>
              <div className="flex-1">
                <div className="mb-1 text-xs uppercase tracking-[0.2em] text-slate-400">Overall progress</div>
                <div className="h-2 rounded-full bg-slate-800">
                  <div className="h-2 w-[36%] rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {achievementVault.map((achievement) => (
                <div
                  key={achievement.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 text-2xl">
                      {achievement.icon}
                    </div>
                    {achievement.unlocked ? (
                      <Badge>Unlocked</Badge>
                    ) : (
                      <span className="rounded-full border border-slate-700 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">
                        In progress
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-white">{achievement.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{achievement.description}</p>

                  <div className="mt-4">
                    <div className="mb-1 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-400">
                      <span>{achievement.unlocked ? "Unlocked" : "Progress"}</span>
                      <span>{achievement.unlocked ? "100%" : `${achievement.progress}%`}</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
                        style={{ width: `${achievement.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="mt-3 text-xs text-slate-400">
                    {achievement.unlocked ? `Unlocked ${achievement.unlockDate}` : achievement.current ?? achievement.unlockDate}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
        <Card className="border-slate-800 bg-slate-950/60">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>Study momentum</CardTitle>
            <Badge>Last 7 days</Badge>
          </CardHeader>
          <CardContent className="h-72 p-4 pt-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={studyTrend}>
                <defs>
                  <linearGradient id="studyFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#38bdf8" stopOpacity={0.08} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="day" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#020817", border: "1px solid #1e293b", borderRadius: 14 }}
                />
                <Area type="monotone" dataKey="value" stroke="#38bdf8" fill="url(#studyFill)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-950/60">
          <CardHeader>
            <CardTitle>Week focus</CardTitle>
          </CardHeader>
          <CardContent className="h-72 p-4 pt-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={studyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="day" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#020817", border: "1px solid #1e293b", borderRadius: 14 }}
                />
                <Bar dataKey="value" radius={[8, 8, 0, 0]} fill="#a78bfa" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="border-slate-800 bg-slate-950/60">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>Revision queue</CardTitle>
            <Badge>7 due</Badge>
          </CardHeader>
          <CardContent className="space-y-4 p-4 pt-0">
            {revisionQueue.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-base font-medium text-white">{item.title}</div>
                    <div className="mt-1 text-sm text-slate-400">{item.topic}</div>
                  </div>
                  <div className="rounded-full bg-sky-500/10 px-2 py-1 text-xs font-medium text-sky-200">{item.strength}%</div>
                </div>
                <div className="mt-3 flex items-center justify-between text-sm text-slate-300">
                  <span>{item.due}</span>
                  <span className="text-slate-500">Progress</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-slate-800">
                  <div className="h-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-500" style={{ width: `${item.strength}%` }} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-950/60">
          <CardHeader>
            <CardTitle>Weak areas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 p-4 pt-0">
            {weakTopics.map((topic) => (
              <div key={topic.name} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-medium text-white">{topic.name}</span>
                  <span className="text-sm text-slate-300">{topic.score}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800">
                  <div className="h-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" style={{ width: `${topic.score}%` }} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-400">{topic.trend}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
