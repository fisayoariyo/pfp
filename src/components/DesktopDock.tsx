import { NavLink } from 'react-router-dom'

const items = [
  {
    to: '/',
    end: true,
    label: 'Home',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
        <path
          d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    to: '/work',
    label: 'Work',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
        <rect
          x="3.5"
          y="7"
          width="17"
          height="12.5"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    ),
  },
  {
    to: '/writing',
    label: 'Writing',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
        <path
          d="M7 3.5h8.5L19 7v13.5H7V3.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M15 3.5V7h3.5M9 11h6M9 14.5h6M9 18h4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    to: '/about',
    label: 'About',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
        <circle
          cx="12"
          cy="8"
          r="3.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M5.5 19.5c1.2-3.2 3.4-4.8 6.5-4.8s5.3 1.6 6.5 4.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
] as const

export function DesktopDock() {
  return (
    <nav className="desktop-dock" aria-label="Primary">
      <div className="desktop-dock__inner">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={'end' in item ? item.end : undefined}
            className={({ isActive }) =>
              `desktop-dock__link${isActive ? ' is-active' : ''}`
            }
            title={item.label}
            aria-label={item.label}
          >
            {item.icon}
          </NavLink>
        ))}
        <span className="desktop-dock__rule" aria-hidden />
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `desktop-dock__link desktop-dock__link--contact${
              isActive ? ' is-active' : ''
            }`
          }
          title="Contact"
          aria-label="Contact"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
            <path
              d="M4 7.5h16v10a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5v-10Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path
              d="m5 8 7 5 7-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </NavLink>
      </div>
    </nav>
  )
}
