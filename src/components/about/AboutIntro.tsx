import { aboutIntro } from '@data/about'

export default function AboutIntro() {
  return (
    <section className="about-text">
      {aboutIntro.description.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </section>
  )
}
