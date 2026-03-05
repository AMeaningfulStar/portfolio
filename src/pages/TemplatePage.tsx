import { pageSections, type PageKey } from '@template/sections'

type Props = {
  page: PageKey
}

export default function TemplatePage({ page }: Props) {
  const section = pageSections[page]

  return (
    <article className={`${section.className} active`}>
      <div dangerouslySetInnerHTML={{ __html: section.innerHtml }} />
    </article>
  )
}