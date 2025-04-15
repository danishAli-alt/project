"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Calendar, MessageSquare, MapPin, Settings, LogOut, Menu, X, User, Bell } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  // This would come from auth context in a real app
  const userRole = "landowner" // or "provider" or "customer"

  const navItems = {
    landowner: [
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { name: "My Properties", href: "/dashboard/properties", icon: MapPin },
      { name: "Bookings", href: "/dashboard/bookings", icon: Calendar },
      { name: "Messages", href: "/dashboard/messages", icon: MessageSquare },
      { name: "Settings", href: "/dashboard/settings", icon: Settings },
    ],
    provider: [
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { name: "My Services", href: "/dashboard/services", icon: MapPin },
      { name: "Bookings", href: "/dashboard/bookings", icon: Calendar },
      { name: "Messages", href: "/dashboard/messages", icon: MessageSquare },
      { name: "Settings", href: "/dashboard/settings", icon: Settings },
    ],
    customer: [
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { name: "Browse Venues", href: "/dashboard/browse", icon: MapPin },
      { name: "My Bookings", href: "/dashboard/bookings", icon: Calendar },
      { name: "Messages", href: "/dashboard/messages", icon: MessageSquare },
      { name: "Settings", href: "/dashboard/settings", icon: Settings },
    ],
  }

  const currentNavItems = navItems[userRole as keyof typeof navItems]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button variant="outline" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)} className="bg-white">
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Toggle sidebar</span>
        </Button>
      </div>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar header */}
          <div className="h-16 flex items-center px-6 border-b border-gray-200">
            <Link href="/" className="text-xl font-bold text-teal-600">
              Organize Your Event
            </Link>
          </div>

          {/* Sidebar content */}
          <nav className="flex-1 overflow-y-auto py-4 px-3">
            <ul className="space-y-1">
              {currentNavItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center px-3 py-2 text-sm rounded-md group",
                      pathname === item.href
                        ? "bg-teal-50 text-teal-700 font-medium"
                        : "text-gray-700 hover:bg-gray-100",
                    )}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sidebar footer */}
          <div className="p-4 border-t border-gray-200">
            <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
              <LogOut className="mr-3 h-5 w-5" />
              Sign Out
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className={cn("lg:pl-64 min-h-screen flex flex-col")}>
        {/* Top navbar */}
        <header className="sticky top-0 z-30 bg-white border-b border-gray-200 h-16">
          <div className="px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-800 hidden sm:block">Dashboard</h1>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                <span className="sr-only">Notifications</span>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center">
                      <User className="h-4 w-4 text-teal-700" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/dashboard/profile" className="w-full">
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/dashboard/settings" className="w-full">
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">Sign out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}
