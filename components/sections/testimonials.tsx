'use client'

import { FadeIn } from '../animations/fade-in'
import { TiltCard } from '../animations/tilt-card'
import { Star } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      content: 'NEXTPIXEL STUDIO transformed our brand identity. Their strategic approach and creative excellence exceeded all expectations.',
      rating: 5,
    },
    {
      name: 'Marcus Chen',
      role: 'Creative Director, Luna Cosmetics',
      content: 'Working with NEXTPIXEL STUDIO was a game-changer. They understood our vision and brought it to life beautifully.',
      rating: 5,
    },
    {
      name: 'Emma Rodriguez',
      role: 'Founder, Artisan Bakery',
      content: 'The packaging design they created for us became our best-selling feature. Highly professional and creative.',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="eyebrow mx-auto justify-center mb-6">Testimonials</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="text-accent">Clients</span> Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their brands with NEXTPIXEL STUDIO.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.1}>
              <TiltCard glass={false} className="p-8">
                <span className="font-display block text-5xl text-accent/30 leading-none mb-2">&ldquo;</span>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-accent fill-accent"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground mb-6 leading-relaxed">
                  {testimonial.content}
                </p>

                {/* Author */}
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
