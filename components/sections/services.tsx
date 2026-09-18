'use client'

import { FadeIn } from '../animations/fade-in'
import { Palette, Zap, Users, Layers, Target, Sparkles } from 'lucide-react'

export function ServicesSection() {
  const services = [
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Strategic visual identity design that sets your brand apart and creates lasting impressions.',
    },
    {
      icon: Zap,
      title: 'Digital Design',
      description: 'Modern, user-focused digital experiences for web and mobile applications.',
    },
    {
      icon: Users,
      title: 'Marketing Design',
      description: 'Compelling marketing materials that convert and engage your target audience.',
    },
    {
      icon: Layers,
      title: 'Packaging Design',
      description: 'Premium packaging solutions that elevate your product on store shelves.',
    },
    {
      icon: Target,
      title: 'Campaign Design',
      description: 'Integrated design campaigns that amplify your brand message across channels.',
    },
    {
      icon: Sparkles,
      title: 'Art Direction',
      description: 'Creative vision and direction for cohesive, impactful visual communication.',
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="eyebrow mb-6">What We Do</div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 border-b border-border pb-10">
            <h2 className="text-4xl md:text-6xl font-bold max-w-xl leading-[1.05]">
              Our <span className="text-accent">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-md">
              Comprehensive design solutions tailored to elevate your brand and achieve your business goals.
            </p>
          </div>
        </FadeIn>

        <div className="divide-y divide-border border-b border-border">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <FadeIn key={service.title} delay={index * 0.05}>
                <div className="group grid grid-cols-[3rem_1fr] md:grid-cols-[5rem_16rem_1fr_2.5rem] items-center gap-4 md:gap-8 py-8 transition-colors duration-300 hover:bg-card/40 px-2 -mx-2">
                  <span className="font-display text-sm text-muted-foreground">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground col-span-2 md:col-span-1">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed col-span-2 md:col-span-1">
                    {service.description}
                  </p>
                  <Icon className="hidden md:block w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-300 justify-self-end" />
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
