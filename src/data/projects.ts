export type ProjectCategory = 'front-end' | 'full-stack' | 'team-project' | 'personal-project'

export type ProjectFilterCategory = 'all' | ProjectCategory

export type ProjectItem = {
  id: string
  title: string
  category: ProjectCategory[]
  image: string
  alt: string
  summary: string
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
    id: 'dambi-real-estate-partner',
    title: '담비_부동산파트너',
    category: ['front-end', 'team-project'],
    image: 'https://placehold.co/600x400',
    alt: '담비_부동산파트너 프로젝트 썸네일',
    summary: 'Vue.js 기반 부동산 관리 시스템 유지보수 및 지도 기반 매물 등록 기능 개발',
    href: '#',
  },
  {
    id: 'cheongsinho',
    title: '청신호',
    category: ['full-stack', 'personal-project'],
    image: 'https://placehold.co/600x400',
    alt: '청신호 프로젝트 썸네일',
    summary: '임시',
    href: '#',
  },
  {
    id: 'pongdangpongdang',
    title: '퐁당퐁당',
    category: ['full-stack', 'team-project'],
    image: 'https://placehold.co/600x400',
    alt: '퐁당퐁당 프로젝트 썸네일',
    summary: '임시',
    href: '#',
  },
]
