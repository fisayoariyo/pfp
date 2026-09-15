import { Link } from 'react-router-dom'
import { Magnetic } from './Magnetic'

export function Intro() {
  return (
    <section className="home-intro" id="about-teaser">
      <div className="container medium">
        <div className="intro-row">
          <h4 className="intro-lead">
            Helping brands to stand out in the digital era. Together we will set
            the new status quo. No nonsense, always on the cutting edge.
          </h4>
          <div className="intro-side">
            <p>
              The combination of my passion for design, code &amp; interaction
              positions me in a unique place in the web design world.
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
