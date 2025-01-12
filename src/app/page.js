"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SidebarNav from "@/components/SidebarNav/SidebarNav";
import Caricatures from "@/components/caricatures";
import Trending from "@/components/trending";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import UserDetails from "@/components/userDetails";
import { useUserContext } from "@/context/userContext";

export default function Home() {
  const { user } = useUserContext();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin") === "true";
    const tokenExists = user?.token || isLogin;

    if (!tokenExists) {
      router.push("/login");
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
    <SidebarNav>
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-[67%] lg:w-[70%] bg-[#f2f2f2] flex flex-col gap-2">
          <div className="w-full flex justify-between gap-2 p-3  lg:p-5">
            <div className="flex gap-2 items-center">
              <SidebarTrigger className="ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <div>
                <h1 className=" text-2xl font-bold text-[#333] m-0">Dashboard</h1>
                <p className="text-sm lg:text-base text-[#666]">Hello Nila Vita, Welcome Back</p>
              </div>
            </div>
            <input type="text" placeholder="Search" className="hidden md:block px-4 py-1 rounded-xl border border-gray-300 text-sm text-[#333] h-10" />
          </div>
          <Caricatures />
          <Trending />
        </div>
        <div className="w-full md:w-[33%] lg:w-[30%] bg-white p-8 md:p-3 lg:p-4 xl:p-7 mt-0 md:mt-2 lg:mt-3 xl:mt-0">
          <UserDetails />
        </div>
      </div>
    </SidebarNav>
  );
}
