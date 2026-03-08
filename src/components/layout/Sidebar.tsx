import { profile } from '@data/profile'
import { useState } from 'react'

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <aside className={`sidebar ${open ? 'active' : ''}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={profile.avatar} alt={profile.name} width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title={profile.name}>
            {profile.name}
          </h1>

          <p className="title">{profile.title}</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn type="button" onClick={() => setOpen((prev) => !prev)}>
          <span>Show Contacts</span>

          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href={`mailto:${profile.email}`} className="contact-link">
                {profile.email}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href={`tel:${profile.phone.replaceAll(' ', '').replaceAll('-', '')}`} className="contact-link">
                {profile.phone}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time dateTime={profile.birthday.dateTime}>{profile.birthday.value}</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>{profile.location}</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          {profile.socials.map((social) => (
            <li className="social-item" key={social.label}>
              <a href={social.href} className="social-link" target="_blank" rel="noreferrer" aria-label={social.label}>
                <ion-icon name={social.icon}></ion-icon>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
