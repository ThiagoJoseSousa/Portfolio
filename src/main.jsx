import React from 'react'
import ReactDOM from 'react-dom/client'

import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage'
import TimelineRoute from './pages/TimelineRoute'
import ProjectsPage from './pages/ProjectsPage'

const router = createBrowserRouter([
  {path:"/",
  element: <HomePage />},
  {path:"/Timeline",
  element: <TimelineRoute />},
  {path:"/Projects",
  element: <ProjectsPage />}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)