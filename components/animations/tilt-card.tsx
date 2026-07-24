'use client'

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { MouseEvent, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TiltCardProps {
  children: ReactNode
  className?: string
  glass?: boolean
  maxTilt?: number
  lift?: number
}

export function TiltCard({
  children,
  className,
  glass = true,
  maxTilt = 8,
  lift = 6,
}: TiltCardProps) {
  const shouldReduceMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]), {
    stiffness: 220,
    damping: 22,
  })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]), {
    stiffness: 220,
    damping: 22,
  })

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (shouldReduceMotion) return
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      whileHover={shouldReduceMotion ? undefined : { y: -lift, scale: 1.01 }}
      className={cn(
        'relative rounded-xl transition-colors duration-300 shadow-soft hover:shadow-soft-lg',
        glass
          ? 'bg-card/40 backdrop-blur-xl border border-border/60 hover:border-accent/50'
          : 'bg-card border border-border hover:border-accent/50',
        className,
      )}
    >
      {children}
    </motion.div>
  )
}
