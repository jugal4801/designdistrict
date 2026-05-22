'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = 'up',
}: FadeInProps) {
  const getInitial = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 20 }
      case 'down':
        return { opacity: 0, y: -20 }
      case 'left':
        return { opacity: 0, x: -20 }
      case 'right':
        return { opacity: 0, x: 20 }
      default:
        return { opacity: 0, y: 20 }
    }
  }

  return (
    <motion.div
      className={cn(className)}
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {children}
    </motion.div>
  )
}
