import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Statistics from './Components/Statistics/Statistics.jsx';
import Stocks from './Components/Stocks/Stocks.jsx'
import Billing from './Components/Billing/Billing.jsx'
import Help from './Components/Help/Help.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Signup from './Components/Signup/Signup.jsx'
import Login from './Components/Login/Login.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: '/statistics',
      element: <Statistics />

    },
    {
      path: '/stocks',
      element: <Stocks />
    },
    {
      path: '/billing',
      element: <Billing />
    },
    {
      path: '/help',
      element: <Help />
    },
    {
      path: '/contact',
      element: <Contact />
    }
    ],
    
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/login',
    element: <Login />
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
