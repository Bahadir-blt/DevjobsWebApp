import React from 'react'
import ReactDOM from 'react-dom/client'

import '../src/Css/Reset.css'
import Home from './home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Detailpage from './Detailpage'








const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>  ,
    },
    {
        path: "/Detail",
        element: <Detailpage/>  
      }
  ]);





ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider  router={router} />




)
