import { AppShell } from "@/components/app-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { habits } from "@/lib/mock-data";

export default function HabitsPage() {
  return (
    <AppShell title="Habits">
      <div className="grid gap-6 md:grid-cols-2">
        {habits.map((habit) => {
          const ratio = Math.round((habit.completed / habit.total) * 100);
          return (
            <Card key={habit.name} className="border-slate-800 bg-slate-950/60">
              <CardHeader className="flex-row items-center justify-between">
                <CardTitle>{habit.name}</CardTitle>
                <Badge>{ratio}%</Badge>
              </CardHeader>
              <CardContent>
                <div className="h-2 rounded-full bg-slate-800">
                  <div className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" style={{ width: `${ratio}%` }} />
                </div>
                <div className="mt-3 text-sm text-slate-400">
                  {habit.completed}/{habit.total} completed this week
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </AppShell>
  );
}
