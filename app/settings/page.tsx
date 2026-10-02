import { AppShell } from "@/components/app-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <AppShell title="Settings">
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-slate-800 bg-slate-950/60">
          <CardHeader>
            <CardTitle>General</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 p-4 pt-0">
            <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
              <span className="text-slate-200">Dark mode</span>
              <Button variant="secondary" size="sm">Enabled</Button>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
              <span className="text-slate-200">Daily reminder</span>
              <Button variant="outline" size="sm">7:30 PM</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-950/60">
          <CardHeader>
            <CardTitle>Study preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 p-4 pt-0">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3 text-slate-200">Adaptive review enabled</div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3 text-slate-200">Priority topics: DSA + C + LTPs</div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3 text-slate-200">LinkedIn cadence: 3 posts / week</div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
