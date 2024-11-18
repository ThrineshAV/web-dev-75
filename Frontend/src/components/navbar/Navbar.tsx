import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DollarSign, Search, Menu, X, } from "lucide-react"
import {Link,NavLink} from 'react-router-dom'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
    }
  
  return (
    <nav className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex-shrink-0 flex items-center">
                <DollarSign className="h-8 w-8 text-blue-400 animate-pulse" />
                <span className="ml-2 text-xl font-bold text-white">FinanceHub</span>
              </a>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                    <NavLink to={'/'} className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105 "  style={{ animationDelay: `${0 * 100}ms` }}>Home</NavLink>
                   
                    <NavLink to={'/Services'} className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105" style={{ animationDelay: `${0 * 100}ms` }}>Services</NavLink>
                    <NavLink to={'/Contacts'} className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105" style={{ animationDelay: `${0 * 100}ms` }}>Contacts</NavLink>
                  
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input type="text" placeholder="Search" className="pl-10 bg-gray-700 text-white placeholder-gray-400 border-gray-600 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 ease-in-out" />
                </div>
                <Link to={'/signin'}><Button className="ml-4 bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 ease-in-out">Sign In</Button></Link>
                <Link to={'/login'}><Button className="ml-4 bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 ease-in-out">Log In</Button></Link>
              </div>
              
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-300 ease-in-out"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
              <a
                key={item}
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 ease-in-out"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="px-2 space-y-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input type="text" placeholder="Search" className="block w-full pl-10 bg-gray-700 text-white placeholder-gray-400 border-gray-600 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 ease-in-out" />
              </div>
              <Button className="mt-4 w-full bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 ease-in-out">Sign In</Button>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar