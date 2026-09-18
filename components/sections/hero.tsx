'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { PremiumButton } from '@/components/ui/premium-button'

const HeroParticleNetwork = dynamic(
  () => import('@/components/particles/hero-particle-network').then((m) => m.HeroParticleNetwork),
  { ssr: false },
)

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16 border-b border-border">
      {/* Background */}
      <div className="absolute inset-0 bg-background pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />

      {/* Particle network, lazy-loaded and reduced-motion aware */}
      <HeroParticleNetwork />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-8"
        >
          Premium Graphic Design Studio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display font-bold mb-8 leading-[0.95] tracking-tight text-[clamp(2.75rem,8vw,7rem)] max-w-5xl"
        >
          Design That{' '}
          <span className="text-accent">
            Transforms
          </span>{' '}
          Brands
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 items-end max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Premium graphic design services for visionary brands. We create visual identities that captivate, inspire, and drive results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 md:justify-end"
          >
            <Link href="#contact" className="block">
              <PremiumButton variant="primary" size="lg">
                Start Your Project
              </PremiumButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
