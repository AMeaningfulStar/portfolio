import { NavLink } from 'react-router-dom'
import { navigationItems } from '@/data/navigation'

export default function Nav() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navigationItems.map((item) => (
          <li className="navbar-item" key={item.to}>
            <NavLink to={item.to} className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
