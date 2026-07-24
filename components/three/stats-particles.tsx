'use client'

import dynamic from 'next/dynamic'

export const StatsParticles = dynamic(
  () => import('./stats-particles-scene').then((m) => m.StatsParticlesScene),
  { ssr: false },
)
