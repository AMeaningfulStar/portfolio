import Shell from '@components/layout/Shell'
import { createBrowserRouter } from 'react-router-dom'

import AboutPage from '@/pages/AboutPage'
import BlogPage from '@/pages/BlogPage'
import ContactPage from '@/pages/ContactPage'
import PortfolioPage from '@/pages/PortfolioPage'
import ResumePage from '@/pages/ResumePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Shell />,
    children: [
      { index: true, element: <AboutPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'resume', element: <ResumePage /> },
      { path: 'portfolio', element: <PortfolioPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
])
