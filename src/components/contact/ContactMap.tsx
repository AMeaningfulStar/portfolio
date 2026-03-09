import { contactMap } from '@data/contact'

export default function ContactMap() {
  return (
    <section className="mapbox" data-mapbox>
      <figure>
        <iframe
          src={contactMap.src}
          width={contactMap.width}
          height={contactMap.height}
          loading="lazy"
          title={contactMap.title}
        />
      </figure>
    </section>
  )
}
