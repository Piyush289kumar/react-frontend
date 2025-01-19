import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Piyush Kumar Raikwar",
    email: "piyushraikwar289@gmil.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: import.meta.env.VITE_APP_NAME,
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: SquareTerminal,
      isActive: true,

    },
    {
      title: "Books",
      url: "/admin/dashboard/books",
      icon: Bot,
      items: [
        {
          title: "All Books",
          url: "/admin/dashboard/books",
        },
        {
          title: "Create New Book",
          url: "#",
        },
      ],
    },

  ],
  projects: [

  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
