export type NavigationKey = 'about' | 'resume' | 'portfolio' | 'blog' | 'contact'

export type NavigationItem = {
  key: NavigationKey
  label: string
  to: string
}

export const navigationItems: NavigationItem[] = [
  { key: 'about', label: 'About', to: '/about' },
  { key: 'resume', label: 'Resume', to: '/resume' },
  { key: 'portfolio', label: 'Portfolio', to: '/portfolio' },
  { key: 'blog', label: 'Blog', to: '/blog' },
  { key: 'contact', label: 'Contact', to: '/contact' },
]
