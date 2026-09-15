import { PhotoCard } from '../components/PhotoCard'
import { Footer } from '../components/Footer'

const services = [
  {
    n: '01',
    title: 'Design',
    body: 'Strong, user-friendly digital designs for websites and products — from wireframes in Figma to polished UI systems.',
  },
  {
    n: '02',
    title: 'Development',
    body: 'Scalable sites and apps from scratch that fit seamlessly with design. Focus on micro-animations, transitions, and interaction.',
  },
  {
    n: '03',
    title: 'The full package',
    body: 'A complete experience from concept to implementation. Design sense plus development skills to ship kick-ass projects.',
  },
]

export function AboutPage() {
  return (
    <div className="about-page">
      <header className="about-header">
        <div className="container medium">
          <h1>
            <span>Helping brands thrive </span>
            <span>in the digital world</span>
          </h1>
        </div>
      </header>

      <section className="about-globe-line">
        <div className="container medium">
          <div className="about-globe-stripe">
            <div className="digital-ball about-globe">
              <div className="globe">
                <div className="globe-wrap">
                  <div className="circle" />
                  <div className="circle" />
                  <div className="circle" />
                  <div className="circle-hor" />
                  <div className="circle-hor-middle" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-image">
        <div className="container about-image__grid">
          <div className="about-image__copy">
            <div className="about-image__arrow" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2.77 0H12v9.23M12 0 0 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <p>
              I help companies from all over the world with tailor-made
              solutions.
              <br />
              With each project, I push my work to new horizons, always putting
              quality first.
            </p>
            <p className="about-image__muted">
              Always exploring<span className="animate-dot">.</span>
              <span className="animate-dot">.</span>
              <span className="animate-dot">.</span>
            </p>
          </div>
          <div className="about-image__media">
            <PhotoCard src="/about-card.jpg" alt="Fisayo Ariyo" />
          </div>
        </div>
      </section>

      <section className="about-services">
        <div className="container">
          <h2>
            I can help you with <span className="animate-dot">.</span>
            <span className="animate-dot">.</span>
            <span className="animate-dot">.</span>
          </h2>
          <div className="services-grid">
            {services.map((item) => (
              <article key={item.n} className="service-card">
                <h5>{item.n}</h5>
                <div className="service-card__stripe" />
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
