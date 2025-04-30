import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Indexpage from './pages/Indexpage'
import AboutPage from './pages/AboutPage'
import WorksPage from './pages/WorksPage'
import './index.css'
import ContactPage from './pages/ContactPage'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Indexpage />,
  },
  {
    path : '/about',
    element : <AboutPage />
  },
  {
    path : '/work',
    element : <WorksPage />
  },
  {
    path : '/contact',
    element : <ContactPage />
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
