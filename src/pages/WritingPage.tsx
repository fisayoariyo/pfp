import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { writingPieces } from '../data/writing'

export function WritingPage() {
  return (
    <div className="writing-page">
      <header className="page-hero theme-light">
        <div className="container">
          <p className="page-hero__label">Writing</p>
          <h1>Poetry &amp; literary work</h1>
          <p className="page-hero__lede">
            Verses and prose outside client work — a quieter archive.
          </p>
        </div>
      </header>

      <section className="writing-list theme-light">
        <div className="container medium">
          <ul className="writing-list__items">
            {writingPieces.map((piece) => (
              <li key={piece.slug}>
                <Link className="writing-row" to={`/writing/${piece.slug}`}>
                  <div className="writing-row__main">
                    <p className="writing-row__kind">
                      {piece.kind === 'poem' ? 'Poem' : 'Prose'}
                    </p>
                    <h2>{piece.title}</h2>
                    <p className="writing-row__excerpt">{piece.excerpt}</p>
                  </div>
                  <span className="writing-row__year">{piece.year}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  )
}
