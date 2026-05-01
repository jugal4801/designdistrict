'use client'

import { FadeIn } from '../animations/fade-in'

export function TrustStatsSection() {
  const stats = [
    { value: '500+', label: 'Projects Delivered' },
    { value: '200+', label: 'Happy Clients' },
    { value: '15+', label: 'Years Experience' },
    { value: '50+', label: 'Design Awards' },
  ]

  return (
    <section className="py-20 bg-card/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
