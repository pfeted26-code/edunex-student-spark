import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  BookOpen, 
  Calendar, 
  FileText, 
  UserCheck, 
  Send, 
  MessageSquare, 
  Bell,
  User
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const navItems = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard },
  { path: "/courses", label: "Courses", icon: BookOpen },
  { path: "/timetable", label: "Timetable", icon: Calendar },
  { path: "/exams", label: "Exams & Notes", icon: FileText },
  { path: "/attendance", label: "Attendance", icon: UserCheck },
  { path: "/requests", label: "Requests", icon: Send },
  { path: "/messages", label: "Messages", icon: MessageSquare },
  { path: "/notifications", label: "Notifications", icon: Bell },
];

export function AppSidebar() {
  const location = useLocation();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarHeader className="border-b border-border/50 bg-gradient-to-br from-sidebar to-sidebar/80">
        <Link to="/" className="flex items-center gap-3 px-4 py-6 group">
          <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-primary via-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105">
            <span className="text-xl font-bold text-white">E</span>
          </div>
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                EduNex
              </span>
              <span className="text-xs text-muted-foreground">Student Portal</span>
            </div>
          )}
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 mb-2">Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton 
                      asChild 
                      isActive={isActive} 
                      tooltip={item.label}
                      className="h-11 hover:bg-accent/50 data-[active=true]:bg-gradient-to-r data-[active=true]:from-primary/10 data-[active=true]:to-secondary/10 data-[active=true]:border-l-4 data-[active=true]:border-primary"
                    >
                      <Link to={item.path} className="flex items-center gap-3 px-4">
                        <Icon className="h-5 w-5" />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border/50 p-4">
        <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
          <Avatar className="h-9 w-9 border-2 border-primary/20">
            <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-semibold">
              JD
            </AvatarFallback>
          </Avatar>
          {!isCollapsed && (
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-sm font-semibold truncate">John Doe</span>
              <span className="text-xs text-muted-foreground truncate">student@edunex.com</span>
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
