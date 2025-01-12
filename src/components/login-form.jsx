import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function LoginForm() {
  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-20 rounded-lg"></div>
        <CardHeader className="text-center relative z-10">
          <CardTitle className="text-xl text-white">Welcome</CardTitle>
          <CardDescription className="text-white">Please log in to continue.</CardDescription>
        </CardHeader>
        <CardContent className="relative z-10">
          <form>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input id="email" type="email" className="text-white placeholder-white" required />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password" className="text-white">
                      Password
                    </Label>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  Login
                </Button>
              </div>
              <div className="text-center text-sm text-white">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="underline underline-offset-4">
                  Sign up
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary text-white">
        By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
