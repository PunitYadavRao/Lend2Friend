import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageNotFound from './components/NotFound/PageNotFound.jsx'
import LoginSignup from './components/LoginSignup/LoginSignup.jsx'
import SignUp from './components/LoginSignup/SignUp.jsx'
// import Dashboard from './components/Dashboard/Dashboard.jsx'
// import Layout from './components/Layout/Layout.jsx'
// import Messages from './components/Messages/Messages.jsx'


const router = createBrowserRouter([
  {path:'/',
    element:<App />,
    errorElement:<PageNotFound />
  },
  {
    path:'/Login',
    element:<LoginSignup />,
    errorElement:<PageNotFound />
  },
  {
    path:'/SignUp',
    element:<SignUp />,
    errorElement:<PageNotFound />
  },
  // {
  //   path:'/Dashboard',
  //   element:<Dashboard />,
  //   errorElement:<PageNotFound />
  // },
  // {
  //   path:'/Layout',
  //   element:<Layout />
  // },
  // {
  //   path:'/Messages',
  //   element:<Messages />
  // },
  // {
  //   path:'/requests'
  // }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
