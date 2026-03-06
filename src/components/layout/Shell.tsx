import { setDocumentTitle } from '@lib/pageTitle'
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Nav from './Nav'
import Sidebar from './Sidebar'

export default function Shell() {
  const { pathname } = useLocation()

  useEffect(() => {
    setDocumentTitle(pathname)
  }, [pathname])

  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Nav />
        <Outlet />
      </div>
    </main>
  )
}
