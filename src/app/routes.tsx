import Shell from '@components/layout/Shell'
import { createBrowserRouter, Navigate } from 'react-router-dom'

import AboutPage from '@/pages/AboutPage'
import ContactPage from '@/pages/ContactPage'
import PortfolioPage from '@/pages/PortfolioPage'
import ResumePage from '@/pages/ResumePage'
import NotFoundRedirect from '@pages/NotFoundRedirect'
import TemplatePage from '@pages/TemplatePage'

export const router = createBrowserRouter([
  {
    element: <Shell />,
    children: [
      { path: '/', element: <Navigate to="/about" replace /> },

      { path: '/about', element: <AboutPage /> },
      { path: '/resume', element: <ResumePage /> },
      { path: '/portfolio', element: <PortfolioPage /> },
      { path: '/blog', element: <TemplatePage page="blog" /> },
      { path: '/contact', element: <ContactPage /> },

      { path: '*', element: <NotFoundRedirect /> },
    ],
  },
])
