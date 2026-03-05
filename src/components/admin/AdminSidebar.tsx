import { Tag, Layers, Wrench, Handshake, LayoutDashboard, Users, LogOut } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation, useNavigate } from "react-router-dom";
import vinodLogo from "@/assets/vinod-logo.png";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/admin", icon: LayoutDashboard },
  { title: "Offers", url: "/admin/offers", icon: Tag },
  { title: "Designer Combos", url: "/admin/combos", icon: Layers },
  { title: "Our Services", url: "/admin/services", icon: Wrench },
  { title: "Trusted Partners", url: "/admin/partners", icon: Handshake },
  { title: "Leads", url: "/admin/leads", icon: Users },
];

export default function AdminSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) =>
    path === "/admin"
      ? location.pathname === "/admin"
      : location.pathname.startsWith(path);

  const handleLogout = () => {
    sessionStorage.removeItem("admin_token");
    navigate("/admin/login", { replace: true });
  };

  return (
    <Sidebar collapsible="icon" className="border-r border-border">
      <SidebarContent className="flex flex-col h-full">
        {/* Logo */}
        {!collapsed && (
          <div className="px-4 py-5 border-b border-border">
            <img src={vinodLogo} alt="Vinod Motors" className="h-8" />
          </div>
        )}

        <SidebarGroup className="flex-1 mt-2">
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/admin"}
                      className={`hover:bg-muted/50 rounded-lg transition-colors ${
                        isActive(item.url) ? "bg-primary/10 text-primary font-medium" : ""
                      }`}
                      activeClassName="bg-primary/10 text-primary font-medium"
                    >
                      <item.icon className={`mr-2 h-4 w-4 ${isActive(item.url) ? "text-primary" : ""}`} />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Logout at bottom */}
        {!collapsed && (
          <div className="px-3 py-4 border-t border-border">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
