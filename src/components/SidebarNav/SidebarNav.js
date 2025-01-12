"use client";

import React from "react";
import { Calendar, ChartSpline, Heart, Home, Inbox, LayoutDashboard, Search, Settings, SquarePlus, Wallet } from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider } from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
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
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
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
