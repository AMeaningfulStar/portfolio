import { pageSections } from '@template/sections'

import ResumeSkills from '@components/resume/ResumeSkills'
import ResumeTimeline from '@components/resume/ResumeTimeline'

import { education, experience, skills } from '@data/resume'

export default function ResumePage() {
  const section = pageSections.resume

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
