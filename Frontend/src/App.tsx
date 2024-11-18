import Layout from "./Layout"
import HomePage from "./components/Home/HomePage"
import About from "./components/About/About"
import Services from "./components/services/Services"
import Contacts from "./components/Contacts/Contacts"
import Login from "./components/Login/Login"
import DBLayout from "./DBLayout"
import HP from "./DashboardComponents/Homepage/Homepage"
import Savings from "./DashboardComponents/Savings/Savings"
import NewGoal from "./DashboardComponents/Savings/NewGoal"
import Budgeting from "./DashboardComponents/Budgeting/Budgeting"
import SignIn from "./components/Signup/Signup"
import { ThemeProvider } from "./DashboardComponents/Theme/theme-provider"

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router=createBrowserRouter(
    createRoutesFromElements(
      <Route>
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<HomePage/>}></Route>
        <Route path='About' element={<About/>}></Route>
        <Route path='Services' element={<Services/>}></Route>
        <Route path='Contacts' element={<Contacts/>}></Route>
      </Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='/dashboard' element={<DBLayout/>}>
        <Route path='' element={<HP/>}></Route>
        <Route path='savings' element={<Savings/>}></Route>
        <Route path='newgoal' element={<NewGoal/>}></Route>
        <Route path='budgeting' element={<Budgeting/>}></Route>
      </Route>
      
      </Route>
    )) 

function App() {
  return (
    <>
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      
      <RouterProvider router={router}/>
    </ThemeProvider>
  
    
    
    </>

  )
}

export default App