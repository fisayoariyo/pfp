import { useEffect, useRef, useState } from 'react'
import type { Project } from '../data/projects'

type Props = {
  projects: Project[]
  activeIndex: number | null
}

export function WorkHoverPreview({ projects, activeIndex }: Props) {
  const imageRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLDivElement>(null)
  const spanRef = useRef<HTMLDivElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine) and (min-width: 541px)')
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
      pos.current.x += (target.current.x - pos.current.x) * 0.12
      pos.current.y += (target.current.y - pos.current.y) * 0.12

      const { x, y } = pos.current
      if (imageRef.current) {
        imageRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -52%)`
      }
      if (btnRef.current) {
        btnRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -60%)`
      }
      if (spanRef.current) {
        spanRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -60%)`
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
    <>
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
                  <img src={project.image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        ref={btnRef}
        className={`mouse-pos-list-btn${active ? ' active' : ''}`}
        aria-hidden
      />
      <div
        ref={spanRef}
        className={`mouse-pos-list-span${active ? ' active' : ''}`}
        aria-hidden
      >
        <p>View</p>
      </div>
    </>
  )
}
