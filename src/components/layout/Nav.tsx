import { NavLink } from 'react-router-dom'

type NavItem = {
  label: string
  to: string
  key: 'about' | 'resume' | 'portfolio' | 'blog' | 'contact'
}

const NAV_ITEMS: NavItem[] = [
  { key: 'about', label: 'About', to: '/about' },
  { key: 'resume', label: 'Resume', to: '/resume' },
  { key: 'portfolio', label: 'Portfolio', to: '/portfolio' },
  { key: 'blog', label: 'Blog', to: '/blog' },
  { key: 'contact', label: 'Contact', to: '/contact' },
]

export default function Nav() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {NAV_ITEMS.map((item) => (
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
