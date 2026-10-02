import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#020817] px-4">
      <Card className="w-full max-w-md border-slate-800 bg-slate-950/70">
        <CardHeader>
          <CardTitle>Create account</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 p-4 pt-0">
          <input className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none" placeholder="Full name" />
          <input className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none" placeholder="Email" />
          <input type="password" className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none" placeholder="Password" />
          <Button className="w-full">Sign up</Button>
          <div className="text-center text-sm text-slate-400">
            Already a member? <Link className="text-sky-300" href="/login">Log in</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
