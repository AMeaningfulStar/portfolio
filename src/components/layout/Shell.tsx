import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Sidebar from './Sidebar'

export default function Shell() {
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