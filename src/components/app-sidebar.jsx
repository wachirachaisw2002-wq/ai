"use client"

import * as React from "react"
import {
  Rocket,
  Map,
  CheckSquare,
  BookOpen,
  LayoutDashboard,
  ExternalLink,
  User,
  LogOut // เพิ่มไอคอน LogOut
} from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// ข้อมูลเมนู
const data = {
  user: {
    name: "Job Seeker",
    email: "user@careerpath.com",
  },
  mainNav: [
    { title: "หน้าหลัก", url: "/", icon: LayoutDashboard },
    { title: "วางแผนอาชีพ", url: "/planner", icon: Map },
    { title: "ประเมินตนเอง", url: "/assessment", icon: CheckSquare },
  ],
  resources: [
    { title: "รายละเอียดอาชีพ", url: "/careers", icon: BookOpen },
    { title: "ตัวอย่าง Portfolio", url: "https://dekshowport.com/", icon: ExternalLink, isExternal: true },
  ]
}

export function AppSidebar({ ...props }) {
  const pathname = usePathname();
  const router = useRouter();

  // ฟังก์ชันออกจากระบบ
  const handleLogout = () => {
    // 1. ลบข้อมูลการล็อกอิน
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    // 2. ดีดกลับไปหน้า Login
    router.push("/login");
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      {/* --- ส่วนหัว (Logo) --- */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Rocket className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Career Path</span>
                  <span className="truncate text-xs">Developer App</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* --- เนื้อหาตรงกลาง (Menu) --- */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.mainNav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Resources</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.resources.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    {item.isExternal ? (
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                            <item.icon />
                            <span>{item.title}</span>
                        </a>
                    ) : (
                        <Link href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                        </Link>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* --- ส่วนท้าย (User & Logout) --- */}
      <SidebarFooter>
        <SidebarMenu>
          {/* แสดงข้อมูลผู้ใช้ */}
          <SidebarMenuItem>
            <div className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-100 transition-colors cursor-default">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-200 text-slate-500">
                <User className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                <span className="truncate font-semibold">{data.user.name}</span>
                <span className="truncate text-xs text-slate-500">{data.user.email}</span>
              </div>
            </div>
          </SidebarMenuItem>

          {/* ปุ่ม Logout แยกออกมาให้ชัดเจน */}
          <SidebarMenuItem>
            <SidebarMenuButton 
              onClick={handleLogout} 
              className="text-red-600 hover:bg-red-50 hover:text-red-700 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <LogOut className="size-4" />
              <span className="font-medium">ออกจากระบบ</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}