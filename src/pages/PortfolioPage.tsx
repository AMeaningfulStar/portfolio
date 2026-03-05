import { pageSections } from '@template/sections'

export default function PortfolioPage() {
  const section = pageSections.portfolio

  return (
    <article className={`${section.className} active`}>
      {/* TODO(Step7): ProjectFilter / ProjectGrid를 React 컴포넌트로 분리 예정 */}
      <div dangerouslySetInnerHTML={{ __html: section.innerHtml }} />
    </article>
  )
}