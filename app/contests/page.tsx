import { AppShell } from "@/components/app-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contestSchedule } from "@/lib/mock-data";

export default function ContestsPage() {
  return (
    <AppShell title="Contests">
      <Card className="border-slate-800 bg-slate-950/60">
        <CardHeader>
          <CardTitle>Upcoming contests</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 p-4 pt-0">
          {contestSchedule.map((contest) => (
            <div key={contest.name} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <div>
                <div className="text-base font-medium text-white">{contest.name}</div>
                <div className="text-sm text-slate-400">{contest.date}</div>
              </div>
              <Badge>{contest.type}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </AppShell>
  );
}
