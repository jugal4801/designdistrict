'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'
import { FadeIn } from '../animations/fade-in'

const packages = [
  {
    name: 'Growth Package',
    price: '14,999',
    period: '/month',
    features: [
      '20 Creative Posts',
      '8 Reels Editing',
      '10 Story Designs',
      'Priority Support',
    ],
    popular: false,
  },
  {
    name: 'Premium Package',
    price: '24,999',
    period: '/month',
    features: [
      '30 Creative Posts',
      '12 Reels Editing',
      'Unlimited Stories',
      'Motion Graphics',
    ],
    popular: true,
  },
  {
    name: 'Elite Package',
    price: '39,999',
    period: '/month',
    features: [
      '30 Premium Posts',
      '20 Reels Editing',
      'Ad Creative Designs',
      'Dedicated Support',
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="eyebrow mx-auto justify-center mb-6">Pricing</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your <span className="text-accent">Growth Plan</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible packages designed to scale with your brand&apos;s creative needs.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, index) => (
            <FadeIn key={pkg.name} delay={index * 0.1}>
              <div
                className={`relative h-full flex flex-col rounded-sm border p-8 ${
                  pkg.popular
                    ? 'border-accent bg-card shadow-soft-lg md:-translate-y-4'
                    : 'border-border bg-card/40'
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.1em] px-4 py-1 rounded-sm">
                    Most Popular
                  </span>
                )}

                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {pkg.name}
                </h3>

                <div className="mb-6">
                  <span className="font-display text-4xl font-bold text-foreground">
                    ₹{pkg.price}
                  </span>
                  <span className="text-muted-foreground">{pkg.period}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact"
                  className={`text-center px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] rounded-sm transition-colors duration-300 ${
                    pkg.popular
                      ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                      : 'border border-foreground/30 text-foreground hover:border-foreground'
                  }`}
                >
                  Get Started →
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          Need something tailored? <Link href="#contact" className="text-accent hover:underline">Contact us</Link> for a custom plan.
        </p>
      </div>
    </section>
  )
}
