'use client'

import dynamic from 'next/dynamic'

export const MorphSphere = dynamic(
  () => import('./morph-sphere-scene').then((m) => m.MorphSphereScene),
  { ssr: false },
)
