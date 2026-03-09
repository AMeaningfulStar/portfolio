import { clients } from '@data/about'

export default function AboutClients() {
  return (
    <section className="clients">
      <h3 className="h3 clients-title">Clients</h3>
      <ul className="clients-list has-scrollbar">
        {clients.map((client) => (
          <li className="clients-item" key={client.id}>
            <a href={client.href}>
              <img src={client.logo} alt={client.name} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
