export default function AboutService() {
  return (
    <section className="service">
      <h3 className="h3 service-title">What I'm doing</h3>

      <ul className="service-list">
        <li className="service-item">
          <div className="service-icon-box">
            <img src="https://placehold.co/500x500" alt="design icon" width="40" />
          </div>

          <div className="service-content-box">
            <h4 className="h4 service-item-title">Web design</h4>

            <p className="service-item-text">The most modern and high-quality design made at a professional level.</p>
          </div>
        </li>

        <li className="service-item">
          <div className="service-icon-box">
            <img src="https://placehold.co/500x500" alt="Web development icon" width="40" />
          </div>

          <div className="service-content-box">
            <h4 className="h4 service-item-title">Web development</h4>

            <p className="service-item-text">High-quality development of sites at the professional level.</p>
          </div>
        </li>

        <li className="service-item">
          <div className="service-icon-box">
            <img src="https://placehold.co/500x500" alt="mobile app icon" width="40" />
          </div>

          <div className="service-content-box">
            <h4 className="h4 service-item-title">Mobile apps</h4>

            <p className="service-item-text">Professional development of applications for iOS and Android.</p>
          </div>
        </li>

        <li className="service-item">
          <div className="service-icon-box">
            <img src="https://placehold.co/500x500" alt="camera icon" width="40" />
          </div>

          <div className="service-content-box">
            <h4 className="h4 service-item-title">Photography</h4>

            <p className="service-item-text">I make high-quality photos of any category at a professional level.</p>
          </div>
        </li>
      </ul>
    </section>
  )
}
