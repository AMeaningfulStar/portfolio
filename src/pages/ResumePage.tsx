import ResumeSkills from '@components/resume/ResumeSkills'
import ResumeTimeline from '@components/resume/ResumeTimeline'
import { pageSections } from '@template/sections'

export default function ResumePage() {
  const section = pageSections.resume

  const education = [
    {
      title: 'Shinhan DS Financial SW Academy',
      period: '2025.04 — 2025.10',
      description: 'Java, Spring, Frontend, 금융 도메인 기반 풀스택 개발 교육 과정',
    },
  ]

  const experience = [
    {
      title: 'BestFin IT Development Internship',
      period: '2022.09 — 2022.12',
      description: 'Vue.js 기반 부동산 관리 시스템 유지보수 및 지도 기반 매물 등록 기능 개발',
    },
  ]

  const skills = [
    { name: 'JavaScript', level: 85 },
    { name: 'React / Next.js', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'Firebase', level: 70 },
  ]

  return (
    <article className={`${section.className} active`}>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <ResumeTimeline title="Education" items={education} />

      <ResumeTimeline title="Experience" items={experience} />

      <ResumeSkills skills={skills} />
    </article>
  )
}
