import { Work } from '../components/Work'
import { Footer } from '../components/Footer'

export function WorkPage() {
  return (
    <div className="work-page">
      <header className="page-hero theme-light">
        <div className="container">
          <p className="page-hero__label">Work</p>
          <h1>Selected projects</h1>
        </div>
      </header>
      <Work />
      <Footer />
    </div>
  )
}
