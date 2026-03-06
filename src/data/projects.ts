export type ProjectCategory =
 | 'front-end'
 | 'full-stack'
 | 'team-project'
 | 'personal-project'

export type ProjectItem = {
  id: string
  title: string
  category: ProjectCategory[]
  image: string
  alt: string
  href?: string
}

export const projects: ProjectItem[] = [
  {
    id: 'finance-dashboard',
    title: 'Finance Dashboard',
    category: ['front-end', 'personal-project'],
    image: 'https://placehold.co/600x400',
    alt: 'Finance Dashboard 프로젝트 썸네일',
    href: '#',
  },
  {
    id: 'task-manager',
    title: 'Task Manager',
    category: ['full-stack', 'personal-project'],
    image: 'https://placehold.co/600x400',
    alt: 'Task Manager 프로젝트 썸네일',
    href: '#',
  },
  {
    id: 'portfolio-site',
    title: 'Portfolio Site',
    category: ['full-stack', 'team-project'],
    image: 'https://placehold.co/600x400',
    alt: 'Portfolio Site 프로젝트 썸네일',
    href: '#',
  },
]