import { useRef, type ReactNode, type MouseEvent } from 'react'

type Props = {
  children: ReactNode
  className?: string
  /** Max pixel pull — stays inside the element's own space. */
  strength?: number
}

/** Soft magnetic pull toward the cursor — only within this element. */
export function Magnetic({ children, className = '', strength = 28 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    const max = strength
    const tx = Math.max(-max, Math.min(max, (x / rect.width) * strength))
    const ty = Math.max(-max, Math.min(max, (y / rect.height) * strength))
    el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate3d(0, 0, 0)'
  }

  return (
    <div
      ref={ref}
      className={`magnetic ${className}`.trim()}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  )
}
