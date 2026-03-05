import Shell from '@components/layout/Shell'
import { createBrowserRouter, Navigate } from 'react-router-dom'

import AboutPage from '@/pages/AboutPage'
import NotFoundRedirect from '@pages/NotFoundRedirect'
import TemplatePage from '@pages/TemplatePage'

export const router = createBrowserRouter([
  {
    element: <Shell />,
    children: [
      { path: '/', element: <Navigate to="/about" replace /> },

      { path: '/about', element: <AboutPage /> },
      { path: '/resume', element: <TemplatePage page="resume" /> },
      { path: '/portfolio', element: <TemplatePage page="portfolio" /> },
      { path: '/blog', element: <TemplatePage page="blog" /> },
      { path: '/contact', element: <TemplatePage page="contact" /> },

      { path: '*', element: <NotFoundRedirect /> },
    ],
  },
])