import { useEffect, useRef, useState } from 'react'
import { previewSrc, type Project } from '../data/projects'

type Props = {
  projects: Project[]
  activeIndex: number | null
}

/** Cursor-following project image only — no View pill or extra chrome. */
export function WorkHoverPreview({ projects, activeIndex }: Props) {
  const imageRef = useRef<HTMLDivElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine) and (min-width: 721px)')
    const sync = () => setEnabled(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (!enabled) return

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
    }

    let raf = 0
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.16
      pos.current.y += (target.current.y - pos.current.y) * 0.16
      const { x, y } = pos.current
      if (imageRef.current) {
        imageRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [enabled])

  useEffect(() => {
    if (!wrapRef.current || activeIndex === null) return
    wrapRef.current.style.transform = `translateY(${activeIndex * -100}%)`
  }, [activeIndex])

  if (!enabled) return null

  const active = activeIndex !== null

  return (
    <div
      ref={imageRef}
      className={`mouse-pos-list-image${active ? ' active' : ''}`}
      aria-hidden
    >
      <div className={`mouse-pos-list-image-bounce${active ? ' active' : ''}`}>
        <div className="float-image-wrap" ref={wrapRef}>
          {projects.map((project) => (
            <div key={project.slug} className="mouse-pos-list-image-inner">
              <div
                className="overlay-image"
                style={{ backgroundColor: project.accent }}
              >
                <img src={previewSrc(project)} alt="" loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
