import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router'
import { } from "react-router/dom";
import Root from './Layout/Root.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx'
import SignUp from './Components/SignUp.jsx'
import Apps from './Components/Apps.jsx'
import Appdetails from './Components/Appdetails.jsx'
import AuthProvider from './Contexts/AuthProvider.jsx'
import Myprofile from './Components/Myprofile.jsx'
import Privateroute from './Routes/Privateroute.jsx'
import ForgetPassword from './Components/ForgetPassword.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "signup",
        Component: SignUp
      },
      {
        path: "login",
        Component: Login
      },
      {
        path: '/apps',
        Component: Apps 
      },
      {
        path: '/app-details/:id',
        element:<Privateroute><Appdetails /></Privateroute> 
      },
      {
        path: '/myprofile',
        element: <Privateroute><Myprofile></Myprofile></Privateroute>,
      },
       {
        path: '/forgetpassword',
        Component: ForgetPassword 
      },


    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
