import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function RegisterForm() {
  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-20 rounded-lg"></div>
        <CardHeader className="text-center relative z-10">
          <CardTitle className="text-xl text-white">Welcome</CardTitle>
          <CardDescription className="text-white">Please register to continue.</CardDescription>
        </CardHeader>
        <CardContent className="relative z-10">
          <form>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="name" className="text-white">
                    Name
                  </Label>
                  <Input id="name" type="name" className="text-white placeholder-white" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="number" className="text-white">
                    Number
                  </Label>
                  <Input id="number" type="number" className="text-white placeholder-white" required />
                </div>
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
                Do you have an account?{" "}
                <Link href="#" className="underline underline-offset-4">
                  Sign in
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
