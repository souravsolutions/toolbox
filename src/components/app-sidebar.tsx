import { Link, useLocation } from "react-router-dom"
import { Key, Gamepad2, Gamepad, Home } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  const location = useLocation()

  const menuItems = [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "Password Generator",
      url: "/password-generator",
      icon: Key,
    },
    {
      title: "Guess the Word",
      url: "/guess-word",
      icon: Gamepad2,
    },
  ]

  return (
    <Sidebar variant="inset">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
            <Gamepad/>
          <span className="text-lg tracking-tight ">Mange Hub .</span>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupContent className="mt-2">
            <SidebarMenu className="gap-2">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.url
                const Icon = item.icon
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={isActive}
                      tooltip={item.title}
                      render={<Link to={item.url} />}
                      className="data-active:bg-[#f59e0b] data-active:text-black data-active:hover:bg-[#d97706] data-active:hover:text-black"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className=" p-4 text-center text-xs text-muted-foreground font-medium">
        &copy; {new Date().getFullYear()} Project Modi
      </SidebarFooter>
    </Sidebar>
  )
}