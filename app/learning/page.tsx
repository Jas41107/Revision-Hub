import { AppShell } from "@/components/app-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { learningTasks } from "@/lib/mock-data";

export default function LearningPage() {
  return (
    <AppShell title="Learning tracker">
      <Card className="border-slate-800 bg-slate-950/60">
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle>Today’s learning plan</CardTitle>
          <Button variant="outline" size="sm">Add task</Button>
        </CardHeader>
        <CardContent className="space-y-4 p-4 pt-0">
          {learningTasks.map((task) => (
            <div key={task.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-base font-medium text-white">{task.title}</div>
                  <div className="mt-1 text-sm text-slate-400">Due {task.due}</div>
                </div>
                <Badge>{task.status}</Badge>
              </div>
              <div className="mt-4 h-2 rounded-full bg-slate-800">
                <div className="h-2 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500" style={{ width: `${task.progress}%` }} />
              </div>
              <div className="mt-2 text-right text-xs text-slate-400">{task.progress}% complete</div>
            </div>
          ))}
        </CardContent>
      </Card>
    </AppShell>
  );
}
