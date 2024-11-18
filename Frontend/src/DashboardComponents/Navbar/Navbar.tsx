import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, DollarSign,  Home, Settings, } from 'lucide-react'
import { Link } from "react-router-dom"
import { Moon, Sun } from "lucide-react"
 
import { useTheme } from "../Theme/theme-provider"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import STF from "../Sidebar/STF"



function Navbar(){

  const { setTheme } = useTheme()
return(
 
<header className="sticky top-0 z-50 w-full border-b bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 backdrop-blur-md">
        <div className="container flex h-14 items-center animate-fadeIn">
          <div className="mr-4 hidden md:flex">
            <div >
              <STF/>
            </div>
           
            <Link to={'/dashboard'} className="mr-6 flex items-center space-x-2 " >
              <DollarSign className="h-6 w-6 text-blue-400" />
              <span className="hidden font-bold sm:inline-block text-white">TeenFinance</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm  font-medium">
              <Link to={'/dashboard'}><a className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105 " style={{ animationDelay: `${0 * 100}ms` }} href="#">Home</a></Link>
              <Link to={'/dashboard/savings'}><a className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105" style={{ animationDelay: `${0 * 100}ms` }}  href="#">Savings</a></Link>
              <Link to={'/dashboard/budgeting'}><a className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105" style={{ animationDelay: `${0 * 100}ms` }}  href="#">Budgeting</a></Link>
              
            </nav>
          </div>
          <Button variant="outline" size="icon" className="mr-2 md:hidden">
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Button>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div>
            <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
            </div>
            <div className="w-full flex-1 md:w-auto md:flex-none">
              
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4 text-white hover:text-black" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4 text-white hover:text-black" />
              <span className="sr-only">Settings</span>
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <style >{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        .animate-slideDown {
          animation: slideDown 0.8s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }
      `}</style>
      </header>
      
)
}
export default Navbar