import ContactForm from '@/components/contact/ContactForm'
import ContactMap from '@/components/contact/ContactMap'
import { pageSections } from '@template/sections'

export default function ContactPage() {
  const section = pageSections.contact

  return (
    <article className={`${section.className} active`}>
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <ContactMap />
      <ContactForm />
    </article>
  )
}
