import { AppShell } from "@/components/app-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { dsaTopics } from "@/lib/mock-data";

export default function DSAPage() {
  return (
    <AppShell title="DSA">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {dsaTopics.map((topic) => (
          <Card key={topic.name} className="border-slate-800 bg-slate-950/60">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{topic.name}</CardTitle>
                <Badge>{topic.mastery}%</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-2 rounded-full bg-slate-800">
                <div className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-sky-500" style={{ width: `${topic.mastery}%` }} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
