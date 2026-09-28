import { Link } from 'react-router-dom'
import { Magnetic } from './Magnetic'

export function Intro() {
  return (
    <section className="home-intro" id="about-teaser">
      <div className="container medium">
        <div className="intro-row">
          <h4 className="intro-lead">
            Crafting modern web experiences that elevate your brand and engage
            your audience.
          </h4>
          <div className="intro-side">
            <p>
              Merging design intuition with modern engineering to set a higher
              standard for the web.
            </p>
            <Magnetic strength={40} className="btn-round-wrap">
              <Link className="btn-round" to="/about">
                <span className="btn-round__fill" />
                <span className="btn-round__text">About me</span>
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  )
}
