'use client'

import { FadeIn } from '../animations/fade-in'
import { TiltCard } from '../animations/tilt-card'
import { Star } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Founder, Kalakriti Jewels, Jaipur',
      content: 'Mayur and team gave our jewellery brand a whole new look. Customers now recognise us instantly, and our Instagram enquiries have almost doubled since the rebrand. Really happy with the work!',
      rating: 5,
    },
    {
      name: 'Rohan Mehta',
      role: 'Owner, Chai & Co., Ahmedabad',
      content: 'We were confused about our logo and packaging, but NEXTPIXEL sorted everything so smoothly. They listened to every small detail, delivered on time, and the pricing was very fair.',
      rating: 5,
    },
    {
      name: 'Ananya Iyer',
      role: 'Co-founder, Organic Roots, Bengaluru',
      content: 'The packaging design they made for us is now our best-selling product. Our distributors keep asking who designed it. Highly recommended for any startup!',
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
