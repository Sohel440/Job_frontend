import { useState } from 'react'
import Navbar from './components/shared/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RouterIcon } from 'lucide-react'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Brows from './components/Brows'
import Profile from './components/Profile'
import Description from './components/Description'
import Companies from './components/admin/Companies'
import CompanyCreat from './components/admin/CompanyCreat'
import CompanySetup from './components/admin/CompanySetup'
// import Jobs from './components/admin/Jobs'
import AdminJobs from './components/admin/AdminJobs'
import PostJob from './components/admin/PostJob'
import Applicants from './components/admin/Applicants'
const appRoutes = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,

  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element: <Signup/>

  },
  {
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path: '/description/:id',
    element:<Description/>
  },
  {
    path:'/brows',
    element:<Brows/>
  },
  {
    path:'/profile',
    element:<Profile/>
  },

  //admin side routes 

  {
    path:"/admin/companies",
    element: <Companies/>
  },
  {
    path:"/admin/companies/create",
    element:<CompanyCreat/>
  },
  {
    path:"/admin/companies/:id",
    element:<CompanySetup/>
  },
  {
    path:"/admin/jobs",
    element:<AdminJobs/>
  },
  {
    path:"/admin/jobs/create",
    element:<PostJob/>
  },
  
  {
    path:"/admin/jobs/:id/applicants",
    element:<Applicants/>
  },
  

])
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={appRoutes}/>
    </>
  )
}

export default App
