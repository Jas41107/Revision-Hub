import { AppShell } from "@/components/app-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { studyTrend } from "@/lib/mock-data";

const totalHours = studyTrend.reduce((sum, item) => sum + item.value, 0);
const averageScore = Math.round(totalHours / studyTrend.length);

export default function AnalyticsPage() {
  return (
    <AppShell title="Analytics">
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-slate-800 bg-slate-950/60">
          <CardHeader>
            <CardTitle>Study hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-semibold text-white">{totalHours}h</div>
            <div className="mt-2 text-sm text-slate-400">Across the last week</div>
          </CardContent>
        </Card>
        <Card className="border-slate-800 bg-slate-950/60">
          <CardHeader>
            <CardTitle>Average score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-semibold text-white">{averageScore}%</div>
            <div className="mt-2 text-sm text-slate-400">For revision sessions</div>
          </CardContent>
        </Card>
        <Card className="border-slate-800 bg-slate-950/60">
          <CardHeader>
            <CardTitle>Consistency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-semibold text-white">91%</div>
            <div className="mt-2 text-sm text-slate-400">On-track habits this month</div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
