'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { portfolioProjects, categories } from '@/lib/portfolio-data'
import { FadeIn } from '../animations/fade-in'

export function PortfolioEnhancedSection() {
  const [selectedCategory, setSelectedCategory] = useState('All Work')
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const filteredProjects = selectedCategory === 'All Work'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === selectedCategory)

  return (
    <section id="portfolio" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Crafting Brands That Stand Out
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse portfolio of premium design solutions across branding, digital, and marketing.
            </p>
          </div>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/50'
                    : 'bg-card border border-border text-foreground hover:border-accent'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </FadeIn>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <Link key={project.id} href={`/portfolio/${project.slug}`}>
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative h-80 rounded-xl overflow-hidden border border-border/50 transition-all duration-300 hover:border-accent hover:shadow-2xl hover:shadow-accent/20 bg-card backdrop-blur-sm">
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">{project.industry}</p>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="inline-block text-accent font-semibold"
                  >
                    View Project →
                  </motion.span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {project.category}
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
