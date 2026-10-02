import { AppShell } from "@/components/app-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const posts = [
  { title: "Mastering arrays for interviews", status: "Ready to publish" },
  { title: "How I study DSA in 4 weeks", status: "Draft" },
  { title: "Tips for productive revision blocks", status: "Queued" },
];

export default function LinkedInPage() {
  return (
    <AppShell title="LinkedIn">
      <Card className="border-slate-800 bg-slate-950/60">
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle>Content pipeline</CardTitle>
          <Button variant="outline" size="sm">New post</Button>
        </CardHeader>
        <CardContent className="space-y-4 p-4 pt-0">
          {posts.map((post) => (
            <div key={post.title} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <div>
                <div className="text-base font-medium text-white">{post.title}</div>
                <div className="text-sm text-slate-400">Career growth + coding</div>
              </div>
              <Badge>{post.status}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </AppShell>
  );
}
