import { NavLink } from 'react-router-dom'

export function Nav() {
  return (
    <header className="nav-bar">
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
      <ul className="nav-links">
        <li>
          <NavLink to="/#work">Work</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/#contact">Contact</NavLink>
        </li>
      </ul>
    </header>
  )
}
