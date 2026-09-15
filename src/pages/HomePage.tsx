import { Hero } from '../components/Hero'
import { Intro } from '../components/Intro'
import { Work } from '../components/Work'
import { Footer } from '../components/Footer'

export function HomePage() {
  return (
    <div className="home-page">
      <div className="home-hero-pin">
        <Hero />
      </div>
      <div className="home-scroll-content">
        <Intro />
        <Work />
        <Footer />
      </div>
    </div>
  )
}
