import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

/** Main nav destinations only — not nested routes like /writing/:slug */
const labels: Record<string, string> = {
  '/': 'Home',
  '/work': 'Work',
  '/writing': 'Writing',
  '/about': 'About',
  '/contact': 'Contact',
}

/** Brief single-word flash when switching primary nav pages. */
export function PageFlash() {
  const { pathname } = useLocation()
  const first = useRef(true)
  const [word, setWord] = useState<string | null>(null)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }

    const label = labels[pathname]
    if (!label) return

    setWord(label)
    setLeaving(false)
    document.body.style.overflow = 'hidden'

    const leaveTimer = window.setTimeout(() => setLeaving(true), 700)
    const hideTimer = window.setTimeout(() => {
      setWord(null)
      setLeaving(false)
      document.body.style.overflow = ''
    }, 1400)

    return () => {
      window.clearTimeout(leaveTimer)
      window.clearTimeout(hideTimer)
      document.body.style.overflow = ''
    }
  }, [pathname])

  if (!word) return null

  return (
    <div
      className={`page-flash${leaving ? ' is-leaving' : ''}`}
      aria-hidden
    >
      <div className="page-flash__words">
        <h2 className="page-flash__word is-active">
          <span className="preloader__dot" />
          {word}
        </h2>
      </div>
    </div>
  )
}
