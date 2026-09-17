import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function formatTime(date: Date) {
  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })
}

export function ContactPage() {
  const year = new Date().getFullYear()
  const [time, setTime] = useState(() => formatTime(new Date()))

  useEffect(() => {
    const id = window.setInterval(() => setTime(formatTime(new Date())), 30_000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="contact-page">
      <div className="container medium contact-page__inner">
        <h1>
          <span className="contact-page__line">
            <img
              className="profile-picture"
              src="/about-card.jpg"
              alt=""
              width={72}
              height={72}
            />
            Let&apos;s start a
          </span>
          <span className="contact-page__line">
            project together
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
        </h1>

        <div className="footer-simple footer-simple--always">
          <div className="footer-simple__block">
            <span className="footer-meta-label">Contact details</span>
            <a href="mailto:fisayomiariyo@gmail.com">fisayomiariyo@gmail.com</a>
            <a href="https://wa.me/2347087710080" target="_blank" rel="noreferrer">
              +234-708-771-0080
            </a>
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
            <Link to="/about">About</Link>
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
    </div>
  )
}
