'use client'

import { FadeIn } from '../animations/fade-in'
import { CheckCircle } from 'lucide-react'

export function WhyChooseUsSection() {
  const reasons = [
    'Award-winning creative team with proven track record',
    'Strategic approach focused on measurable results',
    'Transparent communication and collaborative process',
    'Cutting-edge design tools and techniques',
    'Dedicated project management and support',
    'Fast turnaround without compromising quality',
  ]

  return (
    <section className="py-20 md:py-32 bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - visual placeholder */}
          <FadeIn direction="right">
            <div className="relative h-96 bg-gradient-to-br from-card to-card/50 rounded-xl border border-border overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-accent/30 mb-4">Quality</div>
                  <p className="text-muted-foreground">Uncompromising excellence</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right side */}
          <FadeIn direction="left">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="text-accent">SleekMethod</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We&apos;re not just designers—we&apos;re strategic partners invested in your success. Here&apos;s why leading brands choose us.
              </p>

              <ul className="space-y-4">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-lg">{reason}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-8 px-8 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent/50">
                Schedule a Consultation
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
