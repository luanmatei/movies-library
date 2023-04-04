import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './Pages/Home';
import Movie from './Pages/Movie';
import Search from './Pages/Search';
import Error from './Pages/Error';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <Error/>,      
      children: [        
        {
          path: "/",
          element: <Home/>          
        },
        {
          path:"movie/:id",
          element: <Movie/>
        },
        {
          path: "search",
          element: <Search/>
        }
      ]
    }
  ])
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router= {router}/>
  )
