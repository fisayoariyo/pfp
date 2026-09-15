import { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

type Props = {
  open: boolean
  onClose: () => void
}

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function MobileMenu({ open, onClose }: Props) {
  const { pathname } = useLocation()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <div
        className={`menu-backdrop${open ? ' is-open' : ''}`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <aside
        className={`mobile-menu${open ? ' is-open' : ''}`}
        aria-hidden={!open}
      >
        <div className="mobile-menu__curve" aria-hidden />
        <div className="mobile-menu__inner">
          <button
            type="button"
            className="menu-close"
            onClick={onClose}
            aria-label="Close menu"
          >
            <span />
            <span />
          </button>

          <div className="mobile-menu__nav">
            <p className="mobile-menu__label">Navigation</p>
            <div className="mobile-menu__stripe" />
            <ul>
              {links.map((link, i) => (
                <li
                  key={link.to}
                  style={{ transitionDelay: open ? `${120 + i * 60}ms` : '0ms' }}
                >
                  <NavLink
                    to={link.to}
                    end={link.end}
                    onClick={onClose}
                    className={({ isActive }) =>
                      isActive ? 'is-current' : undefined
                    }
                  >
                    {link.label}
                    {pathname === link.to ||
                    (link.end && pathname === '/') ? (
                      <span className="nav-dot" />
                    ) : null}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="mobile-menu__socials">
            <p className="mobile-menu__label">Socials</p>
            <div className="mobile-menu__stripe" />
            <div className="mobile-menu__social-row">
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
        </div>
      </aside>
    </>
  )
}
