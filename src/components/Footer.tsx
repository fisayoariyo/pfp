import { Link } from 'react-router-dom'
import { Magnetic } from './Magnetic'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.76 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.44ZM12.07 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.98c0 5.45-4.44 9.88-9.89 9.88Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  )
}

function GmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4.25-8 5-8-5V6l8 5 8-5v2.25Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5.25-3.75a1.125 1.125 0 1 1-1.125 1.125A1.125 1.125 0 0 1 17.25 5.75Z" />
    </svg>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" id="contact">
      <div className="footer-curve" aria-hidden="true" />
      <div className="container medium footer-inner">
        <div className="footer-cta">
          <div className="footer-arrow" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2.77 0H12v9.23M12 0 0 12"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <h2>
            <span className="footer-cta__line">
              <img
                className="profile-picture"
                src="/portrait.png"
                alt=""
                width={80}
                height={80}
              />
              Let&apos;s work
            </span>
            <span className="footer-cta__line">together</span>
          </h2>
          <Magnetic strength={45} className="footer-round-wrap">
            <a
              className="btn-round footer-round"
              href="mailto:fisayomiariyo@gmail.com"
            >
              <span className="btn-round__fill" />
              <span className="btn-round__text">Get in touch</span>
            </a>
          </Magnetic>
        </div>

        <div className="footer-icon-links">
          <Magnetic strength={16}>
            <a
              className="icon-pill"
              href="https://wa.me/2347087710080"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp +234-708-771-0080"
            >
              <span className="icon-pill__fill" />
              <WhatsAppIcon />
              <span>+234-708-771-0080</span>
            </a>
          </Magnetic>
          <Magnetic strength={16}>
            <a
              className="icon-pill"
              href="mailto:fisayomiariyo@gmail.com"
              aria-label="Email fisayomiariyo@gmail.com"
            >
              <span className="icon-pill__fill" />
              <GmailIcon />
              <span>fisayomiariyo@gmail.com</span>
            </a>
          </Magnetic>
          <Magnetic strength={16}>
            <a
              className="icon-pill"
              href="https://instagram.com/fisayomiariyo"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram fisayomiariyo"
            >
              <span className="icon-pill__fill" />
              <InstagramIcon />
              <span>@fisayomiariyo</span>
            </a>
          </Magnetic>
        </div>

        <div className="footer-bottom">
          <p>
            <span>Version</span>
            <strong>{year} © Edition</strong>
          </p>
          <div className="footer-socials">
            <span>Socials</span>
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
      </div>
    </footer>
  )
}
