"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { RegisterForm } from "@/components/register-form";

export default function LoginPage() {
  const route = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // ==================================== login Start ========================================= //

  // ==================================== login End ============================================ //

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10" style={{ backgroundImage: "url('https://i.pinimg.com/originals/28/ba/0a/28ba0a51006b141324bd2ec4e35569fe.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="#" className="flex items-center gap-2 self-center font-medium text-white">
          Tribha Digitals.
        </Link>
        <RegisterForm />
      </div>
    </div>
  );
}
