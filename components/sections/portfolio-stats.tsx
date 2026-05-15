'use client'

import { motion } from 'framer-motion'
import { FadeIn } from '../animations/fade-in'

const stats = [
  { number: '150+', label: 'Projects Completed', description: 'Diverse portfolio across industries' },
  { number: '50+', label: 'Happy Clients', description: 'Trusted by leading brands' },
  { number: '8+', label: 'Years Experience', description: 'Proven expertise in design' },
  { number: '24/7', label: 'Client Support', description: 'Always here to help' },
]

export function PortfolioStatsSection() {
  return (
    <section className="py-20 px-4 bg-card/50 backdrop-blur-sm border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-4xl md:text-5xl font-bold text-accent mb-2"
                >
                  {stat.number}
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
