'use client'

import { ComponentType, useEffect, useRef, useState } from 'react'

interface InViewCanvasProps {
  Component: ComponentType<Record<string, unknown>>
  componentProps?: Record<string, unknown>
  className?: string
  rootMargin?: string
}

export function InViewCanvas({
  Component,
  componentProps,
  className = 'absolute inset-0 pointer-events-none',
  rootMargin = '200px',
}: InViewCanvasProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    setEnabled(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    if (!enabled || !ref.current) return
    const node = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [enabled, rootMargin])

  return (
    <div ref={ref} className={className} aria-hidden="true">
      {enabled && inView && <Component {...componentProps} />}
    </div>
  )
}
