import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WebsiteLayout from './website/WebsiteLayout'
import Home from './website/Pages/Home'
import About from './website/Pages/About'
import Services from './website/Pages/Services'
import Contact from './website/Pages/Contact'
import Rooms from './website/Pages/Rooms'
import Gallery from './website/Pages/Gallery'
import Context from './Context/Context'

export default function App() {

  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <WebsiteLayout />,
        children: [
          {
            path: "",
            element: <Home />
          },
          {
            path: "/about",
            element: <About />
          },
          {
            path: "/service",
            element: <Services />
          },
          {
            path: "/contact",
            element: <Contact />
          },
          {
            path: "/rooms",
            element: <Rooms />
          },
          {
            path: "/gallery",
            element: <Gallery />
          }
        ]
      }
    ]
  )

  return (
    <>
      <Context>
        <RouterProvider router={routes} />
      </Context>
    </>
  )
}
