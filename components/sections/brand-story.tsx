'use client'

import { FadeIn } from '../animations/fade-in'

export function BrandStorySection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <FadeIn direction="right">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-accent">Crafting</span> Visual Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Since 2009, NEXTPIXEL STUDIO has been at the forefront of graphic design innovation. We don&apos;t just create designs—we build visual narratives that tell your brand&apos;s unique story.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our team of award-winning designers combines strategic thinking with cutting-edge creativity to deliver designs that resonate with your audience and drive measurable results.
              </p>
              <ul className="space-y-3">
                {['Brand Strategy & Identity', 'Digital & Print Design', 'Marketing Collateral', 'Creative Direction'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Right side - visual placeholder */}
          <FadeIn direction="left">
            <div className="relative h-96 bg-gradient-to-br from-card to-card/50 rounded-xl border border-border overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-accent/30 mb-4">Design</div>
                  <p className="text-muted-foreground">Visual excellence in every pixel</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
