'use client'

import { motion } from 'framer-motion'
import { FadeIn } from '../animations/fade-in'
import { ArrowRight } from 'lucide-react'

export function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We dive deep into understanding your brand, audience, and goals to create a strategic foundation.',
    },
    {
      number: '02',
      title: 'Concept Development',
      description: 'Our creative team develops multiple design concepts aligned with your vision and strategy.',
    },
    {
      number: '03',
      title: 'Design & Refinement',
      description: 'We refine the chosen concept with precision, creating polished designs ready for production.',
    },
    {
      number: '04',
      title: 'Delivery & Support',
      description: 'Final deliverables in all formats, plus ongoing support to ensure successful implementation.',
    },
  ]

  return (
    <section id="process" className="py-20 md:py-32 bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-accent">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures exceptional results every time.
            </p>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-accent/20 via-accent/50 to-accent/20 transform -translate-y-1/2" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <FadeIn key={step.number} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative"
                >
                  {/* Step card */}
                  <div className="bg-background border border-border rounded-xl p-6 h-full relative z-10">
                    {/* Step number badge */}
                    <div className="w-14 h-14 bg-accent text-black rounded-full flex items-center justify-center font-bold text-lg mb-4 relative -mt-10">
                      {step.number}
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow connector - hidden on last item and mobile */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <ArrowRight className="w-8 h-8 text-accent/50" />
                    </div>
                  )}
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
