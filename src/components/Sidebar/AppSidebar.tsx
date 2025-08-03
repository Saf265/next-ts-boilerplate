import { Bot } from "lucide-react";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NavMain } from "./fragments/nav-main";
import { NavUser } from "./fragments/nav-user";

export async function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  // const { data: session } = authClient.useSession();
  const headersList = await headers();
  const session = await auth.api.getSession({
    headers: headersList,
  });

  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-muted-foreground ">
        <div className="flex items-center gap-3 px-3 py-3 border-b ">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
            <Bot className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm ">ChatGPT</span>
            <span className="text-xs text-muted-foreground">AI Assistant</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarFooter>
        {session?.user ? <NavUser user={session?.user} /> : ""}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
