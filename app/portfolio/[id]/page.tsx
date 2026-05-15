'use client'

import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { portfolioProjects } from '@/lib/portfolio-data'
import { FadeIn } from '@/components/animations/fade-in'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface PortfolioPageProps {
  params: {
    id: string
  }
}

export default function PortfolioPage({ params }: PortfolioPageProps) {
  const project = portfolioProjects.find((p) => p.slug === params.id)

  if (!project) {
    notFound()
  }

  return (
    <main className="overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[800px] overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-0 left-0 right-0 p-8 md:p-16"
        >
          <div className="flex items-end gap-6 mb-6">
            {project.logo && (
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                width={80}
                height={80}
                className="rounded-lg bg-card/50 backdrop-blur-sm p-3"
              />
            )}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-2">
                {project.title}
              </h1>
              <p className="text-lg text-accent font-semibold">{project.industry}</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {project.fullDescription}
          </p>
        </motion.div>
      </section>

      {/* Project Info Grid */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-sm uppercase tracking-wide text-accent font-semibold mb-3">
                Timeline
              </h3>
              <p className="text-2xl font-bold text-foreground">{project.timeline}</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-sm uppercase tracking-wide text-accent font-semibold mb-3">
                Category
              </h3>
              <p className="text-2xl font-bold text-foreground">{project.category}</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 md:col-span-2">
              <h3 className="text-sm uppercase tracking-wide text-accent font-semibold mb-3">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-sm text-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto border-t border-border">
        <FadeIn>
          <h2 className="text-4xl font-bold text-foreground mb-12">Services Provided</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground">{service}</h3>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Gallery Section */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto border-t border-border">
          <FadeIn>
            <h2 className="text-4xl font-bold text-foreground mb-12">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.galleryImages.map((image, index) => (
                <motion.div
                  key={image}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative h-80 md:h-96 rounded-lg overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </section>
      )}

      {/* Testimonial Section */}
      <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto border-t border-border">
        <FadeIn>
          <div className="bg-card border border-border rounded-lg p-12 text-center">
            <div className="text-accent text-5xl mb-6">"</div>
            <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
              {project.testimonial.quote}
            </p>
            <div>
              <p className="font-semibold text-foreground text-lg">
                {project.testimonial.author}
              </p>
              <p className="text-accent text-sm">
                {project.testimonial.role} at {project.testimonial.company}
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto border-t border-border text-center">
        <FadeIn>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Want a Brand Like This?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s create something amazing for your business. Get in touch with our team today.
          </p>
          <Link
            href="/portfolio#inquiry"
            className="inline-block px-8 py-4 bg-accent text-black font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent/50"
          >
            Start Your Project
          </Link>
        </FadeIn>
      </section>

      {/* Back Button */}
      <section className="py-12 px-4 md:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
        </div>
      </section>
    </main>
  )
}
