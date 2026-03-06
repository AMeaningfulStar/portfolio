import AboutClients from '@/components/about/AboutClients'
import AboutIntro from '@/components/about/AboutIntro'
import AboutService from '@/components/about/AboutService'
import AboutTestimonials from '@/components/about/AboutTestimonials'
import { pageSections } from '@template/sections'

export default function AboutPage() {
  const section = pageSections.about

  return (
    <article className={`${section.className} active`}>
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <AboutIntro />
      <AboutService />
      <AboutTestimonials />
      <AboutClients />
    </article>
  )
}
