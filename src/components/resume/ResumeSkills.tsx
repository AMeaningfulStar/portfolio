import type { SkillItem } from '@/data/resume'

type Props = {
  skills: SkillItem[]
}

export default function ResumeSkills({ skills }: Props) {
  return (
    <section className="skill">
      <h3 className="h3 skills-title">My skills</h3>

      <ul className="skills-list content-card">
        {skills.map((skill) => (
          <li key={skill.id} className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">{skill.name}</h5>
              <data value={skill.level}>{skill.level}%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: `${skill.level}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
