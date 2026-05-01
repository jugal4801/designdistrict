'use client'

import { motion } from 'framer-motion'
import { FadeIn } from '../animations/fade-in'

export function PortfolioSection() {
  const projects = [
    {
      title: 'TechCorp Rebranding',
      category: 'Brand Identity',
      description: 'Complete brand overhaul for a Fortune 500 tech company',
    },
    {
      title: 'Luna Cosmetics Campaign',
      category: 'Campaign Design',
      description: 'Integrated digital and print campaign launching new product line',
    },
    {
      title: 'Artisan Bakery Identity',
      category: 'Packaging Design',
      description: 'Premium packaging design and brand identity for luxury bakery',
    },
    {
      title: 'FinanceFlow App',
      category: 'Digital Design',
      description: 'Mobile and web app UI/UX design for fintech startup',
    },
    {
      title: 'Luxury Resort Marketing',
      category: 'Marketing Design',
      description: 'Comprehensive marketing collateral and promotional materials',
    },
    {
      title: 'EcoGreen Initiative',
      category: 'Art Direction',
      description: 'Brand direction and visual strategy for sustainability nonprofit',
    },
  ]

  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-accent">Work</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore some of our most impactful projects that showcase our expertise and creativity.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group relative rounded-xl overflow-hidden bg-card/50 border border-border hover:border-accent/50 transition-all duration-300 cursor-pointer"
              >
                {/* Project Card */}
                <div className="h-64 bg-gradient-to-br from-accent/20 to-transparent relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span className="text-accent text-sm font-semibold mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {project.description}
                    </p>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold">View Project →</span>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
