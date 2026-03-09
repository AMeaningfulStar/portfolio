export type TimelineItem = {
  id: string
  title: string
  period: string
  description: string
}

export type SkillItem = {
  id: string
  name: string
  level: number
}

export const education: TimelineItem[] = [
  {
    id: 'education-1',
    title: 'Shinhan DS Financial SW Academy',
    period: '2025.04 — 2025.10',
    description: 'Java, Spring, Frontend, 금융 도메인 기반 풀스택 개발 교육 과정',
  },
]

export const experience: TimelineItem[] = [
  {
    id: 'experience-1',
    title: 'BestFin IT Development Internship',
    period: '2022.09 — 2022.12',
    description: 'Vue.js 기반 부동산 관리 시스템 유지보수 및 지도 기반 매물 등록 기능 개발',
  },
]

export const skills: SkillItem[] = [
  { id: 'skill-1', name: 'JavaScript', level: 85 },
  { id: 'skill-2', name: 'React / Next.js', level: 80 },
  { id: 'skill-3', name: 'TypeScript', level: 75 },
  { id: 'skill-4', name: 'Firebase', level: 70 },
]
