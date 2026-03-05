import { profile } from '@data/profile'
import { pageSections } from '@template/sections'

export default function AboutPage() {
  const section = pageSections.about

  return (
    <article className={`${section.className} active`}>
      {/* React로 얹는 얇은 섹션 */}
      <header style={{ marginBottom: 16 }}>
        <h1>{profile.name}</h1>
        <p>{profile.tagline}</p>
      </header>

      <div dangerouslySetInnerHTML={{ __html: section.innerHtml }} />
    </article>
  )
}