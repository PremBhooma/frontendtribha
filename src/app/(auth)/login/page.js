"use client";

import { LoginForm } from "@/components/login-form";
import { useUserContext } from "@/context/userContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const { user } = useUserContext();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin") === "true";

    if (user?.token || isLogin) {
      router.push("/");
    } else {
      setLoading(false);
    }
  }, [user, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10" style={{ backgroundImage: "url('https://i.pinimg.com/originals/28/ba/0a/28ba0a51006b141324bd2ec4e35569fe.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="#" className="flex items-center gap-2 self-center font-medium text-white">
          Tribha Digitals.
        </Link>
        <LoginForm />
      </div>
    </div>
  );
}
