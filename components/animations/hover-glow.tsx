'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface HoverGlowProps {
  children: ReactNode
  glowColor?: string
}

export function HoverGlow({
  children,
  glowColor = '#00ff88',
}: HoverGlowProps) {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      {/* Glow effect */}
      <motion.div
        className="absolute pointer-events-none rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          width: 200,
          height: 200,
          left: mouseX,
          top: mouseY,
          x: -100,
          y: -100,
          background: glowColor,
        }}
      />
      {children}
    </motion.div>
  )
}
