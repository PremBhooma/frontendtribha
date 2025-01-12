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

export function RegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const validateForm = () => {
    const { email, password } = formData;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; // Restrict to Gmail addresses
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!emailRegex.test(email)) {
      return "Email must be a valid Gmail address (e.g., example@gmail.com).";
    }
    if (!passwordRegex.test(password)) {
      return "Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 6 characters long.";
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
      const response = await axios.post(`${BASEURL}api/user/create`, formData);
      console.log("User registered successfully:", response.data);

      setFormData({
        name: "",
        number: "",
        email: "",
        password: "",
      });

      router.push("/login");
    } catch (err) {
      console.error("Error registering user:", err.response?.data || err.message);
      setError(err.response?.data?.message || "An error occurred. Please try again.");
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
          <CardDescription className="text-white">Please register to continue.</CardDescription>
        </CardHeader>
        <CardContent className="relative z-10">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-white">
                  Name
                </Label>
                <Input id="name" type="text" className="text-white placeholder-white" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="number" className="text-white">
                  Number
                </Label>
                <Input id="number" type="number" className="text-white placeholder-white" value={formData.number} onChange={handleChange} required />
              </div>
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
                Register
              </Button>
            </div>
            <div className="text-center text-sm text-white mt-2">
              Do you have an account?{" "}
              <Link href="/login" className="underline underline-offset-4">
                Sign in
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
