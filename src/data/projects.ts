export type ProjectCategory = 'front-end' | 'full-stack' | 'team-project' | 'personal-project'

export type ProjectFilterCategory = 'all' | ProjectCategory

export type ProjectItem = {
  id: string
  title: string
  category: ProjectCategory[]
  image: string
  alt: string
  href?: string
}

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  'front-end': 'Front-end',
  'full-stack': 'Full-stack',
  'team-project': 'Team project',
  'personal-project': 'Personal project',
}

export const PROJECT_FILTER_OPTIONS: Array<{
  value: ProjectFilterCategory
  label: string
}> = [
  { value: 'all', label: 'All' },
  { value: 'front-end', label: 'Front-end' },
  { value: 'full-stack', label: 'Full-stack' },
  { value: 'team-project', label: 'Team project' },
  { value: 'personal-project', label: 'Personal project' },
]

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
