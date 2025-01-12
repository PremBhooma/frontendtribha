import { useState } from "react";
import axios from "axios";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { BASEURL } from "@/configs/constants";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/context/userContext";

export function LoginForm() {
  const { user, setUser, logout } = useUserContext();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const validateForm = () => {
    const { email, password } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return "Invalid email format.";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const response = await axios.post(`${BASEURL}api/user/login`, formData);
      console.log("User logged in successfully:", response.data);
      localStorage.setItem("user", JSON.stringify(response?.data?.data));
      setUser(response?.data?.data);
      router.push("/");
    } catch (err) {
      const errorCode = err.response?.data?.errorCode;

      if (errorCode === 1) {
        setError("Email doesn't exist. Please register.");
      } else if (errorCode === 2) {
        setError("Invalid Details. Please try again.");
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-20 rounded-lg"></div>
        <CardHeader className="text-center relative z-10">
          <CardTitle className="text-xl text-white">Welcome</CardTitle>
          <CardDescription className="text-white">Please log in to continue.</CardDescription>
        </CardHeader>
        <CardContent className="relative z-10">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input id="email" type="email" className="text-white placeholder-white" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-white">
                  Password
                </Label>
                <Input id="password" type="password" className="text-white placeholder-white" value={formData.password} onChange={handleChange} required />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                Login
              </Button>
            </div>
            <div className="text-center text-sm text-white mt-2">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="underline underline-offset-4">
                Sign up
              </Link>
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
