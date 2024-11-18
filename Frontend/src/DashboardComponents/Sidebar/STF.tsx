
import { Input } from "@/components/ui/input"
import { DollarSign, PiggyBank, BookOpen, BarChart, Settings, Menu, Search } from 'lucide-react'
import { cn } from "@/lib/utils"
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
const menuItems = [
    { icon: DollarSign, label: 'Dashboard', href: '/' },
    { icon: PiggyBank, label: 'Savings', href: '/savings' },
    { icon: BarChart, label: 'Budgeting', href: '/budgeting' },
    { icon: BookOpen, label: 'Learning', href: '/learning' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ]

  function STF(){
    const location = useLocation();
  const pathname = location.pathname;
    return(
       <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <Link to={'/dashboard'} className="flex items-center space-x-2 px-4 py-2">
            <DollarSign className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold">TeenFinance</span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild isActive={pathname === item.href}>
                  <Link to={'/dashboard'} className="flex items-center space-x-2 px-4 py-2">
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <form className="px-4 py-2">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8"
              />
            </div>
          </form>
        </SidebarFooter>
      </Sidebar>
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-4 z-10 flex  items-center gap-4  bg-transparent px-6">
          <SidebarTrigger className="text-white" />
          <div className="flex-1" />
        </header>
        
      </div>
      </SidebarProvider> 
      
    
    )
  }

  export default STF