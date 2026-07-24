'use client'

import dynamic from 'next/dynamic'

export const FloatingShape = dynamic(
  () => import('./floating-shape-scene').then((m) => m.FloatingShapeScene),
  { ssr: false },
)
