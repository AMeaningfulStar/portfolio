import { useState } from 'react'

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <aside className={`sidebar ${open ? 'active' : ''}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="https://placehold.co/80x80" alt="Min-Seong, Kim" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Min-Seong, Kim">
            Min-Seong, Kim
          </h1>

          <p className="title">Frontend Developer</p>
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

              <a href="mailto:ghrlfehd123@gmail.com" className="contact-link">
                ghrlfehd123@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+821028024955" className="contact-link">
                +82 10-2802-4955
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time dateTime="2000-07-17">May 21, 1998ㅋ</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Seoul, Korea</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="https://github.com/" className="social-link" target="_blank" rel="noreferrer">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://www.notion.so/" className="social-link" target="_blank" rel="noreferrer">
              <ion-icon name="document-text-outline"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://www.linkedin.com/" className="social-link" target="_blank" rel="noreferrer">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}
