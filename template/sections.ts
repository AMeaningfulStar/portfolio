import templateMarkup from '@template/main.html?raw'

export type PageKey = 'about' | 'resume' | 'portfolio' | 'blog' | 'contact'

export const PAGE_KEYS: PageKey[] = ['about', 'resume', 'portfolio', 'blog', 'contact']

type PageSection = {
  className: string
  innerHtml: string
}

const normalizedMarkup = templateMarkup.replaceAll('./assets/', '/assets/')
const doc = new DOMParser().parseFromString(`<body>${normalizedMarkup}</body>`, 'text/html')

const sidebar = doc.querySelector('aside.sidebar')
export const sidebarHtml = sidebar?.innerHTML ?? ''

const sections: Partial<Record<PageKey, PageSection>> = {}

for (const article of doc.querySelectorAll<HTMLElement>('article[data-page]')) {
  const key = article.dataset.page as PageKey | undefined

  if (!key || !PAGE_KEYS.includes(key)) {
    continue
  }

  const baseClassName = article.className
    .split(/\s+/)
    .filter((value) => value && value !== 'active')
    .join(' ')

  sections[key] = {
    className: baseClassName,
    innerHtml: article.innerHTML,
  }
}

export const pageSections = sections as Record<PageKey, PageSection>
