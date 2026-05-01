'use client'

import { motion } from 'framer-motion'
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-accent">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive design solutions tailored to elevate your brand and achieve your business goals.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <FadeIn key={service.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group p-8 rounded-xl bg-card/50 border border-border hover:border-accent/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="mb-4 inline-flex p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
