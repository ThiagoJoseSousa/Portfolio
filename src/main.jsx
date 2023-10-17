import React from 'react'
import ReactDOM from 'react-dom/client'

import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar'
import Intro from './components/Intro'

import Home from './components/Home'

const router = createBrowserRouter([
  {path:"/",
  element:<>
  <Navbar />
  {/* <Intro /> */}
  <Home />
  </>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)