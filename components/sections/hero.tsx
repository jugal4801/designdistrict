'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { PremiumButton } from '@/components/ui/premium-button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background pointer-events-none" />
      
      {/* Animated accent elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Design That{' '}
          <span className="bg-gradient-to-r from-accent via-accent to-accent/70 bg-clip-text text-transparent">
            Transforms
          </span>{' '}
          Brands
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Premium graphic design services for visionary brands. We create visual identities that captivate, inspire, and drive results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="#contact" className="block">
            <PremiumButton variant="primary" size="lg">
              Start Your Project
            </PremiumButton>
          </Link>
          <Link href="#portfolio" className="block">
            <PremiumButton variant="secondary" size="lg">
              View Our Work
            </PremiumButton>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
