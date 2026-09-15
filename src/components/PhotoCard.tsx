import { useRef, type MouseEvent } from 'react'

type Props = {
  src: string
  alt: string
}

/** Rounded portrait card with BSHP-style perspective tilt. */
export function PhotoCard({ src, alt }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rotY = (x - 0.5) * 14
    const rotX = (0.5 - y) * 10
    el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg)`
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <div className="photo-card-wrap">
      <div
        ref={ref}
        className="photo-card"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        <img src={src} alt={alt} width={900} height={1200} />
      </div>
    </div>
  )
}
