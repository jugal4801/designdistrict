'use client'

import { ParticlesProvider, Particles } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Engine, ISourceOptions } from '@tsparticles/engine'
import { useEffect, useState } from 'react'

// Must be a stable reference across the app lifecycle (ParticlesProvider requirement)
async function initEngine(engine: Engine) {
  await loadSlim(engine)
}

const options: ISourceOptions = {
  fullScreen: { enable: false },
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  detectRetina: true,
  particles: {
    number: {
      value: 70,
      density: { enable: true, width: 1600, height: 900 },
    },
    color: { value: ['#3b6eb5', '#5b8ed5'] },
    opacity: { value: 0.5 },
    size: { value: { min: 1, max: 2.5 } },
    links: {
      enable: true,
      distance: 130,
      color: '#3b6eb5',
      opacity: 0.15,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: 'none',
      random: true,
      straight: false,
      outModes: { default: 'out' },
    },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'grab' },
      resize: { enable: true },
    },
    modes: {
      grab: {
        distance: 180,
        links: { opacity: 0.6, color: '#5b8ed5' },
      },
    },
  },
}

export function HeroParticleNetwork() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    setEnabled(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  if (!enabled) return null

  return (
    <ParticlesProvider init={initEngine}>
      <Particles id="hero-particle-network" options={options} className="absolute inset-0" />
    </ParticlesProvider>
  )
}
