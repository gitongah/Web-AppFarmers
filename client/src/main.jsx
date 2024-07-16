import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import Login from './pages/Login/Login.jsx'
import Signup from './pages/Signup/Signup.jsx';
import LandingPage from './pages/LandingPage/LandingPage.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        index: true,
        element: <Login/>
      },
      {
        path: '/signup',
        element: <Signup/>
    
      },{
        path:'/home',
        element: <LandingPage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
