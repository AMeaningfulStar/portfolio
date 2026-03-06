import ProjectGrid from '@components/projects/ProjectGrid'
import { pageSections } from '@template/sections'

export default function PortfolioPage() {
  const section = pageSections.portfolio

  const portfolioHtmlWithoutList = section.innerHtml.replace(
    /<ul class="project-list">[\s\S]*?<\/ul>/,
    ''
  )

  return (
    <article className={`${section.className} active`}>
      <div dangerouslySetInnerHTML={{ __html: portfolioHtmlWithoutList }} />
      <ProjectGrid />
    </article>
  )
}