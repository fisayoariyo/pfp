import { useEffect, useState } from 'react'
import { Magnetic } from './Magnetic'

function formatTime(date: Date) {
  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })
}

export function Footer() {
  const year = new Date().getFullYear()
  const [time, setTime] = useState(() => formatTime(new Date()))

  useEffect(() => {
    const id = window.setInterval(() => setTime(formatTime(new Date())), 30_000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <footer className="site-footer" id="contact">
      <div className="footer-curve" aria-hidden="true" />
      <div className="container medium footer-inner">
        <div className="footer-cta">
          <h2>
            <span className="footer-cta__line">
              <img
                className="profile-picture"
                src="/about-card.jpg"
                alt=""
                width={80}
                height={80}
              />
              Let&apos;s work
            </span>
            <span className="footer-cta__line footer-cta__line--together">
              together
              <span className="footer-inline-arrow" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M12 2 2 12M2 12h7.5M2 12V4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </span>
          </h2>

          <div className="footer-stripe-wrap">
            <div className="footer-stripe" />
            <Magnetic strength={40} className="footer-round-wrap">
              <a
                className="btn-round btn-round--solid footer-get-in-touch"
                href="mailto:fisayomiariyo@gmail.com"
              >
                <span className="btn-round__text">Get in touch</span>
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Desktop pills */}
        <div className="footer-pills footer-pills--desktop">
          <Magnetic strength={14}>
            <a className="btn-pill" href="mailto:fisayomiariyo@gmail.com">
              <span className="btn-pill__fill" />
              <span className="btn-pill__text">fisayomiariyo@gmail.com</span>
            </a>
          </Magnetic>
          <Magnetic strength={14}>
            <a
              className="btn-pill"
              href="https://wa.me/2347087710080"
              target="_blank"
              rel="noreferrer"
            >
              <span className="btn-pill__fill" />
              <span className="btn-pill__text">+234-708-771-0080</span>
            </a>
          </Magnetic>
        </div>

        {/* Mobile simple contact (Dennis /contact style) */}
        <div className="footer-simple">
          <div className="footer-simple__block">
            <span className="footer-meta-label">Contact details</span>
            <a href="mailto:fisayomiariyo@gmail.com">fisayomiariyo@gmail.com</a>
            <a href="https://wa.me/2347087710080" target="_blank" rel="noreferrer">
              +234-708-771-0080
            </a>
          </div>
          <div className="footer-simple__block">
            <span className="footer-meta-label">Business details</span>
            <p>Fisayo Ariyo</p>
            <p>Freelance Designer &amp; Developer</p>
            <p>Lagos, Nigeria</p>
          </div>
        </div>

        <div className="footer-socials-block">
          <span className="footer-meta-label">Socials</span>
          <div className="footer-social-links">
            <a
              href="https://instagram.com/fisayomiariyo"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/2347087710080"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a href="mailto:fisayomiariyo@gmail.com">Gmail</a>
            <a
              href="https://github.com/fisayoariyo"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="footer-bottom dennis-footer-bottom">
          <div>
            <span className="footer-meta-label">Version</span>
            <strong>{year} © Edition</strong>
          </div>
          <div>
            <span className="footer-meta-label">Local time</span>
            <strong>{time}</strong>
          </div>
        </div>
      </div>
    </footer>
  )
}
