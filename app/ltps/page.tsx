import { AppShell } from "@/components/app-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ltpItems = [
  "Implement a stack using arrays and linked list",
  "Write a recursion memoization solution for coin change",
  "Build a custom string library and benchmark it",
  "Solve 3 medium-level graph traversal problems",
];

export default function LTPSPage() {
  return (
    <AppShell title="LTPs">
      <Card className="border-slate-800 bg-slate-950/60">
        <CardHeader>
          <CardTitle>Long-term practice roadmap</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 p-4 pt-0">
          {ltpItems.map((item, index) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/15 text-sm font-semibold text-sky-200">
                {index + 1}
              </div>
              <div className="text-slate-200">{item}</div>
            </div>
          ))}
        </CardContent>
      </Card>
    </AppShell>
  );
}
