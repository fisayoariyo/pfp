import { useEffect, useState } from 'react'

const greetings = [
  'Hello',
  'Bonjour',
  'स्वागत है',
  'Ciao',
  'Olá',
  'こんにちは',
  'Hallå',
  'Guten tag',
  'Ẹ káàbọ̀',
  'Hallo',
]

type Props = {
  onDone?: () => void
}

export function Preloader({ onDone }: Props) {
  const [index, setIndex] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    let i = 0
    const wordTimer = window.setInterval(() => {
      i += 1
      if (i >= greetings.length) {
        window.clearInterval(wordTimer)
        setLeaving(true)
        window.setTimeout(() => {
          setHidden(true)
          document.body.style.overflow = ''
          onDone?.()
        }, 900)
        return
      }
      setIndex(i)
    }, 320)

    return () => {
      window.clearInterval(wordTimer)
      document.body.style.overflow = ''
    }
  }, [onDone])

  if (hidden) return null

  return (
    <div className={`preloader${leaving ? ' is-leaving' : ''}`} aria-hidden>
      <div className="preloader__curve preloader__curve--top" />
      <div className="preloader__words">
        {greetings.map((word, i) => (
          <h2
            key={word}
            className={`preloader__word${i === index && !leaving ? ' is-active' : ''}`}
          >
            <span className="preloader__dot" />
            {word}
          </h2>
        ))}
      </div>
      <div className="preloader__curve preloader__curve--bottom" />
    </div>
  )
}
