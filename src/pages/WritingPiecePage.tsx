import { Link, useParams } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { writingPieces } from '../data/writing'

export function WritingPiecePage() {
  const { slug } = useParams()
  const piece = writingPieces.find((p) => p.slug === slug)

  if (!piece) {
    return (
      <div className="writing-page">
        <header className="page-hero theme-light">
          <div className="container">
            <p className="page-hero__label">Writing</p>
            <h1>Not found</h1>
            <p className="page-hero__lede">
              That piece is not here yet.{' '}
              <Link to="/writing">Back to writing</Link>
            </p>
          </div>
        </header>
        <Footer />
      </div>
    )
  }

  return (
    <div className="writing-page">
      <article className="writing-piece theme-light">
        <div className="container medium">
          <Link className="writing-back" to="/writing">
            ← Writing
          </Link>
          <p className="writing-piece__kind">
            {piece.kind === 'poem' ? 'Poem' : 'Prose'} · {piece.year}
          </p>
          <h1>{piece.title}</h1>
          <div className="writing-piece__body">
            {piece.body.map((line, i) =>
              line === '' ? (
                <br key={`b-${i}`} />
              ) : piece.kind === 'poem' ? (
                <p className="writing-line" key={`${i}-${line}`}>
                  {line}
                </p>
              ) : (
                <p key={`${i}-${line.slice(0, 12)}`}>{line}</p>
              ),
            )}
          </div>
        </div>
      </article>
      <Footer />
    </div>
  )
}
