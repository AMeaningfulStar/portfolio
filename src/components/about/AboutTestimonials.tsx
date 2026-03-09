import { testimonials } from '@data/about'

export default function AboutTestimonials() {
  return (
    <section className="testimonials">
      <h3 className="h3 testimonials-title">Testimonials</h3>

      <ul className="testimonials-list has-scrollbar">
        {testimonials.map((item) => (
          <li className="testimonials-item" key={item.id}>
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img src={item.avatar} alt={item.name} width="60" />
              </figure>

              <h4 className="h4 testimonials-item-title" data-testimonials-title>
                {item.name}
              </h4>

              <div className="testimonials-text">
                <p>{item.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
