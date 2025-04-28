"use client";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { useNavData } from "@/hooks/use-nav-data";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();
  const navData = useNavData();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex justify-center items-center">
        {state === "collapsed" ? (
          <Image
            src="/logos/short_skillify_logo.svg"
            alt="logo"
            width={50}
            height={50}
          />
        ) : (
          <Image
            src="/logos/long_skillify_logo.svg"
            alt="logo"
            width={200}
            height={70}
          />
        )}
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navData} />
      </SidebarContent>
      <SidebarFooter />
      <SidebarRail />
    </Sidebar>
  );
}
