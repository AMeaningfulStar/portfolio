export type ProjectCategory =
  | 'Web Design'
  | 'Applications'
  | 'Web Development'

export type ProjectItem = {
  id: string
  title: string
  category: ProjectCategory
  image: string
  alt: string
  href?: string
}

export const projects: ProjectItem[] = [
  {
    id: 'finance-dashboard',
    title: 'Finance Dashboard',
    category: 'Web Development',
    image: '/assets/images/project-1.jpg',
    alt: 'Finance Dashboard 프로젝트 썸네일',
    href: '#',
  },
  {
    id: 'task-manager',
    title: 'Task Manager',
    category: 'Applications',
    image: '/assets/images/project-2.png',
    alt: 'Task Manager 프로젝트 썸네일',
    href: '#',
  },
  {
    id: 'portfolio-site',
    title: 'Portfolio Site',
    category: 'Web Design',
    image: '/assets/images/project-3.png',
    alt: 'Portfolio Site 프로젝트 썸네일',
    href: '#',
  },
]