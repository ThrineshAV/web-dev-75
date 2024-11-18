import  { useState } from 'react'

import { FcGoogle } from 'react-icons/fc';
import {Github} from "lucide-react"
import {Link} from 'react-router-dom'

function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [username,setUsername]=useState("")

  const display=()=>{
      if(password=="" || email==""){
        alert("please fill all the fields")
      }
  }
  return (
    <>
      <div className='w-screen h-screen flex items-center justify-center  bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700'>
        <div className='border border-1 p-6 backdrop-blur-3xl border-neutral-700 font-mono shadow-black shadow-xl '>
          <div className='text-white  font-semibold text-2xl text-center '>Login to my application</div>
            <div className='text-gray-300 text-center text-xs mt-3'>Welcome back! please Log in to continue</div>
            <div className='flex gap-6 justify-center mt-6 '>
              <button
              className="flex items-center justify-center px-4 py-0 border border-zinc-700 rounded-md shadow-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-gray-200 text-sm gap-2 text-white bg-black"
                onClick={() => window.location.href = 'https://github.com/login'}>
                <Github className='w-4'/>
                <span>GitHub</span>
                
              </button>
              <button
              className="flex items-center justify-center px-4 py-2 border border-zinc-700 rounded-md shadow-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-gray-200 text-sm gap-2 text-white bg-black"
                onClick={() => window.location.href = 'https://github.com/login'}>
                <FcGoogle className='w-4'/>
                <span>Google</span>
                
              </button>
            </div>
            <div className='text-center my-5 text-gray-300'>---------Or continue with----------</div>
            <div className='flex flex-col mt-2 '>
              <span className='text-white mb-1'>Username</span>
              <input type="text" value={username} className='border border-neutral-700 rounded bg-gray-700 text-white py-1 px-3'onChange={(e)=>{
                setUsername(e.target.value)
              }}/>
            </div>
            <div className='flex flex-col '>
              <span className='text-white mb-1'>Email</span>
              <input type="text" value={email} className='border border-neutral-700 rounded bg-gray-700 py-1 px-3 text-white' placeholder='example@gmail.com' onChange={(e)=>{
                setEmail(e.target.value)
              }}/>
            </div>
            <div className='flex flex-col mt-2 '>
              <span className='text-white mb-1'>Password</span>
              <input type="text" value={password} className='border border-neutral-700 rounded bg-gray-700 text-white py-1 px-3'onChange={(e)=>{
                setPassword(e.target.value)
              }}/>
            </div>
            <div className='flex justify-center mt-6 '>
             <Link to={'/login/Home'}><button className='bg-red-500 text-white border-0 px-5 w-full py-1 rounded' onClick={display}>Login</button></Link>
            </div>
        </div>
      </div>
      
    </>
  )
}

export default Login

