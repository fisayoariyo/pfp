import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { MobileMenu } from './MobileMenu'

export function Nav() {
  const { pathname } = useLocation()
  const [light, setLight] = useState(pathname === '/' || pathname === '/work')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => {
      if (pathname === '/about') {
        const whiteSection = document.querySelector('.about-image')
        if (!whiteSection) {
          setLight(false)
          return
        }
        setLight(whiteSection.getBoundingClientRect().top < 80)
        return
      }

      if (pathname === '/contact') {
        setLight(false)
        return
      }

      if (pathname === '/work') {
        setLight(true)
        return
      }

      if (pathname !== '/') {
        setLight(false)
        return
      }

      const intro = document.querySelector('.home-intro') as HTMLElement | null
      const work = document.querySelector('.theme-light') as HTMLElement | null
      const footer = document.querySelector('.site-footer') as HTMLElement | null
      const mid = 72

      if (footer && footer.getBoundingClientRect().top < mid) {
        setLight(false)
        return
      }
      if (work && work.getBoundingClientRect().top < mid) {
        setLight(true)
        return
      }
      if (intro && intro.getBoundingClientRect().top < mid) {
        setLight(false)
        return
      }
      setLight(true)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  return (
    <>
      <header className={`nav-bar${light ? ' nav-bar--light' : ''}`}>
        <NavLink className="nav-credits" to="/">
          <span className="nav-credits__mark">©</span>
          <span className="nav-credits__text">
            <span className="code-by">Code by </span>
            <span className="name-swap">
              <span className="name-swap__first">Fisayo</span>
              <span className="name-swap__last">Ariyo</span>
            </span>
          </span>
        </NavLink>

        <ul className="nav-links nav-links--desktop">
          <li>
            <NavLink to="/work">Work</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        <button
          type="button"
          className={`menu-burger${light ? ' menu-burger--light' : ''}${
            menuOpen ? ' is-open' : ''
          }`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
