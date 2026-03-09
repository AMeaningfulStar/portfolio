import { services } from '@data/about'

export default function AboutService() {
  return (
    <section className="service">
      <h3 className="h3 service-title">What I'm doing</h3>

      <ul className="service-list">
        {services.map((service) => (
          <li className="service-item" key={service.title}>
            <div className="service-icon-box">
              <img src={service.image} alt={service.title} width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">{service.title}</h4>

              <p className="service-item-text">{service.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
