import { pageSections } from '@template/sections'

export default function ContactPage() {
  const section = pageSections.contact

  return (
    <article className={`${section.className} active`}>
      <div dangerouslySetInnerHTML={{ __html: section.innerHtml }} />
    </article>
  )
}