import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/skills",
        element: <Skills></Skills>
      },
      {
        path:"/projects",
        element:<Projects></Projects>
      },
     
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='md:max-w-screen-xl mx-auto'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
