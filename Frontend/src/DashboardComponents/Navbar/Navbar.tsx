import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, DollarSign, HelpCircle, Home, Settings, } from 'lucide-react'
import { Link } from "react-router-dom"
function Navbar(){

return(
<header className="sticky top-0 z-50 w-full border-b bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 backdrop-blur-md">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="#">
              <DollarSign className="h-6 w-6 text-blue-400" />
              <span className="hidden font-bold sm:inline-block text-white">TeenFinance</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link to={'/dashboard'}><a className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105 " style={{ animationDelay: `${0 * 100}ms` }} href="#">Home</a></Link>
              <Link to={'/dashboard/savings'}><a className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105" style={{ animationDelay: `${0 * 100}ms` }}  href="#">Savings</a></Link>
              <Link to={'/dashboard/budgeting'}><a className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105" style={{ animationDelay: `${0 * 100}ms` }}  href="#">Budgeting</a></Link>
              <a className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105" style={{ animationDelay: `${0 * 100}ms` }}  href="#">Learning</a>
            </nav>
          </div>
          <Button variant="outline" size="icon" className="mr-2 md:hidden">
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Button>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button variant="outline" className="w-full justify-start text-sm font-normal md:w-[260px] pl-10 bg-gray-700 text-white placeholder-gray-400 border-gray-600  transition-all duration-300 ease-in-out   ">
                <HelpCircle className="mr-2 h-4 w-4" />
                Help Center
              </Button>
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
      </header>
)
}
export default Navbar