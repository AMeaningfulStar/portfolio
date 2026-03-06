export const pageTitleMap: Record<string, string> = {
  '/about': 'About',
  '/resume': 'Resume',
  '/portfolio': 'Portfolio',
  '/blog': 'Blog',
  '/contact': 'Contact',
}

export function setDocumentTitle(pathname: string) {
  const label = pageTitleMap[pathname] ?? 'About'
  document.title = `Portfolio | ${label}`
}
