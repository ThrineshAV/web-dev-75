import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"





export default function HomePage() {
  
  
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-100 flex flex-col">
     

      {/* Main content */}
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full">
          <div className="bg-gray-800/50 backdrop-blur-md rounded-lg p-8 shadow-lg text-center animate-fadeIn">
            <h1 className="text-5xl font-bold mb-6 text-blue-400 animate-slideDown">Welcome to Finance</h1>
            <p className="mb-8 text-xl text-gray-300 animate-slideUp">Empowering your financial journey with expert insights and innovative solutions.</p>
            <Link to={'/login'}><Button className="bg-blue-500 text-white hover:bg-blue-600 text-lg px-8 py-3 transition-all duration-300 ease-in-out">
              Get Started
            </Button></Link>
          </div>
        </div>
        
      </main>

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
    </div>
  )
}