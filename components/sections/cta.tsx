'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FadeIn } from '../animations/fade-in'
import { PremiumButton } from '@/components/ui/premium-button'

export function CTASection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to Transform <span className="text-accent">Your Brand</span>?
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s create something exceptional together. Reach out today and discover how NEXTPIXEL STUDIO can elevate your brand to new heights.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="mailto:hello@nextpixelstudio.com" className="block">
              <PremiumButton variant="primary" size="lg">
                Get in Touch
              </PremiumButton>
            </Link>
            <Link href="tel:+1-555-design" className="block">
              <PremiumButton variant="secondary" size="lg">
                Schedule Call
              </PremiumButton>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
