"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ChartSpline, Heart, SquarePlus, Wallet } from "lucide-react";
import { Sidebar, SidebarContent, SidebarHeader, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";

const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Bids",
    url: "#",
    icon: ChartSpline,
  },
  {
    title: "Saved",
    url: "#",
    icon: Heart,
  },
  {
    title: "Creators",
    url: "#",
    icon: SquarePlus,
  },
  {
    title: "Wallet",
    url: "#",
    icon: Wallet,
  },
];

export default function SidebarNav({ children }) {
  const pathname = usePathname();

  return (
    <>
      <SidebarProvider>
        <Sidebar variant="inset">
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" asChild className="h-14">
                  <Link href="/" className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
                    <div>
                      <Image src="/images/logo.jpg" width={170} height={100} alt="logo" />
                    </div>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup className="p-5">
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link href={item.url} className={`flex items-center space-x-2 p-5 rounded-2xl ${pathname === item.url ? "bg-purple-100 font-bold" : "text-gray-600 hover:text-purple-700"}`} style={pathname === item.url ? { color: "#6f4ff1" } : {}}>
                          <item.icon
                            className="w-5 h-5"
                            style={{
                              color: pathname === item.url ? "#6f4ff1" : "#9CA3AF",
                            }}
                          />
                          <span
                            style={{
                              color: pathname === item.url ? "#6f4ff1" : "#9CA3AF",
                            }}
                          >
                            {item.title}
                          </span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
    </>
  );
}
