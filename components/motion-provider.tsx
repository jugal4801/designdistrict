'use client'

import { MotionConfig } from 'framer-motion'
import { ReactNode } from 'react'

export const SMOOTH_EASE = [0.16, 1, 0.3, 1] as const

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.6, ease: SMOOTH_EASE }}>
      {children}
    </MotionConfig>
  )
}
