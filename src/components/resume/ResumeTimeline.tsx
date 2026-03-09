import type { TimelineItem } from '@/data/resume'

type Props = {
  title: string
  items: TimelineItem[]
}

export default function ResumeTimeline({ title, items }: Props) {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <h3 className="h3">{title}</h3>
      </div>

      <ol className="timeline-list">
        {items.map((item) => (
          <li key={item.id} className="timeline-item">
            <h4 className="h4 timeline-item-title">{item.title}</h4>
            <span>{item.period}</span>
            <p className="timeline-text">{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
